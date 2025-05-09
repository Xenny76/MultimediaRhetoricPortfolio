import { useState, useEffect } from 'react'
import { FaWindows } from 'react-icons/fa'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

export default function Hero() {
  // Lines to type
  const lines = [
    'darrian.exe',
    "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!",
  ]
  // Delays (ms)
  const initialDelay = 500       // before line 1 typing
  const betweenDelay = 500       // after line 1 finishes, before line 2 typing
  const typeSpeed = [130, 45]    // per-char speeds

  // State
  const [display, setDisplay] = useState(['', ''])   // what's been typed
  const [showPrompt, setShowPrompt] = useState([true, false]) 
  const [current, setCurrent] = useState(0)          // 0 or 1 or finished at 2
  const [cursor, setCursor] = useState(true)         // blink

  // Cursor blink
  useEffect(() => {
    const iv = setInterval(() => setCursor(v => !v), 500)
    return () => clearInterval(iv)
  }, [])

  // Orchestrate typing
  useEffect(() => {
    let cancelled = false

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        setCurrent(i)
        // Make prompt visible for this line
        setShowPrompt(sp => sp.map((v, idx) => idx <= i))
        // Delay before typing this line
        await new Promise(r => setTimeout(r, i === 0 ? initialDelay : betweenDelay))

        // Type each character
        for (let pos = 0; pos < lines[i].length; pos++) {
          if (cancelled) return
          setDisplay(d => {
            const copy = [...d]
            copy[i] = lines[i].slice(0, pos + 1)
            return copy
          })
          await new Promise(r => setTimeout(r, typeSpeed[i]))
        }
      }
      setCurrent(-1) // no cursor after done
    }

    run()
    return () => { cancelled = true }
  }, [])

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
          {lines.map((_, i) => (
            <p key={i} className={i === 0 ? 'mb-1' : 'mt-1'}>
              C:\Users\Guest&gt;&nbsp;
              {showPrompt[i] && display[i]}
              {showPrompt[i] && current === i && cursor && (
                <span className="inline-block">▄</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
