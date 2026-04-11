import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Shield, Bot, Database, Lock, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'NovaBank – AI-Powered Banking System',
    description: 'Enterprise-grade banking platform with AI-driven security. Features JWT authentication with 30-day sessions, behavioral biometrics (typing/mouse patterns), adaptive 2FA, and LLM-powered financial assistant. Built with security-first architecture.',
    tech: ['React', 'Node.js', 'MySQL', 'JWT', 'AI/LLM', 'WebSocket'],
    github: '#',
    live: '#',
    featured: true,
    color: '#00f3ff',
    stats: { users: '10K+', transactions: '1M+', uptime: '99.9%' }
  },
  {
    title: 'Fake News Detection',
    description: 'ML-powered misinformation detection using NLP and cloud infrastructure. Achieved 92% accuracy in classifying fake news with real-time API endpoints.',
    tech: ['Python', 'TensorFlow', 'NLP', 'AWS', 'Flask'],
    github: '#',
    live: '#',
    color: '#bc13fe'
  },
  {
    title: 'Smart Search System',
    description: 'AI-driven intelligent search with autocomplete, typo tolerance, and relevance ranking. Handles 1M+ documents with sub-50ms response times.',
    tech: ['Elasticsearch', 'React', 'Node.js', 'Redis'],
    github: '#',
    live: '#',
    color: '#00f3ff'
  },
  {
    title: 'C++ Thread Pool',
    description: 'High-performance concurrent task execution with work-stealing queue. Supports 10k+ concurrent tasks with minimal overhead.',
    tech: ['C++', 'Threading', 'Concurrency', 'Make'],
    github: '#',
    live: '#',
    color: '#bc13fe'
  },
  {
    title: 'LRU Cache System',
    description: 'Distributed caching with O(1) operations, thread-safety, persistence, and TTL support. Used in production microservices.',
    tech: ['C++', 'Redis', 'Distributed Systems'],
    github: '#',
    live: '#',
    color: '#00f3ff'
  },
  {
    title: 'HTTP Server (C++)',
    description: 'Custom HTTP/1.1 server with persistent connections, static file serving, and request routing.',
    tech: ['C++', 'Socket Programming', 'TCP/IP'],
    github: '#',
    live: '#',
    color: '#bc13fe'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Projects() {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#bc13fe] text-sm font-mono tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            // DEPLOYED_SOLUTIONS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="text-[#bc13fe]">Projects</span>
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg">
            Production-grade systems built with security-first architecture
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project) => (
            project.featured ? (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.005 }}
                className="group"
              >
                <div className="glass glass-hover rounded-2xl p-8 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}20 0%, transparent 50%)` 
                    }}
                  />
                  
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl" 
                    style={{ background: project.color }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 rounded-lg"
                        style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                      >
                        <Star size={20} style={{ color: project.color }} />
                      </motion.div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ 
                          background: `${project.color}20`, 
                          color: project.color,
                          border: `1px solid ${project.color}30`
                        }}
                      >
                        FEATURED PROJECT
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-[#00f3ff] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[#a0a0a0] text-base mb-6 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg border"
                          style={{ 
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: '#a0a0a0',
                            background: 'rgba(255,255,255,0.02)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                          <div className="text-xl font-display font-bold" style={{ color: project.color }}>{value}</div>
                          <div className="text-xs text-[#a0a0a0] capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all"
                        style={{ 
                          background: `${project.color}15`, 
                          color: project.color,
                          border: `1px solid ${project.color}30`
                        }}
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                      <a 
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[rgba(255,255,255,0.05)] text-[#a0a0a0] hover:text-white transition-all hover:bg-[rgba(255,255,255,0.1)]"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 1,
                  rotateY: -1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass glass-hover rounded-xl p-6 cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-lg opacity-20 blur-xl" style={{ background: project.color }} />
                  <div className="relative h-1 w-16 rounded-full" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}` }} />
                </div>

                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-[#00f3ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full border"
                      style={{ 
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: '#a0a0a0',
                        background: 'rgba(255,255,255,0.02)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-[#00f3ff] transition-colors">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-[#bc13fe] transition-colors">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
}