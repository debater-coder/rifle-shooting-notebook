import {
  useColorMode,
  useColorModeValue,
  Flex,
  IconButton,
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Tooltip,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Stat from "./Stat";
import { MoonIcon, SunIcon, EditIcon } from "@chakra-ui/icons";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const toggleColorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Flex direction="column" align="center" justify="top" gap={"10px"} w="full">
      <Flex
        direction={"column"}
        m={"10px"}
        maxW={["full", "80%"]}
        w="full"
        gap={3}
      >
        <Flex>
          <IconButton
            aria-label="Toggle color mode"
            icon={toggleColorModeIcon}
            variant={"ghost"}
            onClick={toggleColorMode}
          />
          <Spacer />
          <Tooltip label="Customise stats">
            <IconButton
              aria-label="Customise stats"
              icon={<EditIcon />}
              variant={"ghost"}
            />
          </Tooltip>
        </Flex>
        <SimpleGrid minChildWidth="200px" spacing="20px" w="full">
          <Stat name="Last 300 shots average" value={8.65} />
          <Stat name="Last 60 shots average" value={9.3} />
          <Stat name="Best 10 shot average" value={10.12} />
          <Card variant={"filled"}>
            <CardBody align="center">
              <Heading fontFamily={"Rubik Variable, sans-serif"} size={"md"}>
                Measurements
              </Heading>
              <Text fontFamily={"Rubik Variable, sans-serif"}>
                lorem ipsum hello world foo bar baz
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
