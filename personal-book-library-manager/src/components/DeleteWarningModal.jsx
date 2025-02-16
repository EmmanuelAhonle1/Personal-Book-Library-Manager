import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

function DeleteWarningModal({
  bookData,
  removeBook,
  showDeleteWarning,
  setShowDeleteWarning,
}) {
  const handleCloseDeleteWarning = () => {
    console.log("Delete Warning Closed");
    setShowDeleteWarning(false);
  };

  const handleDeleteBook = (e) => {
    removeBook(e, bookData.id);
    setShowDeleteWarning(false);
  };

  return (
    <Modal show={showDeleteWarning} onHide={handleCloseDeleteWarning}>
      <Modal.Header closeButton>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this book?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseDeleteWarning}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteBook}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteWarningModal.propTypes = {
  bookData: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
  showDeleteWarning: PropTypes.bool.isRequired,
  setShowDeleteWarning: PropTypes.func.isRequired,
};

export default DeleteWarningModal;
