import { useMutation, useQueryClient } from "@tanstack/react-query"
import { keyBuilder } from "../keyBuilder"
import { putProduct } from "../service/productService"

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(putProduct, {
    onSuccess: product => {
      queryClient.invalidateQueries(keyBuilder.product(product._uuid))
    },
  })
}
