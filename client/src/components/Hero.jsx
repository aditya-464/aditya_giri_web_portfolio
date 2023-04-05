import React, { useEffect, useRef, useState } from 'react'
import heroIcon from "../images/AGhero.svg"
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

export const Hero = () => {
  const [showItem, setShowItem] = useState(false);
  const [dotVal, setDotVal] = useState(false);

  const heroFunc = (value) => {
    setShowItem(value);
  }
  useEffect(() => {
    setTimeout(() => {
      heroFunc(true);
    }, 100);

    const width = window.innerWidth;
    if (width <= 768) {
      setDotVal(true);
    }
  }, []);

  return (
    <>
      <Box className='hero-container' id="hero">
        {showItem &&
          <Box className="hero-content">
            <Box className='hero-text'>
              <span className='hero-text-name animate-hero-text'>Aditya Giri</span>
              <br></br>
              <Box className='hero-text-job animate-hero-text'>
                <span>Full Stack Developer</span>
                {(dotVal === true) ? <span className='dot'> & </span> : <span className='dot'> . </span>}
                <span>UI/UX Designer</span>
              </Box>
            </Box>
            <Box className='hero-icon'>
              <img src={heroIcon} alt="HeroIcon" />
            </Box>
          </Box>}
      </Box>
    </>
  )
}
