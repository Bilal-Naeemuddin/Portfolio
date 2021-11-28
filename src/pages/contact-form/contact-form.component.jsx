import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3"><strong>Contact Me!</strong></h1>
      <br/>
      <br/>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:bilalnaeemuddin2@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="danger" title="bilalnaeemuddin2@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/bilal-naeemuddin-50b565169/" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/Bilal-Naeemuddin" target="_blank" rel="noopener noreferrer">
                <Button variant="dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
           
           
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;