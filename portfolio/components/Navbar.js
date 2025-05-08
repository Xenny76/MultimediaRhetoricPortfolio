import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md py-4 z-10">
            <ul className="container mx-auto flex justify-center space-x-6">
                <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600">About</a></li>
                <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
                <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
                <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
        </nav>
    );
}