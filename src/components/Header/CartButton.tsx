import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button, createStyles, Text } from '@mantine/core'

const useStyles = createStyles((theme)=>({
  text: {
    marginLeft: 8,
    '@media (max-width: 500px)': {
      display: 'none',
    },
  }
  })

)

function CartButton() {
  const {classes} = useStyles();
  return (
    <>
    <Button variant='outline' size='xs' color="gray.3"><AiOutlineShoppingCart size={14}/><Text className={classes.text}>Your cart</Text> </Button>
    </>
  )
}

export default CartButton