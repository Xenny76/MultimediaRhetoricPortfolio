// components/Skills.js
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'
import { SiCplusplus, SiTailwindcss } from 'react-icons/si'
import { DiJava, DiDotnet } from 'react-icons/di'

const skills = [
  { name: 'React',       Icon: FaReact,       level: 50 },
  { name: 'Next.js',     Icon: FaNodeJs,      level: 60 },
  { name: 'Node.js',     Icon: FaNodeJs,      level: 75 },
  { name: 'JavaScript',  Icon: FaJsSquare,    level: 95 },
  { name: 'HTML5',       Icon: FaHtml5,       level: 95 },
  { name: 'CSS3',        Icon: FaCss3Alt,     level: 95 },
  { name: 'Databases',   Icon: FaDatabase,    level: 70 },
  { name: 'C++',         Icon: SiCplusplus,   level: 60 },
  { name: 'C#',          Icon: DiDotnet,      level: 100},
  { name: 'Java',        Icon: DiJava,        level: 100},
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
