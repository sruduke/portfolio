import Modal from 'react-bootstrap/Modal';
import { Container} from "react-bootstrap";
import { useState, useEffect } from "react";

export const ProjectModal = ({title, description, technologies, images, show, onHide}) => {
  
  const [isMobile, setIsMobile] = useState(false);

  // Used to resize modal on mobile
  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Modal
      className={isMobile ? "project-modal-mobile" : "project-modal"}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      // scrollable={true}
      centered={true}
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
          return isMobile ? null : <img key={index} src={image} alt={""}/>;
        })}
      </Modal.Body>
      {/* <Modal.Footer> */}
      {/* </Modal.Footer> */}
      </Container>
    </Modal>
  );
}

export default ProjectModal;
