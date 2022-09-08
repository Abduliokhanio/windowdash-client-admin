import {Box,Image, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure, Accordion, Center } from '@chakra-ui/react';
import * as React from 'react';
import AccordianLineItem from '../Components/Accordian/AccordianLineItem';
import { HamburgerIcon } from '@chakra-ui/icons';

export interface IAppProps {
  onClick: () => void
}

export function Sidebar (props: IAppProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <div onClick={onOpen}>
        <HamburgerIcon w={12} h={12}/>
      </div>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
            <Box pb="8" margin="auto" paddingTop={"2.5em"}>
                  <Image boxSize="10em" src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/vfyavti06gzv9mlsl2ra" />
            </Box>

          <DrawerBody>
          <Accordion allowMultiple>
          <AccordianLineItem title = "Your Menu" subtitleList = {[
            {title: "This is a test", id: "1"},
            {title: "b", id: "2"},
            {title: "c", id: "3"}
          ]} />
          <AccordianLineItem title = "Venu Details" subtitleList = {[
            {title: "a", id: "4"},
            {title: "b", id: "5"}
          ]}/>
          <AccordianLineItem title = "Orders" subtitleList = {[
           {title: "Live Orders", id: "6"},
           {title: "Orders & Refunds", id: "7"},
           {title: "Turn On/Off", id: "8"},
           {title: "Dine-In Settings", id: "9"},
           {title: "Pick-Up Settings", id: "10"},
           {title: "Delivery Settings", id: "11"},
           {title: "Ordering Windows", id: "12"},
           {title: "Card Surcharge", id: "13"},
           {title: "Tipping", id: "14"},
           {title: "SMS Notifications", id: "15"},
            ]}/>
          <AccordianLineItem title = "Marketing" subtitleList = {[
          ]} />
        </Accordion>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}


/*
 "Live Orders",
  "Orders & Refunds", 
  "Turn On/Off", 
  "Dine-In Settings", 
  "Pick-Up Settings", 
  "Ordering Windows", 
  "Card Surcharge",
  "Tipping",
  "SMS Notifications"
*/