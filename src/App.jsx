import React from 'react';
import StarField from './components/StarField';
import SpaceBackground from './components/SpaceBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <StarField />
            <SpaceBackground />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
