import { apiClient } from "./config";


export const apiGetAdverts = async () => apiClient.get("/adverts")

export const apiAddAdverts = async () => apiClient.post("/adverts", payload)

export const apiGetSingleAdverts = async (id) => apiClient.get(`/adverts/${id}`)

export const apiUpdateAdverts = async (id, payload) => {
 
    const ad = await apiClient.patch(`/adverts/${id}`, payload)
 
    return ad
}

export const apiDelAdverts = async (id) => apiClient.delete(`/adverts/${id}`)