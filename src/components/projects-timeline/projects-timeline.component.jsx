import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Spam_And_Ham from "../../assets/img/projects/Spam_and_Ham.png";
import L_LDSS_Project from "../../assets/img/projects/LDSS_Project.png";
import L_COVID_19_TRACKER from "../../assets/img/projects/Covid_19_Tracker.png";
import L_WEATHERAPP from "../../assets/img/projects/WeatherApp.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_OPENWEATHER from "../../assets/img/skills/OpenWeather.png";
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_PANDAS from "../../assets/img/skills/pandas.png";
import L_JUPYTER from "../../assets/img/skills/jupyter.png";
import L_R from "../../assets/img/skills/r.png";
import L_RSTUDIO from "../../assets/img/skills/rstudio.png";
import L_VISUAL_STUDIO_CODE from "../../assets/img/skills/visual-studio-code.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3"><strong>Projects</strong></h1>
      <Timeline>
        <Events>

          {/* Spam and Ham Classifaction */}
          <ImageEvent
            date="09/04/2021"
            className="text-center"
            text="Spam/Ham Classifaction"
            src={L_Spam_And_Ham}
            alt="Spam and Ham Classifaction"
          
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: </strong>
                        Determines if a email is classifed as ham or spam.
                        <hr />
                        <strong>Languages & Platforms:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PANDAS}
                                alt="Pandas"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Pandas
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JUPYTER}
                                alt="Jupyter Notebook"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                        </ul>
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Bilal-Naeemuddin/Spam-and-Ham-Project"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="https://github.com/Bilal-Naeemuddin/Spam-and-Ham-Project/blob/main/Spam%20and%20Ham%20Project.pdf"
                  target="_blank"
                >
                  Check it out!
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
                    {/* Project: Covid-19 Tracker */}

                    <ImageEvent
            date="29/03/2021"
            className="text-center"
            text="Covid-19 Tracker"
            src={L_COVID_19_TRACKER}
            alt="Covid-19 Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a live website created using
                        react, it tracks and updates the amount of people who
                        have covid, have died from covid and have healed from
                        covid. The website recieves its information from RESTful API.
                        <hr />

                        <strong>Languages & Platforms:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GITHUB_PAGES}
                                alt="GitHub-Pages"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              GitHub-Pages
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VISUAL_STUDIO_CODE}
                                alt="Visual Studio Code"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Visual Studio Code
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Bilal-Naeemuddin/Covid-19-Tracker"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton href="https://bilal-naeemuddin.github.io/Covid-19-Tracker/" target="_blank">
                  Check it out!
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

  {/* Project: weather app */}

  <ImageEvent
            date="21/03/2021"
            className="text-center"
            text="Weather App"
            src={L_WEATHERAPP}
            alt="Weather App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a WeatherApp that gets its data
                        from OpenWeatherMap Weather API which has tempreature data from the entire
                        world and displays the chosen cities tempreature.
                        <hr />
                        <strong>Languages & Platforms:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
      
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_OPENWEATHER}
                                alt="OpenWeather API"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              OpenWeather API
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VISUAL_STUDIO_CODE}
                                alt="VS CODE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Visual Code Studio
                            </span>
                          </li>
                        </ul>
                      
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/Bilal-Naeemuddin/WeatherApp" target="_blank">
                  Source Code
                </UrlButton>
                <UrlButton href="https://weather-app-lkw45i6u9-bilal-naeemuddin.vercel.app/" target="_blank">
                Check it out!
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: LDSS COVID PROJECT */}
          <ImageEvent
            date="14/01/2021"
            className="text-center"
            text="LDSS Covid-19 Project"
            src={L_LDSS_Project}
            alt="LDSS Covid-19 Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description: </strong> A project created using R in 
                        RStudio which is focused on answering the following question: 
                        “How did covid-19 affect our daily lives?”
                        <hr />
                        <strong>Languages & Platforms:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_R}
                                alt="R"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              R
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RSTUDIO}
                                alt="RStudio"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              RStudio
                            </span>
                           
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Bilal-Naeemuddin/LDSS-Project"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="https://github.com/Bilal-Naeemuddin/LDSS-Project/blob/main/LDSS%20PROJECT.pdf"
                  target="_blank"
                >
                  Check it out!
                </UrlButton>
              </div>
            </div>
          </ImageEvent> 
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;