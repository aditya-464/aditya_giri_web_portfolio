import { Box } from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import { MemoizedProjectDetails } from './ProjectDetails'
import { MemoizedProjectDetailsRight } from './ProjectDetailsRight'
import img1 from "../images/lp1.jfif"
import img2 from "../images/lp2.jfif"
import { details } from "./ContentArray"




export const Project = () => {

  const [showItems, setShowItems] = useState(false);
  const [component, setComponent] = useState(0);

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
      case 6:
        return cmp6Ref
    }
  }

  window.addEventListener("scroll", () => {

    const val1 = cmp1Ref.current.getBoundingClientRect().top;
    const val2 = cmp2Ref.current.getBoundingClientRect().top;
    const val3 = cmp3Ref.current.getBoundingClientRect().top;
    const val4 = cmp4Ref.current.getBoundingClientRect().top;
    const val5 = cmp5Ref.current.getBoundingClientRect().top;
    const val6 = cmp6Ref.current.getBoundingClientRect().top;

    if (val1 >= 550) {
      cmpFunc(false);
    }

    if ((val1 <= 10 && val2 >= 200) || (val3 <= 10 && val4 >= 200) || (val5 <= 10 && val6 >= 200)) {
      cmpFunc(true);

      if (val1 <= 10 && val2 >= 200) {
        cmpVal(0);
      }
      else if (val3 <= 10 && val4 >= 200) {
        cmpVal(1);
      }
      else {
        cmpVal(2);
      }
    }

  });



  return (
    <>
      <Box className='project-container'>
        {
          details.map((value, index) => {
            return (
              <React.Fragment key={index + 10}>
                <Box className='project-outer-box'>
                  <Box ref={refValue(2 * index + 1)} className={`markUp mark-${2 * index + 1}`}></Box>

                  <Box className='project-inner-box'>
                    {(index % 2 === 0) ? (component === index) && showItems && <MemoizedProjectDetails number={value.projectNumber} title={value.projectTitle} techstack={value.projectTechstack} description={value.projectShortDesc} img1={img1} img2={img2}></MemoizedProjectDetails> : (component === index) && showItems && <MemoizedProjectDetailsRight number={value.projectNumber} title={value.projectTitle} techstack={value.projectTechstack} description={value.projectShortDesc} img1={img1} img2={img2}></MemoizedProjectDetailsRight>}


                    {/* {(component === index) && showItems && <MemoizedProjectDetails number={value.projectNumber} title={value.projectTitle} techstack={value.projectTechstack} description={value.projectShortDesc} img1={img1} img2={img2}></MemoizedProjectDetails>} */}
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

var MemoizedProject = null;
export default MemoizedProject = React.memo(Project);
