/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Users, Compass, Globe } from "lucide-react";

export default function AboutAuthor() {
  return (
    <section className="bg-tuscan-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Stylized Image Frame with channel metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual background backing card */}
            <div className="absolute inset-4 -z-10 rounded-lg bg-tuscan-gold/15 translate-x-3 translate-y-3" />
            
            {/* Styled Portrait Holder displaying the official logo */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#FAF8F5] to-[#FAF5ED] p-6 sm:p-8 shadow-editorial border border-stone-200 flex flex-col items-center justify-center min-h-[380px] group">
              
              {/* Double Inset borders matching original cover architecture */}
              <div className="absolute inset-2 border border-tuscan-gold/25 rounded-md pointer-events-none" />
              <div className="absolute inset-3 border border-tuscan-gold/10 rounded-md pointer-events-none" />

              {/* Shimmering radial light effect on hover */}
              <div className="absolute -inset-10 bg-tuscan-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col items-center justify-center space-y-6">
                
                {/* HIGH-FIDELITY VECTOR ILLUSTRATION OF CHATEAU VILLA & CYPRESS TREES */}
                <svg className="w-48 h-24 text-tuscan-gold drop-shadow-sm" viewBox="0 0 240 120" fill="none" stroke="currentColor">
                  <defs>
                    <linearGradient id="gold-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C4A468" />
                      <stop offset="50%" stopColor="#DFCDAB" />
                      <stop offset="100%" stopColor="#A07D4F" />
                    </linearGradient>
                  </defs>

                  {/* Ground reference lines */}
                  <path d="M15 100 Q120 94, 225 100" stroke="url(#gold-shimmer)" strokeWidth="1.2" />
                  <path d="M40 102 C100 100, 140 100, 200 102" stroke="url(#gold-shimmer)" strokeWidth="0.6" strokeDasharray="1 1" />

                  {/* Left Cypress Tree group */}
                  <path d="M45 100 Q40 75, 45 42 Q50 75, 45 100 Z" fill="url(#gold-shimmer)" opacity="0.15" />
                  <path d="M45 100 Q40 75, 45 42 Q50 75, 45 100 Z" stroke="url(#gold-shimmer)" strokeWidth="1" />
                  <path d="M45 100 L45 52 M42 85 Q45 80, 48 85 M41 72 Q45 68, 49 72 M43 60 Q45 56, 47 60" stroke="url(#gold-shimmer)" strokeWidth="0.6" />

                  <path d="M33 100 Q30 83, 33 60 Q36 83, 33 100 Z" stroke="url(#gold-shimmer)" strokeWidth="0.8" />
                  <path d="M33 100 L33 66" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  {/* Right Cypress Tree */}
                  <path d="M195 100 Q190 70, 195 36 Q200 70, 195 100 Z" fill="url(#gold-shimmer)" opacity="0.15" />
                  <path d="M195 100 Q190 70, 195 36 Q200 70, 195 100 Z" stroke="url(#gold-shimmer)" strokeWidth="1" />
                  <path d="M195 100 L195 44 M192 82 Q195 78, 198 82 M191 68 Q195 64, 199 68 M193 54 Q195 50, 197 54" stroke="url(#gold-shimmer)" strokeWidth="0.6" />

                  {/* Symmetrical Italian/French Luxury Château Estate Facade */}
                  {/* Left Wing */}
                  <rect x="65" y="65" width="30" height="35" stroke="url(#gold-shimmer)" strokeWidth="1" />
                  <path d="M63 65 L97 65" stroke="url(#gold-shimmer)" strokeWidth="1.5" />
                  {/* Left wing windows */}
                  <rect x="71" y="73" width="6" height="10" stroke="url(#gold-shimmer)" strokeWidth="0.75" />
                  <line x1="74" y1="73" x2="74" y2="83" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                  <line x1="71" y1="78" x2="77" y2="78" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  <rect x="83" y="73" width="6" height="10" stroke="url(#gold-shimmer)" strokeWidth="0.75" />
                  <line x1="86" y1="73" x2="86" y2="83" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                  <line x1="83" y1="78" x2="89" y2="78" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  {/* Right Wing */}
                  <rect x="145" y="65" width="30" height="35" stroke="url(#gold-shimmer)" strokeWidth="1" />
                  <path d="M143 65 L177 65" stroke="url(#gold-shimmer)" strokeWidth="1.5" />
                  {/* Right wing windows */}
                  <rect x="151" y="73" width="6" height="10" stroke="url(#gold-shimmer)" strokeWidth="0.75" />
                  <line x1="154" y1="73" x2="154" y2="83" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                  <line x1="151" y1="78" x2="157" y2="78" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  <rect x="163" y="73" width="6" height="10" stroke="url(#gold-shimmer)" strokeWidth="0.75" />
                  <line x1="166" y1="73" x2="166" y2="83" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                  <line x1="163" y1="78" x2="169" y2="78" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  {/* Center Main Block */}
                  <rect x="95" y="52" width="50" height="48" stroke="url(#gold-shimmer)" strokeWidth="1.2" />
                  {/* Symmetrical roof/pediment */}
                  <path d="M91 52 L120 34 L149 52" stroke="url(#gold-shimmer)" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Symmetrical Chimneys */}
                  <path d="M102 44 L102 36 L106 36 L106 41" stroke="url(#gold-shimmer)" strokeWidth="0.8" />
                  <path d="M134 41 L134 36 L138 36 L138 44" stroke="url(#gold-shimmer)" strokeWidth="0.8" />

                  {/* Center Pediment design/window (round) */}
                  <circle cx="120" cy="45" r="3.5" stroke="url(#gold-shimmer)" strokeWidth="0.75" />

                  {/* Second floor arched windows */}
                  <path d="M102 67 L102 59 C102 56, 108 56, 108 59 L108 67 Z" stroke="url(#gold-shimmer)" strokeWidth="0.8" />
                  <line x1="105" y1="56" x2="105" y2="67" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  <path d="M117 67 L117 59 C117 56, 123 56, 123 59 L123 67 Z" stroke="url(#gold-shimmer)" strokeWidth="0.8" />
                  <line x1="120" y1="56" x2="120" y2="67" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  <path d="M132 67 L132 59 C132 56, 138 56, 138 59 L138 67 Z" stroke="url(#gold-shimmer)" strokeWidth="0.8" />
                  <line x1="135" y1="56" x2="135" y2="67" stroke="url(#gold-shimmer)" strokeWidth="0.5" />

                  {/* Symmetrical Grand Front Entrance and Balcony balustrade */}
                  <line x1="95" y1="73" x2="145" y2="73" stroke="url(#gold-shimmer)" strokeWidth="1" />
                  <path d="M100 73 L100 70 L140 70 L140 73" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                  {/* Vertical balustrade ticks */}
                  <line x1="105" y1="70" x2="105" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />
                  <line x1="110" y1="70" x2="110" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />
                  <line x1="115" y1="70" x2="115" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />
                  <line x1="120" y1="70" x2="120" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />
                  <line x1="125" y1="70" x2="125" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />
                  <line x1="130" y1="70" x2="130" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />
                  <line x1="135" y1="70" x2="135" y2="73" stroke="url(#gold-shimmer)" strokeWidth="0.4" />

                  {/* Arched main entry door at first ground floor */}
                  <path d="M114 100 L114 83 C114 78, 126 78, 126 83 L126 100 Z" stroke="url(#gold-shimmer)" strokeWidth="1" fill="url(#gold-shimmer)" fillOpacity="0.05" />
                  <line x1="120" y1="79" x2="120" y2="100" stroke="url(#gold-shimmer)" strokeWidth="0.5" strokeDasharray="1 1" />

                  {/* Symmetrical flanking windows at ground floor */}
                  <rect x="100" y="81" width="6" height="11" stroke="url(#gold-shimmer)" strokeWidth="0.75" />
                  <rect x="134" y="81" width="6" height="11" stroke="url(#gold-shimmer)" strokeWidth="0.75" />

                  {/* Organic plants/vines/bushes doodles in gold at base */}
                  <path d="M22 100 Q20 95, 23 93 T25 97 T28 95 T30 100 Z" fill="url(#gold-shimmer)" opacity="0.3" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                  <path d="M211 100 Q209 94, 212 92 T215 97 T218 94 T221 100 Z" fill="url(#gold-shimmer)" opacity="0.3" stroke="url(#gold-shimmer)" strokeWidth="0.5" />
                </svg>

                {/* CALLIGRAPHY cursive signature typography matching the logo exactly */}
                <span className="font-script text-[48px] sm:text-[56px] text-tuscan-gold text-center leading-[0.7] tracking-normal inline-block select-none filter drop-shadow-[0_1px_2px_rgba(196,164,104,0.18)]">
                  House Hunting
                </span>

                {/* WITH BAPTISTE with flanking line dividers */}
                <div className="flex items-center justify-center gap-3 w-full max-w-[280px]">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-tuscan-gold/60" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-tuscan-grey font-bold select-none whitespace-nowrap">
                    WITH BAPTISTE
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-tuscan-gold/60" />
                </div>

                {/* Tiny badge indicating official channels */}
                <div className="pt-2 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#BEB5AD] uppercase font-mono select-none">
                  <Youtube className="h-3 w-3 text-red-600 animate-pulse" />
                  <span>OFFICIAL CHANNELS</span>
                </div>

              </div>

            </div>

            {/* Micro details overlay */}
            <div className="absolute -top-3 -right-3 h-10 w-10 text-tuscan-gold opacity-45">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2z" className="hidden" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Bio Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-tuscan-gold">
              MEET YOUR RECONNAISSANCE PARTNER
            </span>
            <h2 className="font-serif text-3xl font-semibold text-tuscan-charcoal sm:text-4xl">
              "Hi, I'm Baptiste."
            </h2>
            
            <div className="h-0.5 w-16 bg-tuscan-rust" />

            <div className="space-y-4 text-base text-tuscan-grey leading-relaxed">
              <p>
                You might know me from my YouTube channel, <strong className="text-tuscan-charcoal font-medium">House Hunting with Baptiste</strong>. Over the last several years, I've toured hundreds of remote villages, surveyed crumbling farmhouses, and interviewed countless expats across France, Italy, Spain, and Portugal.
              </p>
              <p>
                I've shown millions of viewers on YouTube that a peaceful, sunny life in the European countryside doesn't have to cost millions of dollars. But behind those cozy stone walls can lie high-risk regulatory and financial traps.
              </p>
              <p>
                I compiled this blueprint because I grew tired of seeing aspiring expats get taken advantage of by local agents or blindsided by notary bills. I compiled everything I've learned on the ground—no standard legal jargon—just the practical truth you need to navigate the purchase and renovation safely.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-tuscan-gold/15">
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-tuscan-charcoal font-semibold">
                  <Users className="h-4 w-4 text-tuscan-rust" />
                  Community
                </span>
                <span className="text-xl font-serif text-tuscan-charcoal mt-1">150k+</span>
                <span className="text-[10px] text-tuscan-grey uppercase">Viewers</span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-tuscan-charcoal font-semibold">
                  <Compass className="h-4 w-4 text-tuscan-rust" />
                  Field Experience
                </span>
                <span className="text-xl font-serif text-tuscan-charcoal mt-1">5+ Years</span>
                <span className="text-[10px] text-tuscan-grey uppercase">On-Site Research</span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-tuscan-charcoal font-semibold">
                  <Globe className="h-4 w-4 text-tuscan-rust" />
                  Countries
                </span>
                <span className="text-xl font-serif text-tuscan-charcoal mt-1">12+ Regions</span>
                <span className="text-[10px] text-tuscan-grey uppercase">Fully Covered</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
