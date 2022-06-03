
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Services from './pages/servicess';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
         <Route exact path="/"  element={<Home/>}></Route>
          <Route exact path="/about"  element={<About/>}></Route> 
          <Route exact path="/sign-up" element={<SignUp/>}></Route>
          <Route exact path="/signin" element={<SignIn/>}></Route>
          <Route exact path="/services" element={<Services/>}></Route>   
        </Routes>
     </Router>

    </div>

  );
}


export default App;
