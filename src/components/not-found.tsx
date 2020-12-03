import React from "react";
import styled from "@emotion/styled";
import {css} from '@emotion/css';
import {keyframes} from '@emotion/react';

import { useWindowDimensions } from "../hooks";
// Time
const BASETIME = 0.7;

/// animation
const blink_p = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const draw_l = keyframes`
  to {
    stroke-dashoffset: 0px;
  }
`;
const draw_left = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0);
  }
`;

const draw_right = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;

// abstruct components
const Base = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
`;
const AllBg = styled(Base)`
  background-color: #F8F8F8;
`;
const SquareBase = styled(Base)<{ "data-time": number }>`
  top: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  left: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  height: ${(props) => props["data-time"]}px;
  width: ${(props) => props["data-time"]}px;
`;
const Main = styled(SquareBase)``;
const FrameParent = styled(Base)`
  top: ${50 - 0.5 * 55}%;
  left: ${50 - 0.5 * 95}%;
  height: 55%;
  width: 95%;
  border: solid 8px black;
  @media screen and (max-width: 768px) {
    border: solid 3px black;
  }
`;
const FrameChild = styled(Base)`
  top: ${50 - 0.5 * 52}%;
  left: ${50 - 0.5 * 90}%;
  height: 52%;
  width: 90%;
  border: solid 8px black;
  @media screen and (max-width: 768px) {
    border: solid 3px black;
  }
`;
const PageOrig = styled(Base)`
position: absolute;
  width: 15%;
  left: ${50 - 0.5*15}%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
`
const PageP = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-p.png");
  animation: ${blink_p} 0.6s ${BASETIME + 0.1}s ease 2 forwards;
`;
const PageA = styled(PageOrig)`
background-image: url("/ugoku-kawaii/page/char-a.png");
  animation: ${blink_p} 0.6s ${BASETIME + 0}s ease 2 forwards;
`;
const PageG = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-g.png");
  animation: ${blink_p} 0.6s ${BASETIME + 0.05}s ease 2 forwards;
`;
const PageE = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-e.png");
  animation: ${blink_p} 0.6s ${BASETIME + 0.15}s ease 2 forwards;
`;
/// page < >
type ComponentProps = {
  className?: string;
};
const PageLR: React.FC<ComponentProps> = ({ className }) => (
<svg
   className={className}
   xmlns="http://www.w3.org/2000/svg"
   width="179.9308mm"
   height="178.03587mm"
   viewBox="0 0 179.9308 178.03587"
   version="1.1"
   id="svg8">
  <defs
     id="defs2" />
  <g
     id="layer1"
     transform="translate(-18.814686,-64.202173)">
    <g
       fill="none"
       id="g844"
       transform="matrix(-1.6673625,0.87021563,-1.6740877,-0.86671977,351.80284,174.30751)">
      <path
         d="M 84.891205,9.3670986 V 109.3671 h -100"
         stroke="#000000"
         stroke-width="15"
         id="path833" />
    </g>
  </g>
</svg>

);
const PageLWrapper = styled(Base)`
  position: absolute;
  height: 10%;
  width: 10%;
  top: 45%;
  left: calc(25% - 0.5*10%);
  transform: translateX(50%);
  animation: ${draw_left} 0.2s ${BASETIME + 1.1}s ease forwards;
`;
const PageRWrapper = styled(Base)`
  position: absolute;
  height: 10%;
  width: 10%;
  top: 45%;
  left: calc(75% - 0.5*10%);
  transform: translateX(-50%);
  animation: ${draw_right} 0.2s ${BASETIME + 1.1}s ease forwards;
`;
const PageL = styled(PageLR)`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0.5) rotate(0deg);
  stroke-dasharray: 700px;
  stroke-dashoffset: 700px;
  animation: ${draw_l} 0.35s ${BASETIME + 0.75}s ease forwards;
`;
const PageR = styled(PageLR)`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0.5) rotate(180deg);
  stroke-dasharray: 700px;
  stroke-dashoffset: 700px;
  animation: ${draw_l} 0.35s ${BASETIME + 0.75}s ease forwards;
`;

/// html
const Component: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const minlong = Math.min(height, width);
  return (
    <>
      <AllBg>
        <Main data-time={minlong}>
          <FrameParent></FrameParent>
          <FrameChild></FrameChild>
          <PageP />
          <PageA />
          <PageG />
          <PageE />
          <PageLWrapper>
            <PageL />
          </PageLWrapper>
          <PageRWrapper>
            <PageR />
          </PageRWrapper>
        </Main>
      </AllBg>
    </>
  );
};
/// css

const StyledComponent = styled(Component)``;

export default StyledComponent;
