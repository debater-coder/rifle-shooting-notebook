import { Card, CardBody, Text, Heading } from "@chakra-ui/react";

export default function Stat(props) {
  return (
    <Card variant={"filled"}>
      <CardBody align="center">
        <Text fontFamily={"Rubik Variable, sans-serif"}>{props.name}</Text>
        <Heading fontFamily={"Rubik Variable, sans-serif"}>
          {props.value}
        </Heading>
      </CardBody>
    </Card>
  );
}
