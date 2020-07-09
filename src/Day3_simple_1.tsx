
import { Base } from './Base'
import styled, { keyframes } from 'styled-components'
import { Bounce, BlurA, Bigger, Op, UpA, DnA, LittleRightA, LittleRightB, RightA } from './Anime'
import React from 'react';
import { getWindowDimensions, useWindowDimensions } from './util'


// Basic
const Background = styled(Base)`
  overflow: hidden;
  background-image: linear-gradient(to left bottom, #00ff58, #dfd900, #ffa744, #ff869d, #ff90e2); 
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
`

// JSX
const Day3 = () => {
  const { height, width } = useWindowDimensions();
  const minLong = Math.min(height, width);
  return (
    <Background>
      <BackCover data-time={minLong} />
    </Background>
  )
}

export default Day3;
