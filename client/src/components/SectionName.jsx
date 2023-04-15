import { Box, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
export const SectionName = (props) => {
  const [showItem, setShowItem] = useState(false);
  const [viewport, setViewport] = useState({
    width: "", height: ""
  })
  const mySecRef1 = useRef(null);
  function secFunc(value) {
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
    if (!mySecRef1.current) {
      return;
    }
    const val1 = mySecRef1.current.getBoundingClientRect().top;
    if (val1 <= 0.5*viewport.height) {
      secFunc(true);
    }
  })
  return (
    <>
      <Box className='section-name-container' id='section-name'>
        <Box className='section-name-wrapper'>
          <Box ref={mySecRef1} className='markSec1'></Box>
          <Text className="section-name-text-wrapper">
            {showItem && <span className='section-name-text new-text'>{props.name}</span>}
          </Text>
        </Box>
      </Box>
    </>
  )
}
var MemoizedSectionName;
export default MemoizedSectionName = React.memo(SectionName);