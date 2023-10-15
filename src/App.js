import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Carousel from "./components/carousel";
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cards from './components/Cards';


const Home = () => {
  return (
    <>
    <Carousel />
      <Header />
      <Cards/>
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
