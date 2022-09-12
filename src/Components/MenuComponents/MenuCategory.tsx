import * as React from 'react';
import { Flex, Text,Image, Box, HStack, Spacer, VStack } from '@chakra-ui/react';


export interface IAppProps {
    title: string,
    dineOptions : string[]
    img : {
        src: string,
        alt: string
    }
    
}

export default function MenuCategory (props: IAppProps) {

    let printedMapOptions = props.dineOptions.join(" | ")

  return (
    <div style={{paddingTop: "1.5em" , maxWidth: "80%" , marginRight: "auto", marginLeft: "auto"}}>
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
                </Box>
            </HStack>
            <Text as = "b">
                 {printedMapOptions}
             </Text>
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
