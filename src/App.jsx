
import React from 'react';
import AboutPage from "./components/AboutPage";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App bodycolor">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/industrylinks" element={<IndustryPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/success" element={<SentPage title="Message Sent!" message="We will get back to you shortly! have a great day!"/>}/>
        <Route path="/failure" element={<SentPage title="Failed to Send..." message="We apologize for the inconvenience, Please call us or email us instead, details under  ''Contact us'' "/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
