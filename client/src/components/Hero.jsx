import React, { useEffect, useState } from 'react'
import heroIcon from "../images/AGhero.svg"
import { Box } from '@chakra-ui/react'
export const Hero = () => {
  const [showItem, setShowItem] = useState(false);
  const heroFunc = (value) => {
    setShowItem(value);
  }
  useEffect(() => {
    setTimeout(() => {
      heroFunc(true);
    }, 250);
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
                <span className='dot'> . </span>
                <span>UI/UX Designer</span>
              </Box>
            </Box>
            <Box className='hero-icon'>
              <img loading='eager' src={heroIcon} alt="HeroIcon" />
            </Box>
          </Box>}
      </Box>
    </>
  )
}