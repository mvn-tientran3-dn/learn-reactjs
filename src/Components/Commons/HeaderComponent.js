import React from 'react';
import logo from '../../images/1000.png';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <div className="item">
                <img src={logo} className="logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Product</Link>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="item">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
