"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-blue-50">
      <header className="w-full">
        <Navbar />
      </header>

      <div className="flex flex-col md:flex-row items-center justify-around px-4 mt-10">
        <div className="flex flex-col items-center text-center w-full md:w-1/3 mt-10">
          <h1 className="text-5xl font-bold text-pantone-2020">
            Hola! Soy
            <span className="text-pantone-2020"> Alejandro</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 text-justify">
            Estoy cursando mi último semestre de la ingeniería en desarrollo de
            software en CETI Colomos, soy un apasionado por la programación, los
            videojuegos y tengo un brazo tatuado. Me encanta crear proyectos que
            tengan estética y un uso práctico.
          </p>
          <button className="mt-8 px-6 py-2 text-white bg-pantone-2020 rounded-full hover:bg-pantone-2020">
            Contact
          </button>
          <div className="flex items-center p-5 space-x-4">
            <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            <Image src="/github.svg" alt="GitHub" width={40} height={40} />
          </div>
        </div>

        <div className="relative mt-12 w-full md:w-1/3 flex justify-center">
          <div
            className="absolute inset-0 transform translate-x-10 translate-y-10 bg-pantone-2020 rounded-full"
            style={{ width: "220px", height: "220px" }}
          ></div>
          <Image
            src="/omega.jpg"
            alt="Alejandro Tolentino Cardenas"
            width={200}
            height={200}
            className="relative rounded-full border-4 border-white"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
