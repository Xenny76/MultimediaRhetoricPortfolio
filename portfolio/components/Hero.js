import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
export default function Hero() {
  const [firstDone, setFirstDone] = useState(false)
  return (
    <section className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">Hi, I&apos;m <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">Darrian!</span></h1>

      <div className="bg-black text-green-500 p-6 rounded-sm font-mono text-base w-full max-w-2xl shadow-md border border-gray-700">
        {/* First command */}
        <p className="mb-1">
          C:\Users\Guest&gt;{' '}
          <Typewriter
            words={['darrian.bat']}
            loop={1}
            cursor={true}
            cursorStyle="█"
            typeSpeed={65}
            deleteSpeed={0}
            delaySpeed={0}
            onLoopDone={() => setFirstDone(true)}
          />
        </p>

        {/* Second command, only when the first is done */}
        {firstDone && (
          <p>
            C:\Users\Guest&gt;{' '}
            <Typewriter
              words={[
                "Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let's innovate!",
              ]}
              loop={1}
              cursor={true}
              cursorStyle="█"
              typeSpeed={55}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
        )}
      </div>
    </section>
  );
}