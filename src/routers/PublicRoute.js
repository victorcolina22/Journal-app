import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Redirect to='/' />)
                    : (<Component {...props} />)
            )} />
    )
}


PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};