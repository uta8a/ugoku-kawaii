import { Base } from './Base'
import styled, { keyframes } from 'styled-components'
import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const Background = styled(Base)`
    background-image: linear-gradient(to left top, #ffbcfc, #ffbdda, #ffccb6, #ffe4a0, #ffffa5);
    position: absolute;
`
const Container = styled(Base)`
    display: grid;
    max-width: 900px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    position: relative;
    @media(max-width:450px){
        grid-template-columns: repeat(1, 1fr);
    }
`

const RootSquare = styled(Base)`
    height: 200px;
    position: relative;
    font-size: 5rem;
    text-decoration-line: none;
    text-align: center;
    line-height: 170px;
`
const Root = () => {
    return (
        <Background>
            <Container>
                <RootSquare>
                    <Link to="/">
                        Home
                    </Link>
                </RootSquare>
                <RootSquare>
                    <Link to="/day1">
                        DAY 1
                    </Link>
                </RootSquare>
                <RootSquare>
                    <Link to="/day2">
                        DAY 2
                    </Link>
                </RootSquare>
            </Container>
        </Background>
    )
}

export default Root