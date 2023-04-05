import { Box } from '@chakra-ui/react'
import React from 'react'
export const ProjectImages = (props) => {

  return (
    <>
        <Box className="project-images-container">
          <img src={props.img1} className="project-images-img" id='img1' alt='img1'></img>
          <img src={props.img2} className="project-images-img" id='img2' alt='img2'></img>
        </Box>
    </>
  )
}
