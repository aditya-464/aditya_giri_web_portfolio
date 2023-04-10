import React from 'react'
import { lazy, Suspense } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { Hero } from './Hero';
import MemoizedSectionName from './SectionName';
const MemoizedProject = lazy(() => import('./Project'));
// const MemoizedSectionName = lazy(() => import('./SectionName'));
const MemoizedSkills = lazy(() => import('./Skills'));
const MemoizedContact = lazy(() => import('./Contact'));
const MemoizedFooter = lazy(() => import('./Footer'));
const MemoizedAbout = lazy(() => import('./About'));
const MemoizedProjectDetailsFull = lazy(() => import('./ProjectDetailsFull'));

// import { ProjectDetailsFull } from "./components/ProjectDetailsFull";
// import MemoizedProject from "./components/Project"



export const HomePage = () => {
    return (
        <>
            <Box className='home-page'>
                <Hero></Hero>
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
                </Suspense>
            </Box>

            {/* <MemoizedProjectDetailsFull></MemoizedProjectDetailsFull> */}
        </>
    )
}

var MemoizedHomePage;
export default MemoizedHomePage = React.memo(HomePage);
