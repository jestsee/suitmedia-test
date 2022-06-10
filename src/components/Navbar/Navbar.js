import React, { Component } from "react";
import Form from "../Form";
import Modal from "../Modal";
import { DropdownItems } from "./DropdownItem";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    hamburgerClicked: false,
    showLogin: false,
    showRegister: false,
  };

  // handling hamburger click
  handleHamburgerClick = () => {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  };

  // handling login click
  handleLoginClick = () => {
    console.log("SHOW LOGIN: ", this.state.showLogin);
    this.setState({ showLogin: !this.state.showLogin });
  };

  // handling register click
  handleRegisterClick = () => {
    console.log("SHOW REGISTER: ", this.state.showRegister);
    this.setState({ showRegister: !this.state.showRegister });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Forum anak IT</h1>
          <div className="search-container">
            <span className="fa fa-search"></span>
            <input type="text" placeholder="Search" />
          </div>
          <div className="menu-icon" onClick={this.Hamburger}>
            <i
              className={
                this.state.hamburgerClicked ? "fas fa-times" : "fas fa-bars"
              }
            ></i>
          </div>
          <ul
            className={
              this.state.hamburgerClicked ? "nav-menu active" : "nav-menu"
            }
          >
            <li className="dropdown-menu">
              <a className="nav-links dropdown-button" href="#">
                Categories
              </a>
              <div className="dropdown-item">
                {DropdownItems.map((item, index) => {
                  return (
                    <a key={index} className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  );
                })}
              </div>
            </li>
            <li>
              <a className="nav-links" href="#" onClick={this.handleLoginClick}>
                Login
              </a>
            </li>
            <li>
              <a
                className="nav-links"
                href="#"
                onClick={this.handleRegisterClick}
              >
                Register
              </a>
            </li>
          </ul>
          {/* <Button>Sign Up</Button> */}
        </nav>
        <Modal show={this.state.showLogin} handler={this.handleLoginClick}>
          <Form register={false} />
        </Modal>
        <Modal
          show={this.state.showRegister}
          handler={this.handleRegisterClick}
        >
          <Form register={true} />
        </Modal>
      </>
    );
  }
}

export default Navbar;
