import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
export const About = () => {
  const [showItem, setShowItem] = useState(false);
  const [viewport, setViewport] = useState({
    width: "", height: ""
  })
  const markRef1 = useRef(null);
  const aboutFunc = (value) => {
    setShowItem(value);
  }
  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    setViewport({
      width: w, height: h
    })
  }, [])
  window.addEventListener("scroll", () => {
    if (!markRef1.current) {
      return;
    }
    const val1 = markRef1.current.getBoundingClientRect().top;
    if (val1 <= 0.5 * viewport.height) {
      aboutFunc(true);
    }
  })
  return (
    <>
      <Box className="about-container" id='about'>
        <Box ref={markRef1} className='markAbout1'></Box>
        {showItem && <Box className='about-content-wrapper'>
          <Text className="about-content">
            "  A web developer specializing in creating beautiful and functional websites for businesses. Utilizing programming expertise to deliver customized solutions that meet unique client needs. Dedicated to bringing visions to life! ❤️"
          </Text>
        </Box>}
      </Box>
    </>
  )
}
var MemoizedAbout;
export default MemoizedAbout = React.memo(About);
