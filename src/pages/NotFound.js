import React from 'react';

import { Link } from 'react-router-dom';
import './styles/Home.css';
import './styles/NotFound.css';
import Planet from '../images/planet.svg';

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="Home_bg">
                <div className="NotFound_logo">                    
                    <h1 className="Home_title">You are lost in space</h1>
                    <div className="Home_subtitle">The page you wanted to access does not exist</div>
                    <Link to="/" className="btn btn-primary Home_btn">Back to Home</Link>
                </div>
                <div className="NotFound_hero-img">
                    <img src={Planet} alt="Planet"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;