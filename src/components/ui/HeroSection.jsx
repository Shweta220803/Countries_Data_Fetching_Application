import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImg from '../../assets/banner.jpeg'


const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        {/* Left side */}
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at a time
          </h1>
          <p className="paragraph">
          Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
          Start Exploring <FaLongArrowAltRight />
          </button>
        </div>

        {/* Right side */}
        <div className="hero-image">
          <img src={heroImg} alt="" className="banner-image"/>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
