import HttpLib from '../../network'
import apiRegistry from "./api-registry";


export const getShippingAddress = async function (customerId){
    let response = {};
    let options = {
        pathVars: {
            customerId: customerId           
        }
    }
    try{

        const apiPath = apiRegistry.getPath("getShippingAddressByCustomerId", options);
        const httpLib = new HttpLib();
        response = await httpLib.get(apiPath, options);
        console.log("get shipping adresss response", response)
        return new Promise(resolve => resolve(response))
    }catch(err){
        return new Promise((resolve, reject) => reject(err))
    }
}

export const updateShippingAddress = async function (inputObj={}){
    let response = {};
    let options = {
        data: {
            ...inputObj['address']
        },
        pathVars: {
            customerId: inputObj['customerId'],
            addressId: inputObj['addressId'],
            
        }
    }
    try{

        const apiPath = apiRegistry.getPath("updateShippingAddress", options);
        const httpLib = new HttpLib();
        response = await httpLib.put(apiPath, options);
        console.log("update shipping adresss response", response)
        return new Promise(resolve => resolve(response))
    }catch(err){
        return new Promise((resolve, reject) => reject(err))
    }
}