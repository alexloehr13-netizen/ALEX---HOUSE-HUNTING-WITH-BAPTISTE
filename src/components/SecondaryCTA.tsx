/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "../types";

export default function SecondaryCTA() {
  const handleCheckout = () => {
    window.open(HOTMART_CHECKOUT_URL, "_blank");
  };

  return (
    <section className="bg-tuscan-ivory py-16 sm:py-20 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-tuscan-gold/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border-2 border-tuscan-gold/30 bg-tuscan-white p-8 md:p-12 shadow-editorial flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
        >
          {/* Inner border line */}
          <div className="absolute inset-2 border border-tuscan-gold/15 rounded-xl pointer-events-none" />

          {/* Left Text Detail */}
          <div className="space-y-4 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3.5 py-1 text-xs font-bold tracking-wide uppercase border border-emerald-200">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Limited-Time Expat Special</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-tuscan-charcoal tracking-tight sm:text-3xl leading-tight">
              Get Instant Access to <br />
              <span className="italic text-tuscan-rust">The Real Cost of Buying a Cheap House in Europe</span>
            </h3>

            <p className="text-sm leading-relaxed text-tuscan-grey">
              Secure the comprehensive 95-page budget guide today. No mailing delays—instant high-resolution PDF downloads sent directly to your inbox.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-tuscan-grey font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                7-Day Money-Back Guarantee
              </span>
              <span className="text-tuscan-gold/35">|</span>
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-tuscan-gold text-tuscan-gold" />
                Joined by 2,500+ Savvy Expats
              </span>
            </div>
          </div>

          {/* Right Action Stack */}
          <div className="flex flex-col items-center md:items-end shrink-0 w-full md:w-auto relative z-10">
            <div className="mb-4 text-center md:text-right">
              <span className="text-xs font-mono text-tuscan-grey line-through block">
                Regularly €29.99
              </span>
              <div className="flex items-center justify-center md:justify-end gap-1.5 mt-0.5">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  40% OFF
                </span>
                <span className="font-serif text-4xl font-bold text-[#132230]">
                  €17.99
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-widest font-bold text-tuscan-gold font-mono block mt-1">
                One-Time Token Charge
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-emerald-600 px-8 py-4.5 text-base font-bold text-tuscan-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:scale-[1.03] hover:shadow-lg cursor-pointer"
            >
              <span>BUY NOW</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[9px] text-tuscan-grey mt-3 text-center md:text-right uppercase tracking-wider">
              🔒 Instant Delivery via Hotmart Security
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
