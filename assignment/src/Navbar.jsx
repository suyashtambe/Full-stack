import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black p-4 flex justify-between items-center">
      <img src="logo.png"  className="h-10 ml-4" />
      <span className="text-white text-lg mr-4">Signup</span>
    </nav>
  );
};

export default Navbar;
