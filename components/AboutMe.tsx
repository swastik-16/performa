import React from "react";
import { Cards } from "./Cards";

export function AboutMe() {
  return (
    <div>
      <div className="flex justify-center text-white items-center w-full text-3xl mt-4 mb-4 font-bold">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-gray-600">
        About Me
      </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 place-items-center">
        <Cards 
          title="Story"
          description="I'm Swastik Mukherjee, a 20-year-old aspiring Software Engineer from India, passionate about building impactful software products. I'm currently seeking Summer Internship opportunities for 2025."
        />

        <Cards 
          title="Journey"
          description="I'm a 3rd-year B.Tech Computer Science student at KIIT, passionate about learning new technologies, mastering Data Structures and Algorithms, and actively working on projects."
        />

        <div className="sm:col-span-full sm:flex sm:justify-center lg:col-span-1">
          <Cards 
            title="Leisures"
            description="In my leisure time, I enjoy watching movies, web-series, listening to music and watching football."
          />
        </div>
      </div>
    </div>
  );
}
