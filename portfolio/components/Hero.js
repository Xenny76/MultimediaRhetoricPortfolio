import { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaWindows } from 'react-icons/fa'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

export default function Hero() {
  const [showFirstType, setShowFirstType] = useState(false)
  const [firstDone, setFirstDone] = useState(false)
  const [showSecondPrompt, setShowSecondPrompt] = useState(false)
  const [showSecondType, setShowSecondType] = useState(false)

  // 1) Delay before starting to type line 1
  useEffect(() => {
    const t = setTimeout(() => setShowFirstType(true), 500) // 0.5s delay
    return () => clearTimeout(t)
  }, [])

  // 2) Hook for line 1
  const [line1] = useTypewriter({
    words: ['darrian.exe'],
    loop: 1,
    typeSpeed: 130,   // slow
    deleteSpeed: 0,
    onLoopDone: () => setFirstDone(true),
  })

  // 3) After line 1 finishes, delay showing line 2’s prompt
  useEffect(() => {
    if (!firstDone) return
    const t = setTimeout(() => setShowSecondPrompt(true), 500) // 0.5s delay
    return () => clearTimeout(t)
  }, [firstDone])

  // 4) Once the prompt is visible, delay before typing line 2
  useEffect(() => {
    if (!showSecondPrompt) return
    const t = setTimeout(() => setShowSecondType(true), 500) // 0.5s delay
    return () => clearTimeout(t)
  }, [showSecondPrompt])

  // 5) Hook for line 2
  const [line2] = useTypewriter({
    words: [
      "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!",
    ],
    loop: 1,
    typeSpeed: 50,    // fast
    deleteSpeed: 0,
  })

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-16 text-white bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
          Darrian!
        </span>
      </h1>

      <div className="w-full max-w-2xl bg-black border border-gray-700 rounded-sm shadow-md">
        {/* Title Bar */}
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
          {/* Line 1 prompt always visible; typing only after showFirstType */}
          <p className="mb-1">
            C:\Users\Guest&gt;
            {showFirstType && (
              <>
                {' '}{line1}
                {!firstDone && <Cursor cursorStyle="▄" />}
              </>
            )}
          </p>

          {/* Line 2 prompt & typing */}
          {showSecondPrompt && (
            <p className="mt-1">
              C:\Users\Guest&gt;
              {showSecondType && (
                <>
                  {' '}{line2}
                  <Cursor cursorStyle="▄" />
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}