import React from "react";
import SecondProblem from "../../usecontextProblems/secondProblem";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
// import CreateBlog from "./Blog/CreateBlog";
// import Blogs from "./Blog/Blogs";

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
     <Routes>
      <Route path="/" Component={SecondProblem}/>
      {/* <Route path='blog' Component={Blogs}/> */}
     </Routes>
     </BrowserRouter>
     
     
     
     
    </div>
    </>
  );
}


export default App;
