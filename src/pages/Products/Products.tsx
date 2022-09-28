import React from "react";
import { useParams } from "react-router-dom";
import { useProductsQuery } from "../../hooks/useProductsQuery";
import { Button, Center, Grid, Loader, Modal, Text } from "@mantine/core";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import CreateProduct from "./components/CreateProduct";

function Products() {
  const { category } = useParams();
  
  const {
    isError,
    isLoading,
    data: products,
  } = useProductsQuery(category || "");
  const [opened, setOpened] = useState(false);

  if (isLoading) {
    return (
      <Center>
        <Loader size="lg" />
      </Center>
    );
  }
  if (isError) {
    return (
      <Center>
        <Text color="red">Something went wrong!</Text>
      </Center>
    );
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create a new product"
      >
        <CreateProduct category={category}/>
      </Modal>

      <Button variant="outline" mb={20} onClick={() => setOpened(true)}>
        Create a new product
      </Button>

      <Grid gutter="xl">
        {products?.map((product) => (
          <Grid.Col xs={6} sm={4} md={3} key={product._uuid}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

export default Products;
