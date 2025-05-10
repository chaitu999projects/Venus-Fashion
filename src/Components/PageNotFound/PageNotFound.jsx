import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className=" shadow main-container w-full  h-[100vh] flex flex-col justify-end items-center text-center">
      <div className="border border-amber-100 p-5 rounded bg-amber-50" >
            <Link to='/' className='text-2xl text-red-950'>Home Page </Link>
        </div>
        









        
    </div>
  );
};

export default PageNotFound;
