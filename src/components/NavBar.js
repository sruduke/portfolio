import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Tooltip } from "react-tooltip";
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import email from '../assets/img/email.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('aboutme');
    const [scrolled, setScrolled] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('s.ruduke@gmail.com');
    }

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);}, [])

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Nav>
              <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>  
            <div className="social-icon">
                <a href="https://ca.linkedin.com/in/sophia-ruduke-56599522a"><img style={{width: '50%'}} src={linkedin} alt="" /></a>
                <a href="https://github.com/sruduke"><img src={github} alt=""/></a>
                <a href="" data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={"Copy email to clipboard"}><img onClick={copyToClipboard} src={email}></img></a>
                <Tooltip id="my-tooltip" />
            </div>
          </Container>
        </Navbar>
      );
    }