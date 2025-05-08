import { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
export default function Hero() {
  const [firstDone, setFirstDone] = useState(false)

  // First line hook
  const [line1] = useTypewriter({
    words: ['darrian.bat'],
    loop: 1,
    typeSpeed: 45,
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
      typeSpeed: 45,
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
    <section className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-black to-gray-900">
      {/* …your name heading… */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">Hi, I&apos;m <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">Darrian!</span></h1>
      <div className="bg-black text-green-500 p-6 rounded-sm font-mono text-base w-full max-w-2xl shadow-md border border-gray-700">
        {/* First command */}
        <p className="mb-1">
          C:\Users\Guest&gt; {line1}
          {!firstDone && <Cursor cursorStyle="█" />}
        </p>

        {/* Render second only after firstDone */}
        {firstDone && <SecondLine />}
      </div>
    </section>
  )
}