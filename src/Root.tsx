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
`;
const Container = styled(Base)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  position: relative;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
  padding: 3rem;
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
  text-align: center;
`;
const Main = styled.main`
  width: 100%;
  max-width: 1400px;
  height: auto;
  min-height: 90vh;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  background-color: #0b0c51;
  overflow: hidden;
  border: 3px solid lightblue;
  border-radius: 5%;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.5rem;
`;
const MiniWindow = styled.div`
  height: 200px;
  width: 200px;
  margin: 0 auto;
  background-image: linear-gradient(
    to right top,
    #b5d2ff,
    #bfccff,
    #cfc4ff,
    #e1bcfe,
    #f5b2f3
  );
`;
const MiniTitle = styled.div`
  font-size: 3rem;
  text-align: center;
`;
const Tile = (title: string) => {
  return (
    <Wrapper>
      <MiniWindow />
      <MiniTitle>{title}</MiniTitle>
    </Wrapper>
  );
};
const Root = () => {
  let list = [];
  let data = [
    { path: "/day1", title: "改修中 day1" },
    { path: "/day2", title: "改修中 day2" },
    { path: "/day3", title: "day3" },
    { path: "/day4", title: "NotFound" },
    { path: "/day5", title: "(>_<)" },
  ];
  let i = 0;
  for (let p of data) {
    i++;
    list.push(
      <Link key={i} to={p.path}>
        {Tile(p.title)}
      </Link>
    );
  }

  return (
    <Background>
      <Main>
        <Title>うごくかわいい</Title>
        <Container>{list}</Container>
      </Main>
    </Background>
  );
};

export default Root;
