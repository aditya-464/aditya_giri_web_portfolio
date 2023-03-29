import React from 'react'
import heroIcon from "../images/agPortfolioWEBP.webp"
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <>
      <Box className='hero-container'>
        <Flex className="hero-content" justifyContent="space-between" alignItems="center">
          <Box className='hero-text'>
            <Text>
              Aditya Giri
            </Text>
            <HStack fontSize="35px" spacing="2.5rem">
              <Text>Full Stack Developer</Text>
              <Text> . </Text>
              <Text>UI/UX Designer</Text>
            </HStack>
          </Box>

          <Box className='hero-icon'>
            <img src={heroIcon} alt="HeroIcon" />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
