import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import SessionCard from "./SessionCard";

export default function Home() {
  return (
    <Flex
      direction={"column"}
      m={"10px"}
      maxW={["full", "80%"]}
      w="full"
      gap={"12px"}
      mx="auto"
    >
      <Header />
      <SessionCard />
      <SessionCard />
      <SessionCard />
      <SessionCard />
      <SessionCard />
    </Flex>
  );
}
