"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  tags: string[];
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "cashAR",
    description: "Descripción del proyecto 1",
    image: "/Preview/1.png",
    githubLink: "https://github.com/IvanNunez25/cashAR_iOS",
    tags: ['iOS', 'Mobile', 'Swift', 'Machine Learning'],
    date: "Feb 2024 - May 2024",
  },
  {
    id: 2,
    title: "Juego 19",
    description: "Descripción del proyecto 2",
    image: "/Preview/2.png",
    githubLink: "https://github.com/JRon103/JuegoAI_19",
    tags: ["Machine Learning", "Graphs", "Intelligent Agent", "Python"],
    date: "Feb 2024 - Mar 2024",
  },
  {
    id: 3,
    title: "MeterVision",
    description: "Descripción del proyecto 3",
    image: "/Preview/3.png",
    githubLink: "https://github.com/JRon103/IA_openvinoServer",
    tags: ["Machine Learning", "Python", "BackEnd", "Computer Vision", "OpenVINO", "React", "FrontEnd"],
    date: "May 2024 - Jun 2024",
  },
  { id: 4, 
    title: "FuzzyLogic", 
    description: "Machine Learning project using Fuzzy Logic", 
    image: "/Preview/4.png",
    githubLink: "https://github.com/IvanNunez25/FuzzyLogic", 
    tags: ["Machine Learning", "Python"], 
    date: "Apr 2024 - May 2024"
  },
  { 
    id: 5, 
    title: "Music&Movies Rater", 
    description: "FullStack app for rating music and movies", 
    image: "/Preview/5.png",
    githubLink: "https://github.com/JC1902/proyecto-final", 
    tags: ["JavaScript", "Vue", "Node", "Express", "MongoDB", "FullStack"], 
    date: "Nov 2023 - Dec 2023"
  },
  { 
    id: 6, 
    title: "Web911", 
    description: "Emergency response web system", 
    image: "/Preview/6.png",
    githubLink: "https://github.com/JC1902/Web911", 
    tags: ["JavaScript", "Node", "Express", "SCSS", "mariaDB", "FullStack"], 
    date: "May 2023 - Oct 2023"
  },
  { id: 7, 
    title: "SQLTec Compilador", 
    description: "SQL Compiler using Java and Assembly", 
    image: "/Preview/7.png",
    githubLink: "https://github.com/IvanNunez25/SQLTecCompilador", 
    tags: ["Java", "SQL", "Assembly", "Formal Language and Automata Theory"], 
    date: "Feb 2024 - Jun 2024"
  }
];


export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll horizontal manualmente
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Cantidad de desplazamiento
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-5">
      {!selectedProject ? (
        // 🔹 Vista en GRID (3xN)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 text-white p-5 rounded-lg cursor-pointer hover:scale-95 transition"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="text-xl font-bold">{project.title}</h3>
              {/* Contenedor de tags con flex-wrap */}
              <div className="flex flex-wrap text-center gap-2 mt-2">
                {project.tags.slice(0, 3).map((tag, key) => (
                  <span
                    key={key}
                    className="bg-gray-700 text-xs text-white px-2 py-1 rounded-lg min-w-[60px] truncate"
                  >
                    {tag}
                  </span>
                ))}

                {/* Si hay más de 3 tags, mostrar "+X más" */}
                {project.tags.length > 3 && (
                  <span className="bg-gray-600 text-xs px-2 py-1 rounded-lg">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // 🔹 Vista en FILA (scroll horizontal)
        <div className="relative">

          {/* Vista de Detalles con el botón "Cerrar" en la esquina superior derecha */}
          <button
            className="absolute top-[+330px] right-[-15px] p-3 bg-red-600 text-white rounded-full shadow-lg z-10"
            onClick={() => setSelectedProject(null)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>


          {/* Botón Izquierda */}
          <button
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full shadow-lg z-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Contenedor Scrollable */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-5 p-3 scrollbar-hide"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-[300px] bg-gray-800 text-white p-5 rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                <h3 className="text-lg font-bold">{project.title}</h3>
                {/* Contenedor de tags con flex-wrap */}
                <div className="flex flex-wrap text-center gap-2 mt-2">
                  {project.tags.slice(0, 3).map((tag, key) => (
                    <span
                      key={key}
                      className="bg-gray-700 text-xs text-white px-2 py-1 rounded-lg min-w-[60px] truncate"
                    >
                      {tag}
                    </span>
                  ))}

                  {/* Si hay más de 3 tags, mostrar "+X más" */}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded-lg">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón Derecha */}
          <button
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full shadow-lg z-10"
            onClick={() => scroll("right")}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Detalles del Proyecto Seleccionado */}
      {selectedProject && (
        <div className="mt-6 p-5 bg-gray-900 text-white rounded-lg">
          <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold">{selectedProject.title}</h2>

          <div className="">
            <p className="opacity-75"> {selectedProject.date}</p>
            <p className="mt-2"><a href={selectedProject.githubLink} className="flex flex-row" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className="mr-2" /><span>See on GitHub</span></a></p>
            <div className="mt-4">
              <strong>Tags:</strong>
              <div className="flex flex-wrap gap-2 mt-2 mb-10">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white text-sm px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-2">{selectedProject.description}</p>
        </div>
      )}

    </div>
  );
}
