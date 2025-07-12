"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    // Data & AI
    { name: 'Python', category: 'Data & AI' },
    { name: 'Pandas', category: 'Data & AI' },
    { name: 'NumPy', category: 'Data & AI' },
    { name: 'Scikit-learn', category: 'Data & AI' },
    { name: 'SQL', category: 'Data & AI' },
    { name: 'Power BI', category: 'Data & AI' },
    { name: 'Tableau', category: 'Data & AI' },
    { name: 'CNN-LSTM', category: 'Data & AI' },
    { name: 'Monte Carlo', category: 'Data & AI' },
    
    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud & DevOps' },
    { name: 'Azure', category: 'Cloud & DevOps' },
    { name: 'Git', category: 'Cloud & DevOps' },
    { name: 'Docker', category: 'Cloud & DevOps' },
    
    // Automation & Tools
    { name: 'Excel', category: 'Automation & Tools' },
    { name: 'LangChain', category: 'Automation & Tools' },
    { name: 'Make.com', category: 'Automation & Tools' },
    { name: 'Notion', category: 'Automation & Tools' },
    { name: 'Airtable', category: 'Automation & Tools' },
    
    // Soft Skills
    { name: 'Strategic Analysis', category: 'Soft Skills' },
    { name: 'Business Communication', category: 'Soft Skills' },
    { name: 'Cross-functional', category: 'Soft Skills' },
    { name: 'Public Speaking', category: 'Soft Skills' },
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
            Tools & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-primary-50 dark:bg-dark-800 text-primary-700 dark:text-primary-300 px-4 py-3 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl"
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Always learning and exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 