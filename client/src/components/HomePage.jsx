import React from 'react'
import { lazy, Suspense } from 'react';
import { Box } from "@chakra-ui/react";
import { Hero } from './Hero';
// import MemoizedSectionName from './SectionName';
const MemoizedProject = lazy(() => import('./Project'));
const MemoizedSectionName = lazy(() => import('./SectionName'));
const MemoizedSkills = lazy(() => import('./Skills'));
const MemoizedContact = lazy(() => import('./Contact'));
const MemoizedFooter = lazy(() => import('./Footer'));
const MemoizedAbout = lazy(() => import('./About'));
const MemoizedProjectDetailsFull = lazy(() => import('./ProjectDetailsFull'));

export const HomePage = () => {
    return (
        <>
            <Box className='home-page'>
                <Hero></Hero>
                <Suspense>
                    <MemoizedSectionName name="About Me"></MemoizedSectionName>
                    <MemoizedAbout></MemoizedAbout>

                    <MemoizedSectionName name="Projects"></MemoizedSectionName>
                    <MemoizedProject></MemoizedProject>

                    <MemoizedSectionName name="Skills"></MemoizedSectionName>
                    <MemoizedSkills></MemoizedSkills>

                    <MemoizedSectionName name="Contact"></MemoizedSectionName>
                    <MemoizedContact></MemoizedContact>
                    <MemoizedFooter></MemoizedFooter>
                </Suspense>
            </Box>
        </>
    )
}

var MemoizedHomePage;
export default MemoizedHomePage = React.memo(HomePage);
