// components/Skills.js
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="h-screen flex flex-col justify-center bg-gray-600">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 max-w-2xl mx-auto">
          <li>Front-End Development - React, HTML, CSS, TailwindCSS</li>
          <li>Back-End Development - Node.js, Express, Next.js</li>
          <li>Databases - MySQL, MongoDB</li>
          <li>Languages - Java, C#, JS, C++</li>
        </ul>
      </motion.div>
    </section>
  );
}