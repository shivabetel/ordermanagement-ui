import ApiRegistry from "../../../network/core";
import apiList from "./api-list";

class LoginApiRegistry extends ApiRegistry {
    constructor(){
        super();
        this._apiConfigs = {
            ...apiList
        }
    }
}

export default new LoginApiRegistry(apiList)