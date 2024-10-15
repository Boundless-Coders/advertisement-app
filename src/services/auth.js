import { apiClient } from "./config"



export const apiSignup = async (payload) => {
    
    return apiClient.post("/users/signup", payload);
}

//implicit return
export const apiLogin = async (payload) => {
    return apiClient.post("/users/signup", payload);
    
}