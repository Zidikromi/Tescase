import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="w-full navbar bg-white shadow-xl ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">  <img
            src="https://pngimg.com/d/pokemon_logo_PNG12.png"
            alt=""
            className="w-10 h-10"
          />
          <img
              src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?width=640&crop=smart&auto=webp&s=5fc89334e792e2c9b294d1d328bf522cdede4cdf"
              alt=""
              className="pl-2 h-10"
            />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex gap-5 px-6">
              
              <li>
                <Link
                  to="/"
                  className="text-black hover:text-red-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/saved"
                  className="text-black hover:text-red-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>
    
      </div>
      <div className="drawer-side z-10 ">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-white shadow-md">
 
          <li>
                <Link
                  to="/"
                  className="text-black hover:text-red-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/saved"
                  className="text-black hover:text-red-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Saved
                </Link>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
