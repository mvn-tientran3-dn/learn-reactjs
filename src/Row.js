import React from "react";

function Row(props) {
    const { item } = props;

    return <tr>
        <td colSpan={1}>{item.email}</td>
        <td colSpan={1}>{item.country !== 0 ? item.country : ''}</td>
        <td colSpan={1}>{item.gender ? 'Male' : 'Female'}</td>
        <td colSpan={1}>{item.info}</td>
        <td><span onClick={() => props.remove(item.id)}><i className="material-icons">delete</i></span></td>
    </tr>
}

export default Row;
