/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BLUEPRINT_ROWS } from "../data";
import { Check, ClipboardList, PenTool, Euro, FileText, Settings, Hammer, Sparkles } from "lucide-react";

export default function InsideBlueprint() {
  return (
    <section className="bg-tuscan-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-tuscan-rust bg-tuscan-rust/10 px-3.5 py-1 rounded">
              Curriculum & Chapter Outline
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl font-semibold text-tuscan-charcoal sm:text-4xl"
          >
            Inside The Ultimate Expat Blueprint: <br />
            <span className="italic text-tuscan-rust">Step-By-Step From Listings to Keys</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-tuscan-grey max-w-2xl mx-auto"
          >
            Written with practical honesty. We skipped any legal jargon and replaced it with real cost averages, specific contractor screeners, and raw numbers.
          </motion.p>
        </div>

        {/* Alternating Two-Row Layout */}
        <div className="space-y-24">
          {BLUEPRINT_ROWS.map((row, index) => {
            const isLeft = row.isLeft;
            return (
              <div 
                key={row.id}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 ${
                  isLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Blueprint Diagram (Representing eBook Chapters) */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-5 ${isLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative overflow-hidden rounded-lg bg-tuscan-white border border-tuscan-gold/25 p-8 shadow-editorial shadow-tuscan-gold/10">
                    {/* Retro architectural grid overlay background */}
                    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(35,33,31,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(35,33,31,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    
                    {/* Top decoration tab */}
                    <div className="absolute top-0 right-0 left-0 h-1 bg-[linear-gradient(90deg,#C05638_0%,#C4A468_100%)]" />

                    {/* Vector Schematics Header representing page structure */}
                    <div className="flex items-center justify-between border-b border-tuscan-gold/15 pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-tuscan-rust" />
                        <span className="text-[10px] font-mono tracking-wider text-tuscan-grey font-bold uppercase">{row.volume} GUIDE SCHEMATIC</span>
                      </div>
                      <span className="text-[10px] font-mono text-tuscan-gold">PAGE REF: {index === 0 ? "7-42" : "43-95"}</span>
                    </div>

                    {row.topicIconName === "notary" ? (
                      /* Volume I Graphic: Purchasing Steps Diagram */
                      <div className="space-y-4">
                        <div className="p-4 rounded bg-tuscan-ivory/50 border border-dashed border-tuscan-gold/30 flex items-center justify-between text-xs font-serif text-tuscan-charcoal">
                          <span className="flex items-center gap-2 font-serif">
                            <FileText className="h-4 w-4 text-tuscan-rust" />
                            1. Compresso di Vendita
                          </span>
                          <span className="text-[10px] text-tuscan-gold uppercase tracking-wider font-mono">Completed</span>
                        </div>
                        <div className="p-4 rounded bg-tuscan-ivory/50 border border-dashed border-tuscan-gold/30 flex items-center justify-between text-xs font-serif text-tuscan-charcoal">
                          <span className="flex items-center gap-2">
                            <ClipboardList className="h-4 w-4 text-tuscan-rust" />
                            2. Notary Stamp Review
                          </span>
                          <span className="text-[10px] text-tuscan-gold uppercase tracking-wider font-mono">In Progress</span>
                        </div>
                        <div className="p-4 rounded bg-tuscan-ivory/50 border border-dashed border-tuscan-gold/30 flex items-center justify-between text-xs font-serif text-tuscan-charcoal">
                          <span className="flex items-center gap-2">
                            <Euro className="h-4 w-4 text-tuscan-rust" />
                            3. Escrow & Tax Duties
                          </span>
                          <span className="text-[10px] text-tuscan-grey font-mono">Pending</span>
                        </div>
                      </div>
                    ) : (
                      /* Volume II Graphic: Renovation Budget Rates Checker */
                      <div className="space-y-4">
                        <div className="border border-tuscan-gold/25 rounded p-4 bg-tuscan-ivory/20 font-mono space-y-3">
                          <h4 className="text-[10px] font-bold text-tuscan-charcoal uppercase border-b border-tuscan-gold/15 pb-1.5 flex items-center gap-1.5">
                            <Hammer className="h-3 w-3 text-tuscan-rust" /> Material Labor Calculator
                          </h4>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-tuscan-grey">Masonry & Walls:</span>
                            <span className="text-tuscan-charcoal font-semibold">$180 - $250/m²</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-tuscan-grey">Plumbing Re-wiring:</span>
                            <span className="text-tuscan-charcoal font-semibold">$3,500 - $5,200</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-tuscan-grey">Timber Roof Trusses:</span>
                            <span className="text-tuscan-charcoal font-semibold">$120 - $190/m²</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 pt-4 border-t border-tuscan-gold/15 flex items-center justify-between text-[11px] font-mono text-tuscan-grey">
                      <div className="flex items-center gap-1">
                        <PenTool className="h-3.5 w-3.5" />
                        <span>Interactive Checklists</span>
                      </div>
                      <Sparkles className="h-3.5 w-3.5 text-tuscan-gold animate-pulse" />
                    </div>

                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-7 flex flex-col justify-center space-y-6 ${
                    isLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-tuscan-rust font-mono">
                      {row.volume}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-tuscan-charcoal sm:text-3xl">
                      {row.title}
                    </h3>
                    <p className="font-serif italic text-base text-tuscan-gold font-medium">
                      {row.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-tuscan-grey">
                    {row.description}
                  </p>

                  <div className="h-[1px] w-full bg-tuscan-gold/20" />

                  {/* Checklist Bullets */}
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {row.checklist.map((item, key) => (
                      <li key={key} className="flex items-start gap-2.5 text-xs text-tuscan-charcoal">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tuscan-gold/15 text-tuscan-rust">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
