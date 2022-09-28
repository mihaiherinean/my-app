import axios from "axios";
import { ICreateProduct } from "../types/ICreateProduct";
import { IDeleteProduct } from "../types/IDeleteProduct";
import { IProduct } from "../types/IProduct";
import { IProductPagination } from "../types/IProductPagination";
import { IUpdateProductReq } from "../types/IUpdateProductReq";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5004",
});

export const getProducts = async (category: string) => {
  const { data } = await axiosInstance.get<IProductPagination>(`/products`);
  return data.items.filter((item) => item.category === category);
};

export const getProduct = async (uuid: string) => {
  const { data } = await axiosInstance.get<IProduct>(`/products/${uuid}`);
  return data;
};

export const postProduct = async(req: ICreateProduct) =>{
  const {data} = await axiosInstance.post<{items: IProduct[]}>('/products',[req])
  return data;
}

export const putProduct = async (req: IUpdateProductReq) => {
  const { uuid, ...rest } = req
  const { data } = await axiosInstance.put<IProduct>(`/products/${uuid}`, rest)
  return data;
}

export const deleteProduct = async (req: IDeleteProduct) => {
  const {uuid} = req;
  const {data} = await axiosInstance.delete<IProduct>(`/products/${uuid}`)
  return data;
}