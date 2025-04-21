import React from 'react';
import "./App.css"
import {
  Routes,
  Route
} from "react-router-dom";
import {Header, Layout, Footer} from "./components"
import {Home, About, Contact, Personal, Illustrations} from "./routes"
import useAppScale from './hooks/useAppScale'

const App = () => {

  useAppScale()

  return (
    <div className='App'>
      <Header />
      <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/personal" element={<Personal />}/>
            <Route path="/illustrations" element={<Illustrations />}/>
          </Routes>
          <Footer />
      </Layout>
    </div>
  ) 
};

export default App
