import React from "react";
import { useState, useEffect, useCallback } from "react";


const Asos = ({ items }) => {
  const [products, setProducts] = useState([
    {
      name: "ASOS",
      description: "Floral Wrap Midi Dress - Perfect for spring occasions",
      id: 1,
      url: "https://cdn.cosmos.so/5ba796b0-dcd6-4816-b9f3-630849b56318?format=jpeg",
      quantity: 0,
      price: 65.99,  // Increased (premium dress)
    },
    {
      name: "ASOS",
      description: "Oversized Denim Jacket - Classic light wash with raw hem",
      id: 2,
      url: "https://cdn.cosmos.so/df372c77-11cd-43f3-8e9c-3f981bff97eb?format=jpeg",
      quantity: 0,
      price: 49.50,  // Increased (denim staple)
    },
    {
      name: "ASOS",
      description: "Ribbed Knit Bodycon Dress - Stretchy midi length",
      id: 3,
      url: "https://cdn.cosmos.so/76d5283c-23ea-49dd-a279-88882331a748?format=jpeg",
      quantity: 0,
      price: 42.99,  // Decreased (basic knit)
    },
    {
      name: "ASOS",
      description: "High-Waisted Wide Leg Pants - Tailored office-to-evening style",
      id: 4,
      url: "https://cdn.cosmos.so/458a1f45-39e3-4863-817a-99bf0bb60f6b?format=jpeg",
      quantity: 0,
      price: 35.25,  // Increased (versatile pants)
    },
    {
      name: "ASOS",
      description: "Satin Slip Skirt - Luxe champagne tone with side slit",
      id: 5,
      url: "https://cdn.cosmos.so/9dbae332-d355-4a65-8f68-c03d48d0ad82?format=jpeg",
      quantity: 0,
      price: 28.99,  // Decreased (seasonal item)
    },
    {
      name: "ASOS",
      description: "Cropped Blazer with Shoulder Pads - Structured boyfriend fit",
      id: 6,
      url: "https://cdn.cosmos.so/1b3d4469-3030-4c17-878d-c6238dda83fa?format=jpeg",
      quantity: 0,
      price: 59.95,  // Increased (statement blazer)
    },
    {
      name: "ASOS",
      description: "Cashmere Turtleneck Sweater - Winter white lightweight knit",
      id: 7,
      url: "https://cdn.cosmos.so/6e790ae6-c7e6-445f-adf0-7e6ab3ef5aa1?format=jpeg",
      quantity: 0,
      price: 72.00,  // Increased (premium material)
    },
    {
      name: "ASOS",
      description: "Distressed Mom Jeans - Vintage blue wash with ripped details",
      id: 8,
      url: "https://cdn.cosmos.so/30b39c1c-72d8-4f71-81ee-48081b737e46?format=jpeg",
      quantity: 0,
      price: 45.50,  // Decreased (trend item)
    },
    {
      name: "ASOS",
      description: "Wrap Front Bikini Top - Tropical print with tie closure",
      id: 9,
      url: "https://cdn.cosmos.so/6717486e-f9d5-4491-9d86-9596afbe6189?format=jpeg",
      quantity: 0,
      price: 22.99,  // Decreased (swimwear)
    },
    {
      name: "ASOS",
      description: "Leather Look Leggings - High-waisted faux leather pants",
      id: 10,
      url: "https://cdn.cosmos.so/f6ba3331-dfb8-4153-b60e-3455bd8fd4ff?format=jpeg",
      quantity: 0,
      price: 31.75,  // Decreased (faux leather)
    },
    {
      name: "ASOS",
      description: "Off-Shoulder Ruffle Blouse - Romantic puff sleeve design",
      id: 11,
      url: "https://cdn.cosmos.so/2897087c-7c39-4d16-96b5-aff6bb578592?format=jpeg",
      quantity: 0,
      price: 27.99,  // Decreased (trend top)
    },
    {
      name: "ASOS",
      description: "Chunky Platform Sneakers - 90s-inspired white leather",
      id: 12,
      url: "https://cdn.cosmos.so/715c3b7d-b6e6-448f-8c97-801e06bb9171?format=jpeg",
      quantity: 0,
      price: 55.00,  // Increased (footwear)
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
      title: "ASOS",
      description: "This is the first slide in the carousel",
      url: "https://cdn.cosmos.so/151119b2-6e92-46aa-8d35-c66bb7b701cc?format=jpeg",
    },
    {
      title: "ASOS",
      description: "This is the second slide in the carousel",
      url: "https://cdn.cosmos.so/8ede7ea3-e885-4f4a-8039-1ae9716b9feb?format=jpeg",
    },
    {
      title: "ASOS",
      description: "This is the third slide in the carousel",
      url: "https://cdn.cosmos.so/11ac9d60-50f1-4805-a9d7-ca884c41d973?format=jpeg",
    },
  ];

  return (
    <>
      <Asos items={carouselItems} />;
    </>
  );
}
