import React from "react";
import { useState, useEffect, useCallback } from "react";


const Mango = ({ items }) => {
  const [products, setProducts] = useState([
    {
      name: "MANGO",
      description: "Wrap-Front Midi Dress - Women",
      id: 1,
      url: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos_alt/S/87066373_01_02.jpg?imwidth=640&imdensity=1&ts=1745589056000",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "MANGO",
      description: "Oversized Denim Jacket - Women",
      id: 2,
      url: "https://shop.mango.com/assets/rcs/pics/static/T1/fotos/S/17031126_01_D6.jpg?ts=1745570184223&im=SmartCrop,width=320,height=448&imdensity=1",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "MANGO",
      description: "Ribbed Knit Sweater - Women",
      id: 3,
      url: "https://cdn.cosmos.so/75341256-7625-439d-becc-1634d2c88121?format=jpeg",
      quantity: 0,
      price: 59.99,
    },
    {
      name: "MANGO",
      description: "High-Waisted Wide-Leg Pants - Women",
      id: 4,
      url: "https://cdn.cosmos.so/1a0981bb-c0df-484c-98d1-b0af5765249c?format=jpeg",
      quantity: 0,
      price: 29.99,
    },
    {
      name: "MANGO",
      description: "Satin Slip Dress - Women",
      id: 5,
      url: "https://cdn.cosmos.so/7d05c577-e6bc-4da2-a83a-5a227fe91ad4?format=jpeg",
      quantity: 0,
      price: 34.99,
    },
    {
      name: "MANGO",
      description: "Tailored Blazer - Women",
      id: 6,
      url: "https://cdn.cosmos.so/a5b6e6bd-d304-4773-9027-9fd71d751cbc?format=jpeg",
      quantity: 0,
      price: 54.99,
    },
    {
      name: "MANGO",
      description: "Cropped Cardigan - Women",
      id: 7,
      url: "https://cdn.cosmos.so/3be5783c-54cf-48e9-8f5c-3abe9655476f?format=jpeg",
      quantity: 0,
      price: 44.99,
    },
    {
      name: "MANGO",
      description: "Linen Button-Down Shirt - Women",
      id: 8,
      url: "https://cdn.cosmos.so/5b10590f-540b-4624-886f-ae371e3a8695?format=jpeg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "MANGO",
      description: "Distressed Denim Shorts - Women",
      id: 9,
      url: "https://cdn.cosmos.so/c951e77f-a132-48d8-a938-8493747a7353?format=jpeg",
      quantity: 0,
      price: 27.99,
    },
    {
      name: "MANGO",
      description: "Striped Breton Top - Women",
      id: 10,
      url: "https://cdn.cosmos.so/2a11ab5c-5f36-4538-9911-e524c9a5222a?format=jpeg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "MANGO",
      description: "Wrap Midi Skirt - Women",
      id: 11,
      url: "https://cdn.cosmos.so/ec7f07b9-34aa-43c9-8ec5-2eb65680b657?format=jpeg",
      quantity: 0,
      price: 32.99,
    },
    {
      name: "MANGO",
      description: "Cashmere Turtleneck Sweater - Women",
      id: 12,
      url: "https://cdn.cosmos.so/83aa55ae-a158-48b2-8b33-435884f59b44?format=jpeg",
      quantity: 0,
      price: 36.99,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [buttonStates, setButtonStates] = useState({});

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

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 0) return;

    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: newQuantity,
      };
      return updatedProducts;
    });
  };

  // Add to cart function
  const addToCart = (index) => {
    updateQuantity(index, products[index].quantity + 1);
    setCartTotal((prevTotal) => prevTotal + products[index].price);

    setButtonStates((prev) => ({
      ...prev,
      [index]: true,
    }));

    // Reset after 2 seconds
    setTimeout(() => {
      setButtonStates((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 1000);
  };

  // Remove from cart function
  const removeFromCart = (index) => {
    if (products[index].quantity > 0) {
      updateQuantity(index, products[index].quantity - 1);
      setCartTotal((prevTotal) => prevTotal - products[index].price);
    }
  };

  return (
    <>
      <div
        className="relative w-full h-[50vh] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div
          className="w-full flex transition-transform duration-700 ease-in-out"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="border-2 p-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 font-semibold my-6 mx-4 sm:mx-6">
        Trendy Fashion - Womens
      </h1>

      {/* Cart Total Display */}
      <div className="bg-gray-100 p-4 mx-4 sm:mx-6 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">
          Cart Total: ${cartTotal.toFixed(2)}
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            {/* Image */}
            <div className="h-[400px] md:h-[500px] sm:h-72 overflow-hidden">
              <img
                src={item.url}
                alt={item.name || "Product"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Body */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {item.name || "Product Name"}
              </h3>

              {/* PRoduct description */}
              <p className="text-slate-500 text-sm">{item.description}</p>

              {/* Price */}
              <p className="text-gray-800 font-bold mb-4">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between mb-4 mt-auto font-bold">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-l transition-colors duration-200"
                  onClick={() => removeFromCart(index)}
                  disabled={item.quantity === 0}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-r transition-colors duration-200"
                  onClick={() => addToCart(index)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                className={`w-full border-2 font-semibold cursor-pointer py-2 px-4 transition-all duration-300 flex items-center justify-center mt-auto ${
                  buttonStates[index]
                    ? "bg-green-500 text-white border-green-500"
                    : "border-black hover:bg-black hover:text-white"
                }`}
                onClick={() => addToCart(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {buttonStates[index] ? "Added!" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default function App() {
  const carouselItems = [
    {
      title: "MANGO",
      description: "This is the first slide in the carousel",
      url: "https://cdn.cosmos.so/20e8e44b-6cb6-430d-add1-2f5574b4ab71?format=jpeg",
    },
    {
      title: "MANGO",
      description: "This is the second slide in the carousel",
      url: "https://cdn.cosmos.so/aad7ae52-9c5d-4764-b845-3fff95c092fc?format=jpeg",
    },
    {
      title: "MANGO",
      description: "This is the third slide in the carousel",
      url: "https://cdn.cosmos.so/6714442b-4a6b-4401-b612-3b58e1261108?format=jpeg",
    },
  ];

  return (
    <>
      <Mango items={carouselItems} />;
    </>
  );
}
