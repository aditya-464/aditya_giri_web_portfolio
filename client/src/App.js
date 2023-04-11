// import './App.css';
import "./components/portfolio.css"
import { Hero } from './components/Hero';
import MemoizedSectionName from './components/SectionName';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import { MemoizedProjectDetails } from "./components/ProjectDetails";
import { MemoizedProjectDetailsRight } from "./components/ProjectDetailsRight";
import { Box, Text } from "@chakra-ui/react";
import MemoizedProjectDetailsFull from "./components/ProjectDetailsFull";




// import { HomePage } from "./components/HomePage";
const MemoizedHomePage = lazy(() => import('./components/HomePage'));
// import MemoizedProject from "./components/Project"

// const MemoizedProjectDetailsFull = lazy(() => import('./components/ProjectDetailsFull'));


function App() {
  return (
    <>

      <Routes>
        <Route exact path='/' element={<MemoizedHomePage></MemoizedHomePage>}></Route>
        <Route exact path="/projDetail" element={<MemoizedProjectDetailsFull></MemoizedProjectDetailsFull>}></Route>
      </Routes>



      {/* <MemoizedProjectDetailsFull></MemoizedProjectDetailsFull> */}
      {/* <MemoizedSectionName name="About Me"></MemoizedSectionName> */}

      {/* <Box width="100%" height="100vh" backgroundColor="#FFE5B4"></Box>

      <Suspense>
        <MemoizedProject></MemoizedProject>
      </Suspense>

      <Box width="100%" height="100vh" backgroundColor="#FFE5B4"></Box> */}

      {/* <MemoizedSectionName name="Contact"></MemoizedSectionName> */}

      {/* <Text>Hare Krishna</Text> */}

      {/* <Suspense>
        <MemoizedContact></MemoizedContact>
        <MemoizedFooter></MemoizedFooter>
      </Suspense> */}

      {/* <ProjectDetailsFull></ProjectDetailsFull> */}


      {/* <Hero></Hero>
      <MemoizedSectionName name="About Me"></MemoizedSectionName>
      <Suspense>
        <MemoizedAbout></MemoizedAbout>
      </Suspense>
      <MemoizedSectionName name="Projects"></MemoizedSectionName>
      <Suspense>
        <MemoizedProject></MemoizedProject>
      </Suspense>
      <MemoizedSectionName name="Skills"></MemoizedSectionName>
      <Suspense>
        <MemoizedSkills></MemoizedSkills>
      </Suspense>
      <MemoizedSectionName name="Contact"></MemoizedSectionName>
      <Suspense>
        <MemoizedContact></MemoizedContact>
        <MemoizedFooter></MemoizedFooter>
      </Suspense> */}




      {/* <Box width="100%" height="100vh" backgroundColor="#FFE5B4"></Box> */}

      {/* <Suspense>
        <MemoizedProject></MemoizedProject>
      </Suspense> */}

      {/* <MemoizedProjectDetails number="01" title="Papyrus" techstack="React Js . Next Js. Node Js. Mongo DB" description="Web application to post blogs and news articles, along with relevant images" img1={img1} img2={img2}></MemoizedProjectDetails> */}
      {/* <MemoizedProjectDetailsRight number="01" title="Papyrus" techstack="React Js . Next Js. Node Js. Mongo DB" description="Web application to post blogs and news articles, along with relevant images" img1={img1} img2={img2}></MemoizedProjectDetailsRight> */}

    </>
  );
}
export default App;
