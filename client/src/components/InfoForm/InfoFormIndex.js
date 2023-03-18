import React from "react";
import { useState } from "react";
import { MyButton2, MyButton1 } from "../LandingPage/ButtonElement";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtittle,
  BtnWrap,
  Column2,
  Img,
  ImgWrap, 
  CardBtn
} from "../LandingPage/InfoSection/InfoElements";
import { MdPadding } from "react-icons/md";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  buttonLabel1,
  buttonLabel2,
  darkText,
  description,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtittle darkText={darkText}>{description}</Subtittle>
                {id=="experience"?
                <Container className="m-4">
                  <Row>
                    {[
                      "No experience",
                      "less than 3 Years ",
                      "more than 3 but less than 10 Years ",
                      "more than 10 Years ",
                    ].map((variant, idx) => (
                        <CardBtn>
                      <Card 
                    //   onMouseEnter={handleMouseEnter}
                    //     onMouseLeave={handleMouseLeave}
                        border={variant.toLowerCase()}
                        key={idx}
                        text={"dark"}
                        className="p-1"
                        style={{ margin: '10px'}}
                      >
                        <Card.Body >
                          <Card.Title>{variant}</Card.Title>
                        </Card.Body>
                      </Card> 
                      </CardBtn>
                    ))}
                  </Row>
                </Container>
                :
                <Container className="m-3">
                  <Row>
                    {[
                      "High School",
                      "College",
                      "University"
                    ].map((variant, idx) => (
                        <CardBtn>
                      <Card  style={{ margin: '10px' }}
                        border={variant.toLowerCase()}
                        key={idx}
                        text={"dark"}
                        className="p-1"
                      >
                        <Card.Body>
                          <Card.Title>{variant}</Card.Title>
                        </Card.Body>
                      </Card>
                      </CardBtn>
                    ))}
                  </Row>
                </Container>
                }
                <BtnWrap>
                
                  <MyButton2
                  to={id=="experience"?'/':'/experience'}
                    primary={primary ? 0 : 1}
                    dark={dark ? 0 : 1}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel2}
                  </MyButton2>

                  <MyButton1
                    to={id=="experience"?'/education':'/experience'}
                    primary={primary ? 0 : 1}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 0 : 1}
                  >
                    {buttonLabel1}
                  </MyButton1>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
