import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/Profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hey there! I am <strong>&nbsp;Bilal Naeemuddin,</strong>
                <br />
                I'm a third year student at the University of Wilfrid Laurier studying Data Science. 
                Currently I am working for FGF Brands as Data Scientist, the company is very unique being a Tech-Bakery
                company. At FGF, I am able to learn more about my passion in programming, data analysis and statistical research.
                I also have multiple years of experience with various technologies and languages such as Python, R, VS Code and many more.
                I am enthusiastic about learning new skills and facing new challenges, I hope to keep growing to
                become the best I can to my ability.  

                <Col className="d-flex justify-content-center flex-wrap">

                  <div>
                    <a href="https://drive.google.com/file/d/1wA8qPNoAQMAeGQtJ8lWKaFFhQd95jnE8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Download my Resume!
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;