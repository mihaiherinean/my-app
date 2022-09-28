import {
  Button,
  Center,
  createStyles,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import React from "react";
import { useCartSelector } from "../../hooks/useCartSelector";
import CartProductCard from "./components/CartProductCard";

const useStyles = createStyles((theme) => ({
  checkout: {
    marginTop: "5px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    fontSize: "25px",
    fontFamily: "monospace",
    width: "50%",
    "@media (max-width: 600px)": {
      marginRight: "auto",
    },
  },
}));
function Cart() {
  const cart = useCartSelector();
  const { classes } = useStyles();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cartProducts.forEach((product) => {
      totalQuantity += product.cartQuantity;
      totalPrice += product.price * product.cartQuantity;
    });
    return { totalQuantity, totalPrice };
  };

  if (getTotal().totalQuantity === 0) {
    return (
      <Center>
        <Text>Your Shoppping Cart is empty</Text>
      </Center>
    );
  }

  return (
    <>
      <ScrollArea style={{ width: "800px", height: "700px" }}>
        {cart.cartProducts.map((product) => (
          <CartProductCard product={product} />
        ))}
        <Text p={5} mb={5} size="xs">
          You have {getTotal().totalQuantity} products in your cart!
        </Text>
        <Center>
          <div className={classes.checkout}>
            <Group position="apart" spacing="xs">
              <Text>Total:</Text>
              <Text>{getTotal().totalPrice} Lei</Text>
            </Group>
            <Button variant="outline">Checkout</Button>
          </div>
        </Center>
      </ScrollArea>
    </>
  );
}

export default Cart;
