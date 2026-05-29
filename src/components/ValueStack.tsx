/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Check, ShieldCheck } from "lucide-react";
import { VALUE_STACK_ITEMS } from "../data";
import { HOTMART_CHECKOUT_URL } from "../types";

export default function ValueStack() {
  const totalValue = 83.99;
  const currentPrice = 17.99;

  const handleCheckout = () => {
    window.open(HOTMART_CHECKOUT_URL, "_blank");
  };

  return (
    <section id="pricing" className="bg-tuscan-white py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative golden glow background layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-tuscan-gold/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-tuscan-gold/15 px-3 py-1 text-xs font-semibold text-tuscan-rust">
            <Sparkles className="h-3 w-3" />
            <span>EXPAT DISPATCH SPECIAL PRICE</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-tuscan-charcoal sm:text-4xl">
            Get Simple, Secure, Lifetime Access <br />
            <span className="italic text-tuscan-rust">For One Low Consolidated Price</span>
          </h2>
          <p className="text-sm text-tuscan-grey">
            Unlock the complete digital blueprint guide along with all three high-value interactive calculator, checklist, and contact resources instantly. No subscription fees, no secondary layers.
          </p>
        </div>

        {/* Outer Premium Container Box for the Single Product Stack */}
        <motion.div 
          className="rounded-xl border-[2px] border-tuscan-gold bg-tuscan-ivory/50 p-6 md:p-10 shadow-editorial relative overflow-hidden"
          whileHover={{ borderColor: "rgba(192, 86, 56, 0.7)", transition: { duration: 0.3 } }}
        >
          {/* Transparent Golden Seal decoration */}
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 select-none opacity-[0.03] text-tuscan-gold pointer-events-none">
            <svg fill="currentColor" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" />
            </svg>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-tuscan-gold/20 pb-6 gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-tuscan-gold">
                  COMPLETE DIGITAL PACKAGE
                </span>
                <h3 className="font-serif text-2xl font-bold text-tuscan-charcoal mt-1">
                  The Expat Real Estate Toolkit
                </h3>
                <p className="text-xs text-tuscan-grey mt-1 max-w-xl">
                  Includes the complete newly-revised 140-page eBook guide, plus all three custom-built interactive worksheets and local directories.
                </p>
              </div>

              {/* Price Callout */}
              <div className="flex flex-col items-start md:items-end shrink-0 bg-tuscan-white/75 rounded-lg p-4 border border-tuscan-gold/15 shadow-xs">
                <span className="text-xs font-medium text-tuscan-grey line-through">
                  Total Valuation: ${totalValue.toFixed(2).replace('.', ',')}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-bold text-tuscan-gold bg-tuscan-gold/15 py-0.5 px-2 rounded">SALE</span>
                  <span className="font-serif text-4xl font-bold text-tuscan-rust">
                    ${currentPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <span className="text-[10px] text-tuscan-gold uppercase font-semibold font-mono tracking-widest mt-1">
                  Single Safe Purchase
                </span>
              </div>
            </div>

            {/* List of included resources */}
            <div className="space-y-4 pt-2">
              <span className="text-[11px] uppercase tracking-widest font-bold text-tuscan-grey block">
                What You Get Instantly Today:
              </span>
              <div className="grid grid-cols-1 gap-4">
                {VALUE_STACK_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 rounded-lg p-4 transition-all duration-300 border border-tuscan-gold/10 bg-tuscan-white hover:border-tuscan-gold/30 hover:shadow-xs"
                  >
                    {/* Check icon */}
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tuscan-gold/20 text-tuscan-rust">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>

                    {/* Detail text */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="text-sm font-semibold text-tuscan-charcoal">
                          {item.title}
                        </span>
                        <span className="text-xs ml-auto font-mono text-tuscan-gold-light bg-tuscan-gold/10 px-2 py-0.5 rounded font-bold">
                          ${item.value.toFixed(2).replace('.', ',')} Value
                        </span>
                      </div>
                      <p className="text-xs text-tuscan-grey mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Anchor, Guarantee & CTA Button */}
            <div className="pt-6 border-t border-tuscan-gold/20 mt-4 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-tuscan-grey">
                  <ShieldCheck className="h-5 w-5 text-tuscan-gold shrink-0" />
                  <span>Backed by Baptiste's zero-risk 7-day refund policy.</span>
                </div>
                {/* Visual discount pill */}
                <div className="text-xs uppercase font-bold text-tuscan-rust tracking-wider bg-red-100/50 border border-tuscan-rust/15 px-3 py-1 rounded">
                  SAVE {(100 - (currentPrice / totalValue) * 100).toFixed(0)}% OFF VALUATION
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-tuscan-rust px-4 py-5 text-base font-bold text-tuscan-white shadow-md transition-all duration-300 hover:bg-tuscan-rust-dark hover:scale-[1.02] hover:shadow-lg"
              >
                <span>Get Instant Digital Access & Save Today For Just ${currentPrice.toFixed(2).replace('.', ',')} →</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-[10px] text-center text-tuscan-grey uppercase tracking-wider">
                🔒 Safe secure 256-bit encrypted checkout. instant pdf access sent via hotmart email login.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
