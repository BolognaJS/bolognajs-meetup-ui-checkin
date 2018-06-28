import styled, { css } from "styled-components";

export enum RippleColor {
    Green,
    Red,
    White
}

interface IRippleEffectProps {
    rippleColor?: RippleColor
}

const RippleEffect = styled.button`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    border: 0;
    cursor: pointer;

    @keyframes ripple {
        0% {
          transform: scale(0, 0);
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: scale(100, 100);
        }
    }

    &:after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;

        ${
            ({rippleColor}: IRippleEffectProps) => {
                switch(rippleColor) {
                    case RippleColor.Green:
                        return css`background: rgba(40, 167, 69, .6);`
                    
                    case RippleColor.Red:
                        return css`background: rgba(220, 53, 69, .6);`

                    case RippleColor.White:
                    default:
                        return css`background: rgba(255, 255, 255, .6);`
                }
            }
        }
    }

    &:focus:not(:active)::after  {
        animation: ripple .7s linear;
    }    

`

export default RippleEffect