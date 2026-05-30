/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "../types";
import BookCover3D from "./BookCover3D";

export default function Hero() {
  const handleCheckout = () => {
    window.open(HOTMART_CHECKOUT_URL, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-radial from-tuscan-white via-tuscan-ivory to-tuscan-ivory py-16 lg:py-24">
      {/* Visual background accents */}
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-tuscan-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-tuscan-rust/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Curiosity & Copwriting */}
          <div className="space-y-8 lg:col-span-7">
            
            {/* Upper Badge Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-tuscan-rust bg-tuscan-rust/10 py-1 px-3 rounded-md">
                EXCLUSIVE GUIDE
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tuscan-gold">
                THE HIDDEN COSTS BEHIND THE $50,000 DREAM
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl font-semibold leading-[1.1] text-tuscan-charcoal sm:text-5xl lg:text-6xl"
            >
              The Real Cost of Buying a Cheap House in Europe: <br />
              <span className="italic text-tuscan-rust text-3xl sm:text-4xl lg:text-5xl">
                What the Listings Don't Tell You.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-base leading-relaxed text-tuscan-grey sm:text-lg"
            >
              Before you put down a deposit on that charming $50,000 stone cottage in France, Italy, Spain, or Portugal, discover ALL the hidden costs most foreign buyers only learn after it’s too late. This complete 180-page guide could potentially save you thousands of dollars by helping you avoid costly mistakes before you buy your next home. Don’t buy the dream blind.
            </motion.p>

            {/* Benefit Checkpoints */}
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-4"
            >
              {[
                "Know the Real Cost Before You Buy",
                "Avoid Hidden Buyer Traps",
                "Country-by-Country Cost Breakdowns",
                "The Offer-Ready Property Checklist",
                "Built for Foreign Buyers and Expats"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-tuscan-charcoal sm:text-base">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA & Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 pt-2"
            >
              <button
                onClick={handleCheckout}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-emerald-600 px-10 py-4.5 text-base font-bold text-tuscan-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:scale-[1.03] hover:shadow-lg sm:w-auto cursor-pointer"
              >
                <span>BUY NOW (Just $17,99)</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secure Payment Badges */}
              <div className="mt-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-2 select-none">
                
                {/* Row 1: 7-day money-back guarantee with a green check circle */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-tuscan-charcoal font-semibold font-sans">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3FB151] text-white shrink-0 shadow-xs">
                    <svg className="w-3 h-3 stroke-[4.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>7-day money-back guarantee</span>
                </div>

                {/* Row 2: SECURE (with a gold lock) · VISA · MASTERCARD · PAYPAL · KLARNA · */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 gap-y-0.5 text-[9px] sm:text-xs font-extrabold tracking-widest text-tuscan-grey uppercase font-sans">
                  <span className="flex items-center gap-1 text-[#C4A468] font-black">
                    <span>🔒</span>
                    <span>SECURE</span>
                  </span>
                  <span className="text-stone-300 font-normal">·</span>
                  <span className="text-tuscan-charcoal">VISA</span>
                  <span className="text-stone-300 font-normal">·</span>
                  <span className="text-tuscan-charcoal">MASTERCARD</span>
                  <span className="text-stone-300 font-normal">·</span>
                  <span className="text-tuscan-charcoal">PAYPAL</span>
                  <span className="text-stone-300 font-normal">·</span>
                  <span className="text-tuscan-charcoal">KLARNA</span>
                  <span className="text-stone-300 font-normal">·</span>
                </div>

                {/* Row 3: APPLE PAY */}
                <span className="text-[9px] sm:text-xs font-extrabold tracking-widest text-tuscan-charcoal uppercase font-sans leading-none pl-0 sm:pl-7">
                  APPLE PAY
                </span>

              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Animated Mockup Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <BookCover3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
