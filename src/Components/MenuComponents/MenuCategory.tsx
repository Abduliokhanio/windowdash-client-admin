import * as React from 'react';
import { Flex, Text,Image, Box, HStack, Spacer, VStack } from '@chakra-ui/react';


export interface IAppProps {
    title: string,
    subtitle: string,
    img : {
        src: string,
        alt: string
    }
    dineOptions : string[]
}

export default function MenuCategory (props: IAppProps) {
  return (
    <div>
    <Flex>
        <Box>
            <HStack>
                <Box>
                    <Image src={props.img.src} alt={props.img.alt} boxSize='2em'/>
                </Box>
                <Box>
                    <Text as = "u">
                    <Text as= "b" fontSize='xl'>{props.title}</Text>
                    </Text>
                    <Text >{props.subtitle}</Text>
                </Box>
            </HStack>
        </Box>
        <Spacer />
        <Box>
            <VStack>
                    <Box>
                        <p>Some shit over here</p>
                    </Box>
            </VStack>
            
        </Box>
    </Flex> 
    </div>
  );
}
