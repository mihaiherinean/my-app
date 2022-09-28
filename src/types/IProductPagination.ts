import { IProduct } from "./IProduct"

export interface IProductPagination {
  cursor: unknown
  items: IProduct[]
  next_page: unknown
}
