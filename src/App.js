import React from 'react';
import About from "./Sections/About";
import './master.css';
import Home from "./Sections/Home";
import Header from "./Sections/Header";
import Blogs from "./Sections/Blogs";

function App() {
    return (
        <div style={master}>
            <Header />
            <Home/>
            <About/>
            <Blogs />
        </div>
    );
}

const master = {
    padding: `5%`
}

export default App;
