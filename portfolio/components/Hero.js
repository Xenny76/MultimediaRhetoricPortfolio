import { motion } from 'framer-motion';
export default function Hero() {
    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p></p>
            </motion.div>
        </section>
    )
}