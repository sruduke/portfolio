import { Container, Row, Col, Image} from "react-bootstrap";
import background from '../assets/img/binary_gauss.jpg';
import baseball from '../assets/img/baseball.png';
import chimpchat from '../assets/img/chimpchat.png';
import alarmrat from '../assets/img/alarm-rat.png';
import lights from '../assets/img/lights.png';
import testing from '../assets/img/testing.png';

const ProjectCard = ({title, description, image, url}) => {
    return (
        <Col sm={6} md={6} lg={4} className="d-flex mx-auto align-items-center">
            <div className="proj-imgbx">
                <img src={image} />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={url}>View Project</a>
                </div>
            </div>
        </Col>
    )
}

export const Projects = () => {

    const projects = [
        {title: 'Baseball App',
        description: 'This is a project',
        image: baseball,
        url: 'https://www.google.com'},

        {title: 'Alarm Rationalization',
        description: 'This is a project',
        image: alarmrat,
        url: 'https://www.google.com'},

        {title: 'ChimpChat',
        description: 'This is a project',
        image: chimpchat,
        url: 'https://www.google.com'}, 

        {title: 'Automated Testing Suite',
        description: 'This is a project',
        image: testing,
        url: 'https://www.google.com'},

        {title: 'Arduino LED Light Controller',
        description: 'This is a project',
        image: lights,
        url: 'https://www.google.com'},
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <h2>Projects</h2>
                <Row>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} title={project.title} description={project.description} image={project.image} url={project.url}/>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}