import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Button } from "react-bootstrap";
import BookModal from "./BookModal";
import DeleteWarningModal from "./DeleteWarningModal";
const star = "⭐️";

function BookCard({ bookData, onUpdate, onRemove }) {
  const [book, setBook] = useState(bookData);
  const [showBookDataModal, setShowBookDataModal] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  useEffect(() => {
    setBook(bookData);
  }, [bookData]);

  const onShow = () => {
    console.log("Modal opened");
    setShowBookDataModal(true);
  };

  const onBookModalHide = () => {
    console.log("Modal closed");
    setShowBookDataModal(false);
  };

  const handleShowDeleteWarning = (e) => {
    e.stopPropagation();
    console.log("Delete Warning Shown");
    setShowDeleteWarning(true);
  };

  const removeBook = (e, id) => {
    // e.stopPropagation();
    console.log(`${book.title} Deleted`);
    onRemove(id);
  };

  const editCard = (e, newTitle) => {
    e.stopPropagation();
    console.log(`Title changed to ${newTitle}`);
    const updatedBook = { ...book, title: newTitle };
    setBook(updatedBook);
    onUpdate(updatedBook);
  };

  return (
    <>
      <BookModal
        showModal={showBookDataModal}
        onHide={onBookModalHide}
        bookData={book}
      />
      <DeleteWarningModal
        bookData={book}
        removeBook={removeBook}
        showDeleteWarning={showDeleteWarning}
        setShowDeleteWarning={setShowDeleteWarning}
      />
      <Card
        className="mx-auto d-flex flex-column h-100"
        style={{ cursor: "pointer" }}
        onClick={onShow}
      >
        <Row className="g-0">
          <Col xs={12} md={4} className="p-2">
            <div className="d-flex align-items-center">
              <Card.Img
                src={book.coverUrl}
                className="img-fluid rounded-start w-100"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  height: "200px",
                  "@media (min-width: 768px)": {
                    height: "250px",
                  },
                }}
                alt={book.title || "Book cover"}
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title className="px-0">{book.title}</Card.Title>
              <Card.Text className="text-muted">by {book.author}</Card.Text>
              <Card.Text
                style={{
                  letterSpacing: "-3px",
                }}
              >
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      color: index < book.rating ? "inherit" : "#e0e0e0",
                      opacity: index < book.rating ? 1 : 0.25,
                    }}
                  >
                    {star}
                  </span>
                ))}
              </Card.Text>
              <Card.Text className="text-muted">{book.genre}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="p-2 mt-auto">
          <Col className="d-flex gap-2 justify-content-between">
            <Button
              onClick={(e) => editCard(e, "yolo2")}
              className="flex-grow-1"
            >
              Edit
            </Button>
            <Button
              onClick={(e) => handleShowDeleteWarning(e)}
              variant="danger"
              className="flex-grow-1"
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card>
    </>
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
  showDeleteWarning: PropTypes.bool.isRequired,
  setShowDeleteWarning: PropTypes.func.isRequired,
};

export default BookCard;
