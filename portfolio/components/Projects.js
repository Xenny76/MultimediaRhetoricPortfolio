// components/Projects.js
import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "Conway's Game of Life",
    imageSrc: "/Conways.gif",
    description:
      "Conway's Game of Life with a customizable grid size made in C#"
  },
  {
    title: "Notes++",
    imageSrc: "/NotesPlusPlus.PNG",
    description:
      "A desktop note-taking app with folders, favoriting, preset text formatting, and subsections"
  },
  {
    title: "Blep Blip Blop",
    imageSrc: "/BlepBlipBlop.PNG",
    description:
      "A goal tracker for yourself or teams, with a calender showing upcoming goals and different levels of visibility through management levels"
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
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    className="object-cover h-48 w-full"
                    unoptimized={p.imageSrc.toLowerCase().endsWith('.gif')}
                  />
                ) : (
                  <div className="text-gray-500">No preview</div>
                )}
              </div>

              {/* Description */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="text-gray-300 flex-1">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}