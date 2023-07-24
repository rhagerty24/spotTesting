import React, { useState, useEffect } from "react";
import ListItem from "./components/listView/violationList/listItem/listItem";
import Header from "./components/header";

const API_URL = "API_URL_GOES_HERE";

const ListDataItem = class {
  constructor(
    licensePlate,
    violationType,
    vehicleType,
    timeSinceParked,
    location,
    duration
  ) {
    this.licensePlate = licensePlate;
    this.violationType = violationType;
    this.vehicleType = vehicleType;
    this.timeSinceParked = timeSinceParked;
    this.location = location;
    this.duration = duration;
  }
};

const ItemList = () => {
  const [listData, setListData] = useState([]);

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((item) => {
          return new ListDataItem(
            item.licensePlate,
            item.violationType,
            item.vehicleType,
            item.timeSinceParked,
            item.location,
            item.duration
          );
        });

        setListData(newData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const sortedListData = listData.sort((a, b) => {
    const timeA = new Date(a.timeSinceParked);
    const timeB = new Date(b.timeSinceParked);
    return timeA - timeB;
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" style={{ height: "1000px" }}>
      <Header />
      <div>
        <h1>Violation List</h1>
        <div style={{ marginTop: "30px" }}>
          {sortedListData.map((item, index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <ListItem
                licensePlate={item.licensePlate}
                violationType={item.violationType}
                vehicleType={item.vehicleType}
                timeSinceParked={item.timeSinceParked}
                location={item.location}
                duration={item.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
