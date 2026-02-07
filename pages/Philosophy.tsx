
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-altilio leading-none">
              Design <br/>Philosophy.
            </h1>
            <p className="text-xl text-altilio/60 max-w-sm md:mb-4">
              Elevating the tile from a commodity to an architectural masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-altilio/10 border border-altilio/10">
            <div className="bg-white p-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-8">01 Principle</h3>
              <h4 className="text-2xl font-bold mb-4">Timeless over Trendy</h4>
              <p className="text-altilio/60 leading-relaxed">
                We design for decades, not seasons. Our aesthetic is rooted in longevity and quiet elegance.
              </p>
            </div>
            <div className="bg-white p-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-8">02 Context</h3>
              <h4 className="text-2xl font-bold mb-4">Architecture First</h4>
              <p className="text-altilio/60 leading-relaxed">
                Materials must respect the structure they inhabit. We build for global standards with Indian context.
              </p>
            </div>
            <div className="bg-white p-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-8">03 Integrity</h3>
              <h4 className="text-2xl font-bold mb-4">Material Truth</h4>
              <p className="text-altilio/60 leading-relaxed">
                We don't hide defects; we eliminate them. Quality is a result of process discipline and material integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-altilio text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 tracking-tight">What Altilio Will Never Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Discount-led Growth</h3>
              <p className="leading-relaxed">Price is the last thing we discuss, never the first. We grow through value, not cheapness.</p>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Brand Dilution</h3>
              <p className="leading-relaxed">We will never sacrifice our design principles for mass-market mediocrity.</p>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Channel Conflict</h3>
              <p className="leading-relaxed">We protect our partners. We will never bypass the stewards who represent our brand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
