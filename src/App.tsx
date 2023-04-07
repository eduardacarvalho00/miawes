import {
  Flex, Heading, Image, 
} from '@chakra-ui/react';
import logoCat from './assets/logo_cat.gif';
import { Card } from './componentes/Card';

function App() {
  return (
    <Flex align="center" flexDir="column">
      <Flex as="header" w="80vw" h="7.7rem" align="center">
        <Image src={logoCat} w="4.3rem" h="4.3rem" alt="logo cat" />
        <Heading color="purple.300">miawes</Heading>
      </Flex>

      <Flex w="80vw" h="80vh" justify="space-between" align="center">
        <Card image="" textButton="Random gif cat" />
        <Card image="" textButton="Random img cat" />
      </Flex>
    </Flex>
  );
}

export default App;
