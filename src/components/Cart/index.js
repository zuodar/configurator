import React, { useState } from "react";
import { repeatElement } from "../../utils";
import {groupBy, equals} from 'ramda';

const calculatePrice = product => {
  const price1 =
    product.kitBase_S60.quantity * product.kitBase_S60.regular_price;
  const price2 = product.damper.quantity * product.damper.regular_price;
  const price3 =
    product.wallBracket45.quantity * product.wallBracket45.regular_price;
  const price4 =
    product.track[0].quantity *
    product.track[0].regular_price *
    product.quantity;
  return price1 + price2 + price3 + price4;
};

const removeByIndex = (array, i) => array.filter((_, index) => index !== i);
const cloneByIndex = (array, i, quantity) => [...array, ...repeatElement(array[i], quantity)];

const Cart = ({ cart, setCart }) => {
  const remove = index => setCart(removeByIndex(cart, index));
  const clone = (index, quantity) => setCart(cloneByIndex(cart, index, quantity ));
  const cartTotal = cart.reduce(
    (val, cartItem) => val + calculatePrice(cartItem.readyProduct),
    0
  );

  const cartGroupedByIdentity = groupBy(cart, equals);

  return (
    <div style={{ position: "relative", height: "calc(100% - 90px)" }}>
      <p> Added to Cart </p>
      <hr />
      {cartGroupedByIdentity.map((group, index) => (
        <div key={index}>
          <button onClick={() => remove(index)}> Remove </button>
          <p> {group.readyProduct.name} </p>
          <p> {calculatePrice(group[0].readyProduct * group.length)} </p>
          <p> ×{group[0].readyProduct.kitBase_S60.quantity} </p>

          <input
            type="number"
            min="1"
            max="99"
            value={group.length}
            onChange={e => clone(index, e.target.value)}
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
