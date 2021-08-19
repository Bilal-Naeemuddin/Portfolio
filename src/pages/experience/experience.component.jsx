import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.png";
import Tilt from 'react-parallax-tilt';
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Project Manager/Data Analyst</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/*<strong className="body-title-style ">Data Analyst</strong>
                    <br />*/}
                    <strong>Languages & Platforms:</strong> R, Rstudio
                    <br />
                    <strong>Duration:</strong> Janurary 2021 - April 2021
                    <br/>
                    <strong></strong>
                    <ul className="text-left">
                      <li><strong>Competed in a University sponsored contest to answer the question 
                        “How did covid-19 impact our daily lives?” </strong> </li>

                      <li><strong>Collaborated with 5 members, being the team lead of the group, 
                        I was responsible for organizing and creating a timeline for the team. 
                        I was also tasked with helping the members with less experience in data analyzing and visualization. </strong> 
                      </li>

                      <li><strong>Used multiple datasets related to mobility, unemployment rates 
                        and daily covid-19 cases in the US to find trends related to the question of the competition. </strong> 
                      </li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;