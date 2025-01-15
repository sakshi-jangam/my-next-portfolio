// import { useState } from 'react';
'use client'
import Navbar from '../Navbar'; // Adjust the path based on your setup

export default function AboutPage() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen py-12 transition-colors duration-300 bg-gray-50 dark:bg-gray-800"
      >
        <div className="text-center p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I am a passionate full-stack developer with experience in creating modern web applications.
            I specialize in frontend development with React.js and Next.js, while also being skilled in backend technologies such as Node.js and Express. I aim to build applications that are both functional and user-friendly, focusing on performance and usability.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            With a deep interest in user interface design and continuous learning, I stay up-to-date with the latest web development trends and best practices. I love solving problems with clean, maintainable code, and collaborating with teams to create seamless digital experiences.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Skills & Technologies
          </h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">Frontend:</span> React.js, Next.js, Tailwind CSS, HTML5, CSS3
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">Backend:</span> Node.js, Express.js, MongoDB
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">Version Control:</span> Git, GitHub
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">Other:</span> REST APIs, Firebase, ShadCN UI
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
