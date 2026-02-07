
import React from 'react';

const Governance: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl border-b border-altilio/10 pb-16 mb-20">
            <h1 className="text-6xl font-extrabold tracking-tighter text-altilio mb-6">Governance & Ethics.</h1>
            <p className="text-2xl font-light text-altilio/60">Very few tile brands talk about governance. That is exactly why we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Governance Principles</h2>
              <div className="space-y-10">
                <div className="group">
                   <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Fair Play</h4>
                   <p className="text-altilio/60 leading-relaxed">No hidden clauses. No secret deals. Every partner operates on the same transparent framework.</p>
                </div>
                <div className="group">
                   <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Clear Contracts</h4>
                   <p className="text-altilio/60 leading-relaxed">Rights and responsibilities are defined in plain language, minimizing the need for legal friction.</p>
                </div>
                <div className="group">
                   <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Predictable Rules</h4>
                   <p className="text-altilio/60 leading-relaxed">Decisions are governed by logic and policy, not individual whims or temporary pressures.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Conflict Resolution</h2>
              <div className="p-10 bg-brandGray rounded-3xl border border-altilio/10">
                <h4 className="text-xl font-bold mb-6 text-blue-600">Prevention over Enforcement</h4>
                <p className="text-altilio/60 text-lg leading-relaxed mb-8">
                  Most conflicts arise from ambiguity. We use technology and clear governance to remove ambiguity before it turns into friction.
                </p>
                <div className="p-6 bg-white rounded-xl border border-altilio/5 italic">
                  "In the Altilio ecosystem, dialogue is our first tool. Penalties are the failure of the system, not the solution."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-altilio text-white mb-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-12">Long-term Commitments</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="border-t border-white/20 pt-8">
               <h3 className="font-bold text-xl mb-4">To Partners</h3>
               <p className="text-white/60">We commit to the stability of their business as much as our own.</p>
             </div>
             <div className="border-t border-white/20 pt-8">
               <h3 className="font-bold text-xl mb-4">To Quality</h3>
               <p className="text-white/60">Material integrity is non-negotiable, regardless of market conditions.</p>
             </div>
             <div className="border-t border-white/20 pt-8">
               <h3 className="font-bold text-xl mb-4">To the Ecosystem</h3>
               <p className="text-white/60">We work to ensure the tile industry becomes a respected global benchmark.</p>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Governance;
