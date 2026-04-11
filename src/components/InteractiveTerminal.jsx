import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from 'lucide-react';

const commands = {
  help: {
    output: `Available commands:
  help                     - Show this help message
  about                   - Display personal information
  skills                   - List technical skills
  projects                 - Show featured projects
  vignesh --skills         - Detailed skill analysis
  vignesh --init-novabank  - Initialize NovaBank project info
  vignesh --ai-mode        - Activate AI systems mode
  contact                  - Get contact information
  clear                    - Clear terminal`,
    color: '#00f3ff'
  },
  about: {
    output: `>> ABOUT_VIGNESH
--------------------
Name: Vignesh S
Role: Backend & Cloud Engineer | AI Systems Builder
Location: India
Focus: Building intelligent, secure, scalable systems
Philosophy: "Code is poetry, architecture is art"

Specializations:
• Enterprise Backend Architecture
• AI/ML Systems Integration
• Cloud Infrastructure (AWS/GCP)
• Security-First Development`,
    color: '#bc13fe'
  },
  skills: {
    output: `>> TECHNICAL_ARSENAL
-----------------------
Backend:     Python, Java, Spring Boot, Node.js
Frontend:   React, TypeScript, Tailwind CSS
Cloud:      AWS, GCP, Azure, Docker, Kubernetes
AI/ML:       TensorFlow, PyTorch, NLP, LLMs
Databases:  MySQL, PostgreSQL, MongoDB, Redis
Security:   JWT, OAuth2, Biometrics, 2FA`,
    color: '#00f3ff'
  },
  projects: {
    output: `>> FEATURED_PROJECTS
----------------------
[★] NovaBank - AI-Powered Banking System
    > React + Node.js + MySQL + AI Security

[1] Fake News Detection (NLP + Cloud)
    > ML-powered misinformation detection

[2] Smart Search System
    > AI-driven intelligent search

[3] C++ Thread Pool
    > High-performance concurrency

[4] LRU Cache System
    > Distributed caching solution

[5] HTTP Server (C++)
    > Custom HTTP/1.1 server

Type 'vignesh --init-novabank' for details`,
    color: '#bc13fe'
  },
  contact: {
    output: `>> COMMUNICATION_CHANNELS
--------------------------
GitHub:    github.com/vignesh
LinkedIn:  linkedin.com/in/vignesh
Email:     vignesh@example.com

"Always open to interesting opportunities and collaborations."`,
    color: '#00f3ff'
  },
  'vignesh --skills': {
    output: `>> EXECUTING_DEEP_SKILLS_ANALYSIS...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scanning technical stack...

Backend:
  ✓ Python       [████████████████████] 95%
  ✓ Java         [██████████████████  ] 90%
  ✓ Spring Boot  [████████████████   ] 85%
  ✓ Node.js      [███████████████    ] 80%

Cloud & DevOps:
  ✓ AWS/GCP      [██████████████     ] 75%
  ✓ Docker/K8s   [████████████       ] 70%

AI/ML:
  ✓ TensorFlow   [█████████████      ] 70%
  ✓ NLP/LLMs     [████████████       ] 65%

>> Analysis complete. Systems operational.`,
    color: '#00f3ff'
  },
  'vignesh --init-novabank': {
    output: `>> INITIALIZING_NOVABANK...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[✓] Loading NovaBank Architecture...

PROJECT: AI-Powered Banking System
─────────────────────────────────
Tech Stack: React, Node.js, MySQL, JWT, AI

FEATURES:
  • JWT Authentication (30-day sessions)
  • Behavioral Biometrics (typing patterns)
  • Mouse Movement Analysis
  • Adaptive 2FA (OTP verification)
  • AI Financial Assistant (LLM integration)
  • Real-time transaction monitoring
  • WebSocket live updates

SECURITY:
  • Password hashing (bcrypt)
  • Rate limiting
  • SQL injection protection
  • XSS prevention
  • CSRF tokens
  • Input validation

METRICS:
  • Users: 10,000+
  • Transactions: 1M+
  • Uptime: 99.9%
  • Response time: <100ms

>> NovaBank initialized. Ready for deployment.`,
    color: '#bc13fe'
  },
  'vignesh --ai-mode': {
    output: `>> ACTIVATING_AI_SYSTEMS_MODE...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> Initializing neural networks...
> Loading trained models...
> Configuring LLM integration...
> Enabling predictive algorithms...

AI SUBSYSTEMS:
  ┌─────────────────┬──────────────┐
  │ Component       │ Status       │
  ├─────────────────┼──────────────┤
  │ NLP Engine      │ ONLINE       │
  │ CV Pipeline     │ ONLINE       │
  │ LLM Gateway     │ ONLINE       │
  │ Recommendation  │ ONLINE       │
  └─────────────────┴──────────────┘

Vignesh's AI Capabilities:
  • Natural Language Processing
  • Computer Vision & OCR
  • LLM Fine-tuning & Integration
  • Recommendation Systems
  • Predictive Analytics

>> AI Mode activated. All systems operational.`,
    color: '#00f3ff'
  },
  clear: {
    output: null,
    clear: true
  }
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: '>> TERMINAL v2.0.26 [READY] - AI Systems Engineer Mode', color: '#a0a0a0' },
    { type: 'system', content: '>> Type "help" for available commands', color: '#a0a0a0' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const command = commands[trimmedCmd];
    
    if (!command) {
      return { 
        type: 'error', 
        content: `>> Command not found: ${trimmedCmd}\n>> Type "help" for available commands`, 
        color: '#ff4757' 
      };
    }

    if (command.clear) {
      setHistory([]);
      return null;
    }

    return { type: 'output', content: command.output, color: command.color };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, { type: 'input', content: `> ${input}`, color: '#ffffff' }];
    const result = handleCommand(input);

    if (result) {
      newHistory.push(result);
    }

    setHistory(newHistory);
    setInput('');
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <motion.div
        className="glass rounded-xl overflow-hidden"
        whileHover={{ boxShadow: '0 0 40px rgba(0, 243, 255, 0.1)' }}
      >
        <div className="glass border-b border-[rgba(255,255,255,0.08)] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm text-[#a0a0a0] font-mono">vignesh@portfolio ~ terminal</span>
          </div>
          <div className="flex gap-2 text-[#a0a0a0]">
            <Minus size={14} className="hover:text-white cursor-pointer" />
            <Maximize2 size={14} className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div 
          ref={terminalRef}
          className="p-4 h-80 overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          <AnimatePresence>
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-2"
                style={{ color: item.color }}
              >
                <pre className="whitespace-pre-wrap font-inherit">
                  {item.content}
                </pre>
              </motion.div>
            ))}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span style={{ color: '#00f3ff' }}>&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono"
              placeholder={isTyping ? 'Executing...' : 'Type a command...'}
              autoFocus
            />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-2 h-4 bg-[#00f3ff]"
            />
          </form>
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-[#a0a0a0] text-sm mt-4"
      >
        Try: <span className="text-[#00f3ff]">vignesh --init-novabank</span>, <span className="text-[#bc13fe]">vignesh --ai-mode</span>, <span className="text-[#00f3ff]">skills</span>
      </motion.p>
    </motion.section>
  );
}