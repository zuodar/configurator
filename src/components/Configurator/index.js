import React, { useState } from "react";
import { repeatElement } from "../../utils";

const damperrr = (qty, dmp) => ({
  product_id: 7263,
  quantity: qty * dmp,
  name: "Domykacz Seria S",
  regular_price: "119.00"
});

const track = {
  product_id: 14729,
  quantity: 200,
  name: "Prowadnica",
  regular_price: "0.27"
};

const configuredProduct = (qty, dmp) => ({
  readyProduct: {
    name: "System do drzwi przesuwnych na 1 skrzydło drzwi",
    sku: "S120",
    track: repeatElement(track, parseInt(qty)),
    kitBase_S60: {
      product_id: 327,
      quantity: qty,
      name: "System S60",
      regular_price: "55.00"
    },
    damper: damperrr(qty, dmp),
    wallBracket45: {
      product_id: 7274,
      quantity: qty * 6,
      name: "Klamra ścienna aluminiowa 45",
      regular_price: "3.50"
    },
    quantity: qty
  }
});

const Configurator = ({ addToCart }) => {
  const [dmp, setDmp] = useState(0);
  const [qty, setQty] = useState(1);
  return (
    <>
      <p> Configurator {qty} </p>
      <hr />
      <div>
        Domykacz
        <button
          style={{
            marginLeft: 20,
            width: "60px",
            height: 45,
            backgroundColor: dmp < 1 ? "white" : "#4CAF50",
            color: dmp < 1 ? "#4CAF50" : "white",
            border: "none",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "8px 0 0 8px",
            cursor: "pointer"
          }}
          onClick={() => setDmp(0)}
        >
          Nie{" "}
        </button>
        <button
          style={{
            width: "60px",
            height: 45,
            backgroundColor: dmp >= 1 ? "white" : "#4CAF50",
            color: dmp >= 1 ? "#4CAF50" : "white",
            border: "none",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "0 8px 8px 0",
            cursor: "pointer"
          }}
          onClick={() => setDmp(1)}
        >
          {" "}
          Tak{" "}
        </button>
      </div>

      <hr />
      <div style={{ display: "flex" }}>
        <input
          type="number"
          min="1"
          max="99"
          value={qty}
          onChange={e => setQty(e.target.value)}
        />

        <button
          style={{
            marginLeft: 20,
            width: "100%",
            height: 45,
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            borderRadius: 8,
            cursor: "pointer"
          }}
          onClick={() => addToCart(configuredProduct(qty, dmp))}
        >
          {" "}
          Add to Cart {qty}
        </button>
      </div>
    </>
  );
};

export default Configurator;
