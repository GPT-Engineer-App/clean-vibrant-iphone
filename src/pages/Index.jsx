import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="white">
        <Box as="header" w="full" py={4} px={8}>
          <Flex justify="space-between" align="center">
            <FaApple size="28px" />
            <Flex gap={4}>
              <Link href="#" p="2" fontSize="lg" fontWeight="medium">
                Features
              </Link>
              <Link href="#" p="2" fontSize="lg" fontWeight="medium">
                Specs
              </Link>
              <Link href="#" p="2" fontSize="lg" fontWeight="medium">
                Contact
              </Link>
            </Flex>
          </Flex>
        </Box>
        <VStack spacing={10} my={10} px={8} textAlign="center">
          <Heading fontSize="5xl" fontWeight="bold" lineHeight="shorter">
            Experience the Future
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Introducing the new iPhone. Impossibly advanced.
          </Text>
          <Image src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpcGhvbmV8ZW58MHx8fHwxNzE1NDQxMzA0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="contain" />
          <Button size="lg" colorScheme="blue" px={10} py={6}>
            Pre-order Now
          </Button>
        </VStack>
        <Box as="footer" w="full" py={4} px={8} bg="gray.100">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm">© 2023 Apple Inc.</Text>
            <Flex gap={4}>
              <Link href="#" fontSize="sm">
                Privacy
              </Link>
              <Link href="#" fontSize="sm">
                Terms
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
