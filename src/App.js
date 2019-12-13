import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import State from "./components/State";
import Configurator from "./components/Configurator";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = readyProduct => setCart([...cart, readyProduct]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 10px",
        display: "flex",
        height: "calc(100% - 40px)"
      }}
    >
      <Wrapper color="white">
        <State printState={cart} />
      </Wrapper>
      <Wrapper color="#e6e6e6">
        <Configurator addToCart={addToCart} />
      </Wrapper>
      <Wrapper color="white">
        <Cart
          setCart={setCart}
          cart={cart}
        />
      </Wrapper>
    </div>
  );
};

export default App;
