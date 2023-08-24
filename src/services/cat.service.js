import { API_CAT } from "../constants/Api.constants";

class catServices{
    async getRamdomFact(){
        const response = await fetch(API_CAT.RAMDOM_FACT());
        //Interceptor
        return response.json();
    }
    async getImage(){
        const response = await fetch(API_CAT.IMAGE_URL);
        //Interceptor
        return response.json();
    }
    async getPrefixImg(){
        const response = await fetch(API_CAT.PREFIX_IMAGE_URL);
        //Interceptor
        return response.json();
    }
}