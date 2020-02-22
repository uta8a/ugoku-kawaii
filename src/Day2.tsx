import { Base } from './Base'
import styled, { keyframes } from 'styled-components'
import { Bounce, BlurA,Bigger, Op } from './Anime'
import React from 'react';
import {getWindowDimensions, useWindowDimensions} from './util'
// Time

// abstruct components
const Background = styled(Base)`
    overflow: hidden;
    background-image: linear-gradient(to left top, #dbffa2, #7ed39d, #2fa395, #00717f, #004259);
`

const SquareBase = styled(Base)<{'data-time': number}>`
    top: calc(50% - 0.5 * ${props => props['data-time']}px);
    left: calc(50% - 0.5 * ${props => props['data-time']}px);
    height: ${props => props['data-time']}px;
    width: ${props => props['data-time']}px;
`

// concrete components
const BackScene = styled(SquareBase)`
    transform: scale(0.8);
    background-color: red;
`

const Day2 = () => {
    const { height, width } = useWindowDimensions();
    const minLong = Math.min(height, width);
    return (
        <Background>
            <BackScene data-time={minLong}></BackScene>
        </Background>
    )
}

export default Day2