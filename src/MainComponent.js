import React from 'react';
import CircleComponent from "./CircleComponent";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "circle" : {
                "height" : "50px",
                "width" : "50px",
                "backgroundColor" : "red",
            },
        };
    }

    handleChangePage = (page) => {
        this.setState({page: page});
    }

    render() {
        const max = 50;
        const min = 10;
        const home = 'HOME';
        const about = 'ABOUT';
        const {page} = this.state;

        return (
            <main className="main">
                <div>
                    <button onClick={() => this.handleChangePage(home)} className="button home-btn">Home</button>
                    <button onClick={() => this.handleChangePage(about)} className="button about-btn">About</button>
                </div>
                { page === home && <CircleComponent styleCircle={this.state.circle} number={Math.floor(Math.random() * (max - min + 1) + min)}/> }
                { page === home && <CircleComponent styleCircle={this.state.circle} number={Math.floor(Math.random() * (max - min + 1) + min)}/> }
                { page === home && <CircleComponent styleCircle={this.state.circle} number={Math.floor(Math.random() * (max - min + 1) + min)}/> }
            </main>
        )
    }
}

export default MainComponent;
