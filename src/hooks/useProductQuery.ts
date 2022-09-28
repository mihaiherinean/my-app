import { useQuery } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { getProduct } from "../service/productService";

export const useProductQuery = (uuid: string) => {
    return useQuery(keyBuilder.product(uuid), () => getProduct(uuid));
  }
  