export const isApiSuccess = (response) => {
    if(response){
        if(response.status && response.status === 200){
            return true
        }
    }
}