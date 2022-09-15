import * as React from 'react';
import Header from '../Components/Header/Header';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import WdaForm from '../Components/Tools/WdaForm';

export interface IAppProps {
}

export default function CategoryEditPg (props: IAppProps) {

    let catTitle = "Breakfast ('Till 11:00 AM)"

  return (
    <div>
        <Header subtitle = "Menu"/>

        <div style={{paddingLeft : "10%"}}>
            <VStack align={"left"}  spacing={5}>
                <Link to = "/Menu">
                    <HStack>
                        <Box>
                            <Center>
                                <ChevronLeftIcon />
                            </Center>
                        </Box>
                        <Box>
                            <Text>Back to category</Text>
                        </Box>
                    </HStack>
                </Link>
                    <HStack>
                        <Box>
                            <Center>
                                <ChevronDownIcon />
                            </Center>
                        </Box>
                        <Box>
                            <HStack>
                                <Text>{`Viewing category | `}</Text>
                                <Text as="b">{catTitle}</Text>
                            </HStack>
                        </Box>
                    </HStack>
            </VStack>
        </div>
        <WdaForm formType='search-category-edit-pg' formPlaceholder={`Search ${catTitle}`}></WdaForm>

    </div>
  );
}
