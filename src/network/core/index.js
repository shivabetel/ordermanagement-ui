import apiBasePaths from './api-base-paths'
import config from '../../config'

class ApiRegistry {

    constructor() {
        this._apiConfigs = []
    }

    getUrl (apiName, env) {
        let url = ''

       const apiObj = this._apiConfigs[apiName]
       url = (apiObj && apiObj['route']) || url

        const basePathConfig = apiBasePaths[apiObj['endpoint']] || ''
        const basePath = basePathConfig[env] || ''
        return basePath + url
      }

      getPath (apiName, opt) {
        const { env } = config
        const defaultOptions = {}
        Object.assign(defaultOptions, this._defaultOptions)
        const endPoint = this.getUrl(apiName, env)
        let basePath
        let hash = {}
        let queryString = ''
        basePath = endPoint || ''
        hash = Object.assign({}, defaultOptions, opt.pathVars || {})
        Object.keys(hash).forEach((keyName) => {
          basePath = basePath.replace(new RegExp(`{${keyName}}`, 'g'), (hash[keyName] || ''))
        })
        if (opt.queryString) {
          hash = Object.assign({}, opt.queryString || {})
          Object.keys(hash).forEach((keyName) => {
            queryString += `&${keyName}=${hash[keyName]}`
          })
          const containsQuery = basePath.indexOf('?') > 0
          if (!containsQuery) {
            queryString = (queryString || '').substring(1)
            basePath = `${basePath}?`
          }
          return basePath + queryString
        };
    
        return basePath
      }
    
}


export default ApiRegistry;