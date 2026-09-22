import { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Apresentacao from './components/Apresentacao';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Depoimentos from './components/Depoimentos';
import Funcionalidades from './components/Funcionalidades';

function App() {

  const API_KEY = '7aa644812a2f4d48996c5782a66fa91e'; // Replace with your actual API key

  return (
   <>
      <Topbar/>
      <Hero/>
      <Apresentacao/>
      <Funcionalidades/>
      <Depoimentos/>
      <Contato/>
      <Footer/>
   </> 
  )
}

export default App