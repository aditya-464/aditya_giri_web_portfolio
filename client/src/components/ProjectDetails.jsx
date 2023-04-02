import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';


export const ProjectDetails = (props) => {
    const [showItems, setShowItems] = useState(false);
    const {number, title, techstack, description} = props;

    window.addEventListener("scroll", () => {
        const component = document.querySelector(".mark");
        const component2 = document.querySelector(".mark2");

        const val = component.getBoundingClientRect().top;
        const val2 = component2.getBoundingClientRect().top;

        if(val2<=150 || val>=600){
            setShowItems(false);
        }
        if ((val>=40 && val <= 96)) {
            setShowItems(true);
        }
    });


    return (
        <>
            <Box className="project-details-conatiner text-align-right">
                <Box className='mark'></Box>
                {showItems && <span className="project-number animate-text">{number}</span>}
                {showItems && <Box className="project-details-content">
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
                </Box>}
                <Box className='mark2'></Box>

            </Box>
        </>
    )
}

ProjectDetails.propTypes = {
    number : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    techstack : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

ProjectDetails.defaultProps = {
    number : "01",
    title : "Title",
    techstack : "Techstack",
    description : "Description",
}
