import {
  Flex,
  Card,
  CardHeader,
  Text,
  Heading,
  CardBody,
  Box,
  Stack,
  StackDivider,
  CardFooter,
  Button,
} from "@chakra-ui/react";

export default function SessionCard() {
  return (
    <Card>
      <CardHeader>
        <Flex w="full" justify={"space-between"} align={"center"}>
          <Heading
            fontFamily={"Rubik Variable, sans-serif"}
            fontSize={"2xl"}
            fontWeight={"500"}
          >
            Saturday Week 3
          </Heading>
          <Text fontFamily={"Rubik Variable, sans-serif"} fontWeight={"400"}>
            5/06/2023
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Shoot 1
            </Heading>
            <Text pt="2" fontSize="sm">
              Shoot detaisl
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Shoot 2
            </Heading>
            <Text pt="2" fontSize="sm">
              Shoot details
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Notes
            </Heading>
            <Text pt="2" fontSize="sm">
              What I did well... What I didn{"'"}t do well... Coach Feedback
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button colorScheme="yellow">View details</Button>
      </CardFooter>
    </Card>
  );
}
