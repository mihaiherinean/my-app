import React from "react";
import { useProductQuery } from "../../hooks/useProductQuery";
import { useParams } from "react-router-dom";
import {
  Button,
  Center,
  createStyles,
  Loader,
  Modal,
  Text,
} from "@mantine/core";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

function Product() {
  const { uuid } = useParams();
  const { isError, isLoading, data: product } = useProductQuery(uuid || "");
  const [opened, setOpened] = useState(false);

  const useStyles = createStyles((theme) => ({
    divButtons: {
      marginBottom: "15px",
      display: "flex",
      gap: "15px",
    },
  }));

  const { classes } = useStyles();

  if (isLoading || !product) {
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
      <div className={classes.divButtons}>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Edit the product"
        >
          <UpdateProduct product={product} />
        </Modal>
        <Button
          variant="outline"
          color="blue.3"
          onClick={() => setOpened(true)}
        >
          Edit product
        </Button>
        <DeleteProduct product={product} />
      </div>
      <ProductDetails product={product} />
    </>
  );
}

export default Product;
