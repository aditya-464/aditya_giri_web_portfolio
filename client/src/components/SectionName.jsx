import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const SectionName = () => {
  return (
    <>
        <Box className='section-name-container'>
          <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
            <Text className='section-name-text'>Projects</Text>
          </Flex>
        </Box>
    </>
  )
}
