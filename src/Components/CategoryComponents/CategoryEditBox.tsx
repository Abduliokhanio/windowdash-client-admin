import { Box, GridItem, HStack,Image, Text, VStack } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import * as React from 'react';

export interface IAppProps {
}

export default function CategoryEditBox (props: IAppProps) {
  return (
    <div>
      <GridItem w='100%' h='125' bg='green.400' >
        <HStack h="100%">
        <Box w='50%' h="100%" bg='red.400'>
          <Image h={"100%"} src={faker.image.food()} alt={faker.lorem.words(1)}/>
        </Box>
        <Box w='50%' h={"100%"} bg='red.400'>
          <VStack spacing={"1"} align={"left"} h={"100%"}>
            <Text h={"50%"} as="b" fontSize={"md"}>{faker.lorem.words()}</Text>
            <Text h={"50%"} fontSize={"xs"} >{faker.lorem.lines()}</Text>
            <Text h={"50%"} as="b" fontSize={"xs"}>{faker.finance.amount(5, 10, 2, '$')}</Text>
          </VStack>
        </Box>
        <Box w='50%' h={"100%"} bg='red.400'>
          <Text>Opts</Text>
        </Box>
        </HStack>
      </GridItem>
    </div>
  );
}
