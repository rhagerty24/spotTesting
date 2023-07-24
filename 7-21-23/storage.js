import React from "react";
import ListItem from "./components/listView/violationList/listItem/listItem";
import "./styles.css";
import Header from "./components/header";

export default function App() {
  const listData = [
    {
      licensePlate: "927WYG",
      violationType: "(No Pass)",
      vehicleType: "Grey Truck",
      timeSinceParked: "2023-06-19T22:45:00Z",
      location: "B46",
      duration: "1m"
    },
    {
      licensePlate: "ABC123",
      violationType: "(Expired Meter)",
      vehicleType: "Blue Sedan",
      timeSinceParked: "2023-06-19T10:35:00Z",
      location: "C12",
      duration: "2m"
    },
    {
      licensePlate: "5320CK",
      violationType: "(Poor Parking)",
      vehicleType: "Black Bike",
      timeSinceParked: "2023-06-19T22:40:00Z",
      location: "G40",
      duration: "12m"
    }
    // Add more data objects as needed
  ];

  const sortedListData = listData.sort((a, b) => {
    const timeA = new Date(a.timeSinceParked);
    const timeB = new Date(b.timeSinceParked);
    return timeA - timeB;
  });

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
}
