import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'

export const Practice = () => {
  const cmp101Ref = useRef(null);
  window.addEventListener("scroll",()=>{
    console.log(cmp101Ref.current.getBoundingClientRect().top);
  })
  const newDay = (val)=>{
    return cmp101Ref;
  }

  return (
    <>
      <Box className='practice-container' >
        <Text className='new-text'>Hare Krishna!</Text>
        <Box className='markUp' ref={newDay()}></Box>
        <Box width="100px" height="100px" backgroundColor="#8C7C74"></Box>
      </Box>
    </>
  )
}
