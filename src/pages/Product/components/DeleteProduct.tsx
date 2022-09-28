import { Alert, Button, Modal } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import React, { useState } from "react";
import { useDeleteProductMutation } from "../../../hooks/useDeleteProductMutation";
import { IProduct } from "../../../types/IProduct";

interface IDeleteProductProp {
  product: IProduct;
}

function DeleteProduct({ product }: IDeleteProductProp) {
  const [opened, setOpened] = useState(false);
  const { isLoading, mutate, data } = useDeleteProductMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ uuid: product._uuid });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Button
          variant="outline"
          color="red.5"
          loading={isLoading}
          type="submit"
          onClick={() => setOpened(true)}
        >
          Delete product
        </Button>
      </form>
      {data && (
        <Modal opened={opened} onClose={() => setOpened(false)} title="Message">
          <Alert icon={<IconCheck size={16} />} color="green">
            The product has been deleted!
          </Alert>
        </Modal>
      )}
    </>
  );
}

export default DeleteProduct;
