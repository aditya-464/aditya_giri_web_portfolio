import { Box } from '@chakra-ui/react'
import React from 'react'
export const ProjectImages = (props) => {

  // const myRef = useRef();
  // useEffect(()=>{
  //   myRef.current.style.border = "2px solid green";
  //   const image1 = document.getElementById("img1");
  // }, []);

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
          <img src={props.img1} className="project-images-img" id='img1' alt='img1'></img>
          <img src={props.img2} className="project-images-img" id='img2' alt='img2'></img>
          {/* <img src={img3} className="project-images-img" id='img3'></img> */}
        </Box>
    </>
  )
}
