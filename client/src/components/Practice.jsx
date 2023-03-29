import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from "../images/img1.webp"
import img2 from "../images/img2.webp"
import img3 from "../images/img3.webp"
import { Parallax } from "react-parallax"

export const Practice = () => {


  window.addEventListener("DOMContentLoaded", () => {

  })
  const image1 = document.getElementById("img1");
  const image2 = document.getElementById("img2");
  const image3 = document.getElementById("img3");


  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    image1.style.left = -(value * 1.25) + "px";
    image2.style.left = -(value * 1) + "px";
    image3.style.left = -(value * 0.75) + "px";
  })




  // const btnFunc = () => {
  //   const btnDiv = document.querySelector(".btn");

  //   btnDiv.addEventListener("click", () => {
  //     let lineDiv = document.querySelector(".line");
  //     const val = lineDiv.offsetTop;
  //     console.log(lineDiv.getBoundingClientRect());
  //   })

  // }

  return (
    <>
      <Box className='practice-container' >

        <Text className='new-text'>Hare Krishna!</Text>

        {/* <div className='line'></div>
        <Box className='btn' onClick={btnFunc} width="100px">CLick me</Box>
        <div className='line2'></div> */}


        {/* 
        <Box className='outer'>
          <Box className='img-container' >
            <img src={img1} id="img1" alt="image_laptop"></img>
            <img src={img2} id="img2" alt="image_laptop"></img>
            <img src={img3} id="img3" alt="image_laptop"></img>
          </Box>
        </Box> */}

        <Box width="900px" height="900px" border="2px solid red">
          <Parallax className='p-img' bgImage={img1} strength={500}>

          </Parallax>

        </Box>

      </Box>

    </>
  )
}
