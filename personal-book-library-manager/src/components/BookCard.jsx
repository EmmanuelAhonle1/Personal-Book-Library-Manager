import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const star = "⭐️";

function BookCard({ bookData, onUpdate, onRemove }) {
  const [book, setBook] = useState(bookData);

  const removeBook = (id) => {
    console.log(`${book.title} Deleted`);
    onRemove(id);
  };
  const editTitle = (newTitle) => {
    console.log(`Title changed to ${newTitle}`);
    setBook({ ...book, newTitle });
    onUpdate({ ...bookData, title: newTitle });
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      {" "}
      {/* Responsive columns */}
      <Card style={{ maxWidth: "540px", height: "300px" }} className="mx-auto">
        {" "}
        {/* Center each card */}
        <Row className="g-0 mb-3">
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
              <Card.Text className="text-muted">by {book.author}</Card.Text>
              <Card.Text>{star.repeat(book.rating)}</Card.Text>
              <Card.Text className="text-muted">{book.genre}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="pb-0">
          <div className="d-flex justify-content-around">
            <Button
              onClick={() => {
                editTitle("yolo2");
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                removeBook(book.id);
              }}
              variant="danger"
            >
              Remove
            </Button>
          </div>
        </Row>
      </Card>
    </div>
  );
}

BookCard.propTypes = {
  bookData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    status: PropTypes.string,
    rating: PropTypes.number,
    dateAdded: PropTypes.string,
    dateCompleted: PropTypes.string,
    notes: PropTypes.string,
    coverUrl: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default BookCard;
