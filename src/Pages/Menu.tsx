import { AddIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Text } from '@chakra-ui/react';
import { supabase } from '../Supabase/SupabaseClient'
import * as React from 'react';
import Header from '../Components/Header/Header'
import MenuCategory from '../Components/MenuComponents/MenuCategory';
import WdaForm from '../Components/Tools/WdaForm';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export default function Menu (props: IAppProps) {

    let dopts : string[] = ["Delivery","Pick-up", "Dine-in"]
   
    const [d, setD] = React.useState<any | null>(null);

    React.useEffect(() =>{
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("category")
                .select()
                .order('id', { ascending: true })
            if (data){
                setD(data)
            }
            if (error){
                console.log(error)
                setD(null)
            }
        }
        fetchData()
    })

  return (
    <div>
        <Header subtitle = "Menu"/>
        <WdaForm formTitle = {""} formType = "search" formPlaceholder='Search All Items'/>

        {
            (d !== null) ?
                d.map( (x : any) =>{
                    return(
                        <MenuCategory id = {x.id} title = {x.title} dineOptions = {dopts} img = {{src: x.img, alt: x.imgAlt}} location = {x.location}  status = {x.status}/>
                    )
                })
             :
            <>
                <Text>Nothing to see here lol</Text>
            </>
        }
        
        <div style = {{paddingLeft:"10%", paddingTop: "1em"}}>
            <Link to={'Category/new'}>
            <HStack paddingLeft={.5}>
                <Box  bg={"White"} borderColor='black' borderWidth='1px' >
                    <Center padding={1}>
                        <AddIcon/>
                    </Center>
                </Box>
                <Box>
                    <Center>
                        <Text as = "b">Create New Category</Text>
                    </Center>
                </Box>
            </HStack>
            </Link>
        </div>
        
    </div>
  );
}
