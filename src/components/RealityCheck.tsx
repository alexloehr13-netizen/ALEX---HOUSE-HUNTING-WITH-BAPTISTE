/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PAIN_POINTS } from "../data";
import { ShieldAlert, MapPin, Landmark, Hammer } from "lucide-react";

export default function RealityCheck() {
  const getIcon = (id: string) => {
    switch (id) {
      case "tax-trap":
        return <Landmark className="h-6 w-6 text-tuscan-rust" />;
      case "preservation":
        return <MapPin className="h-6 w-6 text-tuscan-rust" />;
      case "contractors":
        return <Hammer className="h-6 w-6 text-tuscan-rust" />;
      default:
        return <ShieldAlert className="h-6 w-6 text-tuscan-rust" />;
    }
  };

  return (
    <section className="bg-tuscan-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-tuscan-gold bg-tuscan-gold/10 px-3.5 py-1 rounded">
              A Brutal Dose of Reality
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl font-semibold text-tuscan-charcoal sm:text-4xl"
          >
            Why Modern "€1" and "Cheap" European Houses <br />
            <span className="italic text-tuscan-rust">Are Selling For a Reason.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-tuscan-grey max-w-2xl mx-auto"
          >
            Glamorous magazine stories love to talk about buying a crumbling castle for the price of an iPad. They conveniently forget to mention the three major obstacles that derail over 80% of unsuspecting expat buyers:
          </motion.p>
        </div>

        {/* 3-Column Pain Points Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PAIN_POINTS.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 30px 60px -15px rgba(35, 33, 31, 0.12)",
                borderColor: "rgba(196, 164, 104, 0.5)"
              }}
              className="relative rounded-lg border border-tuscan-gold/10 bg-tuscan-ivory/40 p-8 transition-colors duration-300 shadow-xs"
            >
              {/* Number Stamp */}
              <div className="absolute right-6 top-6 text-sm font-bold tracking-widest text-[#E4DCCE] select-none font-serif">
                {point.numberLabel}
              </div>

              {/* Icon Container */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-tuscan-gold/15">
                {getIcon(point.id)}
              </div>

              {/* Title & Description */}
              <h3 className="mb-3 font-serif text-xl font-bold tracking-tight text-tuscan-charcoal">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-tuscan-grey">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic warning banner below the grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-lg bg-red-50/50 border border-tuscan-rust/15 p-6 text-center text-xs text-tuscan-rust uppercase tracking-wider font-semibold max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <span className="bg-tuscan-rust text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold">WARNING</span>
          <span>Do not hand over a single Euro cent until you have executed the due diligence checklist detailed below.</span>
        </motion.div>

      </div>
    </section>
  );
}
