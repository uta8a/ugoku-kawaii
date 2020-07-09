
import { Base } from './Base'
import styled, { keyframes } from 'styled-components'
import { Bounce, BlurA, Bigger, Op, UpA, DnA, LittleRightA, LittleRightB, RightA } from './Anime'
import React from 'react';
import { getWindowDimensions, useWindowDimensions } from './util'

// Basic
const Background = styled(Base)`
  overflow: hidden;
  background-color: #2e1a1c;
`
const SquareBase = styled(Base) <{ 'data-time': number }>`
    top: calc(50% - 0.5 * ${props => props['data-time']}px);
    left: calc(50% - 0.5 * ${props => props['data-time']}px);
    height: ${props => props['data-time']}px;
    width: ${props => props['data-time']}px;
`
// Concrete
const BackCover = styled(SquareBase)`
    transform: scale(0.8);
    opacity: 0.2;
    background-color: white;
    border-radius: 10%;
`
const BackFrame = styled(SquareBase)`
`
const BackStage = styled(SquareBase)`
    transform: scale(0.8);
    overflow: hidden;
`

const B = styled(Base)`
`



const Sq1 = styled(Base)`
  transform: translateY(100%);
  background-color: #900c3f;
  animation: ${UpA} 0.5s 1s cubic-bezier(1,0,.25,.99) forwards;
`
const Sq2 = styled(Base)`
  transform: translateY(100%);
  background-color: #f3c623;
  animation: ${UpA} 0.5s 1.2s cubic-bezier(1,0,.25,.99) forwards;
`
const Sq3 = styled(Base)`
  transform: translateY(100%);
  background-color: #a6dcef;
  animation: ${UpA} 0.5s 1.4s cubic-bezier(1,0,.25,.99) forwards;
`

const Sq4 = styled(Base)`
  transform: translateY(-100%);
  background-color: #900c3f;
  animation: ${DnA} 0.5s 1.6s cubic-bezier(1,0,.25,.99) forwards;
`
const Sq5 = styled(Base)`
  transform: translateY(-100%);
  background-color: #f3c623;
  animation: ${DnA} 0.5s 1.8s cubic-bezier(1,0,.25,.99) forwards;
`

const Sq6 = styled(Base)`
  transform: translateY(-100%);
  background-color: #a6dcef;
  animation: ${DnA} 0.5s 2.0s cubic-bezier(1,0,.25,.99) forwards;
`
const Sq7 = styled(Base)`
  transform: translateY(-100%);
  background-color: #900c3f;
  animation: ${DnA} 0.5s 2.4s cubic-bezier(1,0,.25,.99) forwards;
`

const Sq8 = styled(Base)`
  transform: translateY(-100%);
  background-color: #f3c623;
  animation: ${DnA} 0.5s 2.6s cubic-bezier(1,0,.25,.99) forwards;
`
const Sq9 = styled(Base)`
  transform: translateY(-100%);
  background-color: #a6dcef;
  animation: ${DnA} 0.5s 2.8s cubic-bezier(1,0,.25,.99) forwards;
`
const SqW = styled(Base)`
  place-items: center;
  display: flex;
  transform: translateY(-100%);
  animation: ${DnA} 0.5s 3.2s cubic-bezier(1,0,.25,.99) forwards;
`
const Word = styled(Base)`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const showUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Cross = styled.div<{ 'data-top': string, 'data-left': string, 'data-size': string, 'data-rotate': string }>`
  height: ${props => props['data-size']};
  width: ${props => props['data-size']};
  ${props => props['data-top']}: 0;
  ${props => props['data-left']}: 0;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  transform: rotate(${props => props['data-rotate']});
`
const BaseF = styled(Base)`

`
const U = keyframes`
  0% {
    transform: translateY(1100%);
  }
  100% {
    transform: translateY(-1100%);
  }
`
const D = keyframes`
  0% {
    transform: translateX(1100%);
  }
  100% {
    transform: translateX(-1100%);
  }
`
const FrameRod1 = styled(Base)`
  width: 5%;
  left: calc(50% - 2.5%);
  background-color: white;
  transform: translateX(1100%);
  animation: ${D} 1.2s 0s ease-out infinite;
`
const FrameRod2 = styled(Base)`
  height: 5%;
  top: calc(50% - 2.5%);
  background-color: white;

  transform: translateY(1100%);
  animation: ${U} 1.2s 0s ease-out infinite;
`
const Frame = () => {
   let list = []
   let data = [
     {top: "top", left: "left", size: "10%", rotate: "0deg"},
     {top: "top", left: "right", size: "10%",rotate: "90deg"},
     {top: "bottom", left: "right", size: "10%", rotate: "180deg"},
     {top: "bottom", left: "left", size: "10%", rotate: "270deg"},
   ]
   for(let p of data) {
     list.push(<Cross data-top={p.top} data-left={p.left} data-size={p.size} data-rotate={p.rotate}><FrameRod1 /><FrameRod2 /></Cross>)
   }
   return (
     <BaseF>
       { list }
     </BaseF>
   )
}

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
  )
}

export default Day3;
