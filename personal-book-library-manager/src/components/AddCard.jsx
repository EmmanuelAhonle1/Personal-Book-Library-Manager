import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddCard() {
  return (
    <Card
      style={{ height: "300px", cursor: "pointer" }}
      className=" mx-auto d-flex flex-column h-100 justify-content-center align-items-center transition-all hover-shadow"
    >
      <div className="text-center">
        <i className="bi bi-plus-square fs-1 mb-2"></i>
        <p className="mt-2">Add New</p>
      </div>
    </Card>
  );
}

export default AddCard;
