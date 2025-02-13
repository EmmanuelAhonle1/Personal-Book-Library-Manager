import React, { useState, useEffect } from "react";
import { initialBooks, createBook } from "../data/initialBooks";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import BookCard from "./BookCard";
// Define addBook outside the component
const createNewBook = (
  title,
  author,
  genre,
  status,
  rating,
  dateAdded,
  dateCompleted,
  notes,
  coverUrl
) => {
  return createBook(
    crypto.randomUUID(),
    title,
    author,
    genre,
    status,
    rating,
    dateAdded,
    dateCompleted,
    notes,
    coverUrl
  );
};

function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(initialBooks);
  }, []);

  // const addBook = (...args) => {
  //   const newBook = createNewBook(...args);
  //   setBookList([...bookList, newBook]);
  // };
  const updateBook = (updatedBook) => {
    setBookList(
      bookList.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    console.log("we hit it");
  };

  const removeBook = (bookId) => {
    setBookList(bookList.filter((book) => book.id !== bookId));
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Book List</h2> {/* Center the heading */}
      <div className="d-flex flex-row justify-content-center">
        {bookList?.map((book) => (
          <BookCard
            key={book.id}
            bookData={book}
            onUpdate={updateBook}
            onRemove={removeBook}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
// export { createNewBook };
