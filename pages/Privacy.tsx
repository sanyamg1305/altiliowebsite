
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-brandGray border-b border-altilio/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter text-altilio leading-[0.85] mb-12">
               Radical <br/><span className="text-blue-600">Visibility.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-altilio/60 leading-tight tracking-tight max-w-3xl">
              Privacy at Altilio is not a legal checkbox. It is a design principle. We believe trust is built through the strategic sharing of intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-8">Data Neutrality</h2>
              <h3 className="text-4xl font-extrabold text-altilio mb-8 tracking-tighter">We are Custogens, <br/>not Owners.</h3>
              <p className="text-xl text-altilio/60 font-light leading-relaxed mb-8">
                Altilio does not sell data. We do not use your inventory information to launch competing products or bypass your business. Our technology serves as a neutral ledger that balances power between the plant and the showroom.
              </p>
              <div className="p-8 border border-altilio/10 rounded-3xl bg-brandGray">
                <p className="text-altilio font-bold">The Altilio Promise:</p>
                <p className="text-altilio/60 italic mt-2">"Your operational data is your asset. We only use it to provide you with the intelligence needed to grow it."</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-8">Information Symmetry</h2>
              <h3 className="text-4xl font-extrabold text-altilio mb-8 tracking-tighter">Destroying the <br/>Knowledge Monopoly.</h3>
              <p className="text-xl text-altilio/60 font-light leading-relaxed mb-8">
                The traditional industry relies on information asymmetry—one party knowing something the other doesn't to gain leverage. Altilio replaces this with a synchronized view of demand, production, and stock for all stakeholders.
              </p>
              <ul className="space-y-4">
                {["Real-time Production Visibility", "Verified Inventory Accuracy", "Transparent Pricing Frameworks"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-altilio">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Infrastructure */}
      <section className="py-32 bg-altilio text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
               <h2 className="text-5xl font-extrabold tracking-tighter mb-8">Structural <br/>Integrity.</h2>
               <p className="text-white/60 font-light text-xl">Our tech stack is built on bank-grade security protocols, ensuring that while intelligence is shared, your sensitive commercial interests are protected.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: "Immutable Audit Trails", desc: "Every transaction and commitment is logged on a verifiable ledger." },
                 { title: "Siloed Commercials", desc: "Your financial data remains strictly between you and Altilio." },
                 { title: "Zero-Knowledge Proofs", desc: "Verifying credentials and quality without exposing proprietary processes." },
                 { title: "Decentralized Logic", desc: "No single point of failure in our information distribution system." }
               ].map((card, i) => (
                 <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                   <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                   <p className="text-white/40 font-light leading-relaxed">{card.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions Footer */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-altilio mb-8">Need more clarity on our data governance?</h2>
          <a 
            href="https://calendar.app.google/uoWWbfcJac2JuBrf7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-bold text-xl border-b-2 border-blue-600 pb-1 hover:text-altilio hover:border-altilio transition-all"
          >
            Review our Transparency Ledger →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
