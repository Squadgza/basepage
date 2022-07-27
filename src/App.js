import React from 'react';
import Home from './components/pages/Home/home';
import Nav from './components/navbar/navbar';
import Contact from './components/pages/contact';
import Example from './components/pages/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<Example />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
