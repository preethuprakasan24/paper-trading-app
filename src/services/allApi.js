import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"


export const registerApi = async (reqBody) => {
    return await commonAPI("POST", `${serverUrl}/users`, reqBody);
  };
  
  //api to get userdetails
  export const getUserApi = async (reqBody) => {
    return await commonAPI(
      "GET",
      `${serverUrl}/users?email=${reqBody.email}&password=${reqBody.password}`
    );
  };

  //api to get company details 
  export const getCompanyDetailsApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/companies`,"")
  }

