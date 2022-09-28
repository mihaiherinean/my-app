import { Center, ScrollArea, Text } from "@mantine/core";
import React from "react";
import { useCartSelector } from "../../hooks/useCartSelector";
import CartProductCard from "./components/CartProductCard";

function Cart() {
  const cart = useCartSelector();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cartProducts.forEach((product) => {
      totalQuantity += product.cartQuantity;
      totalPrice += product.price * product.cartQuantity;
    });
    return { totalQuantity, totalPrice };
  };

  if (getTotal().totalQuantity == 0) {
    return (
      <Center>
        <Text>Your Shoppping Cart is empty</Text>
      </Center>
    );
  }

  return (
    <>
      <ScrollArea style={{ width: "800px", height: "600px" }}>
        {cart.cartProducts.map((product) => (
          <CartProductCard product={product} />
        ))}
        <div>
          <h1>Numar produse: {getTotal().totalQuantity}</h1>
          <h1>Total de plata: {getTotal().totalPrice}</h1>
        </div>
      </ScrollArea>
    </>
  );
}

export default Cart;
