import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image} from "react-bootstrap";
import { Tooltip } from "react-tooltip";
import AnimateOnScroll from './AnimateOnScroll';

// IMAGES
import gauge80 from '../assets/img/gauge_80.svg';
import gauge85 from '../assets/img/gauge85.png';
import gauge90 from '../assets/img/gauge90.png';
import gauge95 from '../assets/img/gauge95.png';
import gauge100 from '../assets/img/gauge100.png';

import python from '../assets/img/python.png';
import java from '../assets/img/java.svg';
import javascript from '../assets/img/javascript.svg';
import c from '../assets/img/c.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.svg';
import react from '../assets/img/react.png';
import mssql from '../assets/img/mssql.svg';
import postgres from '../assets/img/postgres.png';
import mongodb from '../assets/img/mongodb.svg';
import mariadb from '../assets/img/mariadb.svg';
import influxdb from '../assets/img/influxdb.svg';
import docker from '../assets/img/docker.png';
import vmware from '../assets/img/vmware.png';
import proxmox from '../assets/img/proxmox.png';
import qemu from '../assets/img/qemu.png';
import bash from '../assets/img/bash.png';
import ansible from '../assets/img/ansible.png';
import maven from '../assets/img/maven.svg';
import gradle from '../assets/img/gradle.png';
import ignition from '../assets/img/ignition.svg';
import tailscale from '../assets/img/tailscale.jpeg';
import vyos from '../assets/img/vyos.png';


const SkillPiece = ({displayTitle, img, round=false}) => {
    if (round) {
        return (
            <div className="skillPiece">
                <a data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={displayTitle}><Image src={img} roundedCircle/></a>
                <Tooltip id="my-tooltip" />
            </div>
        );
    } else {
        return (
            <div className="skillPiece">
                <a data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={displayTitle}><Image src={img}/></a>
                <Tooltip id="my-tooltip" />
            </div>
        );
    }
}

const SkillPieceInverted = ({displayTitle, img, round=false}) => {
    if (round) {
        return (
            <div className="skillPiece">
                <a data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={displayTitle}><Image src={img} roundedCircle style={{filter: 'invert(100%)'}}/></a>
                <Tooltip id="my-tooltip" />
            </div>
        );
    } else {
        return (
            <div className="skillPiece">
                <a data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={displayTitle}><Image src={img} style={{filter: 'invert(100%)'}}/></a>
                <Tooltip id="my-tooltip" />
            </div>
        );
    }
}

const CarouselItem = ({title, gaugeNum}) => {
    return (<div className="carouselItemNew hidden">
                <img src={gaugeNum} alt="gauge"/>
                <h5>{title}</h5>
            </div>)};

const skillRow = (displayTitle, pieces) => {
    return (
        <Row>
            <Col>
                <h3>{displayTitle}</h3>
            </Col>
            <Col>
                {pieces}
            </Col>
        </Row>
    );
}

const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        className="custom-carousel-arrow custom-carousel-arrow--left"
        onClick={onClick}
      >
        {/* <img src={leftArrow}></img> */}
        &lt;
      </button>
    );
  };
  
  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        className="custom-carousel-arrow custom-carousel-arrow--right"
        onClick={onClick}
      >
        {/* <img src={rightArrow}></img> */}
        &gt;
      </button>
    );
  };

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const transformObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('transform');
        } else {
            entry.target.classList.remove('transform');
        }
    });
});

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeElements = document.querySelectorAll('.hidden');
  fadeElements.forEach((element) => fadeObserver.observe(element));
  
  const leftElements = document.querySelectorAll('.left');
  const rightElements = document.querySelectorAll('.right');
  const hiddenElements = [...leftElements, ...rightElements];
  hiddenElements.forEach((element) => transformObserver.observe(element));
  
return (
    <section className="skill" id="skills">
        <div className="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
            <Carousel customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <CarouselItem title={"Procedural Programming".toUpperCase()} gaugeNum={gauge95}></CarouselItem>
                <CarouselItem title={"Object-Oriented Programming".toUpperCase()} gaugeNum={gauge85}></CarouselItem>
                <CarouselItem title={"Functional Programming".toUpperCase()} gaugeNum={gauge90}></CarouselItem>
                <CarouselItem title={"REST APIs"} gaugeNum={gauge85}></CarouselItem>
                <CarouselItem title={"Testing".toUpperCase()} gaugeNum={gauge90}></CarouselItem>
                <CarouselItem title={"Automation".toUpperCase()} gaugeNum={gauge90}></CarouselItem>
                <CarouselItem title={"System Admin".toUpperCase()} gaugeNum={gauge85}></CarouselItem>
                <CarouselItem title={"Client Relations".toUpperCase()} gaugeNum={gauge95}></CarouselItem>
                <CarouselItem title={"Virtualization".toUpperCase()} gaugeNum={gauge90}></CarouselItem>
                <CarouselItem title={"Learning New Things".toUpperCase()} gaugeNum={gauge100}></CarouselItem>
            </Carousel>
            <Row className="top-padding left" xs={12} md={6} xl={6}>
                <h3>Programming Languages</h3>
                <SkillPiece displayTitle="Python" img={python}></SkillPiece>
                <SkillPiece displayTitle="Java" img={java} round={true}></SkillPiece>
                <SkillPiece displayTitle="C" img={c}></SkillPiece>
                <SkillPiece displayTitle="Bash" img={bash}></SkillPiece>
            </Row>
            <Row className="top-padding left" xs={12} md={6} xl={6}>
                <h3>Web Development</h3>
                <SkillPiece displayTitle="HTML" img={html}></SkillPiece>
                <SkillPiece displayTitle="CSS" img={css}></SkillPiece>
                <SkillPiece displayTitle="JavaScript" img={javascript}></SkillPiece>
                <SkillPiece displayTitle="React" img={react}></SkillPiece>
            </Row>
            <Row className="top-padding left" xs={16} md={8} xl={6}>
                <h3 className="top-padding-20">Databases</h3>
                <SkillPieceInverted displayTitle="InfluxDB" img={influxdb}></SkillPieceInverted>
                <SkillPiece displayTitle="MariaDB" img={mariadb}></SkillPiece>
                <SkillPieceInverted displayTitle="Microsoft SQL Server" img={mssql}></SkillPieceInverted>
                <SkillPiece displayTitle="Postgres" img={postgres}></SkillPiece>
                <SkillPiece displayTitle="MongoDB" img={mongodb}></SkillPiece>
            </Row>
            <Row className="top-padding left" xs={16} md={8} xl={6}>
                <h3 className="top-padding-20">Virtualization</h3>
                <SkillPiece displayTitle="Docker" img={docker}></SkillPiece>
                <SkillPiece displayTitle="Proxmox" img={proxmox}></SkillPiece>
                <h3 className="top-padding-20">Automation</h3>
                <SkillPiece displayTitle="Ignition" img={ignition}></SkillPiece>
                <SkillPieceInverted displayTitle="Ansible" img={ansible}></SkillPieceInverted>
            </Row>
            <Row className="top-padding left" xs={16} md={8} xl={6}>
                <h3 className="top-padding-20">Networking</h3>
                <SkillPieceInverted displayTitle="Tailscale" img={tailscale} round={true}></SkillPieceInverted>
                <SkillPiece displayTitle="Vyos" img={vyos} round={true}></SkillPiece>
                <h3 className="top-padding-20">Packaging</h3>
                <SkillPiece displayTitle="Maven" img={maven}></SkillPiece>
                <SkillPiece displayTitle="Gradle" img={gradle} round={true}></SkillPiece>
            </Row>
        </div>
    </section>
  )
}