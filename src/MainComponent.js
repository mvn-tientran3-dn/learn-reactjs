import React from 'react';
import logo from './logo.svg';

class MainComponent extends React.Component {
    render() {
        return (
            <div className="main">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Hello react !</h2>
            </div>
        )
    }
}

export default MainComponent;
