import React from "react";
import { Link } from "react-router-dom";

const MensBrands = () => {
  const mensWare = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/b8/d5/aa/b8d5aaf474a6f2d0743137d8b4dc5521.jpg",
      title: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1971-present.png",
      path: '/adidasmen',
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/52/72/cc/5272cc7e75c85bc34e2c3a883e85536d.jpg",
      title: "https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png",
      path: '/asosmen',
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/d1/b1/b3/d1b1b3cf2b5b5b25aafa9194f1cd81ab.jpg",
        title:"https://cdn.freebiesupply.com/logos/large/2x/topshop-1-logo-png-transparent.png",
        path: '/topshopmen',
    },
    {
        id: 4,
        url: "https://i.pinimg.com/736x/e0/79/af/e079af8af60b85520a5d73680bd21a8b.jpg",
        title: "https://1000logos.net/wp-content/uploads/2021/05/Mango-logo.png",
        path: '/mangomen',
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-wrap">
          {mensWare.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/4 p-3 flex justify-center items-end text-white"
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
            >
              <div>
              <Link to={item.path}> <img src={item.title} alt="brands" className="w-[270px]" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
      <button className="cursor-pointer w-[180px] p-2 border mx-2 bg-slate-50 font-bold uppercase tracking-wider transition hover:bg-black text-black hover:text-white hover:border-0">
       <Link to='/mens'>  Shop For Mens</Link>
      </button>
      </div>
    </>
  );
};

export default MensBrands;
