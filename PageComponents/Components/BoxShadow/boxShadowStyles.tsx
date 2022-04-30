import styled from "styled-components";

export const BoxShadowDiv = styled.div<{
  color: string;
  borderRadius?: number;
}>`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 125px;
  height: 125px;
  ${(props) =>
    `background:${props.color}; border-radius: ${props.borderRadius || "0"}px;`}
`;

export const BoxShadowDivWithOutline = styled.div<{ color: string }>`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 112px;
  height: 112px;
  ${(props) => `background:${props.color}`}
`;

export const DraggableBoxShadowDiv = styled(BoxShadowDiv)`
  top: 0px;
  left: 0px;
`;

export const BoxShadowOverlay = styled.div<{ borderRadius?: number }>`
  background: rgba(0, 0, 0, 0);
  width: 125px;
  height: 125px;
  border: 3px solid black;
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
  ${(props) => `border-radius: ${props.borderRadius || "0"}px;`}
  & > * {
    margin: 32px;
    text-align: center;
  }
`;

export const HoverableBoxShadowDiv = styled(BoxShadowDiv)`
  top: 0px;
  left: 0px;
  transition: all 0.5s ease;
  &:hover {
    top: 12px;
    left: 12px;
  }
`;

export const BoxShadowContainer = styled.div`
  position: relative;
  height: 137px;
  width: 137px;
  margin: 24px 24px;
`;

export const BoxShadowInput = styled.input`
  width: 350px;
  padding: 12px;
  margin-bottom: 64px;
  font-size: 18px;
  border: 3px solid black;
  background: none;
  background-image: linear-gradient(#fff, #fff);
  background-size: 100% 100%;
  background-position: 7px 7px;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 0px #fff;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 0px 0px #fff;
    background-position: 0px 0px;
  }
  &:focus {
    outline: none;
    box-shadow: -10px -10px 0px #fff;
    background-size: 337px 43px;
    background-position: 0px 0px;
  }
`;

export const BoxShadowButton = styled.button`
  align-self: end;
  margin-top: -10px;
  padding: 10px 16px;
  background: none;
  border: 3px solid black;
  background-image: linear-gradient(#fff, #fff);
  background-position: 7px 7px;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 0px #fff;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 0px 0px #fff;
    background-position: 0px 0px;
    cursor: pointer;
  }
  &:active {
    background: #ffffff;
  }
`;

export const BoxShadowTitle = styled.p`
  font-size: 40px;
  font-weight: 400;
  margin: 12px 0px 44px 0px;
  font-family: Verdana, sans-serif;
`;
export const BoxShadowTextContainer = styled.div`
  position: relative;
  width: 200px;
  text-align: center;
  & > p {
    position: relative;
    font-size: 40px;
    z-index: 1;
    margin: 4px 0px;
  }
  &:hover {
    & > div {
      top: 0px;
      left: 0px;
    }
  }
`;

export const BoxShadowTextBackground = styled.div<{
  left: number;
  top: number;
  color: string;
}>`
  position: absolute;
  ${(props) => `
    top: ${props.top}px;
    left: ${props.left}px;
    background: ${props.color};
  `}
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: all 0.5s;
`;

export const Break = styled.div<{ height: number }>`
  ${(props) => `margin-top: ${props.height}px`}
`;
