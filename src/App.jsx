import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BooksInfo from "./pages/BooksInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }
  function removeBook(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => counter += item.quantity)
    return counter
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="books/:id"
            element={
              <BooksInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                key={books.id}
                changeQuantity={changeQuantity}
                removeBook={removeBook}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
