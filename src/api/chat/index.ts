import axios from "axios";
import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";

export const getChatList = () => {
    return wrapper("get", URLS.LIST)
}

export const instance = axios.create({  
    baseURL: URLS.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }     
})