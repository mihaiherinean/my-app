import { useMutation, useQueryClient } from "@tanstack/react-query"
import { keyBuilder } from "../keyBuilder"
import { deleteProduct } from "../service/productService"

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteProduct, {
    onSuccess: product => {
      queryClient.invalidateQueries(keyBuilder.product(product._uuid))
    },
  })
}
