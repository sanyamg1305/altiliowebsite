
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Join: React.FC = () => {
  return (
    <div className="bg-white pb-32">
      <section className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-altilio mb-8 uppercase">Start the <br/><span className="text-blue-600">Conversation.</span></h1>
            <p className="text-xl md:text-2xl font-light text-altilio/60">Language matters. We don't have customers; we have partners. Alignment is the prerequisite.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
             <motion.div 
               {...fadeInUp}
               className="space-y-16"
             >
               <div>
                 <h3 className="text-2xl font-bold mb-6 text-altilio">Who should reach out</h3>
                 <ul className="space-y-4">
                   {[
                     "Manufacturers tired of commodity price wars.",
                     "Retailers looking for territory protection and long-term brand equity.",
                     "Designers who value material integrity over trendy aesthetics."
                   ].map((text, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <span className="text-blue-600 font-bold">✓</span>
                       <p className="text-altilio/60 text-lg">{text}</p>
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <h3 className="text-2xl font-bold mb-6 text-altilio">Who shouldn’t</h3>
                 <ul className="space-y-4">
                   {[
                     "Anyone seeking short-term margin extraction at the cost of the ecosystem.",
                     "Partners who view technology as a weapon for control.",
                     "Traders looking for the cheapest deal of the day."
                   ].map((text, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <span className="text-red-500 font-bold">✕</span>
                       <p className="text-altilio/60 text-lg">{text}</p>
                     </li>
                   ))}
                 </ul>
               </div>
               
               <div className="pt-8">
                 <motion.a
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   href="https://calendar.app.google/uoWWbfcJac2JuBrf7"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
                 >
                   Schedule a Direct Call →
                 </motion.a>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="bg-brandGray p-12 rounded-3xl border border-altilio/10 shadow-sm"
             >
                <h3 className="text-3xl font-bold text-altilio mb-8">Send an Inquiry</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-altilio mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white border border-altilio/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-altilio mb-2">Organization</label>
                    <input type="text" className="w-full bg-white border border-altilio/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-altilio mb-2">Stakeholder Type</label>
                    <select className="w-full bg-white border border-altilio/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                      <option>Manufacturer</option>
                      <option>Retailer</option>
                      <option>Designer / Architect</option>
                      <option>Internal Team / Talent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-altilio mb-2">Message (Alignment Note)</label>
                    <textarea rows={4} className="w-full bg-white border border-altilio/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                  </div>
                  <button type="button" className="w-full bg-altilio text-white p-5 rounded-xl text-xl font-bold hover:bg-altilio/90 transition-all">
                    Submit Alignment Note
                  </button>
                </form>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
