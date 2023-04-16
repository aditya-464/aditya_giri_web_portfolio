import "./App.css"
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import heroimg from "./images/AGhero.svg"
const MemoizedHomePage = lazy(() => import('./components/HomePage'));
const MemoizedProjectDetailsFull = lazy(() => import('./components/ProjectDetailsFull'));
function App() {
  return (
    <>
    <img className="display-none" src={heroimg} alt="hero-img"></img>
      <Routes>
        <Route exact path='/' element={<Suspense><MemoizedHomePage></MemoizedHomePage></Suspense>}></Route>
        <Route exact path="/projDetail" element={<Suspense><MemoizedProjectDetailsFull></MemoizedProjectDetailsFull></Suspense>}></Route>
      </Routes>
    </>
  );
}
export default App;
