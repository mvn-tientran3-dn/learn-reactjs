import React from 'react';
import logo from '../../images/1000.png';
import {NavLink} from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header>
            <div className="item">
                <img src={logo} className="logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeStyle={{color: 'red'}} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{color: 'red'}} to="/products">Product</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{color: 'red'}} to="/account">Account</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{color: 'red'}} to="/login">Login</NavLink>
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
