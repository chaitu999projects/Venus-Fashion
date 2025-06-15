import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ProductData from '../ProductData/ProductData'

const Adidas = ({ items }) => {
  const [products, setProducts] = useState([
    {
      name: "adidas",
      description: "Women's Breaknet 2.0 Casual Shoe",
      id: 1,
      url: "https://cdn.cosmos.so/3dd17060-a0d9-403d-b25e-da080b477347?format=jpeg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "adidas",
      description: "Women's BREAKNET 2.0 FTWWHT/CBLACK/SILVMT Running Shoe ",
      id: 2,
      url: "https://cdn.cosmos.so/7b092bf9-a143-4de5-b567-c3f376703c3c?format=jpeg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "adidas",
      description : "Women's Smashic Wmn Sneaker",
      id: 3,
      url: "https://cdn.cosmos.so/67760837-dad6-4f63-8ad7-b541516a5441?format=jpeg",
      quantity: 0,
      price: 59.99,
    },
    {
      name: "adidas",
      description: "Womens Sheenwalk W Walking Shoe",
      id: 4,
      url: "https://cdn.cosmos.so/58359c3d-3074-44d8-98d7-107503dfa92f?format=jpeg",
      quantity: 0,
      price: 29.99,
    },
    {
      name: "adidas",
      description: "Women's Whizzlite Sneaker",
      id: 5,
      url: "https://cdn.cosmos.so/e2d0259e-3be7-4490-97a9-c6ffa6204e35?format=jpeg",
      quantity: 0,
      price: 34.99,
    },
    {
      name: "adidas",
      description: "Women's Contem X W Running Shoe",
      id: 6,
      url: "https://cdn.cosmos.so/dde95439-d57d-40d4-9298-277dbe72542b?format=jpeg",
      quantity: 0,
      price: 54.99,
    },
    {
      name: "adidas",
      description: "Women's SOFTRIDE Orla Metallic Dream Sneaker",
      id: 7,
      url: "https://cdn.cosmos.so/a3dd7031-0d3e-4300-ac97-5cc6f540ff11?format=jpeg",
      quantity: 0,
      price: 44.99,
    },
    {
      name: "adidas",
      description: "Womens Ultimashow Casual Shoe",
      id: 8,
      url: "https://cdn.cosmos.so/93b2801b-a36d-4679-9076-9b08d9a51fc1?format=jpeg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "adidas",
      description: "Womens Classic Rubber W5 Running Shoes",
      id: 9,
      url: "https://cdn.cosmos.so/a218bf10-2342-47b3-9d60-f78065f11760?format=jpeg",
      quantity: 0,
      price: 27.99,
    },
    {
      name: "adidas",
      description: "Park ST Sneakers For Women ",
      id: 10,
      url: "https://cdn.cosmos.so/8ff75e4d-07ad-4911-abf7-2b048cfbd975?format=jpeg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "adidas",
      description: "Women's Lace-Up Sneakers",
      id: 11,
      url: "https://cdn.cosmos.so/52cc9e30-cbbf-4d3b-aa70-26c6b2279f6f?format=jpeg",
      quantity: 0,
      price: 32.99,
    },
    {
      name: "adidas",
      description: "ADVANTAGE Sneakers For Women",
      id: 12,
      url: "https://cdn.cosmos.so/a1b03c28-df51-4fc6-b7e1-6e066f935c0c?format=jpeg",
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
        Trendy Sneakers - Womens
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
              <Link to={`/productdetails/adidas/${item.id}`}>
              <img
                src={item.url}
                alt={item.name || "Product"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              </Link>
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
      title: "adidas",
      description: "This is the first slide in the carousel",
      url: "https://i.pinimg.com/736x/e7/1f/48/e71f480bd75e40b75dfb3b18e5611f45.jpg",
    },
    {
      title: "adidas",
      description: "This is the second slide in the carousel",
      url: "https://i.pinimg.com/736x/ac/e7/a6/ace7a640f270f821c37da5f2898dd449.jpg",
    },
    {
      title: "adidas",
      description: "This is the third slide in the carousel",
      url: "https://i.pinimg.com/736x/43/08/85/43088576e19af6eeb750b6ca123cf1ba.jpg",
    },
  ];

  return (
    <>
      <Adidas items={carouselItems} />;
    </>
  );
}
