import React from 'react';
import ListItemsComponent from './ListItemsComponent'

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'items' : [
                {
                    'id' : 1,
                    'background' : 'red',
                    'title' : 'This is title 1',
                    'content' : 'This is content 1'
                },
                {
                    'id' : 2,
                    'background' : 'yellow',
                    'title' : 'This is title 2',
                    'content' : 'This is content 2'
                },
                {
                    'id' : 3,
                    'background' : 'blue',
                    'title' : 'This is title 3',
                    'content' : 'This is content 3'
                },
                {
                    'id' : 4,
                    'background' : 'green',
                    'title' : 'This is title 4',
                    'content' : 'This is content 4'
                },
                {
                    'id' : 5,
                    'background' : 'black',
                    'title' : 'This is title 5',
                    'content' : 'This is content 5'
                },
            ]
        }
    }
    render() {
        const {items} = this.state;
        return (
            <div className="main">
                <ListItemsComponent items={items}/>
            </div>
        )
    }
}

export default MainComponent;
