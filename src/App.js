import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Carousel from "./components/carousel";
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';




const Home = () => {
  return (
    <>
    <Carousel />
      <Header />
      <Homepage/>
      <Footer/>
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};




export default App;
