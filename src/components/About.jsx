"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-lg mt-10">
      
      <div className="flex-1 text-center md:text-left p-6">
        <h1 className="text-4xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text">
            Ivanovicx Nuñez
          </span>
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Computer Science Engineer | Passionate about AI & Web Development
        </p>
        
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a
            href="https://github.com/IvanNunez25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ivanovicx-nunez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:ivanovicx.nunez@outlook.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <a 
          href="/CV_Ivanovicx_Nuñez.pdf" 
          download="CV_Ivanovicx_Nuñez.pdf" 
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>

      
      <div className="flex-1 flex justify-center items-center p-6">
        <Image
          src="/Imagen.webp"
          alt="Ivanovicx Nuñez"
          width={240}
          height={240}
          className="rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        />
      </div>
    </div>
  );
}
