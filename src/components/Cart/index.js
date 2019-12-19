import React, { useState } from "react";
import { repeatElement } from "../../utils";
import {groupWith, equals} from 'ramda';

const price = product => product.quantity * product.regular_price;


const totalPrice = product => {
    const {damper, kitBase_S60, wallBracket45, track: [firstTrack]} = product;
    return price(kitBase_S60)
        +price(wallBracket45)
        +price(damper)
        +price(firstTrack) * product.quantity
};

  const removeByIndex = (array, i) => array.filter((_, index) => index !== i);
  const cloneByIndex = (array, i, quantity) => [...array, ...repeatElement(array[i], quantity)];

  const Cart = ({ cart, setCart }) => {
      // const remove = index => setCart(removeByIndex(cart, index));
      // const clone = (index, quantity) => setCart(cloneByIndex(cart, index, quantity ));
      const filterOutSame = (arr, item) => arr.filter(arrItem=>!equals(item,arrItem))
      const removeGroup = ([oneOfTheGroup]) => setCart(filterOutSame(cart, oneOfTheGroup));
      const setGroupQuantity = ([oneOfTheGroup], quantity) => {
          setCart([
              ...filterOutSame(cart, oneOfTheGroup),
              ...repeatElement(oneOfTheGroup, parseInt(quantity))
          ]);
      }

      const cartTotal = cart.reduce(
        (val, cartItem) => val + totalPrice(cartItem.readyProduct),
        0
      );

      const cartGroupedByIdentity = groupWith(equals, cart);

  return (
    <div style={{ position: "relative", height: "calc(100% - 90px)" }}>
      <p> Added to Cart </p>
      <hr />
      {cartGroupedByIdentity.map((group, index) => (
        <div key={index}>
          <button onClick={() => removeGroup(group)}> Remove </button>
          <p> {group[0].readyProduct.name} </p>
          <p> {totalPrice(group[0].readyProduct) * group.length} </p>
          <p> ×{group[0].readyProduct.kitBase_S60.quantity} </p>

          <input
            type="number"
            min="1"
            max="99"
            value={group.length}
            onChange={e => setGroupQuantity(group, e.target.value)}
          />
          <hr />
        </div>
      ))}
      <div style={{ position: "absolute", bottom: 0 }}>
        <hr />
        Wartość koszyka: {cartTotal}
      </div>
    </div>
  );
};

export default Cart;
