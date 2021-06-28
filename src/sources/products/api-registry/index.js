import ApiRegistry from "../../../network/core";
import apiList from "./api-list";

class ProductApiRegistry extends ApiRegistry {
    constructor(){
        super();
        this._apiConfigs = {
            ...apiList
        }
    }
}

export default new ProductApiRegistry(apiList)