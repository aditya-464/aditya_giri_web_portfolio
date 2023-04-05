import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRef } from 'react'

export const SectionName = (props) => {
  const [showItem, setShowItem] = useState(false);
  const mySecRef1 = useRef(null);
  const mySecRef2 = useRef(null);
  function secFunc(value) {
    setShowItem(value);
  }
  window.addEventListener("scroll", () => {
    if(!mySecRef1.current || !mySecRef2.current){
      return;
    }
    const val1 = mySecRef1.current.getBoundingClientRect().top;
    const val2 = mySecRef2.current.getBoundingClientRect().top;
    if (val1 <=300 && val2 < 600) {
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
          <Box ref={mySecRef2} className='markSec2'></Box>
        </Box>
      </Box>
    </>
  )
}
var MemoizedSectionName;
export default MemoizedSectionName = React.memo(SectionName);
