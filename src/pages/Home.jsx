import React from "react";
import NavBar from "../components/home/NavBar";
import Slider1 from "../components/home/Slider1";
import Reasons from "../components/home/Reasons";
import SliderTestimonials from "../components/home/SliderTestimonials";
import Footer from "../components/home/Footer";

const Home = ({ isLoggedIn, setIsLoggedIn, apiKey }) => {

  return (
    <div className="main max-w-screen min-h-screen">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <h1 className="mt-15 text-center text-3xl font-bold">Top Courses</h1>

      <Slider1 apiKey={apiKey}/>

      <Reasons />

      <h1 className="mt-40 text-center text-3xl font-bold">Testimonials</h1>
      <SliderTestimonials />

      <Footer />
    </div>
  );
};

export default Home;
