import React from 'react';
import logo from './images/1000.png';

class HeaderComponent extends React.Component {
    render() {
        return (
            <header>
                <div className="item">
                    <img src={logo} className="logo"/>
                </div>
                <nav className="item">
                    <ul>
                        <li> <a href="#">Menu 1</a></li>
                        <li> <a href="#">Menu 2</a></li>
                        <li> <a href="#">Menu 3</a></li>
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
        )
    }
}

export default HeaderComponent;
