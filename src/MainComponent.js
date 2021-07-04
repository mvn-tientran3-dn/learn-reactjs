import React from 'react';
import Form from "./Form";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
               <Form/>
            </div>
        )
    }
}

export default MainComponent;
