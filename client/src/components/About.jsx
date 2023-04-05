import { Box, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

export const About = () => {
  const [showItem, setShowItem] = useState(false);
  const markRef1 = useRef(null);
  const markRef2 = useRef(null);
  const aboutFunc = (value)=>{
    setShowItem(value);
  }
  window.addEventListener("scroll", () => {
    if(!markRef1.current || !markRef2.current){
      return;
    }
    const val1 = markRef1.current.getBoundingClientRect().top;
    const val2 = markRef2.current.getBoundingClientRect().top;
    if(val1<=400){
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
        <Box ref={markRef2} className='markAbout2'></Box>
      </Box>
    </>
  )
}
var MemoizedAbout;
export default MemoizedAbout = React.memo(About);
