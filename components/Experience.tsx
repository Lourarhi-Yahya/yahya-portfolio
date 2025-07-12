"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      company: "TotalEnergies",
      position: "Strategic Data Analyst (Intern)",
      location: "Paris, France",
      period: "Sept 2024 – 2025",
      description: "Led strategic analysis for digital projects across four departments (Carte, SFS, NSD, Performance)",
      achievements: [
        "Built Power BI dashboards for card sales and performance forecasting",
        "Conducted financial modeling (OPEX, CAPEX, EBITDA)",
        "Managed partnerships with Intouch & SendWave",
        "Benchmarked competitors to support expansion strategies"
      ],
      tech: ["Power BI", "Financial Modeling", "Strategic Analysis", "Partnership Management"]
    },
    {
      company: "Maritim Ship Services",
      position: "Web Developer (Intern)",
      location: "Casablanca, Morocco",
      period: "Summer 2023",
      description: "Built a corporate website using modern web technologies",
      achievements: [
        "Developed corporate website using HTML, CSS, React.js & Node.js",
        "Improved load time by 50%, enhancing user experience",
        "Implemented responsive design for mobile compatibility"
      ],
      tech: ["React.js", "Node.js", "HTML", "CSS", "Performance Optimization"]
    }
  ]

  return (
    <section id="experience" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in data science, strategy, and web development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.position}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-sm">📍 {exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-sm">📅 {exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Achievements */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <span className="text-primary-500 mt-1">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-dark-700 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteering Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-4">
              Leadership & Volunteering
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg dark:shadow-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                President, Coding & Dev – CentraleTech Club
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">2021–2023</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Led weekly programming and AI workshops for engineering students.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg dark:shadow-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Sponsorship Manager – Bureau des Sports
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">2021–2023</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Managed national sponsor relations for school-wide sports events.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 