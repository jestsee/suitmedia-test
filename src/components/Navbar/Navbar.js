import React, { Component } from 'react';
import { DropdownItems } from './DropdownItem';
import { MenuItems } from './MenuItem';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Forum anak IT</h1>
                <div className='search-container'>
                    <span className="fa fa-search"></span>
                    <input type="text" placeholder='Search'/>
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className='dropdown-menu'>
                        <a className='nav-links dropdown-button' href='#'>Categories</a>
                        <div className='dropdown-item'>
                            {DropdownItems.map((item, index)=> {
                                return(
                                    <a key={index} className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                )
                            })}
                        </div>
                    </li>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }
}

export default Navbar