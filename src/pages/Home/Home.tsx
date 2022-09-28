import React, { useState } from 'react'
import { useCartSelector } from '../../hooks/useCartSelector';

function Home() {
  const cart = useCartSelector();
  return (
    <>
    <div>
      {cart.cartProducts.map((product) =>(
        <div>
        <li>Product: {product.name}</li>
        <li>Price: {product.price}</li>
        </div>
        ))}
    </div>
    <div>
      {/* <li>Total cos: {cart.cartTotal}</li>
      <li>Total produse: {cart.cartTotalQuantity}</li> */}
    </div>
      
    </>
  )
}

export default Home