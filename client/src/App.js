import "./components/portfolio.css"
import { Routes, Route } from "react-router-dom"
import MemoizedHomePage from "./components/HomePage"
import MemoizedProjectDetailsFull from "./components/ProjectDetailsFull";
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<MemoizedHomePage></MemoizedHomePage>}></Route>
        <Route exact path="/projDetail" element={<MemoizedProjectDetailsFull></MemoizedProjectDetailsFull>}></Route>
      </Routes>
    </>
  );
}
export default App;
