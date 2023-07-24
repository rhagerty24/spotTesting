import React from "react";

const TimeSinceParked = ({ dateTime }) => {
  const getTimeSince = () => {
    const currentDate = new Date();
    const inputDateTime = new Date(dateTime);
    const timeDifference = currentDate.getTime() - inputDateTime.getTime();

    // Calculate the time units
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(minutes / 60);

    // Create the time since string
    let timeSince = "";
    if (hours > 0) {
      timeSince += `${hours} hr `;
    }
    timeSince += `${minutes % 60}m`;

    return timeSince;
  };

  const timeSince = getTimeSince();

  return timeSince;
};

export default TimeSinceParked;
