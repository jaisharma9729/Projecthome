import React, { useEffect } from "react";
import logo from './Logo.svg'
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

  const location = useLocation()
  const toggleNavbar = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  }

  useEffect(() => {
    const locations = () => {
      if (location.pathname == '/soller/catalogue') {
        document.querySelector('.industries').classList.replace('border-red-500', 'border-transparent')
        document.querySelector('.catalog').classList.replace('border-transparent', 'border-red-500')
      }
      if (location.pathname == '/') {
        document.querySelector('.catalog').classList.replace('border-red-500', 'border-transparent')
        document.querySelector('.industries').classList.replace('border-transparent', 'border-red-500')
      }
    }

    locations()
  }, [location.pathname])

  return (
    <nav className="bg-light border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-7 w-auto" src={logo} alt="Logo" crossOrigin="anonymous" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="industries text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-red-500 text-sm font-medium">Industries</Link>
              <a href="#" className="text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Solutions</a>
              <a href="#" className="text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Sustainability
                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link to="/soller/catalogue" className="catalog text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Our Catalog
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#" className="ml-4 text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">About Us</a>
            <a href="#" className="ml-4 text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Newsroom
              <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="ml-4 text-zinc-900 dark:text-dark inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Resources
              <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          {/* <!-- Burger menu icon visible on small screens --> */}
          <button id="menu-toggle" className="ml-4 p-1 rounded-full text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:hidden" onClick={toggleNavbar}>
            <svg className="h-5 w-5 text-zinc-400 dark:text-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <svg className="h-5 w-5 text-zinc-400 dark:text-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#footer" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-dark bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Contact Us</a>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state --> */}
      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Industries</a>
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Solutions</a>
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Sustainability</a>
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Our Catalog</a>
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">About Us</a>
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Newsroom</a>
          <a href="#" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Resources</a>
        </div>
      </div>
    </nav>
  );
};
