import React, { useState, useEffect, useCallback } from "react";

const Mens = ({ items }) => {
  // State for individual product quantities
  const [products, setProducts] = useState([
    {
      name: "Jeans",
      url: "https://i.pinimg.com/736x/b2/eb/94/b2eb94168bce7713e0afb18e2f12fc3e.jpg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "Sweat Shirts",
      url: "https://i.pinimg.com/736x/2e/62/26/2e622675a31c0510f969d8fc530cb347.jpg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "Jokets",
      url: "https://i.pinimg.com/736x/68/e5/65/68e5656d985a719f41615127841908c7.jpg",
      quantity: 0,
      price: 59.99,
    },
    {
      name: "Trendy Shirts",
      url: "https://i.pinimg.com/736x/f3/b3/ca/f3b3ca5a60537f3936d6804eed72d6b5.jpg",
      quantity: 0,
      price: 29.99,
    },
    {
      name: "Half hand Beach Shirts",
      url: "https://i.pinimg.com/736x/29/f5/98/29f598fb978d3145a891edd5e860b855.jpg",
      quantity: 0,
      price: 34.99,
    },
    {
      name: "Beach Jokets",
      url: "https://i.pinimg.com/736x/5b/07/27/5b07275d93e7516f2653e17531fdb41f.jpg",
      quantity: 0,
      price: 54.99,
    },
    {
      name: "Pants",
      url: "https://i.pinimg.com/736x/b1/bb/dd/b1bbdd252f772cfa3f2f372ce76c0eec.jpg",
      quantity: 0,
      price: 44.99,
    },
    {
      name: "Stylish Uppers",
      url: "https://i.pinimg.com/736x/01/63/4d/01634dde0d31090a2809b1050c8119d2.jpg",
      quantity: 0,
      price: 49.99,
    },
    {
      name: "Our size Shirts",
      url: "https://i.pinimg.com/736x/22/4f/78/224f784fb840e181c793f8ad1be98f02.jpg",
      quantity: 0,
      price: 27.99,
    },
    {
      name: "Summer Goa Ware",
      url: "https://i.pinimg.com/736x/9e/c2/f2/9ec2f24ab38e48849437754b330642ae.jpg",
      quantity: 0,
      price: 39.99,
    },
    {
      name: "Street Shirts",
      url: "https://i.pinimg.com/736x/d2/d7/92/d2d792ce82c61716eeb63f094417f9d4.jpg",
      quantity: 0,
      price: 32.99,
    },
    {
      name: "Cotton Long Sleev Shirts",
      url: "https://img-va.myshopline.com/image/store/1719916422133/ae0768c8bd5f664d42aacec48a66942d_900x.jpg?w=900&h=1200&q=80",
      quantity: 0,
      price: 36.99,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [buttonStates, setButtonStates] = useState({});

  // Cart total state
  const [cartTotal, setCartTotal] = useState(0);

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

  // Update quantity for a specific product
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
      {/* Hero Carousel */}
      <div
        className="relative w-full h-[100vh] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div
          className="w-full h-[100vh] flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full relative flex justify-center p-4 md:p-9 overflow-hidden"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center items-center mb-3 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold tracking-wider">
                  {item.title}
                </h1>
                <div className="flex my-6 md:my-10">
                  <button className="cursor-pointer w-[150px] sm:w-[180px] p-2 border mx-2 bg-slate-50 font-bold uppercase tracking-wider transition hover:bg-black text-black hover:text-white hover:border-0">
                    Shop Mens
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Title */}
      <h1 className="border-2 p-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 font-semibold my-6 mx-4 sm:mx-6">
        Mens Trendy Fashions
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
      title: "SNITCH",
      description: "This is the first slide in the carousel",
      url: "https://i.pinimg.com/736x/a9/27/1f/a9271f18f8e7e17fae5efc06667f17ef.jpg",
    },
    {
      title: "TOPSHOP",
      description: "This is the second slide in the carousel",
      url: "https://i.pinimg.com/736x/d2/ce/df/d2cedfd2f0a15111f77279392aa79bfa.jpg",
    },
    {
      title: "MANGO",
      description: "This is the third slide in the carousel",
      url: "https://i.pinimg.com/736x/1a/37/d6/1a37d6bdcfba04b90fbda1c40177f358.jpg",
    },
  ];

  return <Mens items={carouselItems} />;
}
