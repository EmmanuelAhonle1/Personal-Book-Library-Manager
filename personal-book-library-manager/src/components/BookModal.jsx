import { useState } from "react";
import { Modal, Button, Image, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function BookModal({ showModal, onHide, bookData }) {
  return (
    <>
      <Modal show={showModal} onHide={onHide}>
        <Modal.Header closeButton>
          <Row>
            <Modal.Title>{bookData.title}</Modal.Title>
            <Modal.Title className="text-muted">
              by {bookData.author}
            </Modal.Title>
          </Row>
        </Modal.Header>
        <Modal.Body>
          Your payment has been successfully submitted. We've sent you an email
          with all of the details of your order.
        </Modal.Body>
        <Row>
          <Col className="d-flex justify-content-center">
            <Image src={bookData.coverUrl} alt={bookData.title} fluid />
          </Col>
        </Row>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Got it, thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
BookModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
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

export default BookModal;
