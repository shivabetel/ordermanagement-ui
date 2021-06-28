import React from 'react';
import Booking from '../../components/book';
import PrivateRoute from '../../components/common/hoc/private-route';


const BookContainer = props => {



    return (
        <div>
            <Booking/>
        </div>
    )
}


export default PrivateRoute(BookContainer);