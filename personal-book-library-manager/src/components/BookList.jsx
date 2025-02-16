import React, { useState, useEffect } from "react";
import { initialBooks, createBook } from "../data/initialBooks";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import BookCard from "./BookCard";
import AddCard from "./AddCard";
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
    <Container>
      <h2 className="text-center mb-4">Book List</h2>
      <Row className="g-3">
        <Col xs={12} sm={6} md={4} lg={3}>
          <AddCard />
        </Col>
        {bookList?.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.id}>
            <BookCard
              bookData={book}
              onUpdate={updateBook}
              onRemove={removeBook}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
// export { createNewBook };
