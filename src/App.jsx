import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex p="1em" bg="gray.900" align="center" w="full" gap="10px">
      <Heading size="sm">Rifle Shooting Notebook</Heading>
      <Spacer />
      <Button colorScheme="teal">Sign up</Button>
      <Button>Log in</Button>
    </Flex>
  );
}

export default function App() {
  return (
    <Flex direction="column" align="center">
      <NavBar />
      <Button>Toggle dark theme</Button>
    </Flex>
  );
}
