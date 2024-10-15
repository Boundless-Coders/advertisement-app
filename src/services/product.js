import { apiClient } from "./config";


export const apiGetProducts = async () => apiClient.get("/products")
export const apiAddProduct = async () => apiClient.post("/products", payload)
export const apiGetSingleProduct = async () => apiClient.get(`/products/${slug}`)