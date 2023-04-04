import React, { useRef, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaDribbbleSquare, FaEnvelope } from "react-icons/fa";

export const Contact = () => {

    const [showItem, setShowItem] = useState(false);

    const contactRef1 = useRef(null);
    const contactRef2 = useRef(null);

    const contactFunc = (value) => {
        setShowItem(value);
    }

    window.addEventListener("scroll", () => {
        const val1 = contactRef1.current.getBoundingClientRect().top;
        const val2 = contactRef2.current.getBoundingClientRect().top;

        if (val1 <= 10) {
            contactFunc(true);
        }

        if (val1 >= 500 || val2 <= 100) {
            contactFunc(false);
        }
    })

    return (
        <>
            <Box className='contact-container'>
                <Box className='contact-content-wrapper'>
                    <Box ref={contactRef1} className='markContactUp'></Box>
                    <Box className='contact-content'>
                        <Box className='contact-content1'>
                            {
                               showItem && <>
                                    <Box className='contact-content1-ques'>
                                        <span> Have a project in mind?</span>
                                    </Box>
                                    <Box className='contact-content1-con'>
                                        <span> Let's connect</span>
                                    </Box>
                                    <Box className='contact-icon-box'>
                                        <FaLinkedin className='contact-icon'></FaLinkedin>
                                        <FaGithub className='contact-icon'></FaGithub>
                                        <FaDribbbleSquare className='contact-icon'></FaDribbbleSquare>
                                        <FaEnvelope className='contact-icon'></FaEnvelope>
                                    </Box>
                                </>}
                        </Box>
                        <Box className='contact-content2'>
                            <Text>Hare Krishna!</Text>
                        </Box>
                    </Box>
                    <Box ref={contactRef2} className='markContactDn'></Box>
                </Box>
            </Box>
        </>
    )
}


export const MemoizedContact = React.memo(Contact);
