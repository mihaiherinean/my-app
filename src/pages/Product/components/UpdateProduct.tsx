import { Button, Center, Text, Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useUpdateProductMutation } from "../../../hooks/useUpdateProductMutation";
import { IProduct } from "../../../types/IProduct";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface IUpdateProductProps {
  product: IProduct;
}
const updateProductSchema = z.object({
  name: z.string().min(10).max(200),
  description: z.string().min(10).max(400),
  price: z.string().refine((val) => Number(val) > 0, {
    message: "Insert a price number greater than 0",
  }),
  image: z.string(),
});

type FormFields = z.infer<typeof updateProductSchema>;

function UpdateProduct({ product }: IUpdateProductProps) {
  const { isLoading, mutate: updateProduct, data } = useUpdateProductMutation();

  const { register, handleSubmit, reset, formState } = useForm<FormFields>({
    defaultValues: {
      name: `${product.name}`,
      description: `${product.description}`,
      image: `${product.image}`,
      price: `${product.price}`,
    },
    mode: "onBlur",
    resolver: zodResolver(updateProductSchema),
  });

  const onSubmit = async (values: FormFields) => {
    const {price, ...rest } = values;
    console.log(values);
    updateProduct(
      {
        price: Number(price),
        ...rest,
        uuid: product._uuid
      },
   
    )
  };
  return (
    <>
    {data && <Text color="green.5">You succesfully update the product</Text>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          error={formState.errors?.name?.message}
          placeholder="Name"
          label="Name"
          withAsterisk
          {...register("name")}
        />
        <Textarea
          error={formState.errors?.description?.message}
          placeholder="Description"
          label="Description"
          withAsterisk
          {...register("description")}
        />
        <TextInput
          error={formState.errors?.image?.message}
          placeholder="URL Image"
          label="URL Image"
          withAsterisk
          {...register("image")}
        />
        <TextInput
          error={formState.errors?.price?.message}
          type="number"
          placeholder="Price"
          label="Price"
          withAsterisk
          {...register("price")}
        />
        <Center>
          <Button
            variant="outline"
            color="blue.5"
            loading={isLoading}
            type="submit"
            mt={20}
          >
            Update
          </Button>
        </Center>
      </form>
    </>
  );
}

export default UpdateProduct;
