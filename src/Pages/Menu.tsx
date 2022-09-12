import * as React from 'react';
import Headers from '../Components/Header/Header'
import MenuCategory from '../Components/MenuComponents/MenuCategory';
import WdaForm from '../Components/Tools/WdaForm';

export interface IAppProps {
}

export default function Menu (props: IAppProps) {
    let img1 = {src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*", alt: "Lunch Img"}
    let img2 = {src: "https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg", alt: "Drinks Img"}
    let img3 = {src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574", alt: "Food Img"}
    let dopts : string[] = ["delivery","pickUp", "dineIn"]
  return (
    <div>
        <Headers subtitle = "Menu"/>
        <WdaForm formTitle = {""} formType = "search" formPlaceholder='Search All Items'/>
        <MenuCategory title = "Lunch" subtitle='1234' img = {img1} dineOptions = {dopts}/>
        <MenuCategory title = "Drinks" subtitle='1234' img = {img2} dineOptions = {dopts}/>
        <MenuCategory title = "Food (Pickup/Delivery)" subtitle='1234' img = {img3} dineOptions = {dopts}/>
    </div>
  );
}
