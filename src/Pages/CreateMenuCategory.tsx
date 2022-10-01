import { Button } from '@chakra-ui/react';
import * as React from 'react';
import WdaForm from '../Components/Tools/WdaForm';

export interface IAppProps {
}

let persistMenuCategory = async (e: any) => {
    e.preventDefault()
    console.log(e)
}

export default function CreateMenuCategory (props: IAppProps) {
  return (
    <div >
      <WdaForm formType={'default'} formPlaceholder={"name"}></WdaForm>
      <WdaForm formType={'default'} formPlaceholder={"img url"}></WdaForm>
      <WdaForm formType={'default'} formPlaceholder={"description"}></WdaForm>
      <WdaForm formType={'default'} formPlaceholder={"availability"}></WdaForm> 
      <div style={{paddingTop: "1.5em" , maxWidth: "80%" , marginRight: "auto", marginLeft: "auto"}}>
      <Button colorScheme={"green"} onClick={e=>{persistMenuCategory(e)}}>Save</Button></div>
    </div>
  );
}
