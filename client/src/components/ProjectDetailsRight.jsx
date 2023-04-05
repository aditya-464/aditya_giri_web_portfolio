import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';


export const ProjectDetailsRight = (props) => {
    const { number, title, techstack, description, img1, img2 } = props;

    return (
        <>
            <Flex flexDirection="row" width="100vw" height="100vh">
                <Box className="project-images-container-right">
                    <img src={img1} className="project-images-img" id='img1' alt='img1'></img>
                    <img src={img2} className="project-images-img" id='img2' alt='img2'></img>
                </Box>
                <Box className="project-details-conatiner text-align-right">
                    <span className="project-number animate-text-right">{number}</span>
                    <Box className="project-details-content-right">
                        <Box className='project-wrapper-box'>
                            <span className="project-title animate-text-right">{title}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-techstack animate-text-right'>{techstack}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-description animate-text-right'>{description}</span>
                        </Box>
                        <button className='project-details-btn animate-text-right'>View More</button>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}
ProjectDetailsRight.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    techstack: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
ProjectDetailsRight.defaultProps = {
    number: "01",
    title: "Title",
    techstack: "Techstack",
    description: "Description",
}
export const MemoizedProjectDetailsRight = React.memo(ProjectDetailsRight);
