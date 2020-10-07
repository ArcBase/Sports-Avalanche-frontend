import React from "react";

export default function Teams() {
  const potrait =
    "https://www.duckerfrontier.com/wp-content/uploads/2019/01/Chris-Fisher225x225.png";
  return (
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
          <div class="team-box">
            <i class="fas fa-chart-pie fa-4x"></i>
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>

            <h3 className="team-box-header">Analytics</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
          </div>
          <div class="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Marketing</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
          </div>
          <div class="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Development</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
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
          <div class="team-box">
            <i class="fas fa-chart-pie fa-4x"></i>
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
        <div className="team-header-conten">
          <h1 className="team-header-heading">DEVELOPERS</h1>
          <p className="team-header-paragraqh">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at
            delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos
            rerum inventore.
          </p>
        </div>
        <div className="team-boxes">
          <div class="team-box">
            <i class="fas fa-chart-pie fa-4x"></i>
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>

            <h3 className="team-box-header">Analytics</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
          </div>
          <div class="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Marketing</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
          </div>
          <div class="team-box">
            <div className="startUpTeam-image-box">
              <img src={potrait} className="startUpTeam-image" />
            </div>
            <h3 className="team-box-header">Development</h3>
            <p className="team-box-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              expedita?
            </p>
            <button className="team-box-button">VIEW BIO</button>
          </div>
        </div>
      </div>
    </div>
  );
}
