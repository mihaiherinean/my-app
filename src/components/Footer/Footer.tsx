import { Box, Button, Center, Group, Text } from "@mantine/core";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";

export function Footer() {
  return (
    <>
      <Box>
        <Center py="lg">
          <AiOutlineCopyrightCircle style={{ marginRight: 4 }} />
          <Text size="xs">Copyright 2022-2023 eShop</Text>
        </Center>
        <Group position="center" spacing="xl">
          <Button variant="subtle" radius="xl" size="xs">
            <FiTwitter size={18} />
          </Button>
          <Button variant="subtle" radius="xl" size="xs">
            <FiFacebook size={18} />
          </Button>
          <Button variant="subtle" radius="xl" size="xs">
            <FiYoutube size={18} />
          </Button>
        </Group>
      </Box>
    </>
  );
}
