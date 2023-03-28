import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import navIcon from "./agPortfolioWEBP.webp"

export const Navbar = () => {
  return (
    <>
        <Flex className='navbar-container' justifyContent="flex-end" alignItems="center">
            <Box className='navbar-icon-box'>
                <img src={navIcon} alt="NavIcon"></img>
            </Box>
            <HStack className='navbar-data-box' spacing="7.2rem" alignItems="center">
                <Text className='navbar-text'>About</Text>
                <Text className='navbar-text'>Projects</Text>
                <Text className='navbar-text'>Contact</Text>
            </HStack>
        </Flex>
    </>
  )
}
