import { Button, Grid, Group } from "@mantine/core";
import React from "react";
import Logo from "./Logo";
import MyAccount from "./MyAccount";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartButton from "./CartButton";

function HeaderApp() {
  return (
    <Group position="apart" noWrap style={{ width: "100%" }}>
      <Group>
      <Logo />
      </Group>
      <Group noWrap>
        <MyAccount />
        <CartButton />
      </Group>
    </Group>
  );
}

export default HeaderApp;
