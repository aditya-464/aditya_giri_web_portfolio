import './App.css';
import "./components/portfolio.css"
import { Hero } from './components/Hero';
import { SectionName } from './components/SectionName';
import { Practice } from './components/Practice';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectImages } from './components/ProjectImages';
import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Practice2 } from './components/Practice2';

function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Hero></Hero> */}
      {/* <SectionName></SectionName> */}
      {/* <Project></Project> */}
      {/* <Button width="10rem" height="5rem" fontSize="2rem" backgroundColor="blue" color="white" onClick={myFunc}>Click Me</Button> */}

      {/* <Practice2></Practice2> */}

      {/* <Flex width="100%" height="100vh" flexDirection="row" backgroundColor="#FFE5B4">
      </Flex> */}

      <ProjectDetails number="01" title="Papyrus" techstack="React Js . Node Js . Express Js . MongoDB" description="Web application to post blogs and news
                            articles, along with relevant images" ></ProjectDetails>

      {/* <Flex width="100%" height="100vh" flexDirection="row" backgroundColor="#FFE5B4">
      </Flex>

      <ProjectDetails></ProjectDetails>
      <ProjectDetails></ProjectDetails> */}

      {/* <Practice></Practice> */}
    </>
  );
}

export default App;
