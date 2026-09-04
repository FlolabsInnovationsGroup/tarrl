import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { WhoWeAre, WhyWeExist, WhatWeBelieve } from "./components/Sections";
import { ResearchTracks } from "./components/ResearchTracks";
import { ImageCarousel } from "./components/ImageCarousel";
import { HowItWorks } from "./components/HowItWorks";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { ApplyCTA } from "./components/ApplyCTA";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhyWeExist />
        <WhatWeBelieve />
        <ResearchTracks />
        <ImageCarousel />
        <HowItWorks />
        <WhoThisIsFor />
        <ApplyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
