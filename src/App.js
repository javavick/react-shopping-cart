import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Context
import ProductContext from "./contexts/ProductContext.js";
import CartContext from "./contexts/CartContext.js";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navigation />

        <ProductContext.Provider value={{ products, addItem }}>
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
