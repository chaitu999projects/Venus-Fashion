import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";


const Womens = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <>
      <div
        className="relative w-full h-[100vh] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div
          className="w-full h-[100vh] flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full relative flex justify-center p-9 overflow-hidden"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center items-center mb-3">
                <h1 className="text-6xl md:text-6xl lg:text-9xl text-center text-white font-bold tracking-wider ">
                  {item.title}
                </h1>
                <div className="flex my-10">
                  <Link to='/womens' className=" transition-colors duration-300 cursor-pointer w-[180px] p-2 border mx-2 bg-slate-50 font-bold uppercase tracking-wider hover:bg-black text-black hover:text-white hover:border-0 text-center">
                    Shop Women
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default function App() {
 
  const carouselItems = [
    {
      title: "VENUS",
      description: "This is the first slide in the carousel",
      url: "https://wallpaperaccess.com/full/5130257.jpg",
    },
    {
      title: "TOPSHOP",
      description: "This is the second slide in the carousel",
      url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "MANGO",
      description: "This is the third slide in the carousel",
      url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return(
    <>
    <Womens items={carouselItems} />;
    </>
  ) 
  
}
