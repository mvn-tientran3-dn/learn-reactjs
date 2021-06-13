import React from 'react';

class CircleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "number" : this.props.number,
            "isCount" : true,
            "styleCircle" : this.props.styleCircle
        };
        this.interval = null;
    }
    componentDidMount() {
        this.isCountDown();
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    countDown() {
        let {isCount} = this.state;

        if (isCount) {
            this.interval = setInterval(() => {
                if (this.state.number <= 0 || !isCount) {
                    clearInterval(this.interval);
                } else {
                    this.setState((prevState) => ({number: prevState.number - 1}));
                }
            }, 1000);
        } else {
            clearInterval(this.interval);
        }
    }

    isCountDown = () => {
        let {isCount} = this.state;
        this.setState({isCount : !isCount});
        this.countDown()
    }

    render() {
        const start = 'START';
        const stop = 'STOP';
        let titleButton = this.state.isCount ? start : stop;

        return (
            <div className="block-circle">
                <div>
                    <button className="is-count-btn" onClick={this.isCountDown}>{titleButton}</button>
                </div>
                <div className="circle" style={this.state.styleCircle}>
                    {/*<input type="hidden" value={this.state.isCount}/>*/}
                    <span>{this.state.number}</span>
                </div>
            </div>
        )
    }
}

export default CircleComponent;
