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
              We help you build your professional career and bring football legends to mentor you to understand the various aspects and requirements of achieving successful football careers.
            </p>
          </div>

          <div className="page-box-card">
            <h1 className="page-box-card-header">Rankings & Contest</h1>
            <p className="page-box-card-text">
                 Fight for the top spot in our monthly player rankings. Players are periodically selected to play against established football clubs and top academies to showcase their talent.
            </p>
          </div>

          <div className="page-box-card">
            <h1 className="page-box-card-header">Sponsorship</h1>
            <p className="page-box-card-text">
              Funding and direct investments are made on the promising talents on the platform to sponsor them to trial opportnities in different locations globally.
            </p>
          </div>
        </div>{" "}
      
      </div>
    </div>
  );
}
