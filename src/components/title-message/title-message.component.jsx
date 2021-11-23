import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 27rem;
  z-index: 1;
  margin-top: -50px;
  text-align: center;
  strong {
    font-size: 2em;
  }
  div {
    color: black;
    text-shadow: 0px 2px 5px rgba(0, 0, 0);
    font-weight: 350;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hello, I am
          <br />
          <span>
            <strong>Bilal Uddin</strong>
          </span>
        </div>
        <div className="sub">
        <ReactTypingEffect
        text={["Data Analyst","Data Scientist","Full-Stack Deveolper","Gamer","Student"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;