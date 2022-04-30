import React from "react";
import {
  BoxShadowContainer,
  BoxShadowDiv,
  BoxShadowDivWithOutline,
  BoxShadowOverlay,
  DraggableBoxShadowDiv,
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

export const MovableBoxShadowComponent = (props: IBoxShadowComponent) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backgroundRef = React.useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = React.useState<ICoordinates>({ x: 0, y: 0 });

  React.useEffect(() => {
    if (containerRef && containerRef.current) {
      const div = containerRef.current;
      div.addEventListener("mousemove", (e: MouseEvent) => {
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
          x: (middle.x - mouse.x) / 4,
          y: (middle.y - mouse.y) / 4,
        });
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

export const DraggableBoxShadowComponent = (props: IBoxShadowComponent) => {
  const [clickOrigin, setClickOrigin] = React.useState<ICoordinates | null>(
    null
  );

  const [offset, setOffset] = React.useState<ICoordinates>({ x: 0, y: 0 });
  const [offsetQueue, setOffsetQueue] = React.useState<ICoordinates[]>([]);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const backgroundRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    console.log("yo");
    if (containerRef && containerRef.current) {
      const div = containerRef.current;
      div.addEventListener("mousedown", handleMouseDown);
      div.addEventListener("mouseup", () => setClickOrigin(null));
      document.body.addEventListener("mousemove", handleMouseMove);
      return () => {
        div.removeEventListener("mousedown", handleMouseDown);
        div.removeEventListener("mouseup", () => setClickOrigin(null));
        document.body.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [containerRef, clickOrigin]);

  const handleMouseDown = (mouse: MouseEvent) => {
    const lastOffset = offsetQueue[offsetQueue.length - 1] || {
      x: 0,
      y: 0,
    };
    setClickOrigin({
      x: mouse.clientX - lastOffset.x,
      y: mouse.clientY - lastOffset.y,
    });
  };

  const handleMouseMove = (mouse: MouseEvent) => {
    if (clickOrigin) {
      setOffset({
        x: mouse.clientX - clickOrigin.x,
        y: mouse.clientY - clickOrigin.y,
      });
    }
  };

  React.useEffect(() => {
    setOffsetQueue((offsetQueue) => {
      let clone = [...offsetQueue];
      clone.push(offset);
      return clone;
    });
  }, [offset]);

  React.useEffect(() => {
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.style.top = offset.y + "px";
      overlay.style.left = offset.x + "px";
    }
  }, [offset, overlayRef]);

  React.useEffect(() => {
    if (offsetQueue.length >= 4) {
      const delayedOffset = offsetQueue.shift();
      const background = backgroundRef.current;
      if (background && delayedOffset) {
        background.style.top = delayedOffset.y + "px";
        background.style.left = delayedOffset.x + "px";
      }
    }
  }, [offsetQueue, backgroundRef]);

  return (
    <BoxShadowContainer ref={containerRef}>
      <BoxShadowOverlay ref={overlayRef}>{props.children}</BoxShadowOverlay>
      <DraggableBoxShadowDiv color={props.color} ref={backgroundRef} />
    </BoxShadowContainer>
  );
};
