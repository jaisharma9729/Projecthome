import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { Link } from "react-router-dom";


export const SollerCatalogue = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/4">
          <h2 className="text-xl font-bold mb-4">Civil</h2>
          <ul>
            <li className="mb-2">
              <Link to="#steel-section" className="flex items-center text-red-500">
                <span className="mr-2">Steel</span>
                <span>&gt;</span>
              </Link>
            </li>
            <li className="mb-2">
              <a href="#rmc-section" className="flex items-center text-zinc-700">
                <span className="mr-2">RMC</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#aac-section" className="flex items-center text-zinc-700">
                <span className="mr-2">AAC Blocks</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-3/4">
          <div id="steel-section" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Steel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border p-4">
                <img src={img1} alt="High Grade TMT Steel Bars" className="mb-4" />
                <h3 className="font-bold">High Grade TMT Steel Bars</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img2} alt="Corrosion Resistant Steel" className="mb-4" />
                <h3 className="font-bold">Corrosion Resistant Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img3} alt="Ready Mix Concrete" className="mb-4" />
                <h3 className="font-bold">Ready Mix Concrete</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img3} alt="Structural Steel" className="mb-4" />
                <h3 className="font-bold">Structural Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img3} alt="Structural Steel" className="mb-4" />
                <h3 className="font-bold">Structural Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
            </div>
          </div>
          <div id="rmc-section" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">RMC</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border p-4">
                <img src={img1} alt="High Grade TMT Steel Bars" className="mb-4" />
                <h3 className="font-bold">High Grade TMT Steel Bars</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img3} alt="Corrosion Resistant Steel" className="mb-4" />
                <h3 className="font-bold">Corrosion Resistant Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img2} alt="Ready Mix Concrete" className="mb-4" />
                <h3 className="font-bold">Ready Mix Concrete</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img1} alt="Structural Steel" className="mb-4" />
                <h3 className="font-bold">Structural Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img2} alt="Structural Steel" className="mb-4" />
                <h3 className="font-bold">Structural Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
            </div>
          </div>
          <div id="aac-section" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AAC Blocks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border p-4">
                <img src={img1} alt="High Grade TMT Steel Bars" className="mb-4" />
                <h3 className="font-bold">High Grade TMT Steel Bars</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img3} alt="Corrosion Resistant Steel" className="mb-4" />
                <h3 className="font-bold">Corrosion Resistant Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img2} alt="Ready Mix Concrete" className="mb-4" />
                <h3 className="font-bold">Ready Mix Concrete</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img1} alt="Structural Steel" className="mb-4" />
                <h3 className="font-bold">Structural Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
              <div className="border p-4">
                <img src={img2} alt="Structural Steel" className="mb-4" />
                <h3 className="font-bold">Structural Steel</h3>
                <p className="text-blue-500">OPC 53 grade and 43 grade cement provide long-lasting durability...</p>
                <button className="mt-4 border border-red-500 text-red-500 px-4 py-2">Request for Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
