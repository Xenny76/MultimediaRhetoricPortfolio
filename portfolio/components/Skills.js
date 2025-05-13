// components/Skills.js
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="h-screen flex flex-col justify-center text-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-500 max-w-2xl mx-auto">
          <li>Front-End Development - React, HTML, CSS, TailwindCSS</li>
          <li>Back-End Development - Node.js, Express, Next.js</li>
          <li>Databases - MySQL, MongoDB</li>
          <li>Languages - Java, C#, JS, C++</li>
        </ul>
      </motion.div>
    </section>
  );
}
// components/Skills.js
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'
import { SiCplusplus, SiCsharp, SiJava, SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'React',       Icon: FaReact,       level: 50 },
  { name: 'Next.js',     Icon: FaNodeJs,      level: 60 },
  { name: 'Node.js',     Icon: FaNodeJs,      level: 75 },
  { name: 'JavaScript',  Icon: FaJsSquare,    level: 95 },
  { name: 'HTML5',       Icon: FaHtml5,       level: 95 },
  { name: 'CSS3',        Icon: FaCss3Alt,     level: 95 },
  { name: 'Databases',   Icon: FaDatabase,    level: 70 },
  { name: 'C++',         Icon: SiCplusplus,   level: 60 },
  { name: 'C#',          Icon: SiCsharp,      level: 100},
  { name: 'Java',        Icon: SiJava,        level: 100},
  { name: 'TailwindCSS', Icon: SiTailwindcss, level: 55}
]

export default function Skills() {
  return (
    <section id="skills" className="h-screen w-full text-gray-200 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(({ name, Icon, level }) => (
            <div key={name} className="flex flex-col items-center">
              <Icon className="text-4xl mb-2 text-green-400" />
              <span className="mb-2">{name}</span>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${level}%` }}
                />
              </div>
              <span className="text-sm mt-1 text-gray-400">{level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
