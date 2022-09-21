import { faker } from '@faker-js/faker';
import WdaDivider from '../Components/Tools/WdaDivider';
import CategoryEditRowTable from '../Components/CategoryComponents/CategoryEditRowTable';

export interface IAppProps {
    catTitle: string
}

export default function CategoryRowCollection (props: IAppProps) {

    let rowCollec = []

    for (let i = 0; i < 9; i++){
        rowCollec.push({
            img : faker.image.food(30,30,true),
            title : faker.lorem.words(3)
        })
    }
  return (
    <div  style={{paddingLeft: "10%",paddingRight: "10%", paddingTop: "1em"}}>
        
        <CategoryEditRowTable rowCollection={rowCollec} catTitle= {props.catTitle}/>
        <div style={{paddingTop: "1em"}}>
            <WdaDivider maxWidth={'80%'}></WdaDivider>
        </div>
        <CategoryEditRowTable rowCollection={rowCollec} catTitle= {"The Grounds Brunch"} catSubTitle={`Weekends only : Please ask your waiter for more details.`}/>
        <div style={{paddingTop: "1em"}}>
            <WdaDivider maxWidth={'80%'}></WdaDivider>
        </div>
        <CategoryEditRowTable rowCollection={rowCollec} catTitle= {"Kids Menu"} catSubTitle={`Kids under the age of 10`}/>
     
    </div>
  );
}
