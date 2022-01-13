import { Center, HStack, VStack, Text, Divider, Flex, Heading } from "native-base";

export default function CalculateScreen() {
    return (
        <Center
            bg='white'
            px={4}
            flex={1}
        >
            <VStack space={5} alignItems='center'>
                <Flex mx='10' direction='row' justify='space-evenly'>
                    <Heading>Hi</Heading>
                    <Divider mx="10" orientation="vertical" thickness='0'/>
                    <Heading>Hi</Heading>
                </Flex>
                <Divider my='2'/>
                <HStack>
                    <Text>dfhwgiuwholdjf</Text>
                    <Text>Hello</Text>
                    <Text>Please</Text>
                </HStack>
            </VStack>
        </Center>
    )
}