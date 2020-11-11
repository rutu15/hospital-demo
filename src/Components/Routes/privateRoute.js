import {Route} from "react-router";
import React from "react";

const PrivateRoute = ({component:Component, ...rest}) => {

    return <Route
        {...rest}
        render={(props) => (localStorage.getItem("Token") === 'true' ? (
            <Component {...props} />
        ) : (
            window.location.href = '/'
        ))}
    />
}

export default PrivateRoute