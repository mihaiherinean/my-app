import { Anchor, Center, Grid, Image, Text } from "@mantine/core";
import React from "react";

function Home() {
  const images = {
    laptop:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    phone:
      "https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    tablet:
      "https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pc: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    software:
      "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  };

  return (
    <>
      <Grid grow gutter="xs">
        <Grid.Col span={4}>
          <Center>
            <Text color="white" size="lg">
              Laptops
            </Text>
          </Center>
          <Anchor href="/products/laptop">
            <Image src={images.laptop} height={230} />
          </Anchor>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Text color="white" size="lg">
              Phones
            </Text>
          </Center>
          <Anchor href="/products/phones">
            <Image src={images.phone} height={230} />
          </Anchor>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Text color="white" size="lg">
              Tablets
            </Text>
          </Center>
          <Anchor href="/products/tablets">
            <Image src={images.tablet} height={230} />
          </Anchor>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Text color="white" size="lg">
              PC
            </Text>
          </Center>
          <Anchor href="/products/pc">
            <Image src={images.pc} height={230} />
          </Anchor>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Text color="white" size="lg">
              Software
            </Text>
          </Center>
          <Anchor href="/products/software">
            <Image src={images.software} height={230} />
          </Anchor>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Home;
