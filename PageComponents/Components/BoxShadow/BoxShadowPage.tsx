import { Column, Row } from "../../../styles/flex";
import { Text } from "../../../styles/fonts";
import { Blog, Card } from "../../../styles/globals";
import {
  BoxShadowComponent,
  DraggableBoxShadowComponent,
  HoverableBoxShadowComponent,
  OutlinedBoxShadowComponent,
} from "./BoxShadowComponents";
import {
  BoxShadowButton,
  BoxShadowInput,
  BoxShadowTitle,
} from "./boxShadowStyles";

const BoxShadowPageComponent = () => {
  const colors = {
    blue: "#00ffff",
    magenta: "#ff55ff",
    yellow: "#ffff00",
  };
  return (
    <Blog>
      <Column justify="space-around">
        <Column style={{ margin: 24 }}>
          <Text>j a c o p e q u e &#xf1; o</Text>
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
      </Column>
      <div style={{ marginTop: 200 }}></div>
      <Card color="#8eedbe">
        <BoxShadowTitle>welcome back</BoxShadowTitle>
        <BoxShadowInput placeholder="email" />
        <BoxShadowInput placeholder="password" type="password" />
        <BoxShadowButton>login</BoxShadowButton>
      </Card>
      <div style={{ marginTop: 200 }}></div>
      <DraggableBoxShadowComponent color="#fca">
        Hover
      </DraggableBoxShadowComponent>
      <div style={{ marginTop: 200 }}></div>
    </Blog>
  );
};

export default BoxShadowPageComponent;
