import { useMutation, useQueryClient } from "@tanstack/react-query"
import { keyBuilder } from "../keyBuilder"
import { postProduct } from "../service/productService"

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(postProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyBuilder.productss())
    },
  })
}
