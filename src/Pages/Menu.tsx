import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Sidebar } from './Sidebar';
import Headers from '../Components/Header/Header'
import WdaForm from '../Components/Tools/WdaForm';

export interface IAppProps {
}

export default function Menu (props: IAppProps) {
  return (
    <div>
        <Headers subtitle = "Menu"/>
        <WdaForm formTitle = {"Minimum Delivery Order Value (In Cents)"} formType = "search"/>
    </div>
  );
}
