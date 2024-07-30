"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Page from "../mainRickAndMorty/page"; // Importa el componente Page
import BiFrame from "../components/BiFrame";

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="flex flex-col min-h-screen w-full bg-blue-50">
      <header className="w-full">
        <Navbar />
      </header>

      <div className="flex flex-col md:flex-row items-center justify-around px-4 mt-20">
        <div
          className={`bg-pantone-2020 transition-all duration-100 ${
            selected === "powerbi"
              ? "w-11/12 h-5/6 md:w-11/12 md:h-5/6"
              : "w-64 h-64 m-5"
          } text-center rounded ${
            selected && selected !== "powerbi" ? "hidden" : "block"
          }`}
        >
          <p className="text-2xl font-bold text-white mt-4">PowerBI</p>
          <button
            className="bg-gray-200 text-black px-5 rounded mt-10 mb-5"
            onClick={() =>
              setSelected(selected === "powerbi" ? null : "powerbi")
            }
          >
            Messi vs Ronaldo
          </button>
          {selected === "powerbi" && (
            <>
              <BiFrame />
              <button
                className="bg-red-500 text-white px-3 py-1 rounded mt-5 mb-5"
                onClick={() => setSelected(null)}
              >
                Cerrar
              </button>
            </>
          )}
        </div>

        <div
          className={`bg-pantone-2020 transition-all duration-100 ${
            selected === "api"
              ? "w-11/12 h-5/6 md:w-11/12 md:h-5/6"
              : "w-64 h-64"
          } text-center rounded ${
            selected && selected !== "api" ? "hidden" : "block"
          }`}
        >
          <p className="text-2xl font-bold text-white mt-4">API consultation</p>
          <button
            className="bg-gray-200 text-black px-5 rounded mt-10 mb-5"
            onClick={() => setSelected(selected === "api" ? null : "api")}
          >
            API Rick & Morty
          </button>
          {selected === "api" && (
            <>
              <Page />
              <button
                className="bg-red-500 text-white px-3 py-1 rounded mt-5 mb-5"
                onClick={() => setSelected(null)}
              >
                Cerrar
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
