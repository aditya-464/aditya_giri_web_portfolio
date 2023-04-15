import { Box, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
export const Skills = () => {
    const [showItem, setShowItem] = useState(false);
    const [viewport, setViewport] = useState({
        width: "", height: ""
    })
    const skillRef1 = useRef(null);
    const skillFunc = (value) => {
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
        if (!skillRef1.current) {
            return;
        }
        const val1 = skillRef1.current.getBoundingClientRect().top;
        if (val1 <= 0.5*viewport.height) {
            skillFunc(true);
        }
    })
    return (
        <>
            <Box className='skills-container' id='skills'>
                <Box className='skills-content-wrapper'>
                    <Box ref={skillRef1} className='markSkillUp'></Box>
                    {showItem && <Box className='skills-content'>
                        <Box className='skills-content1'>
                            <Text className="skills-text1"> React Js</Text>
                            <Text className="skills-text1"> Node Js</Text>
                            <Text className="skills-text1"> Mongo DB</Text>
                            <Text className="skills-text1"> Bootstrap</Text>
                            <Text className="skills-text1"> Chakra UI</Text>
                            <Text className="skills-text1"> Responsive Design</Text>
                        </Box>
                        <Box className='skills-content2'>
                            <Text className="skills-text2"> Express Js</Text>
                            <Text className="skills-text2"> Firebase</Text>
                            <Text className="skills-text2"> Git - GitHub</Text>
                            <Text className="skills-text2"> Figma</Text>
                            <Text className="skills-text2"> Tailwind CSS</Text>
                            <Text className="skills-text2"> UI Maintenance</Text>
                        </Box>
                    </Box>}
                </Box>
            </Box>
        </>
    )
}
var MemoizedSkills;
export default MemoizedSkills = React.memo(Skills);