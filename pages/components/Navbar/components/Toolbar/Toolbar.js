import React, { Component } from "react";
import NavbarTwo from "../../../navbar-two";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
// import axios from "axios";
// import { connect } from "react-redux";
import Link from "next/link";

class Toolbar extends Component {
  render() {
    const { token, isAuth } = this.props;

    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <a href="/">
              {/* <img className="logo" src={Logo} alt="logo" /> */}
            </a>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>

              <Link href="../">
              <li className="nav-it">
                <a >Home</a>
              </li>
              </Link>

              <Link href="../sections/team">
              <li className="nav-it">
                <a >Team</a>
              </li>
              </Link>
      
              <Link href="../sections/ballHive">
              <li className="nav-it-2">
                <a >Our Product</a>
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
export default Toolbar