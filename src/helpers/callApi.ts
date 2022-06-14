import axios from "axios";

export const callApi = (endpoint: string, method: string, options?: Object) => {
    try {
        return axios({
            url: `http://localhost:5000/${endpoint}`,
            method: method.toLocaleLowerCase()
        }).then((response) => {
                return response.data.rows
            }
        ).catch((error) => {
            console.log('offlineerror')
            throw error
        })

    } catch (e) {
        throw new Error(`Error while sending network call: ${e}`)
    }


}
