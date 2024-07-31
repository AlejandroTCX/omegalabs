"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Page from "../mainRickAndMorty/page"; // Importa el componente Page
import BiFrame from "../components/BiFrame";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="flex flex-col min-h-screen w-full bg-whiteSoft">
      <header className="w-full h-20">
        <Navbar />
      </header>
      <div className="flex flex-col md:flex-row items-center w-full h-screen justify-around">
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <p className="text-black font-bold text-3xl">Portafolio</p>
          <p className="text-black text-xl font-bold text-gray-700">
            Checa los proyectos que he realizado!!
          </p>
          <div className="flex justify-around mt-20">
            <ProjectCard
              title="Ronaldo VS Messi"
              description="Power BI dashboard, obtain statics from all time carreer and display some measures like total goals, most goals against and all the stuff"
              imageUrl="https://cdn.jwplayer.com/v2/media/1OGTLuCD/poster.jpg?width=1920"
              tags={["PowerBI", "CSV", "Python", "Keegle"]}
            />
            <ProjectCard
              title="API Rick and Morty"
              description="Cosume API from mi favorite animation, deploy the episode, the caracters with alive or dead status and locations with a quick description"
              imageUrl="https://m.media-amazon.com/images/S/pv-target-images/3f8ae4a13de932bc679af5272ce983693d773818ff67a774dfcf0592bcd3beb7._SX1080_FMjpg_.jpg"
              tags={["JavaScript", "API Rest", "React", "NextJS"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
