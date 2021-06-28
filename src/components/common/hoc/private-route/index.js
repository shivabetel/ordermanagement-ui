import React, { useEffect } from 'react'
import withIsAuthenticated from '../authenticated'
import { Router } from '../../../../../routes'


const PrivateRoute = (Component) => {

   
    return withIsAuthenticated((props) => {
        const {isAuthenticated = false} = props
        useEffect(() => {

           !isAuthenticated && Router.pushRoute("/login")

        }, [isAuthenticated])

        return <Component {...props}/>
      
    })
}

export default PrivateRoute

