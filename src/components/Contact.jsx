import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
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
            // ESTABLISH_CONNECTION
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Get <span className="text-[#00f3ff]">In Touch</span>
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-[rgba(255,255,255,0.1)] py-3 px-4 text-white font-body outline-none transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-[#a0a0a0] font-body transition-all peer-focus:-top-6 peer-focus:text-[#00f3ff] peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                  Your Name
                </label>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#00f3ff]"
                  initial={{ width: 0 }}
                  whileFocus={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-[rgba(255,255,255,0.1)] py-3 px-4 text-white font-body outline-none transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-[#a0a0a0] font-body transition-all peer-focus:-top-6 peer-focus:text-[#bc13fe] peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                  Email Address
                </label>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#bc13fe]"
                  initial={{ width: 0 }}
                  whileFocus={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border-b-2 border-[rgba(255,255,255,0.1)] py-3 px-4 text-white font-body outline-none transition-all peer resize-none"
                placeholder=" "
              />
              <label className="absolute left-4 top-3 text-[#a0a0a0] font-body transition-all peer-focus:-top-6 peer-focus:text-[#00f3ff] peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Your Message
              </label>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#00f3ff]"
                initial={{ width: 0 }}
                whileFocus={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-[#00f3ff] text-black font-display font-semibold rounded-lg hover:bg-[#00f3ff]/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-[#a0a0a0] hover:text-[#00f3ff] hover:border-[#00f3fe]/50 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-[#a0a0a0] hover:text-[#bc13fe] hover:border-[#bc13fe]/50 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:vignesh@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-[#a0a0a0] hover:text-[#00f3ff] hover:border-[#00f3fe]/50 transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}