import React from "react";
import {
  BoxShadowContainer,
  BoxShadowDiv,
  BoxShadowDivWithOutline,
  BoxShadowOverlay,
  HoverableBoxShadowDiv,
} from "./boxShadowStyles";

interface IBoxShadowComponent {
  color: string;
  children?: React.ReactNode;
  borderRadius?: number;
}

export const BoxShadowComponent = (props: IBoxShadowComponent) => {
  return (
    <BoxShadowContainer>
      <BoxShadowOverlay borderRadius={props.borderRadius}>
        {props.children}
      </BoxShadowOverlay>
      <BoxShadowDiv borderRadius={props.borderRadius} color={props.color} />
    </BoxShadowContainer>
  );
};

export const OutlinedBoxShadowComponent = (props: IBoxShadowComponent) => {
  return (
    <BoxShadowContainer>
      <BoxShadowOverlay color={props.color}>{props.children}</BoxShadowOverlay>
      <BoxShadowDivWithOutline color={props.color} />
    </BoxShadowContainer>
  );
};

export const HoverableBoxShadowComponent = (props: IBoxShadowComponent) => {
  return (
    <BoxShadowContainer>
      <BoxShadowOverlay color={props.color}>{props.children}</BoxShadowOverlay>
      <HoverableBoxShadowDiv color={props.color} />
    </BoxShadowContainer>
  );
};

interface ICoordinates {
  x: number;
  y: number;
}

export const DraggableBoxShadowComponent = (props: IBoxShadowComponent) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backgroundRef = React.useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = React.useState<ICoordinates>({ x: 12, y: 12 });

  React.useEffect(() => {
    if (containerRef && containerRef.current) {
      const div = containerRef.current;
      let i = 0;
      div.addEventListener("mousemove", (e: MouseEvent) => {
        if (i < 100) i++;
        else i = 0;
        if (i % 2 === 0) {
          let rect = div.getBoundingClientRect();
          let mouse: ICoordinates = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          };
          const middle: ICoordinates = {
            x: (rect.right - rect.left) / 2,
            y: (rect.bottom - rect.top) / 2,
          };
          setOffset({
            x: middle.x - mouse.x,
            y: middle.y - mouse.y,
          });
        }
      });
    }
  }, [containerRef]);

  React.useEffect(() => {
    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.style.top = offset.y + "px";
      backgroundRef.current.style.left = offset.x + "px";
    }
  }, [backgroundRef, offset]);

  return (
    <BoxShadowContainer ref={containerRef}>
      <BoxShadowOverlay>{props.children}</BoxShadowOverlay>
      <BoxShadowDiv color={props.color} ref={backgroundRef} />
    </BoxShadowContainer>
  );
};
