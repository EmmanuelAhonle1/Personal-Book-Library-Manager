import React, { useState, useEffect } from "react";
import { initialBooks, createBook } from "../data/initialBooks";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

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

  const addBook = (...args) => {
    const newBook = createNewBook(...args);
    setBookList([...bookList, newBook]);
  };

  const getStatusVariant = (status) => {
    switch (status?.toLowerCase()) {
      case "reading":
        return "primary";
      case "completed":
        return "success";
      case "want-to-read":
        return "secondary";
      default:
        return "info";
    }
  };

  return (
    <Container>
      <h2>Book List</h2>
      {bookList?.map((book) => (
        <Card key={book.id} className="mb-3" style={{ maxWidth: "540px" }}>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img
                src={book.coverUrl}
                className="img-fluid rounded-start"
                alt={book.title || "Book cover"}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export default BookList;
export { createNewBook };
