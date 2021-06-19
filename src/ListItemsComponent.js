import React from "react";

class ListItemsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'items' : this.props.items,
        };
    }

    deleteItem(id) {
        let {items} = this.state;
        let index = items.findIndex(obj => obj.id === id);

        if (index >= 0) {
            items.splice(index, 1);
            this.setState({'items': items});
        }
    }

    render() {
        let {items} = this.state;
        let element = items.map((item, index) => {
            return <tr key={index}>
                <td>
                    <div className="logo-item" style={{backgroundColor: item.background}}></div>
                    <div className="content-item">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </td>
                <td>
                    <span onClick={() => this.deleteItem(item.id)}><i className="material-icons">delete</i></span>
                </td>
            </tr>
        });

        return <table>
            <tbody>
                {element.length > 0 && element}
                {element.length == 0 && <tr><td colSpan="2">Bạn không còn item nào.</td></tr>}
            </tbody>
        </table>
    }
}

export default ListItemsComponent;
