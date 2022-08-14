import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Price from "./Price";
import { useRef } from "react";

const Book = ({ book }) => {
  const [img, setImg] = useState()

  const moundtedRef = useRef(true)

  useEffect(() => {
    const image = new Image()
    image.src = book.url
    image.onload = ()=> {
      setTimeout(() => {
        setImg(image)
      }, 300) 
    }
    return () => {
      moundtedRef.current = false
    }
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className='"book__img--wrapper'>
              <img
                src={img.src}
                alt=""
                className="book__img"
              />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <div className="book__rating">
            <Rating rating={book.rating} />
            <Price
              salePrice={book.salePrice}
              originalPrice={book.originalPrice}
            />
          </div>
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
