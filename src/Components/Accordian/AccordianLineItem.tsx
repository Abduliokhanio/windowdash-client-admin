import { AccordionButton, AccordionItem, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { BsBorderOuter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AccordianLineItemSubtitle from './AccordianLineItemSubtitle';

export interface IAppProps {
    title: string
    subtitleList: any
}

export default function AccordianLineItem (props: IAppProps) {

    const [colorBool, setcolorBool] = React.useState(false);

    let colorShifter = (val1: boolean) => {
        val1 = !val1
        setcolorBool(val1)
    }

    let colorSwitcherTitle = (val1 : boolean) => {
        if (val1 === true){
            return(
                <>
                    <BsBorderOuter color = "white"/>
                    <Text color = "white">{props.title}</Text>
                </>
            )
        } 
        else {
            return(
                <>
                    <BsBorderOuter color = "black"/>
                    <Text color = "black">{props.title}</Text>
                </>
                )
        }
    }

    let stringSpaceRemover = (word : string) => {
        let result = word.split("").filter(e => e!== " " && e !== "/" && e !== "-").join("")
        return result
    }

    
  return (
    <div>
        <AccordionItem>
            <div onClick={() => colorShifter(colorBool)}>
                <AccordionButton _expanded={{ bg: '#5651f4', color: 'white' }}>
                    <HStack spacing='10px'>
                        {colorSwitcherTitle(colorBool)} 
                    </HStack> 
                </AccordionButton>
            </div>

            {
            props.subtitleList.map((subtitleObj: {title: string, id: string})=>{
                return (
                <>
                    <Link to={`/${stringSpaceRemover(subtitleObj.title)}`}>
                        <AccordianLineItemSubtitle subtitle={subtitleObj.title }/>
                    </Link>
                </>
                )
            })
            
            }
        </AccordionItem>
    </div>
  );
}
