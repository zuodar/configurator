import React from 'react';
import Wrapper from './components/Wrapper'
import State from './components/State'
import Configurator from './components/Configurator'
import Cart from './components/Cart'

class App extends React.Component {
  state = {
    productsInCart: [
      { "one": 1 },
      { "two": 2},
    ],
    configurableProduct: {
      track: 180,
      brackets: 6
    }
  }


  render() {

    

    const addToCart = () => {
      const prod = this.state.configurableProduct
      const myState = this.state.productsInCart
      const pushIt = () => myState.push( prod );
      pushIt()
      console.log("dupa", this.state.productsInCart )
      const returned  = this.state
    }



    
    return (
      <div style={{
          textAlign: 'center', 
          padding: 20, 
          display: 'flex', 
          height: 'calc(100% - 40px)'
        }}>
          

        <Wrapper color="white" >
        {   JSON.stringify( returned, null, 2 )  } 
          <State   />
        </Wrapper>
        <Wrapper color="#e6e6e6" > 
          <Configurator addToCart={addToCart} />
        </Wrapper>
        <Wrapper color="white" > 
          <Cart />
        </Wrapper>
  
      </div>
    );
  }
}

 
export default App;