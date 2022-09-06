import { Center, Text} from '@chakra-ui/react';
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
      <Center>
        <Text as='b' fontSize='4xl'>Delivery Settings</Text>
      </Center>
    </div>
  );
}
