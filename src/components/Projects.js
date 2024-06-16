import { ProjectModal } from "./Modal";
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Image} from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import background from '../assets/img/binary_gauss.jpg';
import baseball from '../assets/img/baseball.png';
import chimpchat from '../assets/img/chimpchat.png';
import alarmrat from '../assets/img/alarm-rat.png';
import lights from '../assets/img/lights.png';
import testing from '../assets/img/testing.png';



export const Projects = () => {

    const projects = [
        {title: 'Baseball App',
        image: baseball,
        description: 'This is a project',
        technologies: ['React', 'Node', 'Express'],
        modalImages: [baseball]},

        {title: 'Alarm Rationalization',
        image: alarmrat,
        description: 'This is a project',
        technologies: ['React', 'Node', 'Express'],
        modalImages: [alarmrat]},

        {title: 'ChimpChat',
        image: chimpchat,
        description: 'This is a project',
        technologies: ['React', 'Node', 'Express'],
        modalImages: [chimpchat]},

        {title: 'Automated Testing Suite',
        image: testing,
        description: 'This is a project',
        technologies: ['React', 'Node', 'Express'],
        modalImages: [testing]},

        {title: 'Arduino LED Light Controller',
        image: lights,
        description: 'This is a project',
        technologies: ['React', 'Node', 'Express'],
        modalImages: [lights]}
    ];
    
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