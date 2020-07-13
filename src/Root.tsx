import { Base } from "./Base";
import styled, { keyframes } from "styled-components";
import React from "react";
import { Link, Route } from "react-router-dom";

const Background = styled(Base)`
  background-image: linear-gradient(
    to right top,
    #ffe2f2,
    #e5bbdb,
    #c696c8,
    #a174b8,
    #7456ab,
    #584fa1,
    #384797,
    #00408b,
    #00437a,
    #003f5f,
    #003944,
    #00312e
  );
  position: absolute;
`;
const Container = styled(Base)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RootSquare = styled(Base)`
  height: 200px;
  position: relative;
  font-size: 5rem;
  text-decoration-line: none;
  text-align: center;
  line-height: 170px;
`;
const TitleWrapper = styled(Base)``;
const Title = styled.h1`
  color: white;
  font-family: -apple-system, "Hiragino Kaku Gothic ProN", Lato, メイリオ,
    Meiryo, sans-serif;
  font-size: 4rem;
  padding-bottom: 3rem;
  text-align: center;
`;
const Root = () => {
  let list = [];
  let data = [
    { path: "/day1", title: "day1" },
    { path: "/day2", title: "day2" },
    { path: "/day3", title: "day3" },
  ];
  let i = 0;
  for (let p of data) {
    i++;
    // list.push()
  }

  return (
    <Background>
      <Container>
        {/* title */}
        <Title>うごくかわいい</Title>
        {/* <RootSquare>
          <Link to="/">Home</Link>
        </RootSquare>
        <RootSquare>
          <Link to="/day1">DAY 1</Link>
        </RootSquare>
        <RootSquare>
          <Link to="/day2">DAY 2</Link>
        </RootSquare>
        <RootSquare>
          <Link to="/day3">DAY 3</Link>
        </RootSquare> */}
      </Container>
    </Background>
  );
};

export default Root;
