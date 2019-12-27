import React, { useState } from "react";
import { equals, indexOf } from 'ramda';
import { repeatElement } from "./utils";
import Wrapper from "./components/Wrapper";
import State from "./components/State";
import Configurator from "./components/Configurator";
import Cart from "./components/Cart";
import { damperrr, track, wallBracket45 } from "./configurator";


const configuredProduct = (qty, dmp, trackLength, mountingWall) => ({
  readyProduct: {
    name: "System do drzwi przesuwnych na 1 skrzydło drzwi",
    track: repeatElement(track(trackLength), parseInt(qty)),
    kitBase_S60: {
      product_id: 327,
      quantity: qty, 
      name: "System S60",
      regular_price: "55.00"
    },
    damper: damperrr(qty, dmp),
    wallBracket45: wallBracket45(qty, trackLength, mountingWall),
    quantity: qty,
    sku: `S120.${ trackLength + '.70' + dmp}`,
  }
});


const App = () => { 
  const [trackLength, setTrackLength] = useState(180);
  const [mountingWall, setMountingWall] = useState(0);
  const [dmp, setDmp] = useState(0);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);

  const filterOutSame = (arr, item) => arr.filter(arrItem=>!equals(item,arrItem))
  const removeGroup = ([oneOfTheGroup]) => setCart(filterOutSame(cart, oneOfTheGroup));

  const updateQuantity = ( quantity, index ) => {  
    const dmp = cart[index].readyProduct.sku.slice(11, 12);
    const trackLength = cart[index].readyProduct.track[0].quantity 
      setCart([ 
        ...cart.slice(0, index),
        configuredProduct( parseInt(quantity), dmp, trackLength, mountingWall),
        ...cart.slice(index+1),
      ])      
  }

  const addToCart = (readyProduct) => {  
    let elemmm = cart.find( el => el.readyProduct.sku === readyProduct.readyProduct.sku )
    let index = indexOf(elemmm, cart);  
    if (elemmm !== undefined) { 
      setCart([ 
        ...cart.slice(0, index),
        configuredProduct( parseInt(elemmm.readyProduct.quantity) + parseInt(qty), dmp, trackLength, mountingWall),
        ...cart.slice(index+1),
      ])      
    } else {
      setCart([...cart, readyProduct])  
    }
  }

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
        <Configurator
          addToCart={addToCart}
          configuredProduct={configuredProduct}
          dmp={dmp}
          setDmp={setDmp}
          qty={qty}
          setQty={setQty}
          trackLength={trackLength}
          setTrackLength={setTrackLength}
          mountingWall={mountingWall}
          setMountingWall={setMountingWall}
        /> 
      </Wrapper>
      <Wrapper color="white">
        <Cart
          setCart={setCart}
          cart={cart}
          updateQuantity={updateQuantity}
          removeGroup={removeGroup}    
        />
      </Wrapper>
    </div>
  );
};

export default App;
