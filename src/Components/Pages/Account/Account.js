import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

const Account = () => {
    const email = localStorage.getItem('authToken');
    const name = email.split('@')[0];
    const history = useHistory();

    const onLogout = (event) => {
        event.preventDefault();
        localStorage.setItem('authToken', '');
        history.push("/");
    }

    return (
        <Fragment>
            <div className="page">
                <h2>Account page</h2>
                <h3>Hello {name}</h3>
                <input type="submit" value="Submit" onClick={onLogout}/>
            </div>
        </Fragment>
    )
}


export default Account;
