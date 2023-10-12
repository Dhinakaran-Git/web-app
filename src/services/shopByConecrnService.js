import axios from "axios";
import {BASE_URL} from "../const";

let bannerBody = {
    "auth_token":"4d46eff36c1d414cade7d453defe6212"
}

export async function getShopByConcern(){

    try {
        let response = await axios.post( BASE_URL +"/shop_by_concern" ,bannerBody, {
            headers:{
                'Authorization' : `Bearer LK@$$$@20224d46eff36c1d414cade7d453defe6212`,
                'Content-Type' : 'application/json'
            },
        },);
        if(response.status === 200) return response.data.shop_by_concern;
    } catch (error) {
        alert (error.message);
    }
}