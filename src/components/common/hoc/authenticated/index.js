import React from 'react';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {
    const { login = {} } = state
    return login;
 }

const withIsAuthenticated = (Component) => {

    return connect(mapStatetoProps)((props) => {
        const { data = {}} = props
        return (
          <Component isAuthenticated={data['isAuthenticated']}/>
        )
    })
}


export default withIsAuthenticated