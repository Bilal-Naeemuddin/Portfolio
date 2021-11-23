import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE1 from "../../assets/img/experience/accenture-4.png";
import Tilt from 'react-parallax-tilt';
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <br/>
      <h1 className="pt-3 text-center font-details-b pb-3"><strong>Experience</strong></h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE1} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">FGF Brands</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Data Scientist</strong>
                    <br />
                    <strong>Duration:</strong> September 2021 - Present
                    <br/>
                    <br/>
                    <strong></strong>
                    <ul className="text-left">
                      <li>Developed a Flask app that detects defective blueberries such as discoloration, mold, etc. This helped increase production time in the line by 88.2%</li>

                      <li>Added Camera detection in manufacturing plants to detect humans which increased efficiency in the line by 15.5%
                      </li>

                      <li>Learned how to use Custom Vision to train detection models, extract and implement the model to be used
                      </li>

                      <li>Learned how to extract data from Cameras in the line and from videos that contained large amounts of footage 
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