import React from 'react';
import FormComponent from "./FormComponent";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
               <FormComponent/>
            </div>
        )
    }
}

export default MainComponent;
