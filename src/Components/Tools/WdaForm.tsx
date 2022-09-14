import { SearchIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Center, FormControl, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Switch, Text } from '@chakra-ui/react';
import * as React from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { GiPointySword } from 'react-icons/gi';

export interface IAppProps {
    formTitle?: string
    formType: string
    formPlaceholder?: string | undefined
    dropDownCollection?: any | undefined
}

export default function WdaForm (props: IAppProps) {

    let formState

    if(props.formType === "money")  {
        formState = <div className= {props.formTitle} >
                        <Text fontSize='lg'>{props.formTitle}</Text>

                      <Center>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                          />
                          <Input variant='filled' placeholder='Enter amount' focusBorderColor='lime'/>
                          <InputRightElement children={''} />
                        </InputGroup>
                      </Center>
                    </div>
    }

    if(props.formType === "search-default")  { 
      formState = <div className= {"searchBox"} >
                    <Center>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents='none'
                          color='gray.300'
                          fontSize='1.2em'
                          children={<SearchIcon/>}
                        />
                        <Input variant='filled' placeholder={props.formPlaceholder} focusBorderColor='lime'/>
                      </InputGroup>
                    </Center>
                  </div>
  }

  if(props.formType === "search-category-edit-pg")  { 
    formState = <div className= {"searchBox"} >
                  <HStack>
                    <Box w={"100%"}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children={<SearchIcon/>}
                      />
                      <Input variant='filled' placeholder={props.formPlaceholder} focusBorderColor='lime'/>
                    </InputGroup>
                    </Box>
                    <Box>
                      <HStack>
                        <RiShoppingCart2Line/>
                        <Text as = 'b'> POS</Text>
                      </HStack>
                    </Box>
                    <Box bg={"black"} color="White" p={2}>
                      <HStack>
                        <ViewIcon/>
                        <Text>Availability</Text>
                      </HStack>
                    </Box>
                    <Box bg={"white"} p={2}>
                      <HStack>
                        <GiPointySword/>
                        <Text>Position</Text>
                      </HStack>
                    </Box>
                  </HStack>
                </div>
}

    if(props.formType === "dropdown")  {

      let optsArr = props.dropDownCollection.map((a:string | number)=>{
        return (<option>{a}</option>)
      })

        formState = <div className= {props.formTitle}>
                      <Text fontSize='lg'>{props.formTitle}</Text>
                      <Center>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children=''
                          />
                          <FormControl>
                            <Select placeholder={`${props.formPlaceholder}`} variant='filled'>
                              {optsArr}
                            </Select>
                          </FormControl>
                          <InputRightElement children={''} />
                        </InputGroup>
                      </Center>
                    </div>
    }

    if(props.formType === "default")  {
      const placeHolderVal = props.formPlaceholder ? props.formPlaceholder : ""

        formState = <div className= {props.formTitle}>
                        <Text fontSize='lg'>{props.formTitle}</Text>

                      <Center>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children=''
                          />
                          <Input placeholder={`${placeHolderVal}`} focusBorderColor='lime' variant='filled'/>
                          <InputRightElement children={''} />
                        </InputGroup>
                      </Center>
                    </div>
    }

    if(props.formType === "switch"){
      formState = <div className= {props.formTitle}>
                    <Stack direction='row'>
                      <Switch colorScheme='teal' size='lg' />
                      <Text>{props.formTitle}</Text>
                    </Stack>
                  </div>
    }

  return (
    <div style={{paddingTop: "1.5em" , maxWidth: "80%" , marginRight: "auto", marginLeft: "auto"}}>
    {formState}
    </div>
  );
}
