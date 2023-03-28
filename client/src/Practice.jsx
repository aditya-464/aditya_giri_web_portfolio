import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from "./images/img1.webp"
import img2 from "./images/img2.webp"
import img3 from "./images/img3.webp"

export const Practice = () => {

  

  const btnFunc = ()=>{
    const btnDiv = document.querySelector(".btn");
    
      btnDiv.addEventListener("click", ()=>{
        let lineDiv = document.querySelector(".line");
        const val = lineDiv.offsetTop;
        console.log(lineDiv.getBoundingClientRect());
      })
   
  }

  return (
    <>
      <Box className='practice-container' >

        <Text className='new-text'>Hare Krishna!</Text>

        <div className='line'></div>
        <Box className='btn' onClick={btnFunc} width="100px">CLick me</Box>
        <div className='line2'></div>
      </Box>

      <Box className='img-container'>
        <img src={img1} alt="image"></img>
        <img src={img2} alt="image"></img>
        <img src={img3} alt="image"></img>
      </Box>
    </>
  )
}
