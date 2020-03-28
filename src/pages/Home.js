import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Home.css'
import Logo from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg'

const Home = () => {
    return (
        <React.Fragment>
            <div className="Home_bg">
                <div className="Home_logo">
                    <img src={Logo} alt="platzi conf logo" />
                    <h1 className="Home_title">Print your badges</h1>
                    <div className="Home_subtitle">The easiest way to manage your conference</div>
                    <Link to="/badges" className="btn btn-primary Home_btn">Start now</Link>
                </div>
                <div className="Home_hero-img">
                    <img src={Astronauts} alt="Astronauts"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
