import HttpLib from '../../network'
import { transformProductResponse } from '../transforms/products';
import apiRegistry from "./api-registry";

export const srGetProducts = async function (filters){
    let response = {};
    let options = {}
    try{

        const apiPath = apiRegistry.getPath("product", options);
        const httpLib = new HttpLib();
        response = await httpLib.get(apiPath, options);
        //response = transformProductResponse(response, filters);
        console.log("pai response",response)
        return new Promise(resolve => resolve(response))
    }catch(err){
        return new Promise((resolve, reject) => reject(err))
    }
}