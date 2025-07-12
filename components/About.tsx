"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Profile Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="w-48 h-48 rounded-full mx-auto overflow-hidden border-4 border-white/20 shadow-xl">
                    <img 
                      src="/yahya-profile.jpeg" 
                      alt="Yahya Lourarhi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/30 rounded w-48 mx-auto"></div>
                    <div className="h-3 bg-white/30 rounded w-32 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm Yahya Lourarhi, an engineer specialized in Data Science, AI, and Strategy with hands-on experience in digital transformation, predictive analytics, and performance optimization.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I combine a strong technical foundation with business intuition to build data-driven tools that simplify complexity and generate real-world results. I'm passionate about innovation and using AI as a lever for measurable impact, particularly in multinational and cross-functional environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Paris, France</p>
                <p className="text-gray-600 dark:text-gray-300">Available for opportunities</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Languages</h4>
                <p className="text-gray-600 dark:text-gray-300">French & English (C1)</p>
                <p className="text-gray-600 dark:text-gray-300">Public Speaking</p>
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                Learn more about my journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 