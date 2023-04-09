import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa";
import img2 from "../images/pap_lap.png"
import img1 from "../images/pap_mob2.png"
import img3 from "../images/pap_tab.png"
import MemoizedSectionName from "./SectionName"



export const ProjectDetailsFull = () => {

    const [viewport, setViewport] = useState({
        width: "", height: ""
    })
    const [showItem, setShowItem] = useState({
        image: false, text: false
    });

    const imgContainerRef = useRef(null);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const imgRef4 = useRef(null);

    const mark1Ref = useRef(null);
    const mark2Ref = useRef(null);



    useEffect(() => {
        let w = window.innerWidth;
        let h = window.innerHeight;

        setViewport({
            width: w, height: h
        })

    }, [])


    window.addEventListener("scroll", () => {
        // if (!imgContainerRef || !imgRef1 || !imgRef2 || !imgRef3 || !imgRef4) {
        //     return;
        // }

        // const imgContainerHeight = imgContainerRef.current.getBoundingClientRect().top;


        // let val = window.scrollY;

        // imgRef1.current.style.top = val * -0.85 + "px";
        // imgRef2.current.style.top = val * -0.95 + "px";
        // imgRef3.current.style.top = val * -0.75 + "px";
        // imgRef4.current.style.top = val * -0.65 + "px";

        if (!mark1Ref || !mark2Ref) {
            return;
        }

        const val1 = mark1Ref.current.getBoundingClientRect().top;
        const val2 = mark2Ref.current.getBoundingClientRect().top;

        if (val1 <= 0.25 * viewport.height) {
            setShowItem({ ...showItem, image: true });
        }
        if (val2 <= 0.25 * viewport.height) {
            setShowItem({ ...showItem, text: true });
        }



    })

    return (
        <>
            <Box className="project-details-full-container">
                <Button className='project-details-full-back'><FaArrowLeft ></FaArrowLeft></Button>
                <Box className='project-details-full-hero'>
                    <Text className='project-details-full-title'><span className='text-animate'>Papyrus</span></Text>
                    <Text className='project-details-full-subtitle'><span className='text-animate'>Web application to post blogs and news articles, along with relevant images</span></Text>
                </Box>
                <MemoizedSectionName name="Images"></MemoizedSectionName>
                <Box className='proj-details-full-image-container'>
                    <Box ref={mark1Ref} className='projFullMark1'></Box>
                    {showItem.image && <Box className='proj-details-full-image-content'>
                        <img ref={imgRef1} src={img1} className='imgFull1' alt='img1'></img>
                        <img ref={imgRef2} src={img2} className='imgFull2' alt='img2'></img>
                        <img ref={imgRef3} src={img3} className='imgFull3' alt='img3'></img>
                    </Box>}
                </Box>
                <MemoizedSectionName name="Description"></MemoizedSectionName>
                <Box className='project-details-full-description-container'>
                    <Box ref={mark2Ref} className='projFullMark2'></Box>
                    {showItem.text && <Text className='project-details-full-description'>
                        <span>The text editing website created with React JS and CSS is a powerful and efficient platform for editing and formatting written content. The website is designed with a user-friendly interface and offers a wide range of tools and features for creating, editing, and publishing text-based content. React JS is a popular open-source JavaScript library that enables developers to create highly interactive and responsive user interfaces. The website created with React JS offers a smooth and seamless experience for users and provides real-time updates as changes are made to the text. CSS, on the other hand, is a style sheet language used for describing the presentation of a document written in HTML. The website created with CSS offers a visually appealing design, making it easier for users to navigate and use the platform. Overall, the text editing website created with React JS and CSS offers an intuitive and powerful platform for creating and editing text-based content, making it a top choice for writers, editors, and content creators.</span></Text>}
                </Box>
            </Box>
        </>
    )
}


var MemoizedProjectDetailsFull;
export default MemoizedProjectDetailsFull = React.memo(ProjectDetailsFull);
