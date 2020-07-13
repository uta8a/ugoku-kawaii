import { Base } from "./Base";
import styled, { keyframes } from "styled-components";
import { Bounce, BlurA, Bigger, Op } from "./Anime";
import React from "react";

// Time
const BASETIME = 0;
const HEARTTIME = BASETIME + 0.8;
const HEARTDIFF = 0.3;
const TITLETIME = HEARTTIME + HEARTDIFF * 5;
// 抽象コンポーネント
const Background = styled(Base)`
  overflow: hidden;
  background-image: linear-gradient(
    to left top,
    #ffbcfc,
    #ffbdda,
    #ffccb6,
    #ffe4a0,
    #ffffa5
  );
`;

const Square = styled(Base)`
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  height: 400px;
  width: 400px;
`;

// Icon単体divで使う
const IconOne = styled(Square)`
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// Inner OuterでIconをWrapする
const IconInner = styled(Base)`
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const IconOuter = styled(Square)``;

// Title Motion
const Title = styled(Base)`
  top: calc(50% - 100px);
  left: calc(50% - 200px);
  height: 200px;
  width: 400px;
  text-align: center;
  line-height: 200px;
  font-size: 4.5rem;
  @font-face {
    font-family: komadori;
    src: url("./komadori-mini.otf") format("opentype");
  }
  font-family: komadori;
  opacity: 0;
  animation: ${Op} 0.5s ${TITLETIME}s ease forwards;
`;

// Circle Motion
const Heart = styled(IconInner)`
  mask-image: url("./heart.svg");
  transform: rotate(30deg) scale(0);
`;

// 具体的なcomponent
const UsaIn = styled(IconInner)`
  background-image: url("./uta8a.png");
`;
const HeartInA = styled(Heart)`
  background-color: #f9e4ff;
  animation: ${Bigger} 0.5s ${HEARTTIME}s ease forwards;
`;
const HeartInB = styled(Heart)`
  background-color: #e5e4ff;
  animation: ${Bigger} 0.5s ${HEARTTIME + HEARTDIFF}s ease forwards;
`;
const HeartInC = styled(Heart)`
  background-color: #e4fffe;
  animation: ${Bigger} 0.5s ${HEARTTIME + HEARTDIFF * 2}s ease forwards;
`;
const HeartInD = styled(Heart)`
  background-color: #f7ffe4;
  animation: ${Bigger} 0.5s ${HEARTTIME + HEARTDIFF * 3}s ease forwards;
`;
const HeartInE = styled(Heart)`
  background-color: #e5ffe4;
  animation: ${Bigger} 0.5s ${HEARTTIME + HEARTDIFF * 4}s ease forwards;
`;
const UsaOut = styled(IconInner)`
  overflow: hidden;
  transform: scale(10);
  animation: ${Bounce} 0.5s ${BASETIME}s cubic-bezier(0.17, 0.67, 0.87, 1.28)
    forwards;
`;
const UsaOut2 = styled(IconOuter)`
  filter: blur(10px);
  animation: ${BlurA} 0.5s ${BASETIME}s cubic-bezier(0.55, 0, 0.56, -0.21)
    forwards;
`;
const Usa = () => {
  return (
    <UsaOut2>
      <UsaOut>
        <UsaIn />
        <HeartInA />
        <HeartInB />
        <HeartInC />
        <HeartInD />
        <HeartInE />
        <Title>かわいい</Title>
      </UsaOut>
    </UsaOut2>
  );
};
export { Background, Usa };
