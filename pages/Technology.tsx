
import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="bg-white pb-32">
      <section className="pt-24 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-altilio leading-[0.9] mb-12">
                Tech as <br/><span className="text-blue-600">Infrastructure.</span>
              </h1>
              <p className="text-2xl font-light text-altilio/60 leading-relaxed">
                Technology exists to balance power, not centralize it. We build systems of transparency, not surveillance.
              </p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-altilio mb-4">Why Tech Matters</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 bg-brandGray rounded-2xl">
                    <h4 className="font-bold text-xl mb-2">Trust</h4>
                    <p className="text-altilio/60">Immutable records of commitment and performance.</p>
                  </div>
                  <div className="p-6 bg-brandGray rounded-2xl">
                    <h4 className="font-bold text-xl mb-2">Visibility</h4>
                    <p className="text-altilio/60">Real-time intelligence for smarter inventory and production.</p>
                  </div>
                  <div className="p-6 bg-brandGray rounded-2xl">
                    <h4 className="font-bold text-xl mb-2">Scalability</h4>
                    <p className="text-altilio/60">Systems that grow with our partners, not against them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 border-y border-altilio/10 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
               <div>
                  <h3 className="text-2xl font-bold mb-10 text-altilio">What Tech Enables</h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                      <p className="text-lg"><span className="font-bold">Partner Transparency:</span> Manufacturers see their brand performance in real-time.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                      <p className="text-lg"><span className="font-bold">Inventory Intelligence:</span> Retailers eliminate dead stock through predictive data.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                      <p className="text-lg"><span className="font-bold">Brand Consistency:</span> Digital guardians ensure the brand is represented correctly everywhere.</p>
                    </li>
                  </ul>
               </div>

               <div className="bg-altilio p-10 rounded-3xl text-white">
                  <h3 className="text-2xl font-bold mb-10">What Tech is NOT for</h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4 opacity-60">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0"></div>
                      <p className="text-lg"><span className="font-bold text-white">Surveillance:</span> We don't spy on partners; we empower them.</p>
                    </li>
                    <li className="flex items-start gap-4 opacity-60">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0"></div>
                      <p className="text-lg"><span className="font-bold text-white">Lock-in:</span> Our tech should be used because it's valuable, not mandatory.</p>
                    </li>
                    <li className="flex items-start gap-4 opacity-60">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0"></div>
                      <p className="text-lg"><span className="font-bold text-white">Power Imbalance:</span> We use code to distribute power, not centralize it.</p>
                    </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Technology;
