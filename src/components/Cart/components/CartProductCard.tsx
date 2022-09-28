import { Button, Card, createStyles, Image, Text } from "@mantine/core";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeProduct } from "../../../store/cartSlice";
import { IProduct } from "../../../types/IProduct";

interface ICartProductCard {
  product: IProduct;
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    boxShadow: theme.colorScheme === "dark" ? "" : "1px 1px 15px 1px #888888",
  },
  cardinfo: {
    display: "flex",
    flexWrap: "nowrap",
  },
  name:{
    "@media(max-width:550px)": {
        height: '25px',
        overflow:'hidden',
      },
  },
  infoDiv: {
    display: "flex",
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'flex-start',
    padding: "5px",
    width: "100%",
    "@media(max-width:750px)": {
        width: "400px",
        height: "100px",
      },
      "@media(max-width:550px)": {
        width: "320px",
        height: "100px",
      },
  },
  pricebtn:{
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems:'center',
    height:'100%',
    width:'100%',
    "@media(max-width:450px)": {
       justifyContent:'flex-start',
       gap: '20px',
      },
  }
  
}));

function CartProductCard({ product }: ICartProductCard) {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const handleRemoveProduct = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(removeProduct(product));
  }
  const handleIncrementQuantity = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(incrementQuantity(product));
  }
  const handleDecrementQuantity = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(decrementQuantity(product));
  }
  return (
    <Card p={0} className={classes.card} mt={4}>
      <div className={classes.cardinfo}>
        <Card.Section>
          <Image src={product.image} width={120} />
        </Card.Section>
        <div className={classes.infoDiv}>
          <Text size='xs' className={classes.name}>{product.name}</Text>
          <div className={classes.pricebtn}>
          <Text size="md">
            {product.price} Lei
          </Text>
          <div style={{display: 'flex', justifyContent:'center',alignItems:'center', gap: '5px'}}>
            <Button size="xs" variant="subtle" onClick={handleIncrementQuantity}><AiOutlinePlus size={20}/></Button>
          <Text size="md">
           x{product.cartQuantity}
          </Text>
          <Button size="xs" variant="subtle" onClick={handleDecrementQuantity}><AiOutlineMinus size={20}/></Button>
          </div>
          <Button size="xs" variant="subtle" onClick={handleRemoveProduct}><BsTrash size={16} color="red"/></Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CartProductCard;
