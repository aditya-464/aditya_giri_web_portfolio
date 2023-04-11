import React from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeValue } from '../redux/projectIndex';
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types';

export const ProjectDetails = (props) => {
    const dispatch = useDispatch();

    const { number, title, techstack, description, img } = props;

    const handleDispatch = () => {
        if (number === "01") {
            dispatch(changeValue(0));
        }
        else if (number === "02") {
            dispatch(changeValue(1));
        }
        else {
            dispatch(changeValue(2));
        }
    }

    return (
        <>
            <Box className='project-details-outer-container'>
                <Box className="project-details-container">
                    <span className="project-number animate-text  animate-specific-mobile-text">{number}</span>
                    <Box className="project-details-content  animate-specific-mobile-text">
                        <Box className='project-wrapper-box'>
                            <span className="project-title animate-text">{title}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-techstack animate-text'>{techstack}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-description animate-text'>{description}</span>
                        </Box>
                        <button className='project-details-btn animate-text' onClick={handleDispatch}>
                            <NavLink to="/projDetail">View More</NavLink>
                        </button>
                    </Box>
                </Box>
                <Box className="project-images-container">
                    <img src={img} className="project-images-img" id='img1' alt='img1'></img>
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
