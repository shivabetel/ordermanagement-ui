import ApiRegistry from "../../../network/core";
import apiList from './api-list'

class UsersApiRegistry extends ApiRegistry {
    constructor() {
        super()
        this._apiConfigs = apiList
    }
}

export default new UsersApiRegistry(apiList)