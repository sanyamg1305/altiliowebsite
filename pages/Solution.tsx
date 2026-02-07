
import React from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Solution: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - The Operating System */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-8"
            >
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-altilio leading-[0.85] mb-12">
                The New <br/><span className="text-blue-600">Standard.</span>
              </h1>
              <p className="text-2xl md:text-4xl font-light text-altilio/60 leading-tight tracking-tight max-w-3xl">
                We are rewiring the industry's plumbing. Altilio isn't just a brand; it's a structural realignment of the entire value chain.
              </p>
            </motion.div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="w-full aspect-square border border-altilio/10 rounded-full flex items-center justify-center relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-blue-600 rounded-full opacity-20"
                />
                <div className="text-center p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-altilio/40 block mb-2">Equilibrium</span>
                  <div className="text-5xl font-extrabold text-altilio">100%</div>
                  <span className="text-sm font-medium text-altilio/60">Aligned Incentives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Pillars Section */}
      <section className="py-32 bg-brandGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">The Three Pillars</h2>
            <p className="text-4xl md:text-6xl font-extrabold tracking-tighter text-altilio">How we restore value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand as Shared Equity",
                desc: "We transform manufacturing capacity into recognizable brand power. Manufacturers aren't suppliers; they are co-builders of a lasting legacy with shared upside.",
                index: "01"
              },
              {
                title: "Neutral Technology",
                desc: "We replace manual friction with digital certainty. Our tech provides real-time visibility to partners, ensuring inventory moves where it's actually needed.",
                index: "02"
              },
              {
                title: "Equitable Governance",
                desc: "We protect our retail partners with strict territory exclusivity and price integrity. Stability is the prerequisite for long-term investment.",
                index: "03"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-12 rounded-[2.5rem] border border-altilio/5 shadow-sm hover:shadow-xl hover:border-blue-600/20 transition-all group"
              >
                <div className="text-5xl font-black text-altilio/5 mb-8 group-hover:text-blue-600/10 transition-colors">{pillar.index}</div>
                <h3 className="text-3xl font-bold text-altilio mb-6 tracking-tight">{pillar.title}</h3>
                <p className="text-lg text-altilio/60 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paradigm Shift Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-altilio/40 mb-6">The Paradigm Shift</h2>
            <p className="text-4xl md:text-6xl font-extrabold tracking-tighter text-altilio">Replacing friction with flow.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                label: "The Transactional Era",
                value: "Old Model",
                points: ["Margin Extraction", "Zero Visibility", "Price Wars", "Adversarial Relationships"],
                isOld: true
              },
              {
                label: "The Aligned Era",
                value: "The Altilio Model",
                points: ["Value Creation", "Full Transparency", "Price Integrity", "Equity Partnerships"],
                isOld: false
              }
            ].map((paradigm, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className={`p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-12 ${paradigm.isOld ? 'bg-white border border-altilio/10 grayscale opacity-40 hover:opacity-60' : 'bg-altilio text-white shadow-2xl shadow-altilio/20'}`}
              >
                <div className="md:w-1/3 text-center md:text-left">
                  <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${paradigm.isOld ? 'text-altilio' : 'text-blue-400'}`}>{paradigm.label}</span>
                  <h3 className="text-4xl font-extrabold tracking-tighter">{paradigm.value}</h3>
                </div>
                <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                  {paradigm.points.map((point, pIdx) => (
                    <div key={pIdx} className="text-center">
                      <div className={`text-sm font-bold uppercase tracking-tighter mb-1 ${paradigm.isOld ? 'text-altilio/40' : 'text-white'}`}>{point}</div>
                      <div className={`h-1 w-full rounded-full ${paradigm.isOld ? 'bg-altilio/10' : 'bg-blue-600'}`}></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do / Workflow */}
      <section className="py-32 bg-brandGray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-altilio mb-12">Rewiring the <br/>Industry Workflow.</h2>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Brand Co-creation",
                    desc: "We don't buy products; we build brand platforms around high-quality manufacturing units."
                  },
                  {
                    step: "02",
                    title: "Neutral Tech Deployment",
                    desc: "Our software layer removes information asymmetry between the plant and the retail showroom."
                  },
                  {
                    step: "03",
                    title: "Stewardship Network",
                    desc: "We empower select retailers as stewards of the brand, ensuring territory integrity and customer trust."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="text-4xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-altilio mb-3">{item.title}</h4>
                      <p className="text-lg text-altilio/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-altilio p-16 rounded-[3rem] text-white relative"
            >
              <div className="absolute top-12 right-12 text-blue-400 opacity-20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-blue-400">Our Thesis</h3>
              <p className="text-4xl font-light leading-tight mb-12 italic">
                “Profit is a byproduct of structural alignment. We don’t chase margins; we design systems that generate value naturally.”
              </p>
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-1">Altilio OS</div>
                  <div className="text-white/40 text-xs">Version 1.0 (India)</div>
                </div>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="https://calendar.app.google/uoWWbfcJac2JuBrf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-bold hover:text-white transition-colors"
                >
                  Schedule an alignment call →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Belief Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-altilio mb-12">
              Ready to shift from <span className="text-altilio/30 italic">extractive trade</span> to <span className="text-blue-600 italic">collaborative equity?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendar.app.google/uoWWbfcJac2JuBrf7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-altilio text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-altilio/20"
              >
                Connect with us
              </motion.a>
              <Link to="/vision" className="border border-altilio/20 text-altilio px-10 py-5 rounded-full text-xl font-bold hover:bg-altilio/5 transition-all">
                The Long Term Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
