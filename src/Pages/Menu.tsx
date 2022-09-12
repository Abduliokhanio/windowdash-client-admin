import { Center, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Sidebar } from './Sidebar';

export interface IAppProps {
}

export default function Menu (props: IAppProps) {
  return (
    <div>
        <Flex>
        <Sidebar onClick={function (): void {
              throw new Error('Function not implemented.');
          } }/>
        
        <Center>
            <div style={{margin: "auto"}}>   
                <h1>Menu</h1> 
            </div>
        </Center>
        </Flex>
        
    </div>
  );
}
