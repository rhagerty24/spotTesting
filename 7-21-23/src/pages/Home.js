import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import "../styles.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <h1 className="title">Welcome to Our Company</h1>
          <p className="description">
            We are on a mission to dominate the world and become billionaires!
          </p>
          <p className="description">
            With our innovative products and visionary team, we are set to
            revolutionize industries and create unprecedented success.
          </p>
          <p className="description">
            Join us on this exciting journey and be part of the next big thing!
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link
              to="/ListView"
              className="cta-button"
              style={{ color: "#323232" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
