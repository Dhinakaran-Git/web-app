import axios from "axios";
import {BASE_URL} from "../const";

let bannerBody = {
    "auth_token" : "d0d76b66c3ba2bc46ab8016669449506",
    'user_id':'1'
}

export async function getBestSellersLinks(){

    try {
        let response = await axios.post( BASE_URL +"/best_seller" ,bannerBody, {
            headers:{
                'Authorization' : `Bearer LK@$$$@202267c5b73b2d90c58bf3b09244e6d68cbe`,
                'Content-Type' : 'application/json'
            },
        },);
        console.log("best seller",response.data);
        if(response.status === 200) return response.data.best_sellers;
    } catch (error) {
        alert (error.message);
    }
}