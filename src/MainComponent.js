import React from 'react';
import FormComponent from "./FormComponent";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onRemove = (id, users) => {
        let index = users.findIndex(obj => obj.id === id);

        if (index >= 0) {
            users.splice(index, 1);
            this.setState({'users': users});
        }
    }

    render() {
        return (
            <div className="main">
               <FormComponent onRemove={this.onRemove}/>
            </div>
        )
    }
}

export default MainComponent;
