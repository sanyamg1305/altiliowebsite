
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="mb-8 block md:hidden">
                <Logo size="md" className="items-start" />
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-altilio leading-[0.9] text-balance">
                India’s tile industry grew in volume <span className="text-altilio/30">— but lost alignment.</span>
              </h1>
              <p className="mt-10 text-xl md:text-2xl text-altilio/60 font-light leading-relaxed max-w-2xl">
                Fragmentation, mistrust, and zero tech visibility have commoditized value. 
                Altilio exists to restore shared upside and trust through a new industry operating system.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://calendar.app.google/uoWWbfcJac2JuBrf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-altilio text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-altilio/90 transition-all shadow-lg"
                >
                  Connect with us
                </motion.a>
                <Link to="/solution" className="border border-altilio/20 text-altilio px-8 py-4 rounded-full text-lg font-bold hover:bg-altilio/5 transition-all">
                  The Altilio Model
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-1 gap-6 pt-12 md:pt-0"
            >
              {[
                { label: "01 Altilio Belief", text: "Growth should be collaborative, not extractive." },
                { label: "02 Brand Asset", text: "Brands should be shared platforms, not owned monopolies." },
                { label: "03 Neutral Tech", text: "Technology should enable trust, not control." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(34, 37, 69, 0.1)" }}
                  className="border border-altilio/10 p-8 rounded-2xl bg-brandGray transition-all cursor-default"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">{item.label}</span>
                  <p className="text-xl font-semibold leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Broken System */}
      <motion.section 
        {...fadeInUp}
        className="py-24 bg-altilio text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">The Broken System</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Traditional models are built on margin extraction, price wars, and channel conflict.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Fragmentation", desc: "Massive overcapacity coupled with brand invisibility leading to dependency on weak channels." },
              { title: "Zero Visibility", desc: "No data-driven intelligence for retailers or manufacturers, resulting in massive inventory risk." },
              { title: "Trust Deficit", desc: "Manufacturers and retailers operating as adversaries rather than partners in equity." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Role */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-altilio/40 mb-12"
          >
            Who We Are
          </motion.h2>
          <div className="flex flex-col items-center space-y-4">
             {["Not a distributor.", "Not a marketplace.", "Not a private label."].map((text, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.2 }}
                 className="text-3xl md:text-5xl font-light text-altilio/40"
               >
                 {text}
               </motion.div>
             ))}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.8 }}
               className="text-5xl md:text-7xl font-extrabold text-altilio pt-12 tracking-tighter"
             >
                <Logo size="lg" showTagline={true} />
             </motion.div>
          </div>
          <motion.div 
            {...fadeInUp}
            className="mt-20"
          >
             <Link to="/solution" className="text-altilio border-b-2 border-altilio font-bold text-lg pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
               Explore the Operating System →
             </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
