"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Yahya Lourarhi — All rights reserved
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#home')}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/Lourarhi-Yahya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={18} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/yahyalourarhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin size={18} />
            </motion.a>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors duration-200"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 