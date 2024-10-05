"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -200])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      cursorX.set(clientX - 16)
      cursorY.set(clientY - 16)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-orange-500 text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 bg-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=64&width=64')`,
          backgroundSize: '64px 64px'
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />
      <motion.div
        className="w-8 h-8 bg-white rounded-full fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <header className="fixed top-0 left-0 right-0 z-40 p-4 bg-black bg-opacity-50">
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kameswara
          </motion.h1>
          <motion.ul
            className="flex space-x-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
          </motion.ul>
        </nav>
      </header>
      <main>
        <section className="min-h-screen flex items-center justify-center relative">
          <motion.h2
            className="text-6xl font-bold text-center text-shadow"
            style={{ y: y1, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Welcome to Kameswara
          </motion.h2>
          <motion.img
            src="/placeholder.svg?height=400&width=400"
            alt="Kameswara Mascot"
            className="absolute opacity-70"
            style={{ y: y2 }}
          />
        </section>
        <motion.section
          ref={ref}
          className="min-h-screen flex flex-col items-center justify-center space-y-8 p-8"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-semibold text-shadow" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Discover Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovative', 'Responsive', 'Futuristic'].map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white bg-opacity-20 p-6 rounded-lg text-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-2">{feature}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <footer className="bg-black bg-opacity-50 text-center p-4">
        <p>&copy; 2023 Kameswara. All rights reserved.</p>
      </footer>
    </div>
  )
}