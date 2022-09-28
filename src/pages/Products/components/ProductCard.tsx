import React from "react";
import { IProduct } from "../../../types/IProduct";
import {
  Card,
  Image,
  Text,
  Button,
  Center,
  Divider,
  Anchor,
} from "@mantine/core";
import { createStyles } from "@mantine/core";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";


interface IProductCard {
  product: IProduct;
}


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
    boxShadow: theme.colorScheme === "dark" ? "" : "1px 1px 15px 1px #888888",
  },
  name: {
    height: "125px",
    width: "100%",
    marginLeft: "10px",
    padding: "5px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.dark[7],
    marginTop: "10px",
    fontWeight: "bold",
    overflow: "hidden",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: "15px",
  },
  price: {
    marginLeft: "10px",
    marginTop: "10px",
    color: "red.2",
    padding: "5px",
    fontWeight: "bold",
  },
}));

function ProductCard({ product }: IProductCard) {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    // e.preventDefault();
    dispatch(addToCart(product));
  }
  return (
    <Card className={classes.card}>
      <Card.Section className={classes.image}>
        <Anchor href={product.category + "/" + product._uuid}>
          <Image src={product.image} width={190} />
        </Anchor>
      </Card.Section>
      <div>
        <Anchor href={product.category + "/" + product._uuid} underline={false}>
          <Text className={classes.name}>{product.name}</Text>
        </Anchor>
        <Divider my="sm" color="gray.4" />
        <Center>
          <Text color={"red.7"} mt={10} className={classes.price}>
            {product.price} Lei
          </Text>
        </Center>
      </div>
      <Center>
    
        <Button variant="outline" leftIcon={<BsCartPlus size={20}/>} mt={10} type="submit" onClick={handleAddToCart}>
          Add to cart
        </Button>
       
      </Center>
    </Card>
  );
}

export default ProductCard;
