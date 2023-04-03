import React, { useEffect, useState } from 'react'
import heroIcon from "../images/agPortfolioWEBP.webp"
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

export const Hero = () => {

  const [showItem, setShowItem] = useState(false);

  const heroFunc = (value) => {
    setShowItem(value);
  }
  
  useEffect(() => {
    setTimeout(() => {
      heroFunc(true);
    }, 1000)
  }, []);


  return (
    <>
      <Box className='hero-container'>
        {showItem && <Flex className="hero-content" justifyContent="space-between" alignItems="center">
          <Box className='hero-text'>
            <span className='animate-hero-text'>Aditya Giri</span>
            <HStack fontSize="35px" spacing="2.5rem" className='animate-hero-text'>
              <Text>Full Stack Developer</Text>
              <Text> . </Text>
              <Text>UI/UX Designer</Text>
            </HStack>
          </Box>

          <Box className='hero-icon'>
            <img src={heroIcon} alt="HeroIcon" />
          </Box>
        </Flex>}
      </Box>
    </>
  )
}
