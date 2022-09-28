export const keyBuilder = {
    products: (category:string) => ["products",category],
    product: (uuid: string) => ["product", uuid],
    productss: () => ["products"]
}