import Httplib from '../../network'
import ApiRegistry from './api-registry'


const register = async function (inputObj = {} ) {

    try{
        let response = {}
        const options = {
            data: {
                ...inputObj
            }
        }
        const apiPath = ApiRegistry.getPath('register', options)
        const httpLib = new Httplib()
        response = await httpLib.post(apiPath, options)
        return new Promise(resolve => resolve(response))//returning new Promise so that i can do some transformation stuff here
    }catch(e) {
        return new Promise((resolve, reject) => reject(e))
    }
    

}

const checkAvailablity = async (emailId = '') => {
  try {
      let response = {}
      let options = {
          queryString: {
              emailId: emailId
          }
      }
      const httpLib = new Httplib();
      const apiPath = ApiRegistry.getPath("checkAvailability", options);
      response = await httpLib.get(apiPath, options)
      return new Promise(resolve => resolve(response))//returning new Promise so that i can do some transformation stuff here

  }catch(err) {
    return new Promise((resolve, reject) => reject(err))
  }
}

export {
    register,
    checkAvailablity
}