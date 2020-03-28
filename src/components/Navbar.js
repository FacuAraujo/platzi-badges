import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './styles/Navbar.css'
import Logo from '../images/logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img src={Logo} alt="Logo" className="Navbar__brand-logo" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;