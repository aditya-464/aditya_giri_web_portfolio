// import './App.css';
import "./components/portfolio.css"
import { Hero } from './components/Hero';
import MemoizedSectionName from './components/SectionName';
import { lazy, Suspense } from 'react';

const MemoizedProject = lazy(() => import('./components/Project'));
// const MemoizedSectionName = lazy(() => import('./components/SectionName'));
const MemoizedSkills = lazy(() => import('./components/Skills'));
const MemoizedContact = lazy(() => import('./components/Contact'));
const MemoizedFooter = lazy(() => import('./components/Footer'));
const MemoizedAbout = lazy(() => import('./components/About'));


function App() {
  return (
    <>
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
    </>
  );
}
export default App;
