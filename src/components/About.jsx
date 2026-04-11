import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Cloud, Brain, Code2 } from 'lucide-react';

const skills = [
  { name: 'Python', level: 95, icon: Code2, color: '#00f3ff' },
  { name: 'Java', level: 90, icon: Code2, color: '#bc13fe' },
  { name: 'Spring Boot', level: 85, icon: Cpu, color: '#00f3ff' },
  { name: 'React', level: 80, icon: Globe, color: '#bc13fe' },
  { name: 'Cloud (AWS/GCP)', level: 75, icon: Cloud, color: '#00f3ff' },
  { name: 'AI/ML', level: 70, icon: Brain, color: '#bc13fe' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#00f3ff] text-sm font-mono tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            // SYSTEM_DIAGNOSTICS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            About <span className="text-[#00f3ff]">Me</span>
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg">
            A passionate Backend & Cloud Engineer with a focus on building intelligent, scalable systems. 
            I bridge the gap between complex algorithms and real-world applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass glass-hover rounded-xl p-6 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/5 to-[#bc13fe]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                  >
                    <skill.icon size={24} style={{ color: skill.color }} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-[#a0a0a0]">
                    <span>Proficiency</span>
                    <span style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                        boxShadow: `0 0 10px ${skill.color}`
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" 
                style={{ background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-display font-bold text-[#00f3ff] mb-2">5+</div>
            <div className="text-[#a0a0a0]">Years of Experience</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-display font-bold text-[#bc13fe] mb-2">20+</div>
            <div className="text-[#a0a0a0]">Projects Completed</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl font-display font-bold text-[#00f3ff] mb-2">∞</div>
            <div className="text-[#a0a0a0]">Learning Iterations</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}