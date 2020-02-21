import { keyframes } from 'styled-components'

const Bounce = keyframes`
    0% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
`
const Bigger = keyframes`
    0% {
        transform: rotate(30deg) scale(0);
    }
    100% {
        transform: rotate(30deg) scale(2);
    }
`
const BlurA = keyframes`
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0);
  }
`
const Op = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export {Bounce, BlurA, Bigger, Op}