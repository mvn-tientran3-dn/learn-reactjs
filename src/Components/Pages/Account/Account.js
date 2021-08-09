import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../../feature/userSlice";
import {logout} from "../../../feature/userSlice";

const Account = () => {
    const history = useHistory();
    const user = useSelector(selectUser);
    const dispatch = useDispatch;

    const onLogout = (event) => {
        event.preventDefault();
        dispatch(logout());
        history.push("/");
    };

    return (
        <Fragment>
            <div className="page">
                <h2>Account page</h2>
                <h3>Hello {user ? user.email : ''}</h3>
                <input type="submit" value="Logout" onClick={onLogout}/>
            </div>
        </Fragment>
    )
}

export default Account;
