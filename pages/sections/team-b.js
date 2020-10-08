import React from "react";
import NavbarTwo from "../components/navbar-two";
import Link from "next/link";


export default function Teams() {
  const potrait =
    "https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
  return (
   <>
 <NavbarTwo/>
   <div className="fitter">
   <div className="page-container">
      <div className="team-header-content">
        <div className="team-header-conten">
          <h1 className="team-header-heading">TEAM</h1>
          <p className="team-header-paragraqh">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at
            delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos
            rerum inventore.
          </p>
        </div>
        <div className="team-boxes">
          <div className="team-box">
            <i className="fas fa-chart-pie fa-4x"></i>
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>

            <h3 className="team-box-header">Analytics</h3>
            <p className="team-box-text">
              Micheal Alo
            </p>
            <Link href="./teamBio/AttorneyFPage">
          <button className="team-box-button">VIEW BIO</button>
          </Link>
          </div>
          <div className="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Marketing</h3>
            <p className="team-box-text">
              Attorney Faithfulness
            </p>
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
            <h3 className="team-box-header">Development</h3>
            <p className="team-box-text">
              Omah
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
          <p className="team-header-paragraqh">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at
            delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos
            rerum inventore.
          </p>
        </div>
        <div className="team-boxes">
          <div className="team-box">
            <i className="fas fa-chart-pie fa-4x"></i>
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>

            <h3 className="team-box-header">TIM</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
          </div>
        </div>
      </div>

      <div className="team-header-content">
        <div className="team-header-content">
          <h1 className="team-header-heading">DEVELOPERS</h1>
          <p className="team-header-paragraqh">
            
          </p>
        </div>
        <div className="team-boxes">
          <div className="team-box">
            <i className="fas fa-chart-pie fa-4x"></i>
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>

            <h3 className="team-box-header">Analytics</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
          
          </div>
          <div className="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Marketing</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
          
          </div>
          <div className="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Development</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  );
}
