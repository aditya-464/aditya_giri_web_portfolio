import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'


export const ProjectDetails = () => {
    return (
        <>
            <Box className="project-details-conatiner">

                <span className="project-number animate-text">01</span>
                <Box className="project-details-content">
                    <Box className='project-wrapper-box'>
                        <span className="project-title animate-text">Papyrus</span>
                    </Box>
                    <Box className='project-wrapper-box'>
                        <span className='project-techstack animate-text'>React Js . Node Js . Express Js . MongoDB</span>
                    </Box>
                    <Box className='project-wrapper-box'>
                        <span className='project-description animate-text'>Web application to post blogs and news
                            articles, along with relevant images</span>
                    </Box>
                    <button className='project-details-btn animate-text'>View More</button>
                </Box>

            </Box>
        </>
    )
}
