import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Sidebar } from "../../Pages/Sidebar";
import WdaDivider from '../Tools/WdaDivider';

export interface IAppProps {
    subtitle: string 
}

export default function Menu (props: IAppProps) {
  return (
    <div>
        <Flex>
            <Box>
                <Sidebar onClick={function (): void {
                    throw new Error('Function not implemented.');
                } }/>
                </Box>
            <Spacer/>
            <Box>
                <Text as='b' fontSize='5xl'>Nu's Wood Fire Grill</Text>
            </Box>
            <Spacer/>
            <Box>
            </Box>
        </Flex>
        
        <WdaDivider maxWidth = "80%"/>  
        <Box paddingLeft={"10%"}>
            <Text as='b' fontSize='4xl'>{props.subtitle}</Text>
        </Box>
            
    </div>
  );
}
