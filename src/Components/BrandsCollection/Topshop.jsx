import React from "react";
import { useState, useEffect, useCallback } from "react";


const Topshop = ({ items }) => {
  const [products, setProducts] = useState([
    {
      name: "TOPSHOP",
      description: "Wrap Front Midi Dress - Floral Summer Dress with Tie Waist",
      id: 1,
      url: "https://cdn.cosmos.so/b84fcdf9-9748-4c4b-85f4-f7e07490c2e6?format=jpeg",
      quantity: 0,
      price: 59.99,
    },
    {
      name: "TOPSHOP",
      description: "Oversized Denim Jacket - Light Wash with Raw Hem Detail",
      id: 2,
      url: "https://cdn.cosmos.so/45d3b7f0-1e10-46b4-b426-06d0b971e82d?format=jpeg",
      quantity: 0,
      price: 65.00,
    },
    {
      name: "TOPSHOP",
      description: "High-Waisted Wide Leg Pants - Tailored Office to Evening Style",
      id: 3,
      url: "https://cdn.cosmos.so/34747bb9-812b-4ef3-8b12-0eb5d664c658?format=jpeg",
      quantity: 0,
      price: 45.99,
    },
    {
      name: "TOPSHOP",
      description: "Satin Slip Skirt - Champagne Tone with Side Slit",
      id: 4,
      url: "https://cdn.cosmos.so/4d3e895a-d700-494f-b1ed-951fab8788c3?format=jpeg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "TOPSHOP",
      description: "Cashmere Turtleneck Sweater - Winter White Lightweight Knit",
      id: 5,
      url: "https://cdn.cosmos.so/660b22b8-4f06-453b-ba5d-d7fe06d534c3?format=jpeg",
      quantity: 0,
      price: 72.00,
    },
    {
      name: "TOPSHOP",
      description: "Distressed Mom Jeans - Vintage Blue Wash with Ripped Details",
      id: 6,
      url: "https://cdn.cosmos.so/5c61bbb3-a38c-4b14-b93c-522c7fbfed59?format=jpeg",
      quantity: 0,
      price: 55.50,
    },
    {
      name: "TOPSHOP",
      description: "Cropped Blazer with Shoulder Pads - Structured Boyfriend Fit",
      id: 7,
      url: "https://cdn.cosmos.so/db6c97f7-50a6-4c81-83b4-daea3e1e5aa0?format=jpeg",
      quantity: 0,
      price: 78.00,
    },
    {
      name: "TOPSHOP",
      description: "Leather Look Leggings - High-Waisted Faux Leather Pants",
      id: 8,
      url: "https://cdn.cosmos.so/c4e9cbf6-ad73-4bf1-94c7-f5ec30220869?format=jpeg",
      quantity: 0,
      price: 42.99,
    },
    {
      name: "TOPSHOP",
      description: "Off-Shoulder Ruffle Blouse - Romantic Puff Sleeve Design",
      id: 9,
      url: "https://cdn.cosmos.so/ab5f5760-5af5-407d-b174-74fa7248bfb9?format=jpeg",
      quantity: 0,
      price: 35.75,
    },
    {
      name: "TOPSHOP",
      description: "Wrap Front Bikini Top - Tropical Print with Tie Closure",
      id: 10,
      url: "https://cdn.cosmos.so/a7fd4caf-987a-4e9e-87b6-61f7ad7d0392?format=jpeg",
      quantity: 0,
      price: 24.99,
    },
    {
      name: "TOPSHOP",
      description: "Ribbed Knit Bodycon Dress - Stretchy Midi Length",
      id: 11,
      url: "https://cdn.cosmos.so/1319be65-7194-43ba-b672-cfdbb9e8f1b7?format=jpeg",
      quantity: 0,
      price: 48.50,
    },
    {
      name: "TOPSHOP",
      description: "Linen Button-Down Shirt - Relaxed Fit Summer Top",
      id: 12,
      url: "https://cdn.cosmos.so/9642f89d-6c50-4d40-980f-4269f08b149c?format=jpeg",
      quantity: 0,
      price: 39.99,
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
      title: "TOPSHOP",
      description: "This is the first slide in the carousel",
      url: "https://cdn.cosmos.so/371b3b3e-1131-4f9b-8cab-a35e5236e996?format=jpeg",
    },
    {
      title: "TOPSHOP",
      description: "This is the second slide in the carousel",
      url: "https://cdn.cosmos.so/6e482bbf-b68c-42d8-bedd-c364176e5099?format=jpeg",
    },
    {
      title: "TOPSHOP",
      description: "This is the third slide in the carousel",
      url: "https://cdn.cosmos.so/85f497a1-1861-4b55-abb7-f668bd9768fa?format=jpeg",
    },
  ];

  return (
    <>
      <Topshop items={carouselItems} />;
    </>
  );
}
