import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <Box className='footer-container' id='footer'>
        <Box className='footer-wrapper'>
          <Text className='footer-icon'>
            <FaRegCopyright></FaRegCopyright>
          </Text>
          <Text className='footer-text'>2023 <span> <a href="#hero">Aditya Giri Portfolio</a></span></Text>
        </Box>
      </Box>
    </>
  )
}
var MemoizedFooter;
export default MemoizedFooter = React.memo(Footer);
