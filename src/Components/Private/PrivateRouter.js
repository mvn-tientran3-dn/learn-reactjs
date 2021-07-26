import React from 'react';
import {Route, Redirect} from "react-router-dom";

const PrivateRouter = ({component: Component}) => {
    return (
        <Route
            render={props =>
                localStorage.getItem('authToken')
                    ? (<Component {...props}/>)
                    : (<Redirect to={{pathname: '/login'}}/>)
            }
        />
    )
}

export default PrivateRouter;
