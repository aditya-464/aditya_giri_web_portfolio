import { Box } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'
import { MemoizedProjectDetails } from './ProjectDetails'
import { MemoizedProjectDetailsRight } from './ProjectDetailsRight'
import img1 from "../images/pap_mob2.jpg"
import img2 from "../images/txt_tab.jpg"
import img3 from "../images/race_lap1.jpg"
import { details } from "./ContentArray"
export const Project = () => {
  const [showItems, setShowItems] = useState({
    proj0: false, proj1: false, proj2: false,
  });
  const [deviceView, setDeviceView] = useState({
    width: "",
    height: ""
  });
  const cmp1Ref = useRef(null);
  const cmp3Ref = useRef(null);
  const cmp5Ref = useRef(null);
  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    setDeviceView({ width: w, height: h });
  }, [])
  window.addEventListener("scroll", () => {
    if (!cmp1Ref.current || !cmp3Ref.current || !cmp5Ref.current) {
      return;
    }
    const val1 = cmp1Ref.current.getBoundingClientRect().top;
    const val3 = cmp3Ref.current.getBoundingClientRect().top;
    const val5 = cmp5Ref.current.getBoundingClientRect().top;
    if (val1 <= 0.35 * deviceView.height) {
      setShowItems({ ...showItems, proj0: true });
    }
    if (val3 <= 0.35 * deviceView.height) {
      setShowItems({ ...showItems, proj1: true });
    }
    if (val5 <= 0.35 * deviceView.height) {
      setShowItems({ ...showItems, proj2: true });
    }
  });
  return (
    <>
      <Box className='project-container' id='project'>
        <Box className='project-preload-images-container'>
          <img className='project-preload-images' src={img1} alt='img1'></img>
          <img className='project-preload-images' src={img2} alt='img2'></img>
          <img className='project-preload-images' src={img3} alt='img3'></img>
        </Box>
        <Box className='project-outer-box'>
          <Box ref={cmp1Ref} className={`markUp mark-1`}></Box>
          {showItems.proj0 && <Box className='project-inner-box'>
            <MemoizedProjectDetails number={details[0].projectNumber} title={details[0].projectTitle} techstack={details[0].projectTechstack} description={details[0].projectShortDesc} img={img1} ></MemoizedProjectDetails>
          </Box>}
          <Box className={`markDn mark-2`}></Box>
        </Box>
        <Box className='project-outer-box'>
          <Box ref={cmp3Ref} className={`markUp mark-3`}></Box>
          {showItems.proj1 && <Box className='project-inner-box'>
            <MemoizedProjectDetailsRight number={details[1].projectNumber} title={details[1].projectTitle} techstack={details[1].projectTechstack} description={details[1].projectShortDesc} img={img2} ></MemoizedProjectDetailsRight>
          </Box>}
          <Box className={`markDn mark-4`}></Box>
        </Box>
        <Box className='project-outer-box'>
          <Box ref={cmp5Ref} className={`markUp mark-5`}></Box>
          {showItems.proj2 && <Box className='project-inner-box'>
            <MemoizedProjectDetails number={details[2].projectNumber} title={details[2].projectTitle} techstack={details[2].projectTechstack} description={details[2].projectShortDesc} img={img3}></MemoizedProjectDetails>
          </Box>}
          <Box className={`markDn mark-6`}></Box>
        </Box>
      </Box>
    </>
  )
}
var MemoizedProject;
export default MemoizedProject = React.memo(Project);