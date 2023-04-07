import React, { useRef, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaDribbbleSquare, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    const [showItem, setShowItem] = useState(false);
    const [details, setDetails] = useState({
        name: "", email: "", message: ""
    })
    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({ ...details, [name]: value });
    }
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
        if (val1 <= 100 && val2 >= 400) {
            contactFunc(true);
        }
    })

    const submitData = async (e)=>{
        e.preventDefault();
        const {name, email, message} = details;

        const res = await fetch("http://localhost:3300/sendmessage", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, message
            })
        });

        const data = await res.json();
        if(res.status === 201 && data){
            window.alert(res.status, " Message Sent Successfully!");
            setDetails({
                name : "", email : "", message : ""
            })   
        }
        else{
            window.alert(res.status, " Message Sent Failed!");
            console.log(data);
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
                                        <FaLinkedin className='contact-icon'></FaLinkedin>
                                        <FaGithub className='contact-icon'></FaGithub>
                                        <FaDribbbleSquare className='contact-icon'></FaDribbbleSquare>
                                        <FaEnvelope className='contact-icon'></FaEnvelope>
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
                                <label className='contact-form-label'>
                                    <input className='contact-form-btn' type="submit" value="Submit" onClick={submitData}/>
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
