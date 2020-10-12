import React from "react";

import Link from "next/link";
import NavbarTwo from "../components/navbar-two";

export default function Teams() {
  const potrait =
    "https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/attorf.jfif";
  return (
    <>
      <NavbarTwo />
      <div className="fitter">
        <div className="page-container">
          <div className="team-header-content">
            <div className="team-header-conten">
              <h1 className="team-header-heading">TEAM</h1>
              <p className="team-header-paragraqh">
                Our team make the difference at Sports Avalanche, and that
                includes everyone dedicated to achieving our vision. Our team is
                diverse, consisting of a Lawyer, a UEFA Accredited Sports
                Journalist, Software Developers, Interface Designers and
                seasoned Business Advisors. We are focused on providing digital
                solutions to the various problems sports enthusiasts face across
                Africa and the world at large. We combine deep knowledge of
                industries and geographies with breadth of experience, and we
                are dedicated to a singular goal: connecting aspiring soccer
                professionals to global opportunities, augmenting the scouting
                process, and bringing stellar innovations to sports globally.
              </p>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <i className="fas fa-chart-pie fa-4x"></i>
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>

                <h3 className="team-box-header">CEO</h3>
                <p className="team-box-text">FAITHFULNESS OKOM</p>
                <p className="team-box-text-b">Lawyer</p>
                <Link href="./teamBio/Okom">
                  <button className="team-box-button">VIEW BIO</button>
                </Link>
              </div>
              <div className="team-box">
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>
                <h3 className="team-box-header">CTO</h3>
                <p className="team-box-text">MICHAEL ALO</p>
                <p className="team-box-text-b">Software Developer</p>
                <>
                  <Link href="./teamBio/MichealAlo">
                    <button className="team-box-button">VIEW BIO</button>
                  </Link>
                </>
              </div>
              <div className="team-box">
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>
                <h3 className="team-box-header">COO</h3>
                <p className="team-box-text">OMA AKATUGBA</p>
                <p className="team-box-text-b">
                  UEFA Accredited Sports Journalist
                </p>
                <Link href="./teamBio/omahA">
                  <button className="team-box-button">VIEW BIO</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="team-header-content">
            <div className="team-header-conten">
              <h1 className="team-header-heading">ADVISORS</h1>
              <p className="team-header-paragraqh"></p>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <i className="fas fa-chart-pie fa-4x"></i>
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>

                <h3 className="team-box-header">
                  BUSINESS CONSULTANTS & FINANCIAL EXPERTS
                </h3>
                <p className="team-box-text">The Pitch Hub</p>
              </div>
            </div>
          </div>

          <div className="team-header-content">
            <div className="team-header-content">
              <h1 className="team-header-heading">DEVELOPERS</h1>
              <p className="team-header-paragraqh"></p>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <i className="fas fa-chart-pie fa-4x"></i>
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>

                <h3 className="team-box-header">SOFTWARE DEVELOPER</h3>
                <p className="team-box-text">Adebayo Taiwo</p>
              </div>
              <div className="team-box">
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>
                <h3 className="team-box-header">SOFTWARE DEVELOPER</h3>
                <p className="team-box-text">Adebayo Kehinde</p>
              </div>
              <div className="team-box">
                <div className="startUpTeam-image-box">
                  <img src={potrait} className="startUpTeam-image" />
                </div>
                <h3 className="team-box-header">UI/UX DESIGNER</h3>
                <p className="team-box-text">Ibraheem Adewale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavbarTwo />
    </>
  );
}
