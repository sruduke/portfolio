import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headShot from '../assets/img/headshot.jpg';

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
            <Container>
                <Row className="align-items-center">
                    <div className="flex" style={{width: "80%"}}>
                        {/* <span className="tagline">printf("Hello World!");</span> */}
                        <h1>Hello World! <br></br> I'm Sophia Ruduke</h1>
                        <div style={{height: '5em'}}><h2 style={{height: '100%'}}>{text}</h2></div>
                    </div>
                    {/* <Col xs={12} md={6} xl={7}> */}
                    {/* </Col> */}
                    {/* <Col xs={12} md={6} xl={4}> */}
                    <div className="flex" style={{width: "20%"}}>
                        <img src={headShot} alt="developer" className="img-fluid" />
                    </div>
                    <p>Hi, I'm Sophia Ruduke. I just received my BSc in Computing Science with Specialization at the University of Alberta.   a software developer based in Nairobi, Kenya. I have a passion for web development and love to create web applications that are user-friendly and visually appealing. I have experience working with JavaScript, React, Node.js, and MongoDB. I am always eager to learn new technologies and improve my skills.</p>
                    {/* </Col> */}
                </Row>
            </Container>
        </section>
    )
}