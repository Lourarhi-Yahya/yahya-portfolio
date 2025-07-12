"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "AXA Climate Risk Simulator",
      description: "Developed Monte Carlo predictive models to assess climate risk and recommend optimal pricing strategies",
      image: "/api/placeholder/400/250",
      tech: ["Python", "NumPy", "Monte Carlo", "Statistics"],
      github: "https://github.com/Lourarhi-Yahya/climate-risk-simulator",
      live: "#",
      category: "AI · Insurance · Climate"
    },
    {
      title: "Vinci Construction Logistics Dashboards",
      description: "Built real-time Power BI dashboards to optimize construction logistics, resulting in a 15% cost reduction",
      image: "/api/placeholder/400/250",
      tech: ["Power BI", "SQL", "KPI Design"],
      github: "#",
      live: "#",
      category: "Dashboard · BI · Construction"
    },
    {
      title: "Stock Market Predictor",
      description: "Designed CNN-LSTM models for stock price forecasting, improving prediction accuracy by 20% vs. ARIMA",
      image: "/api/placeholder/400/250",
      tech: ["Python", "Keras", "LSTM", "Time-Series"],
      github: "https://github.com/Lourarhi-Yahya/stock-predictor",
      live: "#",
      category: "Finance · ML · Deep Learning"
    },
    {
      title: "Movie Recommender System",
      description: "Built a custom film recommendation system using metadata and user preferences",
      image: "/api/placeholder/400/250",
      tech: ["Python", "Scikit-learn", "NLP"],
      github: "https://github.com/Lourarhi-Yahya/movie-recommender",
      live: "#",
      category: "Recommendation System · NLP · Fun"
    },
    {
      title: "TotalEnergies Performance Analytics",
      description: "Led strategic analysis for digital projects across four departments with Power BI dashboards",
      image: "/api/placeholder/400/250",
      tech: ["Power BI", "Financial Modeling", "Strategic Analysis"],
      github: "#",
      live: "#",
      category: "Business Intelligence · Strategy"
    },
    {
      title: "Maritim Ship Services Website",
      description: "Built a corporate website using React.js & Node.js, improving load time by 50%",
      image: "/api/placeholder/400/250",
      tech: ["React.js", "Node.js", "HTML", "CSS"],
      github: "https://github.com/Lourarhi-Yahya/maritim-website",
      live: "#",
      category: "Web Development · Corporate"
    }
  ]

  return (
    <section id="projects" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            What I've Built
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent projects and solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-white font-bold text-lg">YL</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{project.category}</div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-dark-700 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 