import { Box } from '@chakra-ui/react'
import React, {useEffect, useRef} from 'react'
import img1 from "../images/lp1.jfif"
import img2 from "../images/lp2.jfif"
import img3 from "../images/lp3.jfif"

export const ProjectImages = () => {

  const myRef = useRef();
  useEffect(()=>{
    // myRef.current.style.border = "2px solid green";
    const image1 = document.getElementById("img1");
  }, []);

  // const image2 = document.getElementById("img2");

  // window.addEventListener("scroll", ()=>{
  //   let val = window.scrollY;
  //   image1.style.left += -(0.70 * val) + "px";
  //   image2.style.left += -(0.95 * val) + "px"

  //   console.log("hare krishna");
  // })

  

  return (
    <>
        <Box className="project-images-container">
          <img ref={myRef} src={img1} className="project-images-img" id='img1' alt='img1'></img>
          <img src={img2} className="project-images-img" id='img2' alt='img2'></img>
          {/* <img src={img3} className="project-images-img" id='img3'></img> */}
        </Box>
    </>
  )
}
