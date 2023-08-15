import {
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function NavBar() {
  const background = useColorModeValue("gray.300", "gray.900");

  return (
    <Flex
      as="nav"
      p="1em"
      bg={background}
      align="center"
      w="full"
      gap="10px"
      direction="r"
    >
      <Heading size="sm">Rifle Shooting Notebook</Heading>
      <Spacer />
      <Button colorScheme="teal">Sign up</Button>
      <Button>Log in</Button>
    </Flex>
  );
}

export default function App() {
  const { toggleColorMode } = useColorMode();
  const toggleText = useColorModeValue("dark", "light");

  return (
    <Flex direction="column" align="center" gap={"10px"}>
      <NavBar />
      <Button onClick={toggleColorMode}>Switch to {toggleText} theme</Button>
    </Flex>
  );
}
