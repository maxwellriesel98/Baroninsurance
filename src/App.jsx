import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App bodycolor">
      <Header />
      <Routes>
        <Route path="/" element=<h1> Home</h1> />
        <Route path="/about" element=<h1> About</h1> />
        <Route path="/industrylinks" element=<h1>industry Links</h1> />
        <Route path="/services" element=<h1> Services</h1> />
        <Route path="/contact" element=<h1>contact</h1> />
        <Route path="/success" element=<h1>success</h1>/>
        <Route path="/failure" element=<h1>failure</h1>/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
