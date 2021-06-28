import ApiRegistry from "../../../network/core";
import apiList from "./api-list";

class ShippingAddresApiRegistry extends ApiRegistry {
    constructor(){
        super();
        this._apiConfigs = {
            ...apiList
        }
    }
}

export default new ShippingAddresApiRegistry(apiList)