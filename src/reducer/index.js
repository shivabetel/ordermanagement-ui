import appRoutes from '../../routes-list'
import { combineReducers } from 'redux'
import reducerTemplate from '../store/common/reducer-template'
import { cartReducer } from './cart'
import {  editAddressReducer } from './edit-address'

const reducers = {}
appRoutes.forEach((route) => reducers[route['name'].toLowerCase()] = reducerTemplate(route['name'].toLowerCase()))

reducers['cart'] = cartReducer;
reducers['editAddress'] = editAddressReducer;


export default combineReducers(reducers)