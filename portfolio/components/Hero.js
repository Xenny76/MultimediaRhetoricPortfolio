import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.css';
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6">Hi, I&apos;m <span className="text-green-400">Darrian!</span></h1>

      {/* Windows CMD-style box */}
      <div className="bg-black text-green-500 p-6 rounded-sm font-mono text-base w-full max-w-2xl shadow-md border border-gray-700">
        <p className="mb-1">Microsoft Windows [Version 10.0.19045.3570]</p>
        <p className="mb-3">(c) Microsoft Corporation. All rights reserved.</p>
        <p></p>
        <p className="mb-1">C:\Users\Guest&gt; darrian.bat</p>
        <p>C:\Users\Guest&gt; <Typewriter
          words={['Turning ideas into code and challenges into solutions. Passionate and eager about coding and building interesting things. Let\'s innovate!']}
          loop={1}
          cursor
          cursorStyle="█"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></p>
      </div>
    </section>
  );
}