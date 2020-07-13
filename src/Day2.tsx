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
// Time
const BASETIME = 0;
const SceneD1 = 1;
const BASETIME2 = BASETIME + SceneD1 * 4;
const BASETIME3 = BASETIME2 + 0.6;
const SceneD2 = 0.5;
const LOGOTIME = BASETIME3 + SceneD2 * 4;
const LogoD = 0.25;
// abstruct components
const Background = styled(Base)`
  overflow: hidden;
  background-image: linear-gradient(
    to left top,
    #dbffa2,
    #7ed39d,
    #2fa395,
    #00717f,
    #004259
  );
`;

const SquareBase = styled(Base)<{ "data-time": number }>`
  top: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  left: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  height: ${(props) => props["data-time"]}px;
  width: ${(props) => props["data-time"]}px;
`;
const WordBox = styled(Base)`
  top: 0;
  left: 0;
  background-color: #fffff5;
  width: 50%;
  height: 50%;
  overflow: hidden;
`;
const Word = styled(Base)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const WordBack = styled(Base)`
  overflow: hidden;
`;
const WordBoxWrapper = styled(Base)`
  top: 37.5%;
  left: 0;
  background-color: #fff7fe;
  width: 100%;
  height: 25%;
  overflow: hidden;
`;
const WordBox2 = styled(Base)`
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
`;
// concrete components
const BackScene = styled(SquareBase)`
  transform: scale(0.8);
  overflow: hidden;
`;
const BackCover = styled(SquareBase)`
  transform: scale(0.8);
  opacity: 0.05;
  background-color: white;
`;
const Mo1WordBack = styled(WordBack)`
  transform: translateY(100%);
  animation: ${UpA} ${SceneD1}s ${BASETIME}s ease forwards;
`;
const Mo2WordBack = styled(WordBack)`
  transform: translateY(-100%);
  animation: ${DnA} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards;
`;
const Mo3WordBack = styled(WordBack)`
  transform: translateY(100%);
  animation: ${UpA} ${SceneD1}s ${BASETIME + SceneD1 * 2}s ease forwards;
`;
const Mo4WordBack = styled(WordBack)`
  transform: translateY(-100%);
  animation: ${DnA} ${SceneD1}s ${BASETIME + SceneD1 * 3}s ease forwards;
`;
const Mo1 = styled(WordBox)`
  opacity: 0;
  animation: ${Op} ${SceneD1}s ${BASETIME}s ease forwards;
`;
const Mo2 = styled(WordBox)`
  opacity: 0;
  left: 50%;
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards;
`;
const Mo3 = styled(WordBox)`
  opacity: 0;
  top: 50%;
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1 * 2}s ease forwards;
`;
const Mo4 = styled(WordBox)`
  opacity: 0;
  top: 50%;
  left: 50%;
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1 * 3}s ease forwards;
`;
const MoWord1b = styled(Word)`
  filter: blur(10px);
  background-image: url("/mo.png");
  animation: ${Op} ${SceneD1}s ${BASETIME}s ease forwards reverse;
`;
const MoWord2b = styled(Word)`
  filter: blur(10px);
  background-image: url("/fu.png");
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards reverse;
`;
const MoWord3b = styled(Word)`
  filter: blur(10px);
  background-image: url("/fu.png");
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1 * 2}s ease forwards reverse;
`;
const MoWord4b = styled(Word)`
  filter: blur(10px);
  background-image: url("/ha.png");
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1 * 3}s ease forwards reverse;
`;
const MoWord1 = styled(Word)`
  opacity: 0;
  background-image: url("/mo.png");
  animation: ${Op} ${SceneD1}s ${BASETIME}s ease forwards;
`;
const MoWord2 = styled(Word)`
  opacity: 0;
  background-image: url("/fu.png");
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards;
`;
const MoWord3 = styled(Word)`
  opacity: 0;
  background-image: url("/fu.png");
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1 * 2}s ease forwards;
`;
const MoWord4 = styled(Word)`
  opacity: 0;
  background-image: url("/ha.png");
  animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1 * 3}s ease forwards;
`;
const FuWrapper = styled(WordBoxWrapper)`
  transform: translateX(-100%);
  animation: ${RightA} 0.5s ${BASETIME2}s ease forwards;
`;
const FuBox1 = styled(WordBox2)`
  transform-origin: top left;
  transform: translateX(-5%) rotate(20deg);
  animation: ${LittleRightA} ${SceneD2}s ${BASETIME3}s ease forwards;
`;
const FuBox2 = styled(WordBox2)`
  transform-origin: bottom left;
  left: 25%;
  transform: translateX(-5%) rotate(-20deg);
  animation: ${LittleRightB} ${SceneD2}s ${BASETIME3 + SceneD2}s ease forwards;
`;
const FuBox3 = styled(WordBox2)`
  transform-origin: bottom right;
  left: 50%;
  transform: translateX(-5%) rotate(20deg);
  animation: ${LittleRightA} ${SceneD2}s ${BASETIME3 + SceneD2 * 2}s ease
    forwards;
`;
const FuBox4 = styled(WordBox2)`
  transform-origin: top right;
  left: 75%;
  transform: translateX(-5%) rotate(-20deg);
  animation: ${LittleRightB} ${SceneD2}s ${BASETIME3 + SceneD2 * 3}s ease
    forwards;
`;
const Fu1 = styled(Word)`
  transform: scale(0.7);
  background-image: url("/mo.png");
`;
const Fu2 = styled(Word)`
  transform: scale(0.7);
  background-image: url("/fu.png");
`;
const Fu3 = styled(Word)`
  transform: scale(0.7);
  background-image: url("/mo.png");
`;
const Fu4 = styled(Word)`
  transform: scale(0.7);
  background-image: url("/fu.png");
`;
const Style = styled(Base)``;
const SplashA = styled(Base)`
  transform: translateY(-100%);
  background-color: #75eeff;
  animation: ${DnA} ${LogoD}s ${LOGOTIME}s ease forwards;
`;
const SplashB = styled(Base)`
  transform: translateY(-100%);
  background-color: #b4ffc8;
  animation: ${DnA} ${LogoD}s ${LOGOTIME + LogoD}s ease forwards;
`;
const SplashC = styled(Base)`
  background-color: #eaffb0;
  transform: translateY(-100%);
  animation: ${DnA} ${LogoD}s ${LOGOTIME + LogoD * 2}s ease forwards;
`;
const SplashD = styled(Base)`
  transform: translateY(-100%);
  background-color: #f9e4ff;
  animation: ${DnA} ${LogoD}s ${LOGOTIME + LogoD * 3}s ease forwards;
`;
const LogoTitle = styled(Base)`
  transform: scale(0.95);
  background-image: url("/logo-mini.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  animation: ${Op} ${LogoD * 3}s ${LOGOTIME + LogoD}s ease forwards;
`;
const Logo = () => {
  return (
    <Style>
      <SplashA />
      <SplashB />
      <SplashC />
      <SplashD />
      <LogoTitle />
    </Style>
  );
};
const Day2 = () => {
  const { height, width } = useWindowDimensions();
  const minLong = Math.min(height, width);
  return (
    <Background>
      <BackCover data-time={minLong} />
      <BackScene data-time={minLong}>
        <Mo1>
          <Mo1WordBack>
            <MoWord1b />
            <MoWord1 />
          </Mo1WordBack>
        </Mo1>
        <Mo2>
          <Mo2WordBack>
            <MoWord2b />
            <MoWord2 />
          </Mo2WordBack>
        </Mo2>
        <Mo3>
          <Mo3WordBack>
            <MoWord3b />
            <MoWord3 />
          </Mo3WordBack>
        </Mo3>
        <Mo4>
          <Mo4WordBack>
            <MoWord4b />
            <MoWord4 />
          </Mo4WordBack>
        </Mo4>
        <FuWrapper>
          <FuBox1>
            <Fu1 />
          </FuBox1>
          <FuBox2>
            <Fu2 />
          </FuBox2>
          <FuBox3>
            <Fu3 />
          </FuBox3>
          <FuBox4>
            <Fu4 />
          </FuBox4>
        </FuWrapper>
        <Logo />
      </BackScene>
    </Background>
  );
};

export default Day2;
