import { create } from 'apisauce';

export const api = create({
    baseURL: 'https://api.coincap.io/v2/',
    headers: {
        'Accept-Language': 'en',
        'Content-Type': 'application/json; charset-utf-8; v=1.0',
    },
});
api.addResponseTransform(response =>{
    if(response.status ==404){
        // return
    }else{

    };
    if(response.status ==200){
        return response;
    }else{
        throw response;
    } 
})
export default api;