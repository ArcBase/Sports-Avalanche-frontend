import React, { Component } from "react";
import NavbarTwo from "../../../navbar-two";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
// import axios from "axios";
// import { connect } from "react-redux";

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
              <li className="nav-it">
                <a href="/categories/electronics/">MarketPlace</a>
              </li>
              <li className="nav-it">
                <a href="/">Team</a>
              </li>
              <li className="nav-it">
                <a href="/">Our Product</a>
              </li>

              
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