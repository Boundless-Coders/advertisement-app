import { apiClient } from "./config"



export const apiSignup = async (payload) => {
    
    return await apiClient.post("/users/register", payload);
}





export const apiLogin = async (payload) => {
    return await apiClient.post ("/users/login", payload);
}

export const apiProfile = async () => {
    return await apiClient.post ("/users/profile");
}

//implicit return
// export const apiLogin = async (payload) =>  return apiClient.post("/users/signup", payload);
    
