import { Column, Row } from "../../../styles/flex";
import { Title } from "../../../styles/fonts";
import { Blog, Card } from "../../../styles/globals";
import {
  AnimatedBackgroundUnderline,
  BackgroundUnderline,
  BasicUnderline,
  BorderUnderline,
  Description,
  ExpandedBackgroundUnderline,
  PageContainer,
  ShadowBackgroundUnderline,
} from "./UnderlineStyles";

const SVGUNderline = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        shapeRendering="auto"
        // viewBox="0 24 150 28"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#000" />
        </g>
      </svg>
    </div>
  );
};

const UnderlinePageComponent = () => {
  return (
    <PageContainer>
      <Title style={{ marginBottom: 0 }}>Underlines Suck</Title>
      <Description>Here's why</Description>
      <Column align="center">
        <BasicUnderline>
          This is your browser's default underline
        </BasicUnderline>
        <Description>It sucks.</Description>
      </Column>

      <BorderUnderline>This is a border-bottom underline</BorderUnderline>
      <Description>Not bad, but we don't have to be so bland.</Description>

      <BackgroundUnderline>
        This is a background-image underline
      </BackgroundUnderline>
      <AnimatedBackgroundUnderline>
        This one's animated
      </AnimatedBackgroundUnderline>
      <ExpandedBackgroundUnderline>
        This one blows up
      </ExpandedBackgroundUnderline>
      <Description>But what about descenders?</Description>
      <ShadowBackgroundUnderline>q - j - q - p - ,</ShadowBackgroundUnderline>
    </PageContainer>
  );
};

export default UnderlinePageComponent;
