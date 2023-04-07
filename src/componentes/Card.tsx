import {
  Flex, Button, Image, Text, 
} from '@chakra-ui/react';

interface CardProps{
  image: string;
  textButton: string;
}

export function Card({ image, textButton }: CardProps) {
  return (
    <Flex flexDir="column" align="center">
      <Image src={image} alt="random cat" w="35rem" h="21rem" borderRadius={6} boxShadow="0px 4px 6px rgba(0, 0, 0, 0.25)" />

      <Button bg="purple.300" w="13rem" h="3.3rem" borderRadius={6} mt="4.8rem">
        <Text color="gray.900" fontSize={20}>{textButton}</Text>
      </Button>
    </Flex>
  );
}
