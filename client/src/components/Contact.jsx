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
        if (!contactRef1.current || !contactRef2.current) {
            return;
        }
        const val1 = contactRef1.current.getBoundingClientRect().top;
        const val2 = contactRef2.current.getBoundingClientRect().top;
        if (val1 <= 100 && val2>=400) {
            contactFunc(true);
        }
    })

    return (
        <>
            <Box className='contact-container' id='contact'>
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
                            {showItem && <form className='contact-form'>
                                <label className='contact-form-label'>
                                    <Text className='contact-form-text'>
                                        Name
                                    </Text>
                                    <input type="text" name="name" required />
                                </label>
                                <label className='contact-form-label'>
                                    <Text className='contact-form-text'>
                                        Email
                                    </Text>
                                    <input type="email" name="email" required />
                                </label>
                                <label className='contact-form-label'>
                                    <Text className='contact-form-text'>
                                        Message
                                    </Text>
                                    <textarea type="text" name="message" rows="7" cols="10" required />
                                </label>
                                <label className='contact-form-label'>
                                    <input className='contact-form-btn' type="submit" value="Submit" />
                                </label>
                            </form>}
                        </Box>
                    </Box>
                    <Box ref={contactRef2} className='markContactDn'></Box>
                </Box>
            </Box>
        </>
    )
}
var MemoizedContact;
export default MemoizedContact = React.memo(Contact);
