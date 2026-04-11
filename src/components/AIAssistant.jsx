import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader2, X, Minimize2 } from 'lucide-react';

const initialMessages = [
  { id: 1, role: 'assistant', content: 'System initialized. AI Assistant online.', timestamp: new Date() },
  { id: 2, role: 'assistant', content: 'Hello! I\'m Vignesh\'s AI assistant. Ask me about his projects, skills, or experience!', timestamp: new Date() },
];

const responses = {
  default: [
    "Analyzing Vignesh's system architecture... He's built enterprise-grade applications with security-first design.",
    "Scanning project database... Found 6 major projects including NovaBank - a complete banking system with AI security.",
    "Vignesh specializes in: Backend (Python, Java, Node.js), Cloud (AWS, GCP), AI/ML (TensorFlow, PyTorch), Security (JWT, OAuth, Biometrics).",
    "His NovaBank project features: JWT auth, behavioral biometrics, adaptive 2FA, and LLM-powered financial assistant.",
    "Backend specialist with 5+ years. Strong in scalable APIs, microservices, and distributed systems.",
  ],
  skills: [
    "Core Stack: Python, Java, Spring Boot, Node.js | Frontend: React, TypeScript",
    "Cloud: AWS, GCP, Azure, Docker, Kubernetes | AI/ML: TensorFlow, PyTorch, NLP",
    "Databases: MySQL, PostgreSQL, MongoDB, Redis | Security: JWT, OAuth2, Biometrics",
  ],
  projects: [
    "NovaBank: AI-powered banking with behavioral biometrics & LLM assistant",
    "Fake News Detection: 92% accuracy NLP system on AWS",
    "Smart Search: 1M+ document handling with sub-50ms latency",
    "C++ Thread Pool: 10k+ concurrent tasks with work-stealing",
  ],
  contact: [
    "Email: vignesh@example.com | GitHub: github.com/vignesh | LinkedIn: linkedin.com/in/vignesh",
    "Vignesh is open to opportunities in AI/ML engineering, backend architecture, and cloud infrastructure.",
  ],
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const inputLower = input.toLowerCase();
      let responseContent;

      if (inputLower.includes('skill') || inputLower.includes('tech') || inputLower.includes('stack')) {
        responseContent = responses.skills[Math.floor(Math.random() * responses.skills.length)];
      } else if (inputLower.includes('project') || inputLower.includes('work')) {
        responseContent = responses.projects[Math.floor(Math.random() * responses.projects.length)];
      } else if (inputLower.includes('contact') || inputLower.includes('email') || inputLower.includes('reach')) {
        responseContent = responses.contact[Math.floor(Math.random() * responses.contact.length)];
      } else {
        responseContent = responses.default[Math.floor(Math.random() * responses.default.length)];
      }

      const assistantMessage = { 
        id: Date.now() + 1, 
        role: 'assistant', 
        content: responseContent, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full glass flex items-center justify-center cursor-pointer z-50"
        style={{ 
          border: '1px solid #00f3ff40',
          boxShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
        }}
      >
        <Bot className="text-[#00f3ff]" size={24} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-[#00f3ff] rounded-full animate-pulse" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        height: isMinimized ? 60 : 400 
      }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className="fixed bottom-6 right-6 w-80 md:w-96 glass rounded-2xl overflow-hidden z-50"
      style={{ 
        border: '1px solid rgba(0, 243, 255, 0.2)',
        boxShadow: '0 0 40px rgba(0, 243, 255, 0.15)'
      }}
    >
      <div className="glass border-b border-[rgba(255,255,255,0.08)] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="text-[#00f3ff]" size={18} />
          <span className="text-sm font-mono text-white">AI Assistant</span>
          <span className="w-2 h-2 bg-[#00f3ff] rounded-full animate-pulse" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-[#a0a0a0] hover:text-white transition-colors">
            <Minimize2 size={14} />
          </button>
          <button onClick={() => setIsOpen(false)} className="text-[#a0a0a0] hover:text-white transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="h-72 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-[#00f3ff] text-black' 
                        : 'glass text-[#a0a0a0]'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-[#a0a0a0] text-sm"
              >
                <Loader2 className="animate-spin" size={14} />
                <span>AI is thinking...</span>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-[rgba(255,255,255,0.08)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Vignesh..."
                className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-sm text-white placeholder-[#a0a0a0] outline-none focus:border-[#00f3ff40] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="p-2 rounded-lg bg-[#00f3ff] text-black"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}