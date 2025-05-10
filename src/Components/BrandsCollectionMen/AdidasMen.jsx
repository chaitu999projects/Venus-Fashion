import React from "react";
import { useState, useEffect, useCallback } from "react";


const AdidasMen = ({ items }) => {
  const [products, setProducts] = useState([
    {
      name: "adidas",
      description: "Mens Breaknet 2.0 Casual Shoe",
      id: 1,
      url: "https://cdn.cosmos.so/7a8e0fff-b497-426f-8b4f-0dd7cf498620?format=jpeg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "adidas",
      description: "Men's BREAKNET 2.0 FTWWHT/CBLACK/SILVMT Running Shoe ",
      id: 2,
      url: "https://cdn.cosmos.so/a8336a02-2871-4cff-9234-1aec6f3c770b?format=jpeg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "adidas",
      description : "Men's Smashic Wmn Sneaker",
      id: 3,
      url: "https://cdn.cosmos.so/5504f6e6-dd3c-43e7-8475-ac6fe3d57a50?format=jpeg",
      quantity: 0,
      price: 59.99,
    },
    {
      name: "adidas",
      description: "Mens Sheenwalk W Walking Shoe",
      id: 4,
      url: "https://cdn.cosmos.so/450b0b08-db09-4a55-ae03-cf90200ab3f9?format=jpeg",
      quantity: 0,
      price: 29.99,
    },
    {
      name: "adidas",
      description: "Men's Whizzlite Sneaker",
      id: 5,
      url: "https://cdn.cosmos.so/c540fcd2-cdde-4466-8ddc-1dd261806cbb?format=jpeg",
      quantity: 0,
      price: 34.99,
    },
    {
      name: "adidas",
      description: "Men's Contem X W Running Shoe",
      id: 6,
      url: "https://cdn.cosmos.so/d852109e-1517-4ec8-a82b-a05e459e3c26?format=jpeg",
      quantity: 0,
      price: 54.99,
    },
    {
      name: "adidas",
      description: "Men's SOFTRIDE Orla Metallic Dream Sneaker",
      id: 7,
      url: "https://cdn.cosmos.so/2daea711-2fce-41ab-aee2-dedcf56a4f7a?format=jpeg",
      quantity: 0,
      price: 44.99,
    },
    {
      name: "adidas",
      description: "Mens Ultimashow Casual Shoe",
      id: 8,
      url: "https://cdn.cosmos.so/0dbf4134-405d-487b-b191-15d4ab6a54f9?format=jpeg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "adidas",
      description: "Mens Classic Rubber W5 Running Shoes",
      id: 9,
      url: "https://cdn.cosmos.so/605695d9-c920-4284-93e5-844d551269cf?format=jpeg",
      quantity: 0,
      price: 27.99,
    },
    {
      name: "adidas",
      description: "Park ST Sneakers For Men ",
      id: 10,
      url: "https://cdn.cosmos.so/e2d0259e-3be7-4490-97a9-c6ffa6204e35?format=jpeg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "adidas",
      description: "Men's Lace-Up Sneakers",
      id: 11,
      url: "https://cdn.cosmos.so/3b467018-7f33-4881-a0d2-8407b5addf64?format=jpeg",
      quantity: 0,
      price: 32.99,
    },
    {
      name: "adidas",
      description: "ADVANTAGE Sneakers For Men",
      id: 12,
      url: "https://cdn.cosmos.so/1991f066-f1d3-49af-a46b-250af34decbd?format=jpeg",
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
      <AdidasMen items={carouselItems} />;
    </>
  );
}
