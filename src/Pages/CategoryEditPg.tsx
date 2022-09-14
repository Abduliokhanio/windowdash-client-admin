import * as React from 'react';
import Header from '../Components/Header/Header';
import { Box, Center, HStack, Stack, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export default function CategoryEditPg (props: IAppProps) {
  return (
    <div>
        <Header subtitle = "Menu"/>

        <div style={{paddingLeft : "10%"}}>
            <Link to = "/Menu">
            <HStack>
                <Box>
                    <Center>
                    <ChevronLeftIcon /></Center>
                </Box>
                <Box>
                    <Text>Back to category</Text>
                </Box>
            </HStack>
            </Link>
        </div>

    </div>
  );
}
