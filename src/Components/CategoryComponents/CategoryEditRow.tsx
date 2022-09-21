import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Text, Image } from '@chakra-ui/react';
import * as React from 'react';

export interface IAppProps {
    img: string
    title: string
}

export default function CategoryEditRow (props: IAppProps) {
  return (
    <div>
        <HStack spacing={2}>
            
            <HamburgerIcon w={6} h={6}/>
            <Image src={`${props.img}`}></Image><Center>
            <Text fontSize={"sm"}>{props.title}</Text>
            </Center>
        </HStack>
    </div>
  );
}
