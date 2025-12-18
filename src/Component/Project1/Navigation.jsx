import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-full flex items-center justify-between py-[15px] px-[8%] bg-white shadow-md ">
  <Link to={"/"}>
    <img
      src="/src/assets/route.png"
      alt="Logo"
      className="w-[130px] h-20 object-contain"
    />
  </Link>

  <ul className="flex gap-6 py-2 px-6 rounded-full shadow-[0_0_30px_0_rgba(0,0,0,0.1)] bg-white">
    <li>
      <Link to={"/"} className="text-gray-800 hover:text-blue-500 font-medium">Home</Link>
    </li>
    <li>
      <Link to={"/about"} className="text-gray-800 hover:text-blue-500 font-medium">About</Link>
    </li>
    <li>
      <Link to={"/product"} className="text-gray-800 hover:text-blue-500 font-medium">Product</Link>
    </li>
    <li>
      <Link to={"/contact"} className="text-gray-800 hover:text-blue-500 font-medium">Contact</Link>
    </li>
    </ul>

  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">
    Get Started
  </button>
</div>


    )
}

export default Navigation
