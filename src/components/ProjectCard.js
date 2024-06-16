import { Container, Row, Col, Image} from "react-bootstrap";


export const ProjectCard = ({title, image, description, technologies, modalImages, onClick}) => {
    const handleClick = () => {
        onClick(title, description, technologies, modalImages);
    }
    
    return (
        <Col sm={6} md={6} lg={4} className="d-flex mx-auto align-items-center">
           <div className="proj-imgbx" onClick={handleClick}>
                <img src={image} />
                <div className="proj-txt">
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;