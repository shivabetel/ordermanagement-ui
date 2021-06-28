import ApiRegistry from "../../../network/core";
import apiList from "./api-list";

class OrderApiRegistry extends ApiRegistry {
    constructor(){
        super();
        this._apiConfigs = {
            ...apiList
        }
    }
}

export default new OrderApiRegistry(apiList)