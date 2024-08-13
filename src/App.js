import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection'; // Import the FeaturesSection
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            {/* <main className="content"> */}
                <HeroSection />
                <FeaturesSection />  {/* Add the FeaturesSection here */}
                {/* Your other content will go here */}
            
        </div>
    );
}

export default App;
