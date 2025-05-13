// components/Projects.js
import React from 'react'

const projects = [
  {
    title: "Conway's Game of Life",
    imageSrc: "/images/electron-manager.png",
    description:
      "Conway's Game of Life with a customizable grid size made in C#",
    demoUrl: null,
  },
  {
    title: "Notes++",
    imageSrc: "/images/jwt-auth.png",
    description:
      "A desktop note-taking app with folders, favoriting, preset text formatting, and subsections",
    demoUrl: null,
  },
  {
    title: "Blep Blip Blop",
    imageSrc: "/images/portfolio.png",
    description:
      "A goal tracker for yourself or teams, with a calender showing upcoming goals and different levels of visibility through management levels",
    demoUrl: null,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen w-full text-gray-200 flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Title bar */}
              <div className="px-4 py-2 border-b border-gray-700 bg-gray-700">
                <h3 className="text-lg font-medium">{p.title}</h3>
              </div>

              {/* Image area */}
              <div className="flex-1 bg-gray-700 flex items-center justify-center">
                {p.imageSrc ? (
                  <img
                    src={p.imageSrc}
                    alt={p.title}
                    className="object-cover h-48 w-full"
                  />
                ) : (
                  <div className="text-gray-500">No preview</div>
                )}
              </div>

              {/* Description */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="text-gray-300 flex-1">{p.description}</p>
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-green-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}