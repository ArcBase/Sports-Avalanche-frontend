import React from "react";

export default function PageBoxes() {
  return (
    <div className="page-container">
      <div className="page-box-sizer">
        <div className="page-box-heading">
          <h1 className="page-box-heading-header"> PROGRAMS</h1>
          
        </div>
        <div className="page-boxes-grid">
          <div className="page-box-card">
            <h1 className="page-box-card-header">Digital Academy</h1>
            <p className="page-box-card-text">
              We help you build yout professional career anf connect you with
              elite mentorship to help you achieve your dreams
            </p>
          </div>

          <div className="page-box-card">
            <h1 className="page-box-card-header">Monthly Rankings & Contest</h1>
            <p className="page-box-card-text">
              Fight for the tip spot in out monthly player ranking and enter
              several contests
            </p>
          </div>

          <div className="page-box-card">
            <h1 className="page-box-card-header">Sponsorship</h1>
            <p className="page-box-card-text">
              We groom and sport you for trial oppurtunities
            </p>
          </div>
        </div>{" "}
      
      </div>
    </div>
  );
}
