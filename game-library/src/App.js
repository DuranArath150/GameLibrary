
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
         <Route exact path="/"  element={<Home/>}></Route>
          <Route exact path="/about"  element={<About/>}></Route>      
        </Routes>
     </Router>

    </div>

  );
}


export default App;
