/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldAlert, Award, Inbox } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-tuscan-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg border border-tuscan-gold/30 bg-radial from-tuscan-ivory to-tuscan-white p-8 text-center shadow-editorial"
        >
          {/* Top Stamp Ornament */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-tuscan-gold/15 border border-tuscan-gold/40 text-tuscan-rust relative">
            <Award className="h-8 w-8 text-tuscan-gold" strokeWidth={1.5} />
            <div className="absolute -inset-1 rounded-full border border-dashed border-tuscan-gold/25 animate-spin-slow pointer-events-none" />
          </div>

          <h3 className="font-serif text-2xl font-semibold text-tuscan-charcoal">
            The 7-Day "European Dream" Guarantee.
          </h3>
          
          <div className="mx-auto my-4 h-0.5 w-16 bg-tuscan-gold" />

          <p className="text-base text-tuscan-grey leading-relaxed max-w-xl mx-auto">
            Read the guides, check out the checklists, and run your project metrics. If you don't feel this package has saved you at least ten times its cost in potential mistakes, email us within 7 days for a full, prompt refund—no questions asked.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-tuscan-grey border-t border-tuscan-gold/15 pt-6">
            <span className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-tuscan-rust" />
              <span>100% Risk-Free Return</span>
            </span>
            <span className="hidden sm:inline text-tuscan-gold/30">|</span>
            <span className="flex items-center gap-2">
              <Inbox className="h-4 w-4 text-tuscan-rust" />
              <span>Response in under 24 hours</span>
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
