import { Flex, Spacer, Center, Text } from '@chakra-ui/react';
import * as React from 'react';
import { GiPointySword } from 'react-icons/gi';
import WdaDivider from '../Tools/WdaDivider';
import CategoryEditRow from './CategoryEditRow';

export interface IAppProps {
    catTitle : string
    catSubTitle? : string
    rowCollection: { img: string; title: string; }[]
}

export default function App (props: IAppProps) {

    let tableState 

    if (props.catSubTitle !== undefined){
        tableState = <div>
            <Flex style={{paddingTop: "1em"}}>
            <Text fontSize={"xl"} as={"b"}>{props.catTitle}</Text>
            <Spacer/>
            <Center bg={"black"} color="white" py={2} px ={2} borderColor={"black"} borderWidth={1} borderLeftWidth={.5}>
                <GiPointySword />
            </Center>
        </Flex>
        <Text fontSize={"xs"} style={{paddingBottom: "1em"}}>{props.catSubTitle}</Text>
        {/* Collection */}
        {props.rowCollection.map( element => {
            return (
                <>
                    <CategoryEditRow img={`${element.img}`} title={`${element.title}`}/>
                    <Spacer py={1}/>
                </>
                )
        })}
        </div>
    }else{
        tableState = <div>

        <Flex style={{paddingTop: "1em", paddingBottom: "1em"}}>
              <Text fontSize={"xl"} as={"b"} >{props.catTitle}</Text>
              <Spacer />
              <Center bg={"black"} color="white" py={2} px ={2} borderColor={"black"} borderWidth={1} borderLeftWidth={.5}>
                  <GiPointySword />
              </Center>
          </Flex>
          {/* Collection */}
          {props.rowCollection.map( element => {
              return (
                  <>
                      <CategoryEditRow img={`${element.img}`} title={`${element.title}`}/>
                      <Spacer py={1}/>
                  </>
                  )
          })}
  
      </div>
    }

  return (
    <div>
        {tableState}
    </div>
  );
}
