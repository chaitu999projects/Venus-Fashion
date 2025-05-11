import React from "react";
import { Link } from "react-router-dom";
const WomennBrands = () => {
  const womensWare = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/54/93/19/549319421c6576b5f25c39e20e9b7486.jpg",
      title:
        "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1971-present.png",
      path: "/adidas",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/52/f2/37/52f23707322e9eb453759ecbe65a1e0a.jpg",
      title: "https://1000logos.net/wp-content/uploads/2021/05/Mango-logo.png",
      path: "/mango",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/f6/ed/36/f6ed36c6cda6e7a3d6c1c76326dac3e6.jpg",
      title: "https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png",
      path: "/asos",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/1d/64/69/1d646991dfc4a9071904044eb63090dd.jpg",
      title:
        "https://cdn.freebiesupply.com/logos/large/2x/topshop-1-logo-png-transparent.png",
      path: "/topshop",
    },
  ];
  return (
    <>
      <h1 className="my-6 sm:my-8 md:my-10 lg:my-12 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-800 text-center font-medium font-sans leading-tight sm:leading-snug md:leading-normal">
        The biggest labels
      </h1>

      <div>
        <div className="flex flex-wrap">
          {womensWare.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/4 p-3 flex justify-center items-end cursor-pointer shodow-lg"
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
            >
              <div>
                <Link to={item.path}>
                  <img src={item.title} alt="brands" className="w-[270px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="cursor-pointer w-[180px] p-2 border mx-2 bg-slate-50 font-bold uppercase tracking-wider transition hover:bg-black text-black hover:text-white hover:border-0">
          <Link to="/womens">Shop Womens</Link>
        </button>
      </div>
    </>
  );
};

export default WomennBrands;
