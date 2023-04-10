import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types';

export const ProjectDetails = (props) => {
    const { number, title, techstack, description, img1, img2 } = props;

    return (
        <>
            <Box className='project-details-outer-container'>
                <Box className="project-details-container">
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
                        <button className='project-details-btn animate-text'>
                            <NavLink to="/projDetail">View More</NavLink>
                        </button>
                    </Box>
                </Box>
                <Box className="project-images-container">
                    <img src={img1} className="project-images-img" id='img1' alt='img1'></img>
                    <img src={img2} className="project-images-img" id='img2' alt='img2'></img>
                </Box>
            </Box>
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
