import React, { useState, useEffect } from "react";
import { GiSoccerBall } from "react-icons/gi";

import axios from "axios";
import { Upload, message } from "antd";
// import { InboxOutlined } from "@ant-design/icons";
import NavbarTwo from "../components/navbar-two";

const { Dragger } = Upload;

const SectionBoxes = () => {
  const [isPlayer, setisPlayer] = useState(false);
  const [registeringCategory, setRegisteringCategory] = useState("Player");
  const Coach = "Coach";
  const Scout = "Scout";

  function userIsPlayer() {
    setisPlayer(true);
    setRegisteringCategory("Player");
  }

  function dontUserPlayer(Val) {
    setisPlayer(false);
    setRegisteringCategory(Val);
    console.log(Val);
  }

  const sendData = async (e) => {
    e.preventDefault();
    const host = "http://127.0.0.1:8000";
    const endpoint = host + `/core/reg-upload/`;

    const fName = e.target.elements.firstname.value;
    const lName = e.target.elements.lastname.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;

    let videoUpload = "null";
    let Age = 0;

    if (registeringCategory == Coach || registeringCategory == Scout) {
    } else {
      videoUpload = e.target.elements.playerVideo.files;
      Age = e.target.elements.age.value;
    }

    const Category = registeringCategory;

    console.log(fName, lName, email, phone, videoUpload, Category);

    let fd = new FormData();
    fd.append("fName", fName);
    fd.append("lName", lName);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("videoUpload", videoUpload);
    fd.append("category", Category);
    fd.append("age", Age);

    axios.post(endpoint, fd).then((res) => {
      if (res.status == 200) {
        message.success("Uploaded Successfully");
      } else {
        message.error("Error Uploading File");
      }
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          sendData(e);
        }}
      >
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <label for="email">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Your First Name"
            name="firstname"
            required
          />

          <label for="email">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Your Last Name"
            name="lastname"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Your Email" name="email" required />

          <label for="Phone">
            <b>Phone</b>
          </label>

          <input
            type="text"
            placeholder="Your Phone Number"
            name="phone"
            required
          />

          <div className="reg-category-container">
            <h3 className="reg-category-heading">Your Role</h3>
            <ul className="reg-category-list">
              <li onClick={userIsPlayer} className="reg-category-item">
                <div className="reg-category-icon">
                  <GiSoccerBall />
                </div>
                <p className="reg-category-text">Player</p>
              </li>

              <li
                onClick={() => {
                  dontUserPlayer(Coach);
                }}
                className="reg-category-item"
              >
                <div className="reg-category-icon">
                  <GiSoccerBall />
                </div>
                <p className="reg-category-text">Scout</p>
              </li>

              <li
                onClick={() => {
                  dontUserPlayer(Scout);
                }}
                className="reg-category-item"
              >
                <div className="reg-category-icon">
                  <GiSoccerBall />
                </div>
                <p className="reg-category-text">Coach</p>
              </li>
            </ul>
          </div>

          {isPlayer ? (
            <>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                name="playerVideo"
                required
              />

              <div>
                <label for="Age">
                  <b>Age</b>
                </label>

                <input type="text" placeholder="Your Age" name="age" required />
              </div>
            </>
          ) : (
            <></>
          )}

          <button type="submit" className="registerbtn">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default function signUpForm() {
  return (
    <>
      <NavbarTwo />
      <div className="playSignUp-container">
        <div className="playSignUp-form-fields">
          <SectionBoxes />
        </div>
      </div>
    </>
  );
}
