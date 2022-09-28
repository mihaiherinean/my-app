import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Indicator } from "@mantine/core";
import { useCartSelector } from "../../../hooks/useCartSelector";
import { Drawer, useMantineTheme } from "@mantine/core";
import Cart from "../../Cart/Cart";

function CartButton() {
  const cart = useCartSelector();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.cartProducts.forEach((product) => {
      totalQuantity += product.cartQuantity;
    });
    return totalQuantity;
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        position="right"
        size="800px"
      >
        <Cart />
      </Drawer>

      <Indicator
        label={getTotalQuantity()}
        inline
        size={18}
        withBorder
        color="red"
      >
        <Badge
          size="xl"
          variant="filled"
          style={{ cursor: "pointer" }}
          onClick={() => setOpened(true)}
        >
          <AiOutlineShoppingCart size={20} />
        </Badge>
      </Indicator>
    </>
  );
}

export default CartButton;
