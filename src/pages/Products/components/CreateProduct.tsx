import React from "react";

import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../../hooks/useCreateProductMutation";
import { Button, Center, Text, Textarea, TextInput } from "@mantine/core";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreateProductProp {
  category: string | undefined;
}

const createProductSchema = z.object({
  name: z.string().min(10).max(200),
  description: z.string().min(10).max(400),
  price: z.string().refine((val) => Number(val) > 0, {
    message: "Insert a price number greater than 0",
  }),
  image: z.string(),
  category: z.string(),
});

type FormFields = z.infer<typeof createProductSchema>;

function CreateProduct({ category }: ICreateProductProp) {
  const { isLoading, mutate: createProduct, data } = useCreateProductMutation();
  const { register, handleSubmit, reset, formState } = useForm<FormFields>({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: "1",
      category: `${category}`,
    },
    mode: "onBlur",
    resolver: zodResolver(createProductSchema),
  });
  const onSubmit = async (values: FormFields) => {
    const { price, ...rest } = values;
    createProduct(
      {
        price: Number(price),
        ...rest,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };
  return (
    <>
      {data?.items[0] && (
        <Text color="green.5">You succesfully create a new product</Text>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder="Name"
          label="Name"
          withAsterisk
          error={formState.errors?.name?.message}
          {...register("name")}
        />
        <Textarea
          placeholder="Description"
          label="Description"
          error={formState.errors?.description?.message}
          {...register("description")}
        />

        <TextInput
          label="Product category"
          placeholder={category}
          {...register("category")}
          // defaultValue={category}
          error={formState.errors?.category?.message}
          withAsterisk
          readOnly
        />

        <TextInput
          placeholder="URL Image"
          label="URL Image"
          withAsterisk
          error={formState.errors?.image?.message}
          {...register("image")}
        />
        <TextInput
          placeholder="Price"
          label="Price"
          withAsterisk
          error={formState.errors?.price?.message}
          {...register("price")}
        />
        <Center>
          <Button
            variant="outline"
            color="green.5"
            mt={10}
            loading={isLoading}
            type="submit"
          >
            Submit
          </Button>
        </Center>
      </form>
    </>
  );
}

export default CreateProduct;
