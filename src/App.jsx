import React from "react";
import LandingPage from './LandingPage';
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";

import './index.css';

function App() {
    return (
        <>
            <NavBar />
            <LandingPage />
            <About/>
            <Projects/>
        </>
    )
}

export default App
