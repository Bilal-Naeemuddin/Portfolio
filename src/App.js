import React from "react";
import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/mycarousal/mycarousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from 'react-awesome-reveal';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Experience from "./pages/experience/experience.component";
import Skills from './pages/skills/skills.component';
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions.js";

const App = () => {
  return  (

  <div style={{ position: "relative" }}>

    <MyNavbar />
    <MyCarousal />
    <TitleMessage />

    <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
 
    <div> 
    <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
    <Container className="container-box rounded">
    <Fade delay={100}>
    <About />
    </Fade>
    </Container>
    </Parallax>
    </div>
    {/*skills*/}
    <div> 
    <Container className="container-box rounded">
    <Fade delay={100}>
    <Skills />
    </Fade>
    </Container>
    </div>

    <div> 
    <Container className="container-box rounded">
    <Fade delay={100}>
    <TimeLine />
    </Fade>
    </Container>
    </div>

    <div> 
    <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
    <Container className="container-box rounded">
    <Fade delay={100}>
    
    <Experience />
    </Fade>
    </Container>
    </Parallax>
    </div>


    <div> 
    <Container className="container-box rounded">
    <Fade delay={100}>
    <hr />
    <ContactForm />
    </Fade>
    </Container>
    </div>

    <hr />
    <FooterPanel />

    </div>


 );
};


export default App;