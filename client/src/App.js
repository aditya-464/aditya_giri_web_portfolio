// import './App.css';
import "./components/portfolio.css"
import { Hero } from './components/Hero';
import MemoizedSectionName from './components/SectionName';
import { lazy, Suspense } from 'react';
import { MemoizedProjectDetails } from "./components/ProjectDetails";
import img1 from "./images/lp1.jfif"
import img2 from "./images/lp2.jfif"
import { MemoizedProjectDetailsRight } from "./components/ProjectDetailsRight";
import { Box } from "@chakra-ui/react";


const MemoizedProject = lazy(() => import('./components/Project'));
// const MemoizedSectionName = lazy(() => import('./components/SectionName'));
const MemoizedSkills = lazy(() => import('./components/Skills'));
const MemoizedContact = lazy(() => import('./components/Contact'));
const MemoizedFooter = lazy(() => import('./components/Footer'));
const MemoizedAbout = lazy(() => import('./components/About'));


function App() {
  return (
    <>
      {/* <Hero></Hero> */}
      {/* <MemoizedSectionName name="About Me"></MemoizedSectionName> */}
      {/* <Suspense>
        <MemoizedAbout></MemoizedAbout>
      </Suspense> */}

      {/* <Suspense>
        <MemoizedProject></MemoizedProject>
      </Suspense> */}

      {/* <MemoizedProjectDetails number="01" title="Papyrus" techstack="React Js . Next Js. Node Js. Mongo DB" description="Web application to post blogs and news articles, along with relevant images" img1={img1} img2={img2}></MemoizedProjectDetails> */}
      {/* <MemoizedProjectDetailsRight number="01" title="Papyrus" techstack="React Js . Express Js . Node Js . Mongo DB" description="Web application to post blogs and news articles, along with relevant images" img1={img1} img2={img2}></MemoizedProjectDetailsRight> */}

      {/* <Suspense>
        <MemoizedSkills></MemoizedSkills>
      </Suspense> */}

      <Suspense>
        <MemoizedContact></MemoizedContact>
        {/* <MemoizedFooter></MemoizedFooter> */}
      </Suspense>


      {/* <MemoizedSectionName name="About Me"></MemoizedSectionName>
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

      <Box width="100%" height="100vh" backgroundColor="#FFE5B4"></Box>

      {/* <Suspense>
        <MemoizedProject></MemoizedProject>
      </Suspense> */}

      {/* <MemoizedProjectDetails number="01" title="Papyrus" techstack="React Js . Next Js. Node Js. Mongo DB" description="Web application to post blogs and news articles, along with relevant images" img1={img1} img2={img2}></MemoizedProjectDetails> */}
      {/* <MemoizedProjectDetailsRight number="01" title="Papyrus" techstack="React Js . Next Js. Node Js. Mongo DB" description="Web application to post blogs and news articles, along with relevant images" img1={img1} img2={img2}></MemoizedProjectDetailsRight> */}

    </>
  );
}
export default App;
