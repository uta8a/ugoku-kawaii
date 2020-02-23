import { Base } from './Base'
import styled, { keyframes } from 'styled-components'
import { Bounce, BlurA, Bigger, Op, UpA, DnA } from './Anime'
import React from 'react';
import { getWindowDimensions, useWindowDimensions } from './util'
// Time
const BASETIME = 0;
const SceneD1 = 1;
// abstruct components
const Background = styled(Base)`
    overflow: hidden;
    background-image: linear-gradient(to left top, #dbffa2, #7ed39d, #2fa395, #00717f, #004259);
`

const SquareBase = styled(Base) <{ 'data-time': number }>`
    top: calc(50% - 0.5 * ${props => props['data-time']}px);
    left: calc(50% - 0.5 * ${props => props['data-time']}px);
    height: ${props => props['data-time']}px;
    width: ${props => props['data-time']}px;
`
const WordBox = styled(Base)`
    top: 0;
    left: 0;
    background-color: #fffff5;
    width: 50%;
    height: 50%;
    overflow: hidden;
`
const Word = styled(Base)`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const WordBack = styled(Base)`
    overflow: hidden;
`
// concrete components
const BackScene = styled(SquareBase)`
    transform: scale(0.8);
`
const BackCover = styled(SquareBase)`
    transform: scale(0.8);
    opacity: 0.05;
    background-color: white;
`
const Mo1WordBack = styled(WordBack)`
    transform: translateY(100%);
    animation: ${UpA} ${SceneD1}s ${BASETIME}s ease forwards;
`
const Mo2WordBack = styled(WordBack)`
    transform: translateY(-100%);
    animation: ${DnA} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards;
`
const Mo3WordBack = styled(WordBack)`
    transform: translateY(100%);
    animation: ${UpA} ${SceneD1}s ${BASETIME + SceneD1 * 2}s ease forwards;
`
const Mo4WordBack = styled(WordBack)`
    transform: translateY(-100%);
    animation: ${DnA} ${SceneD1}s ${BASETIME + SceneD1 * 3}s ease forwards;`
const Mo1 = styled(WordBox)`
    opacity: 0;
    animation: ${Op} ${SceneD1}s ${BASETIME}s ease forwards;
`
const Mo2 = styled(WordBox)`
    opacity: 0;
    left: 50%;
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards;
`
const Mo3 = styled(WordBox)`
    opacity: 0;
    top: 50%;
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1*2}s ease forwards;
`
const Mo4 = styled(WordBox)`
    opacity: 0;
    top: 50%;
    left: 50%;
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1*3}s ease forwards;
`
const MoWord1b = styled(Word)`
    filter: blur(10px);
    background-image: url("./mo.png");
    animation: ${Op} ${SceneD1}s ${BASETIME}s ease forwards reverse;
`
const MoWord2b = styled(Word)`
    filter: blur(10px);
    background-image: url("./fu.png");
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards reverse;
`
const MoWord3b = styled(Word)`
    filter: blur(10px);
    background-image: url("./fu.png");
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1*2}s ease forwards reverse;
`
const MoWord4b = styled(Word)`
    filter: blur(10px);
    background-image: url("./ha.png");
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1*3}s ease forwards reverse;
`
const MoWord1 = styled(Word)`
    opacity: 0;
    background-image: url("./mo.png");
    animation: ${Op} ${SceneD1}s ${BASETIME}s ease forwards;
`
const MoWord2 = styled(Word)`
    opacity: 0;
    background-image: url("./fu.png");
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1}s ease forwards;
`
const MoWord3 = styled(Word)`
    opacity: 0;
    background-image: url("./fu.png");
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1*2}s ease forwards;
`
const MoWord4 = styled(Word)`
    opacity: 0;
    background-image: url("./ha.png");
    animation: ${Op} ${SceneD1}s ${BASETIME + SceneD1*3}s ease forwards;
`
const Day2 = () => {
    const { height, width } = useWindowDimensions();
    const minLong = Math.min(height, width);
    return (
        <Background>
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
            </BackScene>
            <BackCover data-time={minLong} />
        </Background>
    )
}

export default Day2