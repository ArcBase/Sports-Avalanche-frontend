import React, { Component } from "react";
import NavbarTwo from "../../../navbar-two";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
// import axios from "axios";
// import { connect } from "react-redux";
import Link from "next/link";
// import Logo from '../../../../../assets/img/logo.png'

class Toolbar extends Component {
  render() {
    const { token, isAuth } = this.props;

    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <a href="/">
              <img
                className="logo"
                src="https://newsletter-images-precise.s3.eu-west-2.amazonaws.com/Avalanche/Asset+2%403x.png"
                alt="logo"
              />
            </a>
          </div>
          {/* <h1 className="logo-text">
          SPORT
          </h1> */}
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              <Link href="">
                <li className="nav-it">
                  <a>About</a>
                </li>
              </Link>

              <Link href="../../../../sections/team-b">
                <li className="nav-it">
                  <a>Team</a>
                </li>
              </Link>

              <Link href="../../../../sections/regForm">
                <li className="nav-it">
                  <a>Contact</a>
                </li>
              </Link>

              {/* <Link href="../sections/cards">
                <li className="nav-it">
                  <a>Cards</a>
                </li>
              </Link> */}

              <Link href="../../../../sections/ballHive">
                <li className="nav-it-2">
                  <button className="nav-button">Get Scouted</button>
                </li>
              </Link>
            </ul>
          </div>
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}
export default Toolbar;
