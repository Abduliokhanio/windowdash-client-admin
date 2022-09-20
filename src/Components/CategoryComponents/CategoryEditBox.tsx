import { Box, GridItem, HStack,Image, Switch, Text, VStack } from '@chakra-ui/react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BiAward } from 'react-icons/bi';
import * as React from 'react';
import { ViewIcon } from '@chakra-ui/icons';

export interface IAppProps {
  img : string,
  imgAlt : string,
  title : string,
  description : string,
  price: string
}

export default function CategoryEditBox (props: IAppProps) {
  return (
    <div>
      <GridItem w='100%' h='125' bg='#f7f7f7' >
        <HStack h="100%">
        <Box w='50%' h="100%" bg='red.400'>
          <Image h={"100%"} src={props.img} alt={props.imgAlt}/>
        </Box>
        <Box w='50%' h={"100%"} >
          <VStack spacing={"1"} align={"left"} h={"100%"}>
            <Text noOfLines={1} h={"50%"} as="b" fontSize={"sm"}>{props.title}</Text>
            <Text noOfLines={3} h={"50%"} fontSize={"xs"} >{props.description}</Text>
            <Text h={"50%"} as="b" fontSize={"xs"} >{props.price}</Text>
          </VStack>
        </Box>
        <Box w='50%' h={"100%"} >
          <VStack spacing={"1"}>
            <Box px = {4} py= {2}>
              <HStack>
                <Switch size='sm' />
                <RiShoppingCart2Line/>
              </HStack>
            </Box>
            <Box px = {4} py= {2}>
              <HStack>
                <Switch size='sm' />
                <ViewIcon/>
              </HStack>
            </Box>
            <Box px = {4} py= {2}>
              <HStack>
                <Switch size='sm' />
                <BiAward/>
              </HStack>
            </Box>
          </VStack>
        </Box>
        </HStack>
      </GridItem>
    </div>
  );
}
