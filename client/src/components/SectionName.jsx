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
    const val1 = mySecRef1.current.getBoundingClientRect().top;
    const val2 = mySecRef2.current.getBoundingClientRect().top;

    if (val1 <=250 && val2 < 600) {
      secFunc(true);
    }

    if (val2 <= 100 || val1 > 650) {
      secFunc(false);
    }

  })

  return (
    <>
      <Box className='section-name-container'>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="100%">
          <Box ref={mySecRef1} className='markSec1'></Box>
          <Text className="section-name-text-wrapper" height="25vh" padding="0.5rem">
            {showItem && <span className='section-name-text new-text'>{props.name}</span>}
          </Text>
          <Box ref={mySecRef2} className='markSec2'></Box>
        </Flex>
      </Box>
    </>
  )
}

export const MemoizedSectionName = React.memo(SectionName);
