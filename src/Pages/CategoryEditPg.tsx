import * as React from 'react';
import Header from '../Components/Header/Header';
import { Box, Button, Center, Flex, Grid, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import WdaForm from '../Components/Tools/WdaForm';
import CategoryEditBox from '../Components/CategoryComponents/CategoryEditBox';
import { faker } from '@faker-js/faker';

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

        <div style={{paddingLeft: "10%",paddingRight: "10%", paddingTop: "1em"}}>
        <HStack>
            <Box>
                <Text fontSize='sm'>Filter :</Text>
            </Box>
            <Box>
                <Button fontSize='sm' size='sm'>Available</Button>
            </Box>
            <Box>
                <Button fontSize='sm' size='sm'>Unavailable</Button>
            </Box>
            <Box>
                <Button fontSize='sm' size='sm'>Hidden</Button>
            </Box>
        </HStack>

        <Flex style={{paddingTop: "1em"}}>
            <Text fontSize={"xl"} as={"b"}>Breakfast</Text>
            <Spacer></Spacer>
            <Box bg={"red"} color={"white"} p={2}>
                <Text>icon1</Text>
            </Box>
            <Box bg={"green"} color={"white"} p={2}>
                <Text>icon2</Text>
            </Box>
        </Flex>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} style={{paddingTop: "1em"}} >
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
            <CategoryEditBox img={faker.image.food(200,200,true)} imgAlt = {faker.lorem.words(1)} title={faker.lorem.words(3)} description={faker.lorem.lines(12)} price={faker.finance.amount(5, 10, 2, '$')}/>
        </Grid>
        </div>

        <Spacer p={4}/>

    </div>
  );
}
