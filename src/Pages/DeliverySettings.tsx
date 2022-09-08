import { Center, Text} from '@chakra-ui/react';
import * as React from 'react';
import WdaDivider from '../Components/Tools/WdaDivider';
import WdaForm from '../Components/Tools/WdaForm';
import { Sidebar } from './Sidebar';

export interface IAppProps {
}

export default function DeliverySettings (props: IAppProps) {
  return (
    <div>
      <Sidebar onClick={function (): void {
      throw new Error('Function not implemented.');
      } }/>
      
          <Center>
            <Text as='b' fontSize='5xl'>Nu's Wood Fire Grill</Text>
          </Center>

          <Center>
            <Text as='b' fontSize='4xl'>Delivery Settings</Text>
          </Center>

          <WdaDivider maxWidth = "80%"/>         
        
          <WdaForm formTitle = {"Minimum Delivery Order Value (In Cents)"} formType = "money"/>
          <WdaForm formTitle = {"Delivery Postcodes"} formType = "dropdown" formPlaceholder = "Select zipcode" dropDownCollection = {['1','2','3','4']}/>
          <WdaForm formTitle = {"Drive Yello Store Reference"} formType = "default"/>
          <WdaForm formTitle = {"DoorDash Drive Enabled"} formType = "switch"/>
          <WdaForm formTitle = {"Send pre-order window start time to Doordash Drive as pickup time or delivery time?"} formType = "dropdown" formPlaceholder = "Send pre-order window start time to Doordash Drive as pickup time or delivery time?" dropDownCollection = {['Pickup Time','Delivery Time']}/>
          <WdaDivider maxWidth='80%'/>   
          <WdaForm formTitle = {"Minimum Order Value For Free Delivery (In Cents)"} formType = "money"/>
          <WdaForm formTitle = {"Delivery Fee (In Cents)"} formType = "money"/>
          <WdaForm formTitle = {"Always Charge Delivery Fee"} formType = "switch"/>
        
    </div>
  );
}
