import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headShot from '../assets/img/headshot.jpg';
import { personalDescription } from "../static/Info";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Developer", "Systems Integrator", "DevOps Engineer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setDelta(period);
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
        } else if (isDeleting && updatedText === '') {
            setDelta(300 - Math.random() * 100);
            setIsDeleting(false);
            setIndex(1);
            setLoopNum(loopNum + 1);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="aboutme">
            <Container style={{width: "80%"}}>
                <Row className="d-flex mx-auto align-items-center" style={{width: "85%"}}> 
                    <Col lg={9}>
                        <h1>Hello World! <br></br> I'm Sophia Ruduke</h1>
                        {/* <div style={{height: '5em'}}><h2 style={{height: '100%'}}>{text}</h2></div> */}
                        <div style={{height: "10vh"}}><h2>{text}</h2></div>
                    </Col>
                    <Col className="justify-content-left">
                        <img src={headShot} alt="developer" className="img-fluid" />
                    </Col>
                </Row>
                <Row style={{paddingTop: "8vh", paddingBottom: "15vh"}}>
                    <Col>
                        <p>{personalDescription}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}