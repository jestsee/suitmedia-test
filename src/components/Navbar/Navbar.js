import React, { Component } from "react";
import Form from "../Form";
import Modal from "../Modal";
import { DropdownItems } from "./DropdownItem";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    hamburgerClicked: false,
    showModal: false,
    whichModal: null
  };

  // handling hamburger click
  handleHamburgerClick = () => {
    console.log("HAMBURGER: ", this.state.hamburgerClicked);
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  };

  handleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  // handling login click
  handleLoginClick = () => {
    this.handleModal()
    console.log("which: ", this.state.whichModal);
    this.setState({ whichModal: "login"});
  };

  // handling register click
  handleRegisterClick = () => {
    this.handleModal()
    console.log("which: ", this.state.whichModal);
    this.setState({ whichModal: "register"});
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Forum anak IT</h1>
          {/* <div className="search-container">
            <span className="fa fa-search"></span>
            <input type="text" placeholder="Search" />
          </div> */}
          <div className="menu-icon" onClick={this.handleHamburgerClick}>
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
            <li>
              < div className="search-container">
                <span className="fa fa-search"></span>
                <input type="text" placeholder="Search" />
              </div>
            </li>
            <li className="dropdown-menu">
              <a className="nav-links dropdown-button desktop" href="#">
                Categories
              </a>
              <div className="categories-mobile dropdown-item-1">
                { DropdownItems.map((item, index) => {
                  return(
                    <a key={index} className="nav-links" href="#">{item.title}</a>
                  )
                })}
              </div>
              <div className="dropdown-item desktop">
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
        <Modal show={this.state.showModal} handler={this.handleModal}>
          <Form register={this.state.whichModal==="login" ? false : true} />
        </Modal>
      </>
    );
  }
}

export default Navbar;
