import { apiClient } from "./config";


export const apiGetAdverts = async () => apiClient.get("/adverts")
export const apiAddAdverts = async () => apiClient.post("/adverts", payload)
export const apiGetSingleAdverts = async () => apiClient.get(`/adverts/${id}`)