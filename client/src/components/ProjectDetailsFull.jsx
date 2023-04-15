import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, Button, Text } from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa";
import img1 from "../images/pap_mob2.jpg"
import img2 from "../images/pap_lap.jpg"
import img3 from "../images/pap_tab.jpg"
import img4 from "../images/txt_mob.jpg"
import img5 from "../images/txt_lap.jpg"
import img6 from "../images/txt_tab.jpg"
import img7 from "../images/race_lap1.jpg"
import img8 from "../images/race_mob.jpg"
import img9 from "../images/race_lap2.jpg"
import MemoizedSectionName from "./SectionName"
import { details as contentArray } from "./ContentArray"
export const ProjectDetailsFull = () => {
    const [showContent, setShowContent] = useState(false);
    const [viewport, setViewport] = useState({
        width: "", height: ""
    })
    const [showItem, setShowItem] = useState({
        text: false
    });
    const navigate = useNavigate();
    const { value } = useSelector((state) => state.projInd);
    const mark1Ref = useRef(null);
    const mark2Ref = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    useEffect(() => {
        let w = window.innerWidth;
        let h = window.innerHeight;
        setViewport({
            width: w, height: h
        })
        setTimeout(() => {
            setShowContent(true);
        }, 1200);
    }, [])
    window.addEventListener("scroll", () => {
        if (!mark1Ref.current || !mark2Ref.current || !img1Ref.current || !img2Ref.current || !img3Ref.current) {
            return;
        }
        const val1 = mark1Ref.current.getBoundingClientRect().top;
        const val2 = mark2Ref.current.getBoundingClientRect().top;

        if (val1 <= 0.3 * viewport.height) {
            img1Ref.current.classList.add("imgFull1-animate-specific");
            img2Ref.current.classList.add("imgFull2-animate-specific");
            img3Ref.current.classList.add("imgFull3-animate-specific");
        }
        if (val2 <= 0.3 * viewport.height) {
            setShowItem({ ...showItem, text: true });
        }
    })
    return (
        <>
            <Box className="project-details-full-container">
                <Button className='project-details-full-back' onClick={() => navigate(-1)}><FaArrowLeft ></FaArrowLeft></Button>
                {showContent && <>
                    <Box className='project-details-full-hero'>
                        <Text className='project-details-full-title'><span className='text-animate'>{contentArray[value].projectTitle}</span></Text>
                        <Text className='project-details-full-subtitle'><span className='text-animate'>{contentArray[value].projectTechstack}</span></Text>
                    </Box>
                    <MemoizedSectionName name="Images"></MemoizedSectionName>
                    <Box className='proj-details-full-image-container'>
                        <Box ref={mark1Ref} className='projFullMark1'></Box>
                        {(value === 0) ? <Box className='proj-details-full-image-content'>
                            <img src={img1} ref={img1Ref} className='imgFull1' alt='img1'></img>
                            <img src={img2} ref={img2Ref} className='imgFull2' alt='img2'></img>
                            <img src={img3} ref={img3Ref} className='imgFull3' alt='img3'></img>
                        </Box> : (value === 1) ? <Box className='proj-details-full-image-content'>
                            <img src={img4} ref={img1Ref} className='imgFull1' alt='img1'></img>
                            <img src={img5} ref={img2Ref} className='imgFull2' alt='img2'></img>
                            <img src={img6} ref={img3Ref} className='imgFull3' alt='img3'></img>
                        </Box> : <Box className='proj-details-full-image-content'>
                            <img src={img7} ref={img1Ref} className='imgFull1' alt='img1'></img>
                            <img src={img8} ref={img2Ref} className='imgFull2' alt='img2'></img>
                            <img src={img9} ref={img3Ref} className='imgFull3' alt='img3'></img>
                        </Box>}
                    </Box>
                    <MemoizedSectionName name="Description"></MemoizedSectionName>
                    <Box className='project-details-full-description-container'>
                        <Box ref={mark2Ref} className='projFullMark2'></Box>
                        {showItem.text && <Text className='project-details-full-description'>
                            <span>{contentArray[value].projectLongDesc}</span></Text>}
                    </Box>
                </>}

            </Box >
        </>
    )
}
var MemoizedProjectDetailsFull;
export default MemoizedProjectDetailsFull = React.memo(ProjectDetailsFull);