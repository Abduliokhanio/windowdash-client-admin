import { Center, FormControl, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Switch, Text } from '@chakra-ui/react';
import * as React from 'react';

export interface IAppProps {
    formTitle: string
    formType: string
    formPlaceholder?: string | undefined
    dropDownCollection?: any | undefined
}

export default function WdaForm (props: IAppProps) {

    let formState

    if(props.formType === "money")  {
        formState = <div className= {props.formTitle} >
                      <Center>
                        <Text fontSize='lg'>{props.formTitle}</Text>
                      </Center>

                      <Center>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                          />
                          <Input placeholder='Enter amount' focusBorderColor='lime'/>
                          <InputRightElement children={''} />
                        </InputGroup>
                      </Center>
                    </div>
    }

    if(props.formType === "dropdown")  {

      let optsArr = props.dropDownCollection.map((a:string | number)=>{
        return (<option>{a}</option>)
      })

        formState = <div className= {props.formTitle}>
                      <Center>
                        <Text fontSize='lg'>{props.formTitle}</Text>
                      </Center>

                      <Center>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children=''
                          />
                          <FormControl>
                            <Select placeholder={`${props.formPlaceholder}`}>
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
                      <Center>
                        <Text fontSize='lg'>{props.formTitle}</Text>
                      </Center>

                      <Center>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children=''
                          />
                          <Input placeholder={`${placeHolderVal}`} focusBorderColor='lime'/>
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
    <div style={{paddingTop: "1em"}}>
    {formState}
    </div>
  );
}
