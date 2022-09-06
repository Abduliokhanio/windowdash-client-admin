import { AccordionPanel, Text } from '@chakra-ui/react';
import * as React from 'react';

export interface IAppProps {
    subtitle: string
}



export default function AccordianLineItemSubtitle (props: IAppProps) {

    const [colorBool, setcolorBool] = React.useState(false);

    let colorShifter = (val1: boolean) => {
        val1 = !val1
        setcolorBool(val1)
    }

    let colorSwitcherSubTitle = (val1 : boolean) => {
        console.log(val1)
        if (val1 === true){
            return(
                <>
                    <Text color = {"black"}>{props.subtitle}</Text>
                </>
            )
        } 
        else {
            return(
                <>
                    <Text color = {"#b0b2bb"}>{props.subtitle}</Text>
                </>
                )
        }
    }

  return (
    <div>
        <div onClick={() => {colorShifter(colorBool)}}>
            <AccordionPanel>
                {colorSwitcherSubTitle(colorBool)}
            </AccordionPanel>
        </div>
    </div>
  );
}
