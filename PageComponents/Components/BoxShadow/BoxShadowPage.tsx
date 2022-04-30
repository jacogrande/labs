import { Column, Row } from "../../../styles/flex";
import { Text } from "../../../styles/fonts";
import { Blog, Card } from "../../../styles/globals";
import {
  BoxShadowComponent,
  HoverableBoxShadowComponent,
  MovableBoxShadowComponent,
  OutlinedBoxShadowComponent,
  DraggableBoxShadowComponent,
} from "./BoxShadowComponents";
import {
  BoxShadowButton,
  BoxShadowInput,
  BoxShadowTextBackground,
  BoxShadowTextContainer,
  BoxShadowTitle,
  Break,
} from "./boxShadowStyles";

const colors = {
  blue: "#00ffff",
  magenta: "#ff55ff",
  yellow: "#ffff00",
};

const BoxShadowPageComponent = () => {
  const SquareSection = (
    <Column justify="space-around">
      <Column style={{ margin: 24 }}>
        <Text>j a c o l a b s</Text>
      </Column>
      <Row justify="space-around">
        <BoxShadowComponent color={colors.blue}></BoxShadowComponent>
        <BoxShadowComponent color={colors.magenta} />
        <BoxShadowComponent color={colors.yellow} />
        <BoxShadowComponent color="#ddd">
          {/* <p>Basic</p> */}
        </BoxShadowComponent>
      </Row>
      <Row justify="space-around">
        <OutlinedBoxShadowComponent color={colors.blue} />
        <OutlinedBoxShadowComponent color={colors.magenta} />
        <OutlinedBoxShadowComponent color={colors.yellow} />
        <OutlinedBoxShadowComponent color="#ddd">
          {/* <p>Truncated</p> */}
        </OutlinedBoxShadowComponent>
      </Row>
      <Row justify="space-around">
        <BoxShadowComponent color={colors.blue} borderRadius={4} />
        <BoxShadowComponent color={colors.magenta} borderRadius={18} />
        <BoxShadowComponent color={colors.yellow} borderRadius={40} />
        <BoxShadowComponent color="#ddd" borderRadius={148}>
          {/* <p>Rounded</p> */}
        </BoxShadowComponent>
      </Row>
      <Row justify="space-around">
        <HoverableBoxShadowComponent
          color={colors.blue}
        ></HoverableBoxShadowComponent>
        <HoverableBoxShadowComponent color={colors.magenta} />
        <HoverableBoxShadowComponent color={colors.yellow} />
        <HoverableBoxShadowComponent color="#ddd">
          {/* <p>Hoverable</p> */}
        </HoverableBoxShadowComponent>
      </Row>
      <Text style={{ alignSelf: "end", marginRight: 24 }}>s q u a r e s</Text>
      <Break height={200} />
    </Column>
  );

  const TitleSection = (
    <BoxShadowTextContainer>
      <p>in action</p>
      <BoxShadowTextBackground top={-24} left={-24} color="#ffff0044" />
      <BoxShadowTextBackground top={0} left={0} color="#ff00ff44" />
      <BoxShadowTextBackground top={24} left={24} color="#00ffff44" />
    </BoxShadowTextContainer>
  );

  const FormSection = (
    <>
      <Card color="#8eedbe">
        <BoxShadowTitle>welcome back</BoxShadowTitle>
        <BoxShadowInput placeholder="email" />
        <BoxShadowInput placeholder="password" type="password" />
        <BoxShadowButton>login</BoxShadowButton>
      </Card>
      <Break height={200} />
    </>
  );

  const InteractiveSection = (
    <>
      <Row justify="center" style={{ marginLeft: 16 }}>
        <DraggableBoxShadowComponent color="#8eedbeaa">
          drag
        </DraggableBoxShadowComponent>
        <MovableBoxShadowComponent color="#8eedbe44">
          hover
        </MovableBoxShadowComponent>
      </Row>
      <Break height={200} />
    </>
  );

  return (
    <Blog>
      {SquareSection}
      {TitleSection}
      <Break height={200} />
      {FormSection}
      {InteractiveSection}
    </Blog>
  );
};

export default BoxShadowPageComponent;
