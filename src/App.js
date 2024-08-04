import React from 'react';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return (
    <>
  <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/About' Component={About} />
        <Route exact path='/Service' Component={Service} />
        <Route exact path='/Contact' Component={Contact} />
        <Route exact path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
