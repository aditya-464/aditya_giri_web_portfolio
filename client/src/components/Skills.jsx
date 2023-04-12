import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRef } from 'react';
export const Skills = () => {
    const [showItem, setShowItem] = useState(false);
    const skillRef1 = useRef(null);
    const skillRef2 = useRef(null);
    const skillFunc = (value) => {
        setShowItem(value);
    }
    window.addEventListener("scroll", () => {
        if (!skillRef1.current || !skillRef2.current) {
            return;
        }
        const val1 = skillRef1.current.getBoundingClientRect().top;
        const val2 = skillRef2.current.getBoundingClientRect().top;
        if (val1 <= 300 && val2 <= 600) {
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
                    <Box ref={skillRef2} className='markSkillDn'></Box>
                </Box>
            </Box>
        </>
    )
}
var MemoizedSkills;
export default MemoizedSkills = React.memo(Skills);