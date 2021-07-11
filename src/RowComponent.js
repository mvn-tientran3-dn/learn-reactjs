import React, {useState, useEffect} from 'react';

const RowComponent = (props) => {
    const {user} = props;
    const {keyIndex} = props;

    return (
        <tr>
            <td>{keyIndex}</td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td>
                <img src={user.avatar}/>
            </td>
        </tr>
    )
}

export default RowComponent;
