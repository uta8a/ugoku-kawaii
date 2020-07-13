import { Base } from "./Base";
import styled, { keyframes } from "styled-components";
import {
  Bounce,
  BlurA,
  Bigger,
  Op,
  UpA,
  DnA,
  LittleRightA,
  LittleRightB,
  RightA,
} from "./Anime";
import React from "react";
import { getWindowDimensions, useWindowDimensions } from "./util";

// Basic
const Background = styled(Base)`
  overflow: hidden;
  background-color: #2e1a1c;
`;
const SquareBase = styled(Base)<{ "data-time": number }>`
  top: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  left: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  height: ${(props) => props["data-time"]}px;
  width: ${(props) => props["data-time"]}px;
`;
// Concrete
const BackCover = styled(SquareBase)`
  transform: scale(0.8);
  opacity: 0.2;
  background-color: #0094d0;
  border-radius: 20%;
`;
const BackFrame = styled(SquareBase)``;
const BackStage = styled(SquareBase)`
  transform: scale(0.8);
  overflow: hidden;
`;
const noise = keyframes`
  0% { left: 0px; filter: none; }
  10% { left: 0px; filter: none; }
  10.25% { left: 5rem; filter: hue-rotate(90deg) invert(70%); }
  10.5% { left: 0px; filter: none; }
  20% { left: 0px; filter: none; }
  20.25% { left: -5rem; filter: hue-rotate(270deg) invert(30%); }
  20.5% { left: 0px; filter: none; }
  40% { left: 0px; filter: none; }
  40.25% { left: -5rem; filter: hue-rotate(270deg) invert(30%); }
  40.5% { left: 0px; filter: none; }
  50% { left: 0px; filter: none; }
  50.25% { left: 5rem; filter: hue-rotate(90deg) invert(70%); }
  50.5% { left: 0px; filter: none; }
  70% { left: 0px; filter:none; }
  70.25% { left: -5rem;filter: hue-rotate(270deg) invert(30%); }
  70.5% { left: 0px; filter: none; }
  80% { left: 0px; filter: none; }
  80.25% { left: 5rem; filter: hue-rotate(90deg) invert(70%); }
  80.5% { left: 0px; filter: none; }
  100% { left: 0px; filter: none; }
`;
const BaseGG = styled(Base)``;
const BaseG = styled(Base)`
  height: 100%;
  width: 100%;
  transform: translateY(25%) scale(0.7);
`;
const TextFragmentBase = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  overflow: hidden;
  & > div {
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/ugoku-kawaii/hicoder.png");
    &::after {
      content: "";
      display: block;
      width: 500%;
      height: 100%;
      background-color: #cbbaa9;
      opacity: 0.09;
    }
  }
`;
const TextFragment = styled(TextFragmentBase)<{
  "data-start": string;
  "data-number": number;
}>`
  top: calc(${(props) => props["data-number"]} * 0.2 * 20%);
  & > div {
    animation: ${noise} 4s ${(props) => props["data-start"]} ease infinite;
    top: calc(${(props) => props["data-number"]} * -0.2 * 100%);
    &::after {
      animation: ${noise} 4s ${(props) => props["data-start"]} ease infinite;
    }
  }
`;
const Left = keyframes`
  0% {
    left: 0%;
  }
  100% {
    left: 101%;
  }
`;
const Cover0 = styled(Base)`
  background: #5ba1b0;
  animation: ${Left} 0.5s 0.6s cubic-bezier(1, 0.05, 0.02, 0.92) forwards;
`;
const Cover1 = styled(Base)`
  background: #dce2e1;
  animation: ${Left} 0.5s 0.4s cubic-bezier(1, 0.05, 0.02, 0.92) forwards;
`;
const Cover2 = styled(Base)`
  background: #b18f69;
  animation: ${Left} 0.5s 0.2s cubic-bezier(1, 0.05, 0.02, 0.92) forwards;
`;
const B = () => {
  let list = [];
  let data = [
    { start: "0s", number: 0 },
    { start: "1.1s", number: 1 },
    { start: "0.3s", number: 2 },
    { start: "1.5s", number: 3 },
    { start: "0.7s", number: 4 },
  ];
  let i = 0;
  for (let p of data) {
    i++;
    list.push(
      <TextFragment key={i} data-start={p.start} data-number={p.number}>
        <div></div>
      </TextFragment>
    );
  }
  return (
    <BaseGG>
      <BaseG>{list}</BaseG>
      <Cover0 />
      <Cover1 />
      <Cover2 />
    </BaseGG>
  );
};

const Word = styled(Base)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const showUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Cross = styled.div<{
  "data-top": string;
  "data-left": string;
  "data-size": string;
  "data-rotate": string;
}>`
  height: ${(props) => props["data-size"]};
  width: ${(props) => props["data-size"]};
  ${(props) => props["data-top"]}: 0;
  ${(props) => props["data-left"]}: 0;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  transform: rotate(${(props) => props["data-rotate"]});
`;
const BaseF = styled(Base)``;
const U = keyframes`
  0% {
    transform: translateY(1100%);
  }
  100% {
    transform: translateY(-1100%);
  }
`;
const D = keyframes`
  0% {
    transform: translateX(1100%);
  }
  100% {
    transform: translateX(-1100%);
  }
`;
const FrameRod1 = styled(Base)`
  width: 5%;
  left: calc(50% - 2.5%);
  background-color: white;
  transform: translateX(1100%);
  animation: ${D} 1.2s 0s ease-out infinite;
`;
const FrameRod2 = styled(Base)`
  height: 5%;
  top: calc(50% - 2.5%);
  background-color: white;

  transform: translateY(1100%);
  animation: ${U} 1.2s 0s ease-out infinite;
`;
const Frame = () => {
  let list = [];
  let data = [
    { top: "top", left: "left", size: "10%", rotate: "0deg" },
    { top: "top", left: "right", size: "10%", rotate: "90deg" },
    { top: "bottom", left: "right", size: "10%", rotate: "180deg" },
    { top: "bottom", left: "left", size: "10%", rotate: "270deg" },
  ];
  let i = 0;
  for (let p of data) {
    i++;
    list.push(
      <Cross
        key={i}
        data-top={p.top}
        data-left={p.left}
        data-size={p.size}
        data-rotate={p.rotate}
      >
        <FrameRod1 />
        <FrameRod2 />
      </Cross>
    );
  }
  return <BaseF>{list}</BaseF>;
};

// JSX
const Day3 = () => {
  const { height, width } = useWindowDimensions();
  const minLong = Math.min(height, width);
  return (
    <Background>
      <BackCover data-time={minLong} />
      <BackStage data-time={minLong}>
        <B></B>
      </BackStage>
      <BackFrame data-time={minLong}>
        <Frame />
      </BackFrame>
    </Background>
  );
};

export default Day3;
