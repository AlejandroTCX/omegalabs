// src/components/ProjectCard.js
import React from "react";

const ProjectCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="max-w-sm bg-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <img
          className="object-contain h-full w-full"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-6 ">
        <h2 className="text-xl text-black font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 ">{description}</p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-2 border-pantone-2020 text-pantone-2020 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
