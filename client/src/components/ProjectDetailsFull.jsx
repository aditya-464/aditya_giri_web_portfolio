import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux"
import { Box, Button, Text } from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa";
import img1 from "../images/pap_mob2.png"
import img2 from "../images/pap_lap.png"
import img3 from "../images/pap_tab.png"
import img4 from "../images/txt_mob.png"
import img5 from "../images/txt_lap.png"
import img6 from "../images/txt_tab.png"
import MemoizedSectionName from "./SectionName"
import { details as contentArray } from "./ContentArray"

const Comp1 = () => {
    return (
        <Box className='proj-details-full-image-content'>
            <img src={img1} className='imgFull1' alt='img1'></img>
            <img src={img2} className='imgFull2' alt='img2'></img>
            <img src={img3} className='imgFull3' alt='img3'></img>
        </Box>
    )
}

const Comp2 = () => {
    return (
        <Box className='proj-details-full-image-content'>
            <img src={img4} className='imgFull1' alt='img1'></img>
            <img src={img5} className='imgFull2' alt='img2'></img>
            <img src={img6} className='imgFull3' alt='img3'></img>
        </Box>
    )
}

// const Comp3 = () => {
//     return (
//         <Box className='proj-details-full-image-content'>
//             <img src={img7} className='imgFull1' alt='img1'></img>
//             <img src={img8} className='imgFull2' alt='img2'></img>
//             <img src={img9} className='imgFull3' alt='img3'></img>
//         </Box>
//     )
// }


export const ProjectDetailsFull = () => {

    const [showContent, setShowContent] = useState(false);
    const [viewport, setViewport] = useState({
        width: "", height: ""
    })
    const [showItem, setShowItem] = useState({
        image: false, text: false
    });

    const { value } = useSelector((state) => state.projInd);

    const mark1Ref = useRef(null);
    const mark2Ref = useRef(null);

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
        if (mark1Ref == null || mark2Ref == null) {
            return;
        }
        const val1 = mark1Ref.current.getBoundingClientRect().top;
        const val2 = mark2Ref.current.getBoundingClientRect().top;

        if (val1 <= 0.3 * viewport.height) {
            setShowItem({ ...showItem, image: true });
        }
        if (val2 <= 0.3 * viewport.height) {
            setShowItem({ ...showItem, text: true });
        }
    })

    

    return (
        <>
            <Box className="project-details-full-container">
                <Button className='project-details-full-back'><FaArrowLeft ></FaArrowLeft></Button>
                {showContent && <>
                    <Box className='project-details-full-hero'>
                        <Text className='project-details-full-title'><span className='text-animate'>{contentArray[value].projectTitle}</span></Text>
                        <Text className='project-details-full-subtitle'><span className='text-animate'>{contentArray[value].projectTechstack}</span></Text>
                    </Box>
                    <MemoizedSectionName name="Images"></MemoizedSectionName>
                    <Box className='proj-details-full-image-container'>
                        <Box ref={mark1Ref} className='projFullMark1'></Box>
                        {showItem.image && <Comp1/>}
                    </Box>
                    <MemoizedSectionName name="Description"></MemoizedSectionName>
                    <Box className='project-details-full-description-container'>
                        <Box ref={mark2Ref} className='projFullMark2'></Box>
                        {showItem.text && <Text className='project-details-full-description'>
                            <span>{contentArray[value].projectLongDesc}</span></Text>}
                    </Box>
                </>}

            </Box>
        </>
    )
}


var MemoizedProjectDetailsFull;
export default MemoizedProjectDetailsFull = React.memo(ProjectDetailsFull);
