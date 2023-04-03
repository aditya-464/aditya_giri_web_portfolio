import './App.css';
import "./components/portfolio.css"
import { Hero } from './components/Hero';
import { MemoizedSectionName } from './components/SectionName';
import { Practice } from './components/Practice';
import { Navbar } from './components/Navbar';
import { MemoizedProjectDetails } from './components/ProjectDetails';
import { ProjectImages } from './components/ProjectImages';
import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Practice2 } from './components/Practice2';
import { lazy, Suspense } from 'react';
import {MemoizedProjectDetailsRight} from './components/ProjectDetailsRight';
import img1 from "./images/lp1.jfif";
import img2 from "./images/lp2.jfif";
import { About } from './components/About';

const MemoizedProject = lazy(() => import('./components/Project'));


function App() {

  return (
    <>

      <About></About>
      {/* <Navbar></Navbar> */}
      {/* <Hero></Hero> */}
      
      {/* <MemoizedSectionName name="About Me"></MemoizedSectionName> */}

      {/* <MemoizedSectionName name="Projects"></MemoizedSectionName> */}
      
      {/* <MemoizedSectionName name="Skills"></MemoizedSectionName> */}
      {/* <MemoizedSectionName name="Contact"></MemoizedSectionName> */}


      {/* <Project></Project> */}
      {/* <Button width="10rem" height="5rem" fontSize="2rem" backgroundColor="blue" color="white" onClick={myFunc}>Click Me</Button> */}

      {/* <Practice2></Practice2> */}


      {/* <Flex width="100%" height="100vh" flexDirection="row" backgroundColor="#FFE5B4">
      </Flex> */}

      {/* <MemoizedProjectDetails number="01" title="Papyrus" techstack="React Js . Node Js . Express Js . MongoDB" description="Web application to post blogs and news
                            articles, along with relevant images"  img1={img1} img2={img2}></MemoizedProjectDetails> */}

      {/* <MemoizedProject></MemoizedProject> */}

      {/* <Practice></Practice> */}


      {/* <Suspense>
        <MemoizedProject></MemoizedProject>
      </Suspense> */}


      {/* <MemoizedProjectDetailsRight number="01" title="Papyrus" techstack="React Js . Node Js . Express Js . MongoDB" description="Web application to post blogs and news
                            articles, along with relevant images"  img1={img1} img2={img2}></MemoizedProjectDetailsRight> */}

      {/* <Flex width="100%" height="100vh" flexDirection="row" backgroundColor="#FFE5B4">
      </Flex> */}

      {/* <Flex width="100%" height="100vh" flexDirection="row" backgroundColor="#FFE5B4">
      </Flex> */}


      {/* <Flex width="100%" height="100vh" flexDirection="row" backgroundColor="#FFE5B4">
        <MemoizedProjectDetails number="01" title="Papyrus" techstack="React Js . Node Js . Express Js . MongoDB" description="Web application to post blogs and news
                            articles, along with relevant images" ></MemoizedProjectDetails>

        <ProjectImages img1={img1} img2={img2}></ProjectImages>

      </Flex> */}








      {/* <ProjectDetails></ProjectDetails>
      <ProjectDetails></ProjectDetails> */}

      {/* <Practice></Practice> */}
    </>
  );
}

export default App;
