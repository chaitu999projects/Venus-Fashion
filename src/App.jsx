import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import Mens from "./Components/MensCollection/Mens";
import Womens from "./Components/WomensCollection/Womens";
import Adidas from "./Components/BrandsCollection/Adidas";
import Mango from './Components/BrandsCollection/Mango';
import Asos from './Components/BrandsCollection/Asos';
import Tapshop from './Components/BrandsCollection/Topshop';
import Loader from "./Components/Loader/Loader";
import AdidasMen from './Components/BrandsCollectionMen/AdidasMen';
import AsosMen from './Components/BrandsCollectionMen/AsosMen';
import TopshopMen from './Components/BrandsCollectionMen/TopshopMen';
import MangoMen from './Components/BrandsCollectionMen/MangoMen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path='/mango' element={<Mango />} />
          <Route path="/asos" element={<Asos />} />
          <Route path="/topshop" element={<Tapshop />} />
          <Route path="/adidasmen" element={<AdidasMen />}/>
          <Route path="/asosmen" element={<AsosMen />} />
          <Route path="/topshopmen" element={<TopshopMen />} />
          <Route path="/mangomen" element={<MangoMen />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;