import * as React from 'react';
import { Flex, Text,Image, Box, HStack, Spacer, Button, Center, VStack } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


export interface IAppProps {
    id: number,
    title: string,
    dineOptions : string[]
    img : {
        src: string,
        alt: string
    }
    location : string
    status: boolean
}

export default function MenuCategory (props: IAppProps) {

    let printedMapOptions = props.dineOptions.join(" | ")

    let timeIcon = props.status ? <Box  bg={"White"} borderColor='black' borderWidth='1px' height={8} width={8} >
                                        <VStack>
                                            <Spacer/>
                                                <Center>
                                                    <TimeIcon/>
                                                </Center>
                                            <Spacer/>
                                        </VStack>
                                    </Box> :
                                    <Box  bg={"Red"} color = {"white"} height={8} width={8} >
                                    <VStack>
                                        <Spacer/>
                                            <Center>
                                                <TimeIcon/>
                                            </Center>
                                        <Spacer/>
                                    </VStack>
                                </Box>


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
                    <Text fontSize='xs'>
                 {printedMapOptions}
             </Text>
                </Box>

            </HStack>
            
        </Box>
        <Spacer />
        <Box>
            <HStack spacing='0px'>
                <Box>
                    <Button bg={'#edf2f6'} color={'black'} size='xs' borderColor='black' borderWidth='1px' disabled>
                        {props.location}
                    </Button>
                </Box>
                <Spacer p={1}/>
                {timeIcon}
                <Link to={`category/${props.id}/edit`}>
                <Box bg={"Black"} height={8} px ={4}>
                    <Center w={4} h={8} bg='black' color='white'>
                    <Text as = "b">EDIT</Text>
                </Center>
                </Box>
                </Link>
            </HStack>
        </Box>
    </Flex> 
    </div>
  );
}
