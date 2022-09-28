import { Group } from "@mantine/core";
import React from "react";
import Logo from "./components/Logo";
import CartButton from "./components/CartButton";

function Header() {
  return (
    <Group position="apart" noWrap style={{ width: "100%" }}>
      <Group>
      <Logo />
      </Group>
      <Group noWrap>
        <CartButton />
      </Group>
    </Group>
  );
}

export default Header;
