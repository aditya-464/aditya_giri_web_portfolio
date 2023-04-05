import { Box, Text } from '@chakra-ui/react'
import React, {useState} from 'react'

export const Practice2 = () => {
    const [showItem, setShowItem] = useState(false);
    window.addEventListener("scroll", ()=>{
        const box = document.querySelector(".mark");
        let val = box.getBoundingClientRect().top;
        if(val<=100){
            setShowItem(true);
        }
        else{
            setShowItem(false);
        }
    })

  return (
    <>
        <Box className='prac-outer'>
            <Box className='mark'></Box>
            {showItem && <Box className='prac-inner'>
            <Text> Hello world!</Text>
            </Box>}
            <br></br>
            {showItem && <Box className='prac-inner'>
            <Text> Hello world again!</Text>
            </Box>}
        </Box>
    </>
  )
}