import { Button, Card, createStyles, Image, Text } from "@mantine/core";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { IProduct } from "../../../types/IProduct";

interface IProductDetails {
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
    "@media(max-width:550px)": {
      overflow: "hidden",
    },
  },
  description: {
    fontSize: "15px",
  },
  imageCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: "15px",
    height: "400px",
    width: "450px",
    "@media(max-width:700px)": {
      width: "100%",
    },
  },
  image: {
    width: 280,
  },
  price: {
    fontSize: "25px",
    color: "red",
    fontFamily: "sans-serif",
  },
  infoDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "400px",
    padding: "10px",
    width: "100%",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    width: "100%",
    marginBottom: "10px",
    padding: "5px",
  },
  cardinfo: {
    display: "flex",
    flexWrap: "nowrap",
    "@media(max-width:700px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
}));

function ProductDetails({ product }: IProductDetails) {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(addToCart(product));
  };
  return (
    <Card p={0} className={classes.card}>
      <div className={classes.cardinfo}>
        <Card.Section className={classes.imageCard}>
          <Image src={product.image} className={classes.image} width={220} />
        </Card.Section>
        <div className={classes.infoDiv}>
          <div>
            <Text className={classes.name}>{product.name}</Text>
            <Text mt={5} className={classes.description}>
              {product.description}
            </Text>
          </div>
          <Text size="lg" className={classes.price} mt={10}>
            {product.price} Lei
          </Text>
          <Button
            mr={10}
            variant="outline"
            leftIcon={<BsCartPlus size={20} />}
            mt={10}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductDetails;
