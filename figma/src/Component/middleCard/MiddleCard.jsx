import React from "react";
import { Link } from "react-router-dom";

export const MiddleCard = () => {
  return (
    <div className="middle-card container w-4/5 mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-32">
        <div>
          <h3 className="text-red-500 font-semibold">Our Projects</h3>
          <h1 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: '#3b3a3a' }}>Finished Products for Solar Energy Projects</h1>
          <p className="text-zinc-600 dark:text-zinc-600 mt-4">Discover the best prices for main equipment, civil works, electrical system and balance of supplies for solar energy projects.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-light p-6 shadow rounded-sm shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-700">50+</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Projects of National Importance</p>
          </div>
          <div className="bg-light p-6 shadow rounded-sm shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-700">54+</h2>
            <p className="text-zinc-600 dark:text-zinc-400">EPC Project Developers</p>
          </div>
          <div className="bg-light p-6 shadow rounded-sm shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-700">20+</h2>
            <p className="text-zinc-600 dark:text-zinc-400">EPC Sub-Sectors</p>
          </div>
          <div className="bg-red-500 p-6 shadow rounded-sm text-white shadow-xl">
            <Link to='/soller/catalogue'>
              <h2 className="text-l font-bold">Explore Solar Catalog</h2>
              <span className=" text-3xl 	">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
