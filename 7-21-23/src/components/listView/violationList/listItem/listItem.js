import React from "react";
import TimeSinceParked from "./TimeSinceParked";
import { Link } from "react-router-dom";
import "./listItem.css";

const ListItem = ({
  plateNumber,
  violation,
  makeAndModel,
  timeSinceParked,
  location,
  duration
}) => {
  return (
    <div className="list-item">
      <Link to={`/violation/${plateNumber}`}>
        <div className="rounded-rectangle">
          <div className="list-item-content">
            <div>
              <span className="list-item-left">{plateNumber}</span>
              <span className="list-item-violation-type">{violation}</span>
            </div>
            <div></div>
            <div>
              <span className="list-item-vehicle-type">{makeAndModel}</span>
              <span className="list-item-dash"> - </span>
              <span className="list-item-time-since-parked">
                <TimeSinceParked dateTime={timeSinceParked} />
              </span>
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <div>
              <div className="list-item-location">{location}</div>
              <div className="list-item-duration">{duration}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
