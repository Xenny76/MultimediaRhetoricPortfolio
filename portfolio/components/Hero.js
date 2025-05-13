import { useState, useEffect } from 'react'
import { FaWindows } from 'react-icons/fa'
import { FiMinus, FiSquare, FiX } from 'react-icons/fi'

export default function Hero() {
  const line1 = 'darrian.exe'
  const line2 =
    "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!"

  // Timing config (ms)
  const initialDelay = 600   // before typing 1st line
  const betweenDelay = 600   // after finishing 1st, before showing prompt2
  const typeSpeed1 = 130     // ms per char for line1
  const typeSpeed2 = 50      // ms per char for line2

  // State
  const [display1, setDisplay1] = useState('')
  const [display2, setDisplay2] = useState('')
  const [showPrompt2, setShowPrompt2] = useState(false)
  const [showType1, setShowType1] = useState(false)
  const [showType2, setShowType2] = useState(false)
  const [cursor, setCursor] = useState(true)

  // Cursor blink
  useEffect(() => {
    const iv = setInterval(() => setCursor(v => !v), 500)
    return () => clearInterval(iv)
  }, [])

  // Phase 1: start typing line1 after initialDelay
  useEffect(() => {
    const start = setTimeout(() => setShowType1(true), initialDelay)
    return () => clearTimeout(start)
  }, [])

  // Actually type line1
  useEffect(() => {
    if (!showType1) return
    let cancelled = false

    async function type1() {
      for (let i = 0; i < line1.length; i++) {
        if (cancelled) return
        setDisplay1(line1.slice(0, i + 1))
        await new Promise(r => setTimeout(r, typeSpeed1))
      }
      // once done, show prompt2 and queue phase 2
      setShowPrompt2(true)
      const t2 = setTimeout(() => setShowType2(true), betweenDelay)
      return () => clearTimeout(t2)
    }

    type1()
    return () => { cancelled = true }
  }, [showType1])

  // Phase 2: type line2 when showType2 turns true
  useEffect(() => {
    if (!showType2) return
    let cancelled = false

    async function type2() {
      for (let i = 0; i < line2.length; i++) {
        if (cancelled) return
        setDisplay2(line2.slice(0, i + 1))
        await new Promise(r => setTimeout(r, typeSpeed2))
      }
    }

    type2()
    return () => { cancelled = true }
  }, [showType2])

  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen pt-16 text-white">
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
          {/* Line 1 */}
          <p className="mb-1">
            C:\Users\Guest&gt;{' '}
            {display1}
            {showType1 && cursor && !showPrompt2 && <span className="inline-block">▄</span>}
          </p>

          {/* Line 2 */}
          {showPrompt2 && (
            <p className="mt-1">
              C:\Users\Guest&gt;{' '}
              {display2}
              {showType2 && cursor && <span className="inline-block">▄</span>}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}