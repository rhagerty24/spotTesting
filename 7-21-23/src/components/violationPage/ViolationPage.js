import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./violationPage.css";
import Header from "../header/Header";
import FakeAPI from "../FakeAPI";

const ViolationPage = () => {
  const { licensePlate } = useParams();
  const [violationData, setViolationData] = useState(null);
  const fakeAPI = FakeAPI();
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fakeAPI.fetchSingleData(licensePlate);
        setViolationData(data);
      } catch (error) {
        console.error("Error fetching violation data:", error);
        setShowNoDataMessage(true);
      }
    };

    fetchData();
  }, [fakeAPI, licensePlate]);

  const [isDarkened, setIsDarkened] = useState(false);

  const handlePrint = () => {
    setIsDarkened(true);
    setTimeout(() => {
      window.print();
      setIsDarkened(false);
    }, 1000);
  };

  if (showNoDataMessage) {
    return (
      <div>
        <Header />
        <div>
          <h1>No violation data available.</h1>
        </div>
      </div>
    );
  }

  if (!violationData) {
    return (
      <div>
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  const {
    violationType,
    timeSinceParked,
    location,
    vehicleType,
    distance, // Changed from 'duration' to 'distance'
    date,
    state,
    time,
    permitNumber,
    issuedBy,
    driversLicense,
    makeAndModel,
    fee,
    color
  } = violationData;

  return (
    <div>
      <Header />
      <div className="parking-ticket-wrapper">
        <div className="parking-ticket">
          <div className="parking-ticket-header">
            <h2>Ticket Information</h2>
          </div>
          <div className="ticket-details">
            <div className="ticket-row">
              <div className="ticket-entry">
                <p>Violation Type:</p>
                <p>{violationType}</p>
              </div>
              <div className="ticket-entry">
                <p>Plate #:</p>
                <p>{licensePlate}</p>
              </div>
            </div>
            <div className="ticket-row">
              <div className="ticket-entry">
                <p>Date:</p>
                <p>{date}</p>
              </div>
              <div className="ticket-entry">
                <p>State:</p>
                <p>{state}</p>
              </div>
            </div>
            <div className="ticket-row">
              <div className="ticket-entry">
                <p>Time:</p>
                <p>{time}</p>
              </div>
              <div className="ticket-entry">
                <p>Permit Number:</p>
                <p>{permitNumber}</p>
              </div>
            </div>
            <div className="ticket-row">
              <div className="ticket-entry">
                <p>Issued By:</p>
                <p>{issuedBy}</p>
              </div>
              <div className="ticket-entry">
                <p>Driver's License:</p>
                <p>{driversLicense}</p>
              </div>
            </div>
            <div className="ticket-row">
              <div className="ticket-entry">
                <p>Location:</p>
                <p>{location}</p>
              </div>
              <div className="ticket-entry">
                <p>Vehicle Make & Model:</p>
                <p>{makeAndModel}</p>
              </div>
            </div>
            <div className="ticket-row">
              <div className="ticket-entry">
                <p>Fee:</p>
                <p>{fee}</p>
              </div>
              <div className="ticket-entry">
                <p>Color:</p>
                <p>{color}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button
          className={`write-ticket-button ${isDarkened ? "darkened" : ""}`}
          onClick={handlePrint}
          disabled={isDarkened}
        >
          {isDarkened ? "Printing..." : "Write Ticket"}
        </button>
      </div>
    </div>
  );
};

export default ViolationPage;
