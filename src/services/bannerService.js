import axios from "axios";
import {BASE_URL} from "../const";

let bannerBody = {
    "auth_token" : "67c5b73b2d90c58bf3b09244e6d68cbe",
    "banner_type" : "WEB"
}

export async function getBannerLinks(){

    try {
        let response = await axios.post( BASE_URL +"/banners" ,bannerBody, {
            headers:{
                'Authorization' : `Bearer LK@$$$@202267c5b73b2d90c58bf3b09244e6d68cbe`,
                'Content-Type' : 'application/json'
            },
        },);
        console.log(response.data);
        if(response.status === 200) return response.data.banner_details;
    } catch (error) {
        alert (error.message);
    }
}