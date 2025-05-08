import { useState, useEffect } from 'react'
import { FaWindows } from 'react-icons/fa'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

export default function Hero() {
  // The two lines we want to type
  const lines = [
    'darrian.exe',
    "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!",
  ]

  // Typing configuration
  const initialDelay = 500   // ms before first line starts typing
  const betweenDelay = 500   // ms between line1 finishing and line2 prompt showing
  const typeSpeed = [130, 55]// ms per character for line1 and line2

  // State
  const [displayTexts, setDisplayTexts] = useState(['', ''])       // what’s shown so far
  const [showPrompt, setShowPrompt] = useState([true, false])      // prompts always visible
  const [cursorVisible, setCursorVisible] = useState(true)         // blinking cursor
  const [currentLine, setCurrentLine] = useState(0)                // which line are we typing

  // Blink the cursor
  useEffect(() => {
    const iv = setInterval(() => setCursorVisible(v => !v), 500)
    return () => clearInterval(iv)
  }, [])

  // Type a given line
  useEffect(() => {
    if (!showPrompt[currentLine]) return
    let idx = 0

    // Start typing after appropriate initial delay
    const startDelay = currentLine === 0 ? initialDelay : betweenDelay
    const timeoutId = setTimeout(function tick() {
      if (idx < lines[currentLine].length) {
        setDisplayTexts(dt => {
          const copy = [...dt]
          copy[currentLine] += lines[currentLine][idx++]
          return copy
        })
        setTimeout(tick, typeSpeed[currentLine])
      } else if (currentLine === 0) {
        // first line finished → show second prompt
        setCurrentLine(1)
        setShowPrompt(sp => [sp[0], true])
      }
    }, startDelay)

    return () => clearTimeout(timeoutId)
  }, [showPrompt, currentLine])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-16 text-white bg-gradient-to-b from-black to-gray-900">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
          Darrian!
        </span>
      </h1>

      {/* CMD Window */}
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
          {lines.map((_, i) => (
            <p key={i} className={i === 0 ? 'mb-1' : 'mt-1'}>
              C:\Users\Guest&gt;&nbsp;
              { showPrompt[i] && displayTexts[i] }
              { showPrompt[i] && cursorVisible && <span className="inline-block">▄</span> }
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}