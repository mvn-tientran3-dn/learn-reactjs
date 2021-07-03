import * as React from "react";

class RowComponent extends React.Component
{
    deleteItem(id) {
        return this.props.remove(id)
    }
    render() {
        const {item} = this.props;

        return <tr>
            <td colSpan={1}>{item.email}</td>
            <td colSpan={1}>{item.country !== 0 ? item.country : ''}</td>
            <td colSpan={1}>{item.gender ? 'Male' : 'Female'}</td>
            <td colSpan={1}>{item.info}</td>
            <td><span onClick={() => this.deleteItem(item.id)}><i className="material-icons">delete</i></span></td>
        </tr>
    }
}

export default RowComponent;
