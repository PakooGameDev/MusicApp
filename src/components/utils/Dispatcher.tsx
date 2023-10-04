const baseURL = 'https://webhook.site/24b6f162-d647-413e-8a50-520e931dc7a7';  // this is the url of the server client's connecting to

export const callApi = async (RequesteType,token, payload) => {
    try{
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'type': RequesteType,
                'token': token,
                'payload': payload
            })
        })       
        const data = await response.data
        console.log(data)
    } catch(error) {
        console.log(error)
    } 
}
