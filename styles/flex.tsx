import styled from "styled-components";

const breakpoint = "(min-width: 768px)";

export const Row = styled.div<{ justify?: string; align?: string }>`
  display: flex;
  width: 100%;
  ${(props) =>
    `justify-content: ${props.justify || "start"}; 
     align-items: ${props.align || "start"}`};
  flex-direction: column;
  @media ${breakpoint} {
    flex-direction: row;
  }
`;

export const Column = styled.div<{ justify?: string; align?: string }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    `justify-content: ${props.justify || "start"}; 
     align-items: ${props.align || "start"}`}
`;
