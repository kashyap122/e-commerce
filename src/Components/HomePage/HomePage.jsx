import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import "./HomePage.css"
import CopyRights from '../CopyRights/CopyRights';
import CarouselKashyap from "../Carousel/CarouselKashyap";

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="content-wrap">
        <Navbar />
      </div>
      <CarouselKashyap />
      <Footer />
      <CopyRights />
    </div>
  )
}

export default HomePage;