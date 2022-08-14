import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../ui/book";
import Price from "../ui/Price";
import Rating from "../ui/rating";

const BooksInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookInCart() {
    return cart.find((book) => book.id === +id);
  }

  return (
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    saepe tempora perspiciatis quos voluptatum dignissimos
                    ducimus dicta nesciunt? At aliquid doloribus eveniet
                    perspiciatis beatae recusandae, amet temporibus iure quas
                    animi!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    saepe tempora perspiciatis quos voluptatum dignissimos
                    ducimus dicta nesciunt? At aliquid doloribus eveniet
                    perspiciatis beatae recusandae, amet temporibus iure quas
                    animi!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    saepe tempora perspiciatis quos voluptatum dignissimos
                    ducimus dicta nesciunt? At aliquid doloribus eveniet
                    perspiciatis beatae recusandae, amet temporibus iure quas
                    animi!
                  </p>
                </div>
                {bookInCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id}/>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BooksInfo;