import "./App.css"
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
const MemoizedHomePage = lazy(() => import('./components/HomePage'));
const MemoizedProjectDetailsFull = lazy(() => import('./components/ProjectDetailsFull'));
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Suspense><MemoizedHomePage></MemoizedHomePage></Suspense>}></Route>
        <Route exact path="/projDetail" element={<Suspense><MemoizedProjectDetailsFull></MemoizedProjectDetailsFull></Suspense>}></Route>
      </Routes>
    </>
  );
}
export default App;
