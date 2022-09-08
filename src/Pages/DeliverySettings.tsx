import { Center, FormControl, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, StackDivider, Switch, Text, VStack} from '@chakra-ui/react';
import * as React from 'react';
import { Sidebar } from './Sidebar';

export interface IAppProps {
}

export default function DeliverySettings (props: IAppProps) {
  return (
    <div>
      <Sidebar onClick={function (): void {
      throw new Error('Function not implemented.');
      } }/>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        px="6"
      >
          <Center>
            <Text as='b' fontSize='5xl'>Nu's Wood Fire Grill</Text>
          </Center>

          <Center>
            <Text as='b' fontSize='4xl'>Delivery Settings</Text>
          </Center>
       </VStack>
        
        <VStack>
          <div className= "Minimum Delivery Order Value">
            <Center>
              <Text fontSize='lg'>Minimum Delivery Order Value (In Cents)</Text>
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

          <div className= "Delivery Postcodes">
            <Center>
              <Text fontSize='lg'>Delivery Postcodes</Text>
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
                  <Select placeholder='Select zipcode'>
                    <option>77066</option>
                    <option>77084</option>
                    <option>12345</option>
                    <option>54321</option>
                  </Select>
                </FormControl>
                <InputRightElement children={''} />
              </InputGroup>
            </Center>
          </div>

          <div className= "Drive Yello Store Reference">
            <Center>
              <Text fontSize='lg'>Drive Yello Store Reference</Text>
            </Center>

            <Center>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.300'
                  fontSize='1.2em'
                  children=''
                />
                <Input placeholder='Enter Drive Yello Store Reference' focusBorderColor='lime'/>
                <InputRightElement children={''} />
              </InputGroup>
            </Center>
          </div>
          
          <div className= "Doordash options">
          <Stack direction='row'>
            <Switch colorScheme='teal' size='lg' />
            <Text>DoorDash Drive Enabled</Text>
          </Stack>
          </div>

          <div className= "Send pre-order window start time to Doordash Drive as pickup time or delivery time?">
            <Center>
              <Text fontSize='lg'>Send pre-order window start time to Doordash Drive as pickup time or delivery time?</Text>
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
                  <Select placeholder='Select pre-order time'>
                    <option>Pickup Time</option>
                    <option>Delivery Time</option>
                  </Select>
                </FormControl>
                <InputRightElement children={''} />
              </InputGroup>
            </Center>
          </div>

          <div className= "Minimum Order Value For Free Delivery">
            <Center>
              <Text fontSize='lg'>Minimum Order Value For Free Delivery (In Cents)</Text>
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

          <div className= "Delivery Fee">
            <Center>
              <Text fontSize='lg'>Delivery Fee (In Cents)</Text>
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

          <div className= "Always Charge Delivery Fee">
          <Stack direction='row'>
            <Switch colorScheme='teal' size='lg' />
            <Text>Always Charge Delivery Fee</Text>
          </Stack>
          </div>

        </VStack>
    </div>
  );
}
