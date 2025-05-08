import { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaWindows } from 'react-icons/fa'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'
export default function Hero() {
  const [firstDone, setFirstDone] = useState(false)

  // First line hook
  const [line1] = useTypewriter({
    words: ['darrian.exe'],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 0,
    onLoopDone: () => setFirstDone(true),
  })

  // Second line is its own component so its hook only runs *after* firstDone
  const SecondLine = () => {
    const [line2] = useTypewriter({
      words: [
        "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!",
      ],
      loop: 1,
      typeSpeed: 80,
      deleteSpeed: 0,
    })
    return (
      <p className="mt-1">
        C:\Users\Guest&gt; {line2}
        <Cursor cursorStyle="█" />
      </p>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-16 text-white bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
          Darrian!
        </span>
      </h1>

      <div className="w-full max-w-2xl bg-black border border-gray-700 rounded-sm shadow-md">
        {/* ───────── Title Bar ───────── */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-1 rounded-t-sm border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <FaWindows className="text-green-500" />
            <span className="text-green-200 text-sm">Command Prompt</span>
          </div>
          <div className="flex items-center space-x-2 text-green-200">
            <button className="hover:text-white"><FiMinus /></button>
            <button className="hover:text-white"><FiSquare /></button>
            <button className="hover:text-white"><FiX /></button>
          </div>
        </div>

        {/* ───────── Content ───────── */}
        <div className="p-6 font-mono text-base text-green-500">
          <p className="mb-1">
            C:\Users\Guest&gt; {line1}
            {!firstDone && <Cursor cursorStyle="█" />}
          </p>
          {firstDone && (
            <p className="mt-1">
              C:\Users\Guest&gt; {line2}
              <Cursor cursorStyle="█" />
            </p>
          )}
        </div>
      </div>
    </section>
  )
}