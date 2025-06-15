import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import Mens from '../MensCollection/Mens';
import Womens from '../WomensCollection/Womens';
import Adidas from '../BrandsCollection/Adidas';
import Mango from '../BrandsCollection/Mango';
import Asos from '../BrandsCollection/Asos';
import Topshop from '../BrandsCollection/Topshop';
import AdidasMen from '../BrandsCollectionMen/AdidasMen';
import AsosMen from '../BrandsCollectionMen/AsosMen';
import MangoMen from '../BrandsCollectionMen/MangoMen';
import TopshopMen from '../BrandsCollectionMen/TopshopMen';
import PageNotFound from '../PageNotFound/PageNotFound'
import ProductDetails from '../ProductDetails/ProductDetails';

const Routings = () => {
  return (
    <div>
        <Routes>
         

          <Route path='/' element={<LandingPage />}/>
          <Route path='/mens' element={<Mens />}/>
          <Route path="/womens" element={<Womens />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path='/mango' element={<Mango />} />
          <Route path="/asos" element={<Asos />} />
          <Route path='/topshop' element={<Topshop />} />
          <Route path="/adidasmen" element={<AdidasMen />} />
          <Route path="/asosmen" element={<AsosMen />} />
          <Route path="/mangomen" element={<MangoMen />} />
          <Route path="/topshopmen" element={<TopshopMen />} />
          <Route path="/brand/:brand" element={<BrandProducts />} />
          <Route path='/productdetails/:brand/:id' element={<ProductDetails />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>
    </div>
  )
}

export default Routings