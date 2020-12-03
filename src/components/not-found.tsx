import React from "react";
import styled from "@emotion/styled";
// import {css} from '@emotion/css';
import {keyframes} from '@emotion/react';

import { useWindowDimensions } from "../hooks";
// Time
const BASETIME = 0;

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
  100% {
    opacity: 1;
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
  border: solid 8px skyblue;
  @media screen and (max-width: 768px) {
    border: solid 3px skyblue;
  }
  opacity: 0.3;
`;
const FrameChild = styled(Base)`
  top: ${50 - 0.5 * 52}%;
  left: ${50 - 0.5 * 90}%;
  height: 52%;
  width: 90%;
  border: solid 8px skyblue;
  @media screen and (max-width: 768px) {
    border: solid 3px skyblue;
  }
  opacity: 0.3;
`;
const PageOrig = styled(Base)`
position: absolute;
  width: 15%;
  left: ${50 - 0.5*15}%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const PageP = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-p.png");
  animation: ${blink_p} 0.4s 0.1s ease forwards;
`;
const PageA = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-a.png");
`;
const PageG = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-g.png");
`;
const PageE = styled(PageOrig)`
  background-image: url("/ugoku-kawaii/page/char-e.png");
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
        </Main>
      </AllBg>
    </>
  );
};
/// css

const StyledComponent = styled(Component)``;

export default StyledComponent;
