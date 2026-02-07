
import React from 'react';

const Stakeholders: React.FC = () => {
  return (
    <div className="bg-white pb-32">
      <section className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-altilio mb-8">Not “Customers.” <br/><span className="text-blue-600">Stakeholders.</span></h1>
            <p className="text-xl md:text-2xl font-light text-altilio/60">
              We don't serve clients. We align with partners who share our vision for the industry's future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-brandGray rounded-3xl border border-altilio/5">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">4A. Manufacturers</h2>
              <h3 className="text-3xl font-bold text-altilio mb-6">Equity Partners</h3>
              <p className="text-altilio/60 mb-8 text-lg">
                Manufacturers are not suppliers. They are co-owners of brand value. We commit to protecting their equity and sharing the rewards of growth.
              </p>
              <div className="space-y-4 pt-8 border-t border-altilio/10">
                <div className="flex justify-between">
                  <span className="font-bold">Expectation</span>
                  <span className="text-altilio/60">Quality Excellence</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Commitment</span>
                  <span className="text-altilio/60">Brand Protection</span>
                </div>
              </div>
            </div>

            <div className="p-12 bg-brandGray rounded-3xl border border-altilio/5">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">4B. Retailers</h2>
              <h3 className="text-3xl font-bold text-altilio mb-6">Brand Stewards</h3>
              <p className="text-altilio/60 mb-8 text-lg">
                Retailers don’t sell Altilio. They represent Altilio. We respect territories, eliminate price wars, and provide long-term margin stability.
              </p>
              <div className="space-y-4 pt-8 border-t border-altilio/10">
                <div className="flex justify-between">
                  <span className="font-bold">Stability</span>
                  <span className="text-altilio/60">Territory Protection</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Power</span>
                  <span className="text-altilio/60">Data Visibility</span>
                </div>
              </div>
            </div>

            <div className="p-12 bg-brandGray rounded-3xl border border-altilio/5">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">4C. Architects & Designers</h2>
              <h3 className="text-3xl font-bold text-altilio mb-6">Ecosystem Multipliers</h3>
              <p className="text-altilio/60 mb-8 text-lg">
                We provide early access to innovation loops and specification confidence that ensures vision becomes reality without compromise.
              </p>
              <div className="space-y-4 pt-8 border-t border-altilio/10">
                <div className="flex justify-between">
                  <span className="font-bold">Access</span>
                  <span className="text-altilio/60">Innovation Loops</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Confidence</span>
                  <span className="text-altilio/60">Supply Consistency</span>
                </div>
              </div>
            </div>

            <div className="p-12 bg-altilio rounded-3xl border border-white/5 text-white">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">4D. Internal Teams</h2>
              <h3 className="text-3xl font-bold mb-6">Ownership Mindset</h3>
              <p className="text-white/60 mb-8 text-lg">
                Our team operates with radical transparency and long-term incentives. We build Altilio as a legacy, not a quick-exit startup.
              </p>
              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="font-bold">Mindset</span>
                  <span className="text-white/60">Ownership</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Incentives</span>
                  <span className="text-white/60">Long-term Alignment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stakeholders;
