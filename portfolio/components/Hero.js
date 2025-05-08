import { motion } from 'framer-motion';
export default function Hero() {
    return (
        <section id="home" className="h-screen flex-col items-center justify-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="text-lg text-gray-500 mb-2"># zsh</p>
                <h1 className="text-4x1 font-bold mb-2">Hi, I'm Darrian!</h1>
                <p className="text-gray-600 mb-6">Full-Stack Developer | Tech Enthusiast | Student</p>
                <p className="max-w-x1 mx-auto text-gray-700">I'm a student developer at Neumont College of Computer Science, specializing in C# and Java</p>
            </motion.div>
        </section>
    );
}