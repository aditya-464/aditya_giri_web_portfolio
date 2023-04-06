import { Box, border } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'
import { MemoizedProjectDetails } from './ProjectDetails'
import { MemoizedProjectDetailsRight } from './ProjectDetailsRight'
import img1 from "../images/lp1.jfif"
import img2 from "../images/lp2.jfif"
import { details } from "./ContentArray"

export const Project = () => {
  const [showItems, setShowItems] = useState(false);
  const [component, setComponent] = useState(0);
  const [deviceView, setDeviceView] = useState({
    width: "",
    height: ""
  });

  const cmp1Ref = useRef(null);
  const cmp2Ref = useRef(null);
  const cmp3Ref = useRef(null);
  const cmp4Ref = useRef(null);
  const cmp5Ref = useRef(null);
  const cmp6Ref = useRef(null);
  const cmpVal = (value) => {
    setComponent(value);
  }
  const cmpFunc = (value) => {
    setShowItems(value);
  }

  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    setDeviceView({ width: w, height: h });    
  }, [])

  function refValue(value) {
    switch (value) {
      case 1:
        return cmp1Ref;
      case 2:
        return cmp2Ref;
      case 3:
        return cmp3Ref;
      case 4:
        return cmp4Ref;
      case 5:
        return cmp5Ref;
      default:
        return cmp6Ref;
    }
  }
  window.addEventListener("scroll", () => {
    if (!cmp1Ref.current || !cmp2Ref.current || !cmp3Ref.current || !cmp4Ref.current || !cmp5Ref.current || !cmp6Ref.current) {
      return;
    }
    const val1 = cmp1Ref.current.getBoundingClientRect().top;
    const val2 = cmp2Ref.current.getBoundingClientRect().top;
    const val3 = cmp3Ref.current.getBoundingClientRect().top;
    const val4 = cmp4Ref.current.getBoundingClientRect().top;
    const val5 = cmp5Ref.current.getBoundingClientRect().top;
    const val6 = cmp6Ref.current.getBoundingClientRect().top;

    if ((val1 <= 0.25 * deviceView.height && val2 >= 0.3 * deviceView.height) || (val3 <= 0.25 * deviceView.height && val4 >= 0.3 * deviceView.height) || (val5 <= 0.25 * deviceView.height && val6 >= 0.3 * deviceView.height)) {
      cmpFunc(true);
      if (val1 <= 0.25 * deviceView.height && val2 >= 0.3 * deviceView.height) {
        cmpVal(0);
      }
      else if (val3 <= 0.25 * deviceView.height && val4 >= 0.3 * deviceView.height) {
        cmpVal(1);
      }
      else {
        cmpVal(2);
      }
    }
  });

  return (
    <>
      <Box className='project-container' id='project'>
        {
          details.map((value, index) => {
            return (
              <React.Fragment key={index + 10}>
                <Box className='project-outer-box'>
                  <Box ref={refValue(2 * index + 1)} className={`markUp mark-${2 * index + 1}`}></Box>

                  <Box className='project-inner-box'>
                    {(index % 2 === 0) ? (component === index) && showItems && <MemoizedProjectDetails number={value.projectNumber} title={value.projectTitle} techstack={value.projectTechstack} description={value.projectShortDesc} img1={img1} img2={img2}></MemoizedProjectDetails> : (component === index) && showItems && <MemoizedProjectDetailsRight number={value.projectNumber} title={value.projectTitle} techstack={value.projectTechstack} description={value.projectShortDesc} img1={img1} img2={img2}></MemoizedProjectDetailsRight>}
                  </Box>

                  <Box ref={refValue(2 * index + 2)} className={`markDn mark-${2 * index + 2}`}></Box>
                </Box>
              </React.Fragment>
            )
          })
        }
      </Box>
    </>
  )
}
var MemoizedProject;
export default MemoizedProject = React.memo(Project);
