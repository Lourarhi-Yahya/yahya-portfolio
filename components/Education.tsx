"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    {
      school: "CentraleSupélec",
      degree: "Master of Engineering",
      focus: "Data Science · Financial Modeling · Business Analytics",
      years: "2024 - 2025",
      description: "Paris, France - Advanced studies in data science and business analytics"
    },
    {
      school: "Centrale Casablanca",
      degree: "Diploma in Engineering",
      focus: "Data Science & Digitalization",
      years: "2022 - 2024",
      description: "Casablanca, Morocco - Specialized in data science and digital transformation"
    },
    {
      school: "Université Hassan II",
      degree: "Bachelor in Applied Mathematics",
      focus: "Lax-Milgram Theorem Applications",
      years: "2019 - 2021",
      description: "Casablanca, Morocco - Foundation in mathematical modeling and analysis"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white">
                          {item.school}
                        </h3>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {item.years}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {item.degree}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {item.focus}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 