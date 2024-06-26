import { ProjectModal } from "./Modal";
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Image} from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import background from '../assets/img/binary_gauss.jpg';

import { projects } from '../static/Info'

export const Projects = () => {

    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        description: '',
        technologies: [],
        modalImages: []
        });

    const handleCardClick = (project) => {
        setModalContent(project);
        setModalShow(true);
    };
    
    return (
        <section className="projects" id="projects">
            <Container>
                <h2>Projects</h2>
                <Row>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard 
                                key={index} 
                                title={project.title} 
                                image={project.image}
                                description={project.description}
                                technologies={project.technologies}
                                modalImages={project.modalImages}
                                onClick={() => handleCardClick(project)}
                                />
                        )
                    })}
               <ProjectModal
                title={modalContent.title}
                description={modalContent.description}
                technologies={modalContent.technologies}
                images={modalContent.modalImages}
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
                </Row>
               
            </Container>
        </section>
    )
}