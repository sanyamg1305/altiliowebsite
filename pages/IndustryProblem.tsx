
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const IndustryProblem: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-[9rem] font-extrabold tracking-tighter text-altilio leading-[0.85] mb-12">
              The <br/><span className="text-red-500/80">Systemic</span> Crisis.
            </h1>
            <p className="text-2xl md:text-4xl font-light text-altilio/60 leading-tight tracking-tight max-w-3xl">
              India’s tile industry is a giant built on a fragile foundation. Volume has surged, but value is being destroyed by a fundamental lack of alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Commodity Trap visualization */}
      <section className="py-24 bg-brandGray border-y border-altilio/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-altilio/40 mb-6">The Negative Loop</h2>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-altilio mb-8">
                The Commodity Trap.
              </p>
              <div className="space-y-6">
                {[
                  "Quality becomes invisible without brand power.",
                  "Invisible quality leads to price-only decisions.",
                  "Price wars lead to margin compression.",
                  "Margin compression kills innovation."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-altilio/60 text-xl font-light">
                    <span className="text-red-500 font-bold">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                animate={{ rotate: -5 }}
                className="bg-altilio p-12 rounded-[3rem] text-white shadow-2xl relative z-10"
              >
                <div className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-8">Market Reality</div>
                <div className="text-6xl font-black mb-4">92%</div>
                <p className="text-xl text-white/60 leading-relaxed font-light">
                  Of manufacturing output in key clusters is sold as "unbranded" or "private label," leaving manufacturers with zero leverage.
                </p>
              </motion.div>
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] translate-x-4 translate-y-4 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Dual Crisis Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-altilio">The Dual Crisis.</h2>
            <div className="h-1 w-24 bg-red-500 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-altilio/5 border border-altilio/5">
            {/* Manufacturers Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 border-r border-altilio/5"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-12">01 Manufacturers</h3>
              <div className="space-y-16">
                <div>
                  <h4 className="text-3xl font-bold text-altilio mb-4">Capital Trap</h4>
                  <p className="text-xl text-altilio/60 font-light leading-relaxed">Billions of dollars in machinery running at 60% capacity because they lack the brand pull to move volume.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-altilio mb-4">Channel Extortion</h4>
                  <p className="text-xl text-altilio/60 font-light leading-relaxed">Complete dependency on powerful distributors who dictate prices and destroy factory margins.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-altilio mb-4">No Asset Ownership</h4>
                  <p className="text-xl text-altilio/60 font-light leading-relaxed">When a manufacturer stops producing, they have nothing. No brand legacy. No customer relationship. No equity.</p>
                </div>
              </div>
            </motion.div>

            {/* Retailers Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brandGray p-12 md:p-20"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-12">02 Retailers</h3>
              <div className="space-y-16">
                <div>
                  <h4 className="text-3xl font-bold text-altilio mb-4">Inventory Blindness</h4>
                  <p className="text-xl text-altilio/60 font-light leading-relaxed">Guessing demand leads to locked capital in "dead stock" while fast-moving SKUs are perpetually unavailable.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-altilio mb-4">The Price War</h4>
                  <p className="text-xl text-altilio/60 font-light leading-relaxed">Selling a product available in ten other shops within 1km. The only way to win is to be the cheapest.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-altilio mb-4">Adversarial Supply</h4>
                  <p className="text-xl text-altilio/60 font-light leading-relaxed">Zero transparency from the plant. No way to know when a batch will arrive or if the quality will match the sample.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Root Cause Callout */}
      <section className="py-48 bg-altilio text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400 mb-12">The Synthesis</h2>
            <p className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-12 italic">
              “The industry doesn’t lack demand. <br/> <span className="text-blue-400">It lacks alignment.”</span>
            </p>
            <div className="h-px w-24 bg-white/20 mx-auto mb-12"></div>
            <p className="text-2xl font-light text-white/60 max-w-2xl mx-auto">
              We have built an engine with plenty of fuel but no transmission. Altilio is the structural gearbox that finally connects production to prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA to Solution */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-altilio mb-12">
              It is time to build a better plumbing.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/solution" className="bg-altilio text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-altilio/20 hover:bg-altilio/90 transition-all">
                See Our Solution
              </Link>
              <Link to="/join" className="border border-altilio/20 text-altilio px-10 py-5 rounded-full text-xl font-bold hover:bg-altilio/5 transition-all">
                Connect with us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryProblem;
