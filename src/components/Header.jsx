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
  Button,
} from "@chakra-ui/react";
import Stat from "./Stat";
import { MoonIcon, SunIcon, EditIcon } from "@chakra-ui/icons";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const toggleColorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <>
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
              lorem ipsum hello world foo bar baz measurements go like here
            </Text>
            <Button
              marginTop="20px"
              colorScheme="yellow"
              size="sm"
              leftIcon={<EditIcon />}
            >
              Edit Measurements
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}
