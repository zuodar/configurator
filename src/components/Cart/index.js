import React, { useState } from "react";
import { repeatElement, formatPrice } from "../../utils";
import {groupWith, equals} from 'ramda';

const price = product => product.quantity * product.regular_price;


const totalPrice = product => {
    const {damper, kitBase_S60, wallBracket45, track: [firstTrack]} = product;
    return price(kitBase_S60)
        +price(wallBracket45)
        +price(damper)
        +price(firstTrack) * product.quantity
};

  const Cart = ({ cart,  removeGroup,   updateQuantity }) => {
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
          <p> { formatPrice(totalPrice(group[0].readyProduct) * group.length) } </p>
          <p> ×{group[0].readyProduct.kitBase_S60.quantity} </p>

          <input
            type="number"
            min="1"
            max="99"
            value={cart[index].readyProduct.quantity}
         //   value={group.length}
          //  onChange={e => setGroupQuantity(group, e.target.value)}
            onChange={e => updateQuantity(e.target.value, index)}
          />
          <hr />
        </div>
      ))}
      <div style={{  }}>
        <hr />
        Wartość koszyka: { formatPrice(cartTotal) }
      </div>
    </div>
  );
};

export default Cart;
