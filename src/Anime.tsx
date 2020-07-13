import { keyframes } from "styled-components";

const Bounce = keyframes`
    0% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
`;
const Bigger = keyframes`
    0% {
        transform: rotate(30deg) scale(0);
    }
    100% {
        transform: rotate(30deg) scale(2);
    }
`;
const BlurA = keyframes`
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0);
  }
`;
const Op = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const UpA = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const DnA = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const RightA = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const LittleRightA = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-5%) rotate(20deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;
const LittleRightB = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-5%) rotate(-20deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;
export {
  Bounce,
  BlurA,
  Bigger,
  Op,
  UpA,
  DnA,
  LittleRightA,
  LittleRightB,
  RightA,
};
