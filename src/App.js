import React from 'react'
import AboutUs from './AboutUs'
import Home from './Home'
import Welcome from './Welcome'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
