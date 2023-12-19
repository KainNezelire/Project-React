import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import VacancyComponent from './components/finder';
import Main from './components/video';
import Middle from './components/middle';
import ResumeForm from './components/resume';
import Home from './components/home'
import About from './pages/about'
import Contacts from './pages/contacts'

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/find" element={<VacancyComponent />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/resume" element={<ResumeForm />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contacts" element={<Contacts /> }/>
    </Routes>
    <Footer />
  </div>
);





export default App;