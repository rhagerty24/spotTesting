import React, { useEffect, useState } from "react";
import ListItem from "../components/listView/violationList/listItem/listItem";
import "../styles.css";
import Header from "../components/header/Header";
import FakeAPI from "../components/FakeAPI";

export default function ListView() {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fakeAPI = FakeAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fakeAPI.fetchData();
        setListData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fakeAPI]);

  const sortedListData = listData.sort((a, b) => {
    const timeA = new Date(a.timeSinceParked);
    const timeB = new Date(b.timeSinceParked);
    return timeA - timeB;
  });

  return (
    <div className="App" style={{ height: "1000px" }}>
      <Header />
      <div>
        <h1 style={{ paddingTop: "10px" }}>Current Violations</h1>
        <div style={{ marginTop: "30px" }}>
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            sortedListData.map((item, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <ListItem
                  plateNumber={item.licensePlate}
                  violation={item.violationType}
                  makeAndModel={item.vehicleType}
                  timeSinceParked={item.timeSinceParked}
                  location={item.location}
                  duration={item.distance}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
