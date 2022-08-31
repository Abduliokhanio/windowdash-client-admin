import {Text, Box,Image, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, Center, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { BsBorderOuter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export interface IAppProps {
  onClick: () => void
}

export function Home (props: IAppProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [yourMenu, setyourMenuState] = React.useState(false);

    let colorShifter = (boolvar : boolean) => {
      setyourMenuState(!boolvar)
      console.log(yourMenu)
    }

  return (
    <div>
        <Button colorScheme='teal' onClick={onOpen}>
        Main Menu
        </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
            <Box pb="8">
                <Image boxSize="10em" src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/vfyavti06gzv9mlsl2ra" />
            </Box>

          <DrawerBody>
          <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <div onClick={ () => colorShifter(yourMenu) }>
              <AccordionButton _expanded={{ bg: '#5651f4', color: 'white' }}>
                <Box flex='1' textAlign='left'>
                { yourMenu ?
                  <HStack spacing='10px'>
                  <BsBorderOuter color = "white"/>
                    <Text color = "white">Your Menu</Text>
                  </HStack> 
                  :
                  <HStack spacing='10px'>
                  <BsBorderOuter color = "black"/>
                    <Text color = "black">Your Menu</Text>
                  </HStack> 
                }   
                </Box>
              </AccordionButton>
              </div>
            </h2>
            <Link to={'/test'}>
              <AccordionPanel>
              </AccordionPanel>
            </Link>
          </AccordionItem>
        </Accordion>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
