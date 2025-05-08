import { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaWindows } from 'react-icons/fa'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

export default function Hero() {
  const [showFirst, setShowFirst] = useState(false)
  const [firstDone, setFirstDone] = useState(false)
  const [showSecond, setShowSecond] = useState(false)

  // 1) After 0.5s, render the first prompt
  useEffect(() => {
    const t = setTimeout(() => setShowFirst(true), 200)
    return () => clearTimeout(t)
  }, [])

  // 2) First line: no initial delay, slow typing, signal when done
  const [line1] = useTypewriter({
    words: ['darrian.exe'],
    loop: 1,
    typeSpeed: 140,    // slow
    deleteSpeed: 0,
    delaySpeed: 300,     // start immediately once mounted
    onLoopDone: () => setFirstDone(true),
  })

  // 3) When firstDone flips, after 0.3s mount the second prompt
  useEffect(() => {
    if (!firstDone) return
    const t = setTimeout(() => setShowSecond(true), 300)
    return () => clearTimeout(t)
  }, [firstDone])

  // 4) Second line lives in its own component so its hook only runs once showSecond=true
  const SecondLine = () => {
    const [line2] = useTypewriter({
      words: [
        "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!",
      ],
      loop: 1,
      typeSpeed: 65,     // fast
      deleteSpeed: 0,
      delaySpeed: 300,     // start immediately once mounted
    })
    return (
      <p className="mt-1">
        C:\Users\Guest&gt; {line2}
        <Cursor cursorStyle="▄" />
      </p>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-16 text-white bg-gradient-to-b from-black to-gray-900">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
          Darrian!
        </span>
      </h1>

      {/* Windows CMD window */}
      <div className="w-full max-w-2xl bg-black border border-gray-700 rounded-sm shadow-md">
        {/* Title bar */}
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

        {/* Content */}
        <div className="p-6 font-mono text-base text-green-500">
          {/* First command (only when showFirst=true) */}
          {showFirst && (
            <p className="mb-1">
              C:\Users\Guest&gt; {line1}
              {/* thick block cursor while typing */}
              {!firstDone && <Cursor cursorStyle="▄" />}
            </p>
          )}

          {/* Second command (only when showSecond=true) */}
          {showSecond && <SecondLine />}
        </div>
      </div>
    </section>
  )
}