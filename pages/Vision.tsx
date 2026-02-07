
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Removed unused and required 'subtitle' prop to fix missing property errors in call sites
const Stage: React.FC<{ 
  title: string; 
  desc: string; 
  stageLabel: string; 
  isLeft?: boolean;
  isLast?: boolean;
}> = ({ title, desc, stageLabel, isLeft, isLast }) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-32 md:mb-64 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">
          {stageLabel}
        </span>
        <h3 className="text-4xl md:text-6xl font-extrabold text-altilio mb-6 leading-none tracking-tighter">
          {title}
        </h3>
        <p className="text-xl md:text-2xl text-altilio/60 font-light leading-relaxed">
          {desc}
        </p>
      </motion.div>

      {/* Middle Dot */}
      <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 rounded-full bg-altilio ring-8 ring-white"
        />
      </div>

      {/* Empty Side (For Layout Balance) */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  );
};

const Vision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="bg-white min-h-screen">
      {/* Intro Header */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter text-altilio leading-[0.85] mb-12">
               The <br/><span className="text-blue-600">Journey.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-altilio/60 leading-tight tracking-tight max-w-3xl">
              We are building a legacy, not a startup. Success is measured in decades of alignment, trust, and shared prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section ref={containerRef} className="relative py-20 overflow-hidden">
        {/* The Animated Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-altilio/5 -translate-x-1/2 hidden md:block">
          <motion.div 
            style={{ scaleY, opacity, originY: 0 }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 w-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Stage 
            stageLabel="Stage 01: The Foundation"
            title="Today"
            desc="Building the core infrastructure quietly. We are onboarding select manufacturers and stewards who prioritize long-term equity over short-term extraction."
            isLeft={true}
          />

          <Stage 
            stageLabel="Stage 02: Expansion"
            title="5–10 Years"
            desc="Developing a tech-enabled collaboration platform that bridges global relevance with Indian context. Expanding into multiple aligned brands under one ecosystem."
            isLeft={false}
          />

          <Stage 
            stageLabel="Stage 03: The New Standard"
            title="Infinite Vision"
            desc="Altilio becomes the global benchmark for trust and technology in the building materials industry. Shared prosperity is realized for every partner in the chain."
            isLeft={true}
            isLast={true}
          />
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-48 bg-altilio text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12">
              Success isn't an exit. <br/>It's <span className="text-blue-400">endurance.</span>
            </h2>
            <div className="h-px w-24 bg-white/20 mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
              Our journey is defined by the depth of our roots, not the speed of our growth. 
              Join us in rewiring the industry for a more aligned future.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
