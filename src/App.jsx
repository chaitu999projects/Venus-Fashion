import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader";
import Footer from "./Components/Footer/Footer";
import Routings from "./Components/Routes/Routings";


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
        <Routings />
      </div>
      <Footer />
    </div>
  );
};

export default App;