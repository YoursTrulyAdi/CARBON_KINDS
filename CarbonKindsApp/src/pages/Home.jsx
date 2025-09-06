import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import JoinCTA from "../components/JoinCTA/JoinCTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedProducts />
      <JoinCTA />
      <Footer />
    </>
  );
};

export default Home;
