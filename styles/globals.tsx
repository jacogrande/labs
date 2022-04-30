import styled from "styled-components";

export const Page = styled.main`
  padding: 16px;
  width: calc(100vw - 32px);
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Blog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20vw;
  width: 60vw;
  max-width: 1000px;
`;

export const Card = styled.div<{ color?: string; width?: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 0px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  ${(props) => `
    background: ${props.color || "#fff"};
    width: ${props.width || "auto"};
  `}
`;
