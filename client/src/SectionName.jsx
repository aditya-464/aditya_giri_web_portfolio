import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const SectionName = () => {
  return (
    <>
        <Box className='section-name-container'>
          <Flex justifyContent="center" alignItems="center" position="relative" top="30rem">
            <Text className='section-name-text'>Projects</Text>
          </Flex>
        </Box>
    </>
  )
}
