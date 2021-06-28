import HttpLib from '../../network'
import apiRegistry from "./api-registry";

export const srCreateOrder = async function (payload = {}){
    let response = {};
    let options = {
        pathVars: {
            customerId: payload['customerId'],
        },
        data: {
            ...payload
        }
    }
    try{

        const apiPath = apiRegistry.getPath("order", options);
        const httpLib = new HttpLib();
        response = await httpLib.post(apiPath, options);
        //response = transformProductResponse(response, filters);
        console.log("pai response",response)
        return new Promise(resolve => resolve(response))
    }catch(err){
        return new Promise((resolve, reject) => reject(err))
    }
}

export const srGetOrders = async function (customerId){
    let response = {};
    let options = {
        pathVars: {
            customerId: customerId
        }
    }
    try{

        const apiPath = apiRegistry.getPath("getOrders", options);
        const httpLib = new HttpLib();
        response = await httpLib.get(apiPath, options);
        console.log("orders response", response)
        return new Promise(resolve => resolve(response))
    }catch(err){
        return new Promise((resolve, reject) => reject(err))
    }
}