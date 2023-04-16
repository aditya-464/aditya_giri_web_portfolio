import React, { useEffect, useRef, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaDribbbleSquare, FaEnvelope } from "react-icons/fa";
export const Contact = () => {
    const [showItem, setShowItem] = useState(false);
    const [details, setDetails] = useState({
        name: "", email: "", message: ""
    })
    const [viewport, setViewport] = useState({
        width: "", height: ""
    })
    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({ ...details, [name]: value });
    }
    const contactRef1 = useRef(null);
    const btnRef = useRef("Submit");
    const contactFunc = (value) => {
        setShowItem(value);
    }
    useEffect(() => {
        let w = window.innerWidth;
        let h = window.innerHeight;
        setViewport({
            width: w, height: h
        })
    }, [])
    window.addEventListener("scroll", () => {
        if (!contactRef1.current) {
            return;
        }
        const val1 = contactRef1.current.getBoundingClientRect().top;
        if (val1 <= 0.35 * viewport.height) {
            contactFunc(true);
        }
    })
    const validateForm = (e) => {
        e.preventDefault();
        if (!details.name || !details.email || !details.message) {
            btnRef.current.style.color = "#FF8080";
            btnRef.current.value = "Error";
            setTimeout(() => {
                btnRef.current.style.color = "#FFE5B4";
                btnRef.current.value = "Submit";
            }, 2000);
        }
        else {
            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            if (regEx.test(details.email)) {
                submitData();
            }
            else {
                btnRef.current.style.color = "#FF8080";
                btnRef.current.value = "Error";
                setTimeout(() => {
                    btnRef.current.style.color = "#FFE5B4";
                    btnRef.current.value = "Submit";
                }, 2000);
            }
        }
    }
    const submitData = async () => {
        const { name, email, message } = details;
        const res = await fetch("https://agwebportfoliosvr.onrender.com/sendmessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        });
        const data = await res.json();
        if (res.status === 201 && data) {
            setDetails({
                name: "", email: "", message: ""
            })
            btnRef.current.style.color = "#97DBAE";
            btnRef.current.value = "Sent";
            setTimeout(() => {
                btnRef.current.style.color = "#FFE5B4";
                btnRef.current.value = "Submit";
            }, 2000);
        }
        else {
            btnRef.current.style.color = "#FF8080";
            btnRef.current.value = "Error";
            setTimeout(() => {
                btnRef.current.style.color = "#FFE5B4";
                btnRef.current.value = "Submit";
            }, 2000);
        }
    }
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
                                        <a href='https://www.linkedin.com/in/aditya-giri-948420226/' target='_blank' rel="noreferrer noopener">
                                            <FaLinkedin className='contact-icon'></FaLinkedin>
                                        </a>
                                        <a href='https://github.com/aditya-464' target='_blank' rel="noreferrer noopener">
                                            <FaGithub className='contact-icon'></FaGithub>
                                        </a>
                                        <a href='https://dribbble.com/adityagiri01' target='_blank' rel="noreferrer noopener">
                                            <FaDribbbleSquare className='contact-icon'></FaDribbbleSquare>
                                        </a>
                                        <a href='mailto:adityagiri1911@gmail.com' >
                                            <FaEnvelope className='contact-icon'></FaEnvelope>
                                        </a>
                                    </Box>
                                </>}
                        </Box>
                        <Box className='contact-content2'>
                            {showItem && <form method='POST' className='contact-form'>
                                <label className='contact-form-label'>
                                    <Text className='contact-form-text'>
                                        Name
                                    </Text>
                                    <input type="text" name="name" value={details.name} onChange={handleInputs} required />
                                </label>
                                <label className='contact-form-label'>
                                    <Text className='contact-form-text'>
                                        Email
                                    </Text>
                                    <input type="email" name="email" value={details.email} onChange={handleInputs} required />
                                </label>
                                <label className='contact-form-label'>
                                    <Text className='contact-form-text'>
                                        Message
                                    </Text>
                                    <textarea type="text" name="message" rows="7" cols="10" value={details.message} onChange={handleInputs} required />
                                </label>
                                <label className='contact-form-label' onClick={validateForm} >
                                    <input ref={btnRef} className='contact-form-btn' type="submit" value={btnRef.current.value || "Submit"}/>
                                </label>
                            </form>}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
var MemoizedContact;
export default MemoizedContact = React.memo(Contact);