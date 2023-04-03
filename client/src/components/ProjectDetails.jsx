import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';


export const ProjectDetails = (props) => {

    const { number, title, techstack, description, img1, img2 } = props;

    return (
        <>
            <Flex flexDirection="row" width="100vw" height="100vh">
                <Box className="project-details-conatiner">
                    {/* <Box className='mark'></Box> */}
                    <span className="project-number animate-text">{number}</span>
                    <Box className="project-details-content">
                        <Box className='project-wrapper-box'>
                            <span className="project-title animate-text">{title}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-techstack animate-text'>{techstack}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-description animate-text'>{description}</span>
                        </Box>
                        <button className='project-details-btn animate-text'>View More</button>
                    </Box>
                    {/* <Box className='mark2'></Box> */}
                </Box>

                <Box className="project-images-container">
                    <img src={img1} className="project-images-img" id='img1' alt='img1'></img>
                    <img src={img2} className="project-images-img" id='img2' alt='img2'></img>
                </Box>
            </Flex>
        </>
    )
}

ProjectDetails.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    techstack: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

ProjectDetails.defaultProps = {
    number: "01",
    title: "Title",
    techstack: "Techstack",
    description: "Description",
}

export const MemoizedProjectDetails = React.memo(ProjectDetails);
