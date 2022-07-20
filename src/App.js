import React from 'react';
import Home from './components/pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
     </Routes>
   </BrowserRouter>
 </div>
  )
}

export default App;
