// components/Projects.js
import React from 'react'

const projects = [
  {
    title: "Electron Download Manager",
    imageSrc: "/images/electron-manager.png",
    description:
      "A cross-platform download manager built with Electron.js, featuring pause/resume, multi-threaded downloads, and a modern UI.",
    demoUrl: "https://example.com/electron",
  },
  {
    title: "JWT Auth API",
    imageSrc: "/images/jwt-auth.png",
    description:
      "A secure RESTful API in Node.js/Express using JWT for stateless authentication, role-based access control, and refresh tokens.",
    demoUrl: null,
  },
  {
    title: "Portfolio Website",
    imageSrc: "/images/portfolio.png",
    description:
      "This very site! Built with Next.js, Tailwind CSS, and Framer Motion—fully responsive with smooth scroll and typing animations.",
    demoUrl: "https://your-portfolio.vercel.app",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center container mx-auto px-4 bg-gray-900 text-gray-200"
    >
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
    </section>
  )
}