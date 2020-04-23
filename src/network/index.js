import axios from '../libs/axios'

const apiTimeout = 500000

const defaultApiOptions = (options = {} ) => {
    return Object.assign({
        //withCredentials: true
        //headers: ''
        timeout: apiTimeout,
        validateStatus: (status) => {
            return status < 400
        },
        transformRequest: [ function(data, headers) {
             return JSON.stringify(data)
        } ],
        transformResponse: [ function (response ) {
              return response;
        }]
    }, options)
}

const dataToReturn = (response) => {
    return response && response['data'] && JSON.parse(response['data'])
}

const buildError = (errorObj = {}) => {

    const defautError = {
        responseCode: 400,
        responseMessage: 'Something went wrong'
    }
    const { response = {} } = errorObj
    let { data = {} } = response;
    data = JSON.parse(data);
    const returnError = Object.assign({}, defautError, data)
    console.log("returnError",returnError)
    return returnError
}


class HttpLib {

    constructor(){}

    post = function (apiEndpoint, options) {
        options.headers = Object.assign({}, (options.headers || {}), {
            'Content-Type': 'application/json'
        })
       return axios({
           method: 'POST',
           url: apiEndpoint,
           ...defaultApiOptions(options)
        })
        .then((response) => {
            return new Promise((resolve) => resolve(dataToReturn(response)))
        })
        .catch((err) => {
            console.log("********error",err)
            return new Promise((resolve, reject) => reject(buildError(err)))
        })
    }

    get = function(apiEndpoint, options) {
        options.headers = Object.assign({}, (options.headers || {}), {
            'Content-Type': 'application/json'
        })
        return axios({
            url: apiEndpoint,
            method: 'GET',
            ...defaultApiOptions(options)
        })
        .then(response => {
            return new Promise(resolve => resolve(dataToReturn(response)))
        })
        .catch((e) => {
            return new Promise((resolve, reject) => reject(buildError(e)))
        })
    }

}

export default HttpLib;
