import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('aboutme');
    const [scrolled, setScrolled] = useState(false);

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
          <Container className="container">
              <Nav className="ms-auto">
                <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <div className="flex-grow"></div>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://ca.linkedin.com/in/sophia-ruduke-56599522a"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/sruduke"><img src={github} alt="" style={{width: '70%'}} /></a>
                </div>
                <button className="vvd-btn">Contact Me</button>
            </span>
          </Container>
        </Navbar>
      );
    }