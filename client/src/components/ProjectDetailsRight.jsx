import React from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeValue } from '../redux/projectIndex';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types';
export const ProjectDetailsRight = (props) => {
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
            <Box className='project-details-outer-container-right'>
                <Box className="project-images-container-right">
                    <LazyLoadImage src={img} className="project-images-img" id='img1' alt='img1'></LazyLoadImage>
                </Box>
                <Box className="project-details-container text-align-right">
                    <span className="project-number animate-text-right  animate-specific-mobile-text">{number}</span>
                    <Box className="project-details-content-right  animate-specific-mobile-text">
                        <Box className='project-wrapper-box'>
                            <span className="project-title animate-text-right">{title}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-techstack animate-text-right'>{techstack}</span>
                        </Box>
                        <Box className='project-wrapper-box'>
                            <span className='project-description animate-text-right'>{description}</span>
                        </Box>
                        <NavLink to="/projDetail"><button className='project-details-btn animate-text-right' onClick={handleDispatch}>View More</button></NavLink>
                    </Box>
                </Box>
            </Box>
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