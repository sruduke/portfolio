import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Image} from "react-bootstrap";

export const ProjectModal = ({title, description, technologies, images, show, onHide}) => {
  return (
    <Modal
      className="project-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Container className="project-popup">
      <Modal.Header closeButton style={{filter: "brightness(0) invert(1)"}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Overview</h5>
        <p>
            {description}
        </p>
        <h5>Technologies Used</h5>
        <ul>
            {technologies.map((technology, index) => {
                return (
                    <li key={index}>{technology}</li>
                )
            })}
        </ul>
        {images.map((image, index) => {
          return (
            <img key={index} src={image} />
          )
        })}
      </Modal.Body>
      {/* <Modal.Footer> */}
      {/* </Modal.Footer> */}
      </Container>
    </Modal>
  );
}

export default ProjectModal;
