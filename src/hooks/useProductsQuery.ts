import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../service/productService";
import { keyBuilder } from "../keyBuilder";

export const useProductsQuery = (category:string) => {
    return useQuery(keyBuilder.products(category), () => getProducts(category))
}