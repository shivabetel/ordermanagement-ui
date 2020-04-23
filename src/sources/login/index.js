import HttpLib from "../../network";
import apiRegistry from "./api-registry";

const srLogin = async (input = {} ) => {
    let response = {}
    let options = {}
    try{
        options['data'] = {
            ...input
        }
        const apiPath = apiRegistry.getPath("login", options);
        const httpLib = new HttpLib();
        response = await httpLib.post(apiPath, options);
        return new Promise(resolve => resolve(response))
    

    }catch(e) {
        return new Promise((resolve, reject) => reject(e))
    }
}

export {
    srLogin
}