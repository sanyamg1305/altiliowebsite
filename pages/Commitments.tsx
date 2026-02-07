
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Commitments: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-40 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-blue-600 mb-8 block">The Altilio Pledge</span>
            <h1 className="text-7xl md:text-[8rem] font-extrabold tracking-tighter text-altilio leading-[0.85] mb-12">
              Legacy <br/>over Exits.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-altilio/60 leading-tight tracking-tight max-w-3xl mx-auto">
              We aren't building for a three-year liquidity event. We are building a multi-decade operating system for an entire industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Commitments Grid */}
      <section className="py-24 bg-brandGray border-y border-altilio/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-altilio/10">
            {/* Commitment 1 */}
            <div className="bg-white p-16 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-12">Commitment 01</span>
                <h3 className="text-3xl font-extrabold text-altilio mb-8 group-hover:text-blue-600 transition-colors">To the <br/>Manufacturer.</h3>
                <p className="text-lg text-altilio/60 font-light leading-relaxed">
                  We will never treat your plant as a disposable vendor. Your excess capacity will be transformed into brand equity that you own a part of. We pledge to share the upside of every tile that leaves your kiln.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-altilio/5 text-sm font-bold text-altilio/40 uppercase tracking-widest">Equity Alignment</div>
            </div>

            {/* Commitment 2 */}
            <div className="bg-white p-16 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-12">Commitment 02</span>
                <h3 className="text-3xl font-extrabold text-altilio mb-8 group-hover:text-blue-600 transition-colors">To the <br/>Retailer.</h3>
                <p className="text-lg text-altilio/60 font-light leading-relaxed">
                  We pledge absolute territory protection. We will never open a competing showroom within your designated steward zone. Your investment in our brand is protected by our governance, not just a contract.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-altilio/5 text-sm font-bold text-altilio/40 uppercase tracking-widest">Territory Integrity</div>
            </div>

            {/* Commitment 3 */}
            <div className="bg-white p-16 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-12">Commitment 03</span>
                <h3 className="text-3xl font-extrabold text-altilio mb-8 group-hover:text-blue-600 transition-colors">To the <br/>Material.</h3>
                <p className="text-lg text-altilio/60 font-light leading-relaxed">
                  We pledge material truth. We will never sacrifice quality to win a price war. If a product doesn't meet our architectural standards, it doesn't carry the Altilio mark. Period.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-altilio/5 text-sm font-bold text-altilio/40 uppercase tracking-widest">Quality Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Infinite Horizon" section */}
      <section className="py-48 bg-altilio text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-12">
              The <span className="text-blue-400">Infinite</span> <br/>Horizon.
            </motion.h2>
            <div className="space-y-12">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex gap-8">
                <div className="text-2xl font-black text-blue-400">10y</div>
                <p className="text-2xl font-light text-white/60">Our minimum planning cycle. We don't make quarterly compromises for short-term gain.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex gap-8">
                <div className="text-2xl font-black text-blue-400">0%</div>
                <p className="text-2xl font-light text-white/60">The chance we will bypass our stewards to sell directly. Our model depends on your success.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex gap-8">
                <div className="text-2xl font-black text-blue-400">∞</div>
                <p className="text-2xl font-light text-white/60">The value of a trust-based ecosystem. This is our north star.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <p className="text-xl md:text-2xl text-altilio/40 font-light italic mb-12">
             “Altilio is built on the belief that enduring partnerships are the only sustainable competitive advantage in a commoditized world.”
           </p>
           <div className="flex justify-center gap-4">
              <div className="h-2 w-2 rounded-full bg-altilio/20"></div>
              <div className="h-2 w-2 rounded-full bg-altilio/20"></div>
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Commitments;
