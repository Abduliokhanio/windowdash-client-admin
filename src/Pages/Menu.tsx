import { AddIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import Header from '../Components/Header/Header'
import MenuCategory from '../Components/MenuComponents/MenuCategory';
import WdaForm from '../Components/Tools/WdaForm';

export interface IAppProps {
}

export default function Menu (props: IAppProps) {
    let img1 = {src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*", alt: "Lunch Img"}
    let img2 = {src: "https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg", alt: "Drinks Img"}
    let img3 = {src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574", alt: "Food Img"}
    let dopts : string[] = ["Delivery","Pick-up", "Dine-in"]
  return (
    <div>
        <Header subtitle = "Menu"/>
        <WdaForm formTitle = {""} formType = "search" formPlaceholder='Search All Items'/>
        <MenuCategory id = {1} title = "Lunch" dineOptions = {dopts} img = {img1} location = "Kitchen" status = {true} />
        <MenuCategory id = {2} title = "Drinks" dineOptions = {dopts} img = {img2} location = "Bar"  status = {true} />
        <MenuCategory id = {3} title = "Food (Pickup/Delivery)" dineOptions = {dopts}img = {img3} location = "Bar"  status = {true} />
        <MenuCategory id = {4} title = "Breakfast ('Till 11:00 AM)" dineOptions = {dopts}img = {img3} location = "Kitchen"  status = {false}/>

        
        <div style = {{paddingLeft:"10%", paddingTop: "1em"}}>
            <HStack paddingLeft={.5}>
                <Box  bg={"White"} borderColor='black' borderWidth='1px' >
                    <Center padding={1}>
                        <AddIcon/>
                    </Center>
                </Box>
                <Box>
                    <Center>
                        <Text as = "b">Create New Category</Text>
                    </Center>
                </Box>
            </HStack>
        </div>
        
    </div>
  );
}
