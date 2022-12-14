import { Button, ButtonGroup, Spacer} from '@chakra-ui/react';
import * as React from 'react';
import Header from '../Components/Header/Header';
import WdaDivider from '../Components/Tools/WdaDivider';
import WdaForm from '../Components/Tools/WdaForm';
export interface IAppProps {
}

export default function DeliverySettings (props: IAppProps) {
  return (
    <div>
          <Header subtitle={'Delivery Settings'}></Header>       
        
          <WdaForm formTitle = {"Minimum Delivery Order Value (In Cents)"} formType = "money"/>
          <WdaForm formTitle = {"Delivery Postcodes"} formType = "dropdown" formPlaceholder = "Select zipcode" dropDownCollection = {['1','2','3','4']}/>
          <WdaForm formTitle = {"Drive Yello Store Reference"} formType = "default"/>
          <WdaForm formTitle = {"DoorDash Drive Enabled"} formType = "switch"/>
          <WdaForm formTitle = {"Send pre-order window start time to Doordash Drive as pickup time or delivery time?"} formType = "dropdown" formPlaceholder = "Send pre-order window start time to Doordash Drive as pickup time or delivery time?" dropDownCollection = {['Pickup Time','Delivery Time']}/>
          <WdaDivider maxWidth='80%'/>   
          <WdaForm formTitle = {"Minimum Order Value For Free Delivery (In Cents)"} formType = "money"/>
          <WdaForm formTitle = {"Delivery Fee (In Cents)"} formType = "money"/>
          <WdaForm formTitle = {"Always Charge Delivery Fee"} formType = "switch"/>

          <div style={{paddingTop: "1.5em", paddingBottom: "1.5em" , maxWidth: "80%" , marginRight: "auto", marginLeft: "auto"}}>
            <ButtonGroup>
              <Button backgroundColor={"blue.500"} color={"white"} size='lg' width='6em'>Save</Button>
              <Spacer/>
              <Button backgroundColor={"red.500"} color={"white"} size='lg' width='6em'>Cancel</Button>
            </ButtonGroup>
          </div>
      
    </div>
  );
}
