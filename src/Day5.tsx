import React from "react";
import { useWindowDimensions } from "./hooks";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";
import { useEffect, useState } from 'react';

function useWatch(interval: number) {
  const [time, updateTime] = useState(Date.now());

  useEffect(() => {
      const timeoutId: number = setTimeout(() => updateTime(Date.now()), interval);
      return () => {
          clearTimeout(timeoutId);
      };
  }, [time]); // eslint-disable-line react-hooks/exhaustive-deps

  return time;
}

const shaders = Shaders.create({
  gradients: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform vec4 colors[3];
uniform vec2 particles[3];
void main () {
  vec4 sum = vec4(0.0);
  for (int i=0; i<3; i++) {
    vec4 c = colors[i];
    vec2 p = particles[i];
    float d = c.a * smoothstep(0.6, 0.2, distance(p, uv));
    sum += d * vec4(c.a * c.rgb, c.a);
  }
  if (sum.a > 1.0) {
    sum.rgb /= sum.a;
    sum.a = 1.0;
  }
  gl_FragColor = vec4(sum.a * sum.rgb, 1.0);
}`,
  },
});

// Alternative syntax using React stateless function component
const Gradients = (data: any) => (
  <Node
    shader={shaders.gradients}
    uniforms={{
      colors: [
        [Math.cos(0.002 * data.time), Math.sin(0.002 * data.time), 0.7, 1],
        [Math.sin(0.002 * data.time), -Math.cos(0.002 * data.time), 0.1, 1],
        [0.3, Math.sin(3 + 0.002 * data.time), Math.cos(1 + 0.003 * data.time), 1],
      ],
      particles: [
        [0.2, 0.3],
        [0.7, 0.5],
        [0.1, 0.9],
      ],
    }}
  />
);

const path = keyframes`
0% {
  stroke-dashoffset: -500;
}
100% {
  stroke-dashoffset: 0;
}
`;

const stick = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const visibler = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const visiblerX = keyframes`
  0% {
    opacity: 0;
  }
  89% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  94% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const revwhite = keyframes`
  from {
    background-color: black;
    opacity: 0.7;
  }
  to {
    background-color: white;
    opacity: 1;
  }
`;

const revblack = keyframes`
  from {
    background-color: white;
  }
  to {
    background-color: black;
  }
`;

const revstrokeblack = keyframes`
  from {
    stroke: white;
  }
  to {
    stroke: black;
  }
`;


const Base = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
`;
const AllBg = styled(Base)`
  background-color: black;
`;
const SurfaceFrame = styled(Base)`
  opacity: 0;
  animation: ${visibler} 0.2s 2.1s ease forwards;
`;
const SquareBase = styled(Base)<{ "data-time": number }>`
  top: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  left: calc(50% - 0.5 * ${(props) => props["data-time"]}px);
  height: ${(props) => props["data-time"]}px;
  width: ${(props) => props["data-time"]}px;
`;

/// BASETIME+1.5
const Main = styled(SquareBase)`
  transform: translateY(-5%);
`;
const Frame = styled(SquareBase)`
  opacity: 0;
  animation: ${visibler} 0.7s 0.8s ease forwards;

`;
const FrameOne = styled(Base)`
top: ${50 - 0.5 * 95}%;
left: ${50 - 0.5 * 95}%;
height: 95%;
width: 95%;
background: white;
opacity: 0.2;
`;
const FrameTwo = styled(Base)`
  top: ${50 - 0.5 * 80}%;
  left: ${50 - 0.5 * 80}%;
  height: 80%;
  width: 80%;
  border: solid 20px white;
  @media screen and (max-width: 768px) {
    border: solid 5px white;
  }
`;

const Circle = styled(Base)`
  top: calc(50% - 8.5%);
  left: calc(50% - 15%);
  height: 30%;
  width: 30%;
  border-radius: 50%;
  background-color: black;
  opacity: 0.7;
  animation: ${revwhite} 0s 2.1s ease forwards;
`;

const StickWrapper = styled(Base)`
  top: ${50 - 0.5*10}%;
  left: calc(50% - 0.5*35px);
  height: 10%;
  width: 35px;
  // background-color: white;
  overflow: hidden;
`;
const Stick = styled(Base)`
  top: 0;
  left: calc(50% - 20px);
  height: 100%;
  width: 100%;
  background-color: white;
  transform: translateY(-101%);
  animation: ${stick} 0.4s 0.7s ease forwards, ${revblack} 0s 2.1s ease forwards;
`;

const Power = styled.svg`
  position: absolute;
  width: ${0.1*100}%;
  height: ${0.1*100}%;
  font-size: 5em;
  transform: translate(calc(500% - 50%), calc(500% + 20%)) rotate(-45deg) scale(2.2);
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  stroke-width: 2;
  animation: ${path} 0.85s 0.5s cubic-bezier(1,.01,.01,1.01) forwards, ${revstrokeblack} 0s 2.1s ease forwards;
  stroke: white;
`;
const SpikeFrame = styled(Base)`
  top: calc(50% - 0.5*300px);
  left: calc(50% - 5px + 100px);
  height: 300px;
  width: 10px;
  transform-origin: 50% 50%;
  transform: rotate(90deg);
  background-color: white;
  overflow: hidden;
`;
const SpikeWrapper = styled(Base)`
  top: -300px;
  left: calc(50% - 5px);
  height: 100px;
  width: 10px;
  background-color: white;
  transform-origin: -50% 50%;
  transform: rotate(45deg);
  overflow: hidden;
`;
const SpikeInner = styled(Base)`

`;

const Word = styled(Base)`
  top: 20%;
  left: 15%;
  font-family:  'Roboto',arial,sans-serif;
  font-size: 10em;
  color: white;
  opacity: 0;
  animation: ${visibler} 0.5s 2.6s ease forwards;
`;

const Day5 = ({ path }: { path: string }): JSX.Element => {
  const { height, width } = useWindowDimensions();
  const minlong = Math.min(height, width);
  const time = useWatch(10);
  return (
    <>
      <AllBg>
        <Frame data-time={minlong}>
          <SurfaceFrame>
            <Surface width={minlong} height={minlong}>
              <Gradients time={time}/>
            </Surface>
          </SurfaceFrame>
          <FrameOne></FrameOne>
          <FrameTwo></FrameTwo>
          {/* TODO: awesome animation */}
        </Frame>
        <Main data-time={minlong}>
          <Circle></Circle>
          <StickWrapper>
            <Stick></Stick>
          </StickWrapper>
          <Power width={minlong*0.1} height={minlong*0.1} viewBox="-100 -100 200 200">
            <path d="M 90 0 a 90 90 0 1 1 -90 -90" fill="none" strokeWidth="20px"/>
          </Power>
          {/* spike */}
          {/* <SpikeFrame>

          </SpikeFrame> */}
          <Word>Re:</Word>
        </Main>
        
      </AllBg>
    </>
  );
};
export default Day5;
