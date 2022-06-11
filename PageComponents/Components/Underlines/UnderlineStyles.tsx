import styled, { keyframes } from "styled-components";

const colors = {
  hover: "#63c9d6",
  green: "#5edb94",
  text: "#666",
};

const wave = keyframes`
  from {
    background-position: -200px 100%;
  }
  to {
    background-position: calc(100% + 200px) 100%;
  }
`;

const Underline = styled.p`
  margin: 32px;
  font-size: 28px;
  font-weight: 400;
  color: #333;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
  }
`;

const formatSvgAsDataURI = (svg: string) => {};

export const BasicUnderline = styled(Underline)`
  text-decoration: underline;
  text-decoration-color: black;
  &:hover {
    text-decoration-color: ${colors.hover};
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: ${colors.text};
`;

export const BorderUnderline = styled(Underline)`
  border-bottom: 8px solid ${colors.green};
  padding-bottom: 0px;
  &:hover {
    border-bottom: 8px solid ${colors.hover};
  }
`;

export const BackgroundUnderline = styled(Underline)`
  padding: 2px 2px;
  background-image: linear-gradient(#fce, #fce);
  background-size: 100% 16px;
  background-repeat: no-repeat;
  background-position: 0px 100%;
  &:hover {
    background-image: linear-gradient(#ffccee99, #ffccee99);
  }
`;

export const AnimatedBackgroundUnderline = styled(Underline)`
  font-size: 28px;
  padding 2px 0px;
  background-image: linear-gradient(#ffccee99, #ffccee99);
  background-size: 200px 16px;
  background-repeat: no-repeat;
  background-position: -200px 100%;
  &:hover {
    background-image: linear-gradient(#ffccee99, #ffccee99);
    animation: ${wave} 0.7s linear infinite;
  }
`;

export const ExpandedBackgroundUnderline = styled(BackgroundUnderline)`
  font-size: 28px;
  background-size: 100% 8px;
  &:hover {
    background-size: 100% 100%;
    background-image: linear-gradient(#fce, #fce);
  }
`;

export const ShadowBackgroundUnderline = styled(BackgroundUnderline)`
  font-size: 28px;
  background-size: 100% 4px;
  background-position: 0px 93%;
  text-shadow: 2px 2px #fff, 2px -2px #fff, -2px 2px #fff, -2px -2px #fff;
`;

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
