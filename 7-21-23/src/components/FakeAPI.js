import React from "react";

const FakeAPI = () => {
  const listData = [
    {
      licensePlate: "927WYG",
      violationType: "(No Pass)",
      vehicleType: "Grey Truck",
      timeSinceParked: "2023-06-19T22:45:00Z",
      location: "B46",
      distance: "1m"
    },
    {
      licensePlate: "ABC123",
      violationType: "(Expired Meter)",
      vehicleType: "Blue Sedan",
      timeSinceParked: "2023-06-19T10:35:00Z",
      location: "C12",
      distance: "2m"
    },
    {
      licensePlate: "5320CK",
      violationType: "(Poor Parking)",
      vehicleType: "Black Bike",
      timeSinceParked: "2023-06-19T22:40:00Z",
      location: "G40",
      distance: "12m"
    },
    {
      licensePlate: "14HSI7",
      violationType: "(Expired Meter)",
      vehicleType: "Orange Bike",
      timeSinceParked: "2023-06-19T21:43:00Z",
      location: "G21",
      distance: "1m"
    },
    {
      licensePlate: "2OXN5H",
      violationType: "(Expired Meter)",
      vehicleType: "Blue Truck",
      timeSinceParked: "2023-06-19T19:27:00Z",
      location: "C18",
      distance: "2m"
    },
    {
      licensePlate: "018D7H",
      violationType: "(Poor Parking)",
      vehicleType: "Black Truck",
      timeSinceParked: "2023-06-19T19:30:00Z",
      location: "C12",
      distance: "3m"
    },
    {
      licensePlate: "BXOA12",
      violationType: "(No Pass)",
      vehicleType: "Green Van",
      timeSinceParked: "2023-06-19T20:01:00Z",
      location: "A11",
      distance: "8m"
    },
    {
      licensePlate: "038X6H",
      violationType: "(Poor Parking)",
      vehicleType: "Brown Truck",
      timeSinceParked: "2023-06-19T22:11:00Z",
      location: "G28",
      distance: "6m"
    },
    {
      licensePlate: "PLUA15",
      violationType: "(No Pass)",
      vehicleType: "Red Bike",
      timeSinceParked: "2023-06-19T22:35:00Z",
      location: "H14",
      distance: "7m"
    },
    {
      licensePlate: "048X6A",
      violationType: "(No Pass)",
      vehicleType: "Black Sedan",
      timeSinceParked: "2023-06-19T12:49:00Z",
      location: "B12",
      distance: "11m"
    },
    {
      licensePlate: "104MCU",
      violationType: "(Poor Parking)",
      vehicleType: "Black SUV",
      timeSinceParked: "2023-06-19T20:55:00Z",
      location: "D22",
      distance: "3m"
    },
    {
      licensePlate: "PWL408",
      violationType: "(No Pass)",
      vehicleType: "White SUV",
      timeSinceParked: "2023-06-19T21:58:00Z",
      location: "C40",
      distance: "5m"
    },
    {
      licensePlate: "MDHS2O",
      violationType: "(Poor Parking)",
      vehicleType: "Green Bike",
      timeSinceParked: "2023-06-19T15:20:00Z",
      location: "B9",
      distance: "5m"
    },
    {
      licensePlate: "P0S44Q",
      violationType: "(Expired Meter)",
      vehicleType: "Silver Van",
      timeSinceParked: "2023-06-19T17:43:00Z",
      location: "B2",
      distance: "1m"
    }
  ];

  const fetchData = () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(listData);
      }, 1000); //change to 1000 for a 1 second delay
    });
  };

  const fetchSingleData = (licensePlate) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const violationData = listData.find(
          (item) => item.licensePlate === licensePlate
        );

        if (violationData) {
          resolve(violationData);
        } else {
          resolve(null);
        }
      }, 1000); //change to 1000 for a 1 second delay
    });
  };

  return {
    fetchData,
    fetchSingleData
  };
};

export default FakeAPI;
