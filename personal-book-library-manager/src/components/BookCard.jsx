import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Button, Badge } from "react-bootstrap";

const star = "⭐️";

function BookCard({ bookData }) {
  const [book, setBook] = useState(bookData);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setBook(bookData);
  }, [bookData]);

  const getStatusVariant = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Reading":
        return "primary";
      default:
        return "warning";
    }
  };

  return (
    <Card className="mb-4 shadow">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
      >
        <div className="d-md-flex">
          {/* Book Cover */}
          <div style={{ flex: "0 0 25%" }}>
            <Card.Img
              src={book.coverUrl}
              alt={book.title}
              style={{
                height: "200px",
                objectFit: "cover",
                borderTopRightRadius: 0,
              }}
            />
          </div>

          {/* Basic Info */}
          <Card.Body style={{ flex: "1" }}>
            <Card.Title as="h3" className="mb-2">
              {book.title}
            </Card.Title>
            <Card.Text className="text-muted mb-1">by {book.author}</Card.Text>
            <Card.Text className="text-muted mb-2">{book.genre}</Card.Text>

            <Badge
              bg={getStatusVariant(book.status)}
              className="px-3 py-2 rounded-pill"
            >
              {book.status}
            </Badge>
          </Card.Body>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <Card.Body className="border-top">
          <div className="row mb-4">
            <div className="col-6">
              <small className="text-muted d-block">Date Added</small>
              <span>{book.dateAdded}</span>
            </div>
            <div className="col-6">
              <small className="text-muted d-block">Date Completed</small>
              <span>{book.dateCompleted || "N/A"}</span>
            </div>
          </div>

          <div className="mb-4">
            <small className="text-muted d-block mb-1">Rating</small>
            <span className="fs-5">{star.repeat(book.rating)}</span>
          </div>

          {book.notes && (
            <div className="mb-4">
              <small className="text-muted d-block mb-1">Notes</small>
              <p className="fst-italic">{book.notes}</p>
            </div>
          )}

          <div className="d-flex gap-2">
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Remove</Button>
          </div>
        </Card.Body>
      )}
    </Card>
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
};

export default BookCard;
