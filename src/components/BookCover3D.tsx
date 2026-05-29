/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Award, ShieldCheck } from "lucide-react";

export default function BookCover3D() {
  return (
    <div className="relative flex items-center justify-center p-2 py-10 md:p-8">
      {/* Behind-Book Cinematic Limelight / Spotlight Effect Scene */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex flex-col items-center justify-center">
        {/* Slanted Spotlight Cone (Limelight Beam) */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-[60%] w-[380px] sm:w-[480px] h-[700px] bg-gradient-to-b from-amber-200/35 via-tuscan-gold/15 to-transparent blur-[35px] rounded-full origin-top rotate-[-12deg] mix-blend-screen"
          style={{ clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)" }}
        />
        {/* Glowing pedestal stage puddle of light on the floor/bottom of the book */}
        <div className="absolute -bottom-6 w-[280px] sm:w-[340px] h-[65px] bg-gradient-to-r from-amber-300/25 via-yellow-200/35 to-amber-300/25 rounded-full blur-[22px] mix-blend-screen animate-pulse" style={{ animationDuration: "3s" }} />
        {/* Intense core golden backlight glow */}
        <div className="absolute w-[360px] h-[360px] rounded-full bg-radial from-amber-200/15 via-tuscan-gold/5 to-transparent blur-[65px]" />
      </div>

      {/* Floating magical atmospheric dust particles catching the limelight */}
      {[
        { top: "15%", left: "10%", delay: 0.1, size: 7 },
        { top: "30%", left: "85%", delay: 0.8, size: 9 },
        { top: "65%", left: "5%", delay: 0.4, size: 6 },
        { top: "80%", left: "90%", delay: 1.3, size: 8 },
        { top: "45%", left: "15%", delay: 0.5, size: 5 },
        { top: "75%", left: "20%", delay: 1.9, size: 7 },
      ].map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-amber-300/60 pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            filter: "blur(0.8px) drop-shadow(0 0 8px rgba(253, 224, 71, 0.9))",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 18, 0],
            opacity: [0.3, 0.95, 0.3],
            scale: [0.9, 1.25, 0.9],
          }}
          transition={{
            duration: 6 + idx * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* 3D Book Perspective Wrap */}
      <div className="group relative [perspective:1000px] h-[490px] w-[345px] sm:h-[510px] sm:w-[360px]">
        
        {/* Ad-style adapted pricing badge on top of book cover */}
        <motion.div
          initial={{ scale: 0, rotate: 15 }}
          animate={{ scale: 1, rotate: -7 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="absolute -top-10 -right-4 sm:-right-8 z-40 bg-[#1E1815] border-2 border-[#C4A468] rounded-xl p-3.5 sm:p-4 shadow-2xl flex flex-col items-center justify-center text-center w-36 sm:w-40 select-none pointer-events-auto"
        >
          {/* original price crossed with a solid red strike-through */}
          <div className="relative text-[#BEB5AD] text-sm sm:text-base font-extrabold tracking-wider leading-none">
            <span className="relative inline-block px-1">
              37,99$
              <span className="absolute left-0 right-0 top-1/2 h-[2.5px] bg-[#C05638] -translate-y-1/2 rounded" />
            </span>
          </div>

          {/* new price with larger dollar currency sign and more intense yellow with stronger glow */}
          <div className="mt-1 flex items-start justify-center text-[#FFD300] font-serif leading-none filter drop-shadow-[0_3px_12px_rgba(255,211,0,0.5)]">
            <span className="text-3xl sm:text-4xl font-extrabold mt-0.5 mr-1 select-none">$</span>
            <span className="text-4xl sm:text-[2.75rem] font-sans font-black tracking-tight leading-none">17,99</span>
          </div>

          {/* save amount in bold bright red */}
          <div className="mt-2 text-[10px] sm:text-xs font-black tracking-widest text-[#E13B2A] font-sans uppercase leading-none">
            SAVE $20 TODAY
          </div>
        </motion.div>

        {/* Actual 3D Book Object */}
        <motion.div
          className="relative h-full w-full rounded-r-md bg-[#FAF6F0] shadow-2xl transition-all duration-500 [transform-style:preserve-3d] border-l-[6px] border-[#132230]"
          style={{
            transform: "rotateY(-12deg) rotateX(4deg) rotateZ(-2deg)",
            boxShadow: "15px 25px 50px -10px rgba(35, 33, 31, 0.35), -2px 0px 10px rgba(0,0,0,0.1)"
          }}
          whileHover={{
            transform: "rotateY(-5deg) rotateX(2deg) rotateZ(0deg) scale(1.02)",
            boxShadow: "20px 35px 60px -10px rgba(35, 33, 31, 0.45), -2px 0px 10px rgba(0,0,0,0.05)",
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          {/* Subtle textured grid lines overlay for realistic paper finish */}
          <div className="absolute inset-0 rounded-r-md opacity-[0.06] pointer-events-none bg-[radial-gradient(#23211F_1px,transparent_1px)] [background-size:12px_12px] z-20" />

          {/* Premium glossy limelight reflection sheen */}
          <div className="absolute inset-0 rounded-r-md pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-[#FFF5D1]/30 z-[19]" />

          {/* Spine simulation shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/20 via-black/5 to-transparent z-10" />

          {/* FRONT COVER DESIGN (Matching absolute layout of original image) */}
          <div className="absolute inset-0 flex flex-col justify-between rounded-r-md bg-gradient-to-b from-[#FAF7F2] to-[#FAF5EE] p-5 z-0 overflow-hidden border border-stone-200/55">
            
            {/* INSET DOUBLE BORDER */}
            <div className="absolute inset-2 border border-tuscan-gold/30 rounded-md pointer-events-none z-10" />
            <div className="absolute inset-2.5 border border-tuscan-gold/15 rounded-md pointer-events-none z-10" />

            {/* Inset content container */}
            <div className="relative h-full flex flex-col justify-between z-10 py-1 px-1">
              
              {/* TOP LOGO & HEADER */}
              <div className="text-center space-y-2 mt-2">
                {/* SVG Illustration of French/Italian estate castle */}
                <svg className="mx-auto w-16 h-8 text-tuscan-gold" viewBox="0 0 100 40" fill="currentColor">
                  {/* Estate/Villa path lines representing sketch */}
                  <path d="M12 25 L20 18 L28 25 L36 17 L44 25 L52 14 L60 25 L68 18 L76 25 L88 25" stroke="currentColor" strokeWidth="1" fill="none" />
                  <path d="M30 25 L30 35 L40 35 L40 25 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  <path d="M60 25 L60 35 L70 35 L70 25 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  {/* Cypresses trees */}
                  <path d="M8 25 C8 15, 11 15, 11 25" stroke="currentColor" strokeWidth="1" fill="none" />
                  <path d="M90 25 C90 18, 92 18, 92 25" stroke="currentColor" strokeWidth="1" fill="none" />
                  <line x1="2" y1="36" x2="98" y2="36" stroke="currentColor" strokeWidth="1.2" />
                </svg>

                <div className="space-y-0.5">
                  <h4 className="font-serif italic text-base text-tuscan-gold font-medium tracking-wide leading-none">
                    House Hunting
                  </h4>
                  <p className="text-[7.5px] uppercase tracking-[0.35em] text-tuscan-grey font-semibold">
                    WITH BAPTISTE
                  </p>
                </div>

                {/* Star Rating Overlay */}
                <div className="flex justify-center items-center gap-0.5 pt-1 text-tuscan-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2 w-2 fill-current" />
                  ))}
                  <span className="text-[8px] text-tuscan-grey font-bold ml-1">5.0 RATED</span>
                </div>
              </div>

              {/* CENTER TITLE UNIT */}
              <div className="text-center space-y-4 my-auto">
                {/* Gold Diamond ornament */}
                <span className="text-xs text-tuscan-gold tracking-widest block font-bold leading-none select-none">❖</span>
                
                <div className="space-y-1">
                  <h3 className="font-serif italic text-base text-[#1A2E40] tracking-wide leading-none block">
                    The Real Cost of
                  </h3>
                  <h2 className="font-sans font-black text-[#132230] tracking-tight uppercase leading-[0.95] text-[1.95rem] block px-1">
                    Buying a Cheap <br />
                    House
                  </h2>
                  <h3 className="font-serif text-2xl text-tuscan-gold italic font-normal tracking-wide block leading-tight mt-1">
                    in Europe
                  </h3>
                </div>

                {/* Gold Diamond ornament */}
                <span className="text-xs text-tuscan-gold tracking-widest block font-bold leading-none select-none">❖</span>

                {/* Subtitle wording matching the actual cover */}
                <p className="font-serif italic text-[9.5px] leading-relaxed text-tuscan-grey max-w-[240px] mx-auto px-2">
                  A first-year budget guide for foreigners who don’t want nasty surprises after falling in love with a $50k–$100k property
                </p>
              </div>

              {/* LOWER PORTION: ARTWORK & BADGE */}
              <div className="relative mt-auto h-28 w-full">
                
                {/* Visual architectural sketch mockup line drawings */}
                <svg className="absolute bottom-0 left-0 w-36 h-28 text-tuscan-gold/25" viewBox="0 0 100 80" fill="none" stroke="currentColor">
                  {/* Village cottage sketch paths */}
                  <path d="M0 60 L20 40 L45 55 L45 80 M20 40 L60 55 L60 80" strokeWidth="0.8" />
                  <path d="M25 50 L35 52 L35 65 L25 63 Z" strokeWidth="0.5" />
                  <path d="M5 65 L15 67 L15 80 M3 72 L18 72" strokeWidth="0.5" />
                  {/* Rustic gate & stone wall lines */}
                  <line x1="45" y1="70" x2="60" y2="72" strokeWidth="0.8" />
                  <path d="M60 62 C70 64, 85 64, 100 68" strokeWidth="0.5" />
                  {/* Window shutters and stone marks */}
                  <rect x="50" y="58" width="6" height="8" strokeWidth="0.5" />
                </svg>

                {/* Round Stamp Sticker (Badge on right of cover) */}
                <div className="absolute right-0 bottom-4 bg-[#FAF7F1] border-2 border-tuscan-gold/60 p-2.5 rounded-full w-24 h-24 flex flex-col justify-center items-center text-center shadow-lg transform rotate-2 z-20">
                  {/* Rounded dashed inner sub-border */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-tuscan-gold/40" />
                  <span className="text-[7px] uppercase font-bold tracking-wider text-[#132230] font-sans leading-none block">AVOID</span>
                  <span className="text-[7px] uppercase font-bold tracking-widest text-[#132230] font-sans leading-none block mt-0.5">EXPENSIVE</span>
                  <span className="text-[7px] uppercase font-bold tracking-wider text-[#132230] font-sans leading-none block mt-0.5">MISTAKES.</span>
                  
                  <div className="w-8 h-[0.5px] bg-tuscan-gold/45 my-1" />
                  
                  <span className="text-[6px] uppercase font-semibold text-tuscan-rust font-sans leading-none block">BUY SMART.</span>
                  <span className="text-[6px] uppercase font-semibold text-tuscan-rust font-sans leading-none block mt-0.5">LIVE WELL.</span>
                </div>

              </div>

            </div>

            {/* FULL-WIDTH NAVY BOTTOM FOOTER BANNER */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#132230] text-white py-1.5 px-3 flex justify-center items-center select-none text-[8.5px] uppercase tracking-widest font-serif font-medium border-t border-tuscan-gold/30 z-20">
              By Baptiste <span className="mx-1.5 text-tuscan-gold">|</span> househuntingwithbaptiste.com
            </div>

          </div>

        </motion.div>

        {/* Floating guarantee seal on the outer edge for high trust */}
        <div className="absolute -left-6 -bottom-6 z-30 pointer-events-none flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 rounded-full bg-tuscan-white text-tuscan-charcoal py-1.5 px-3.5 shadow-lg border border-tuscan-gold/25 text-[10px] tracking-wide font-medium uppercase">
            <ShieldCheck className="h-4 w-4 text-tuscan-rust" />
            <span>EXPAT BEST-SELLER</span>
          </div>
        </div>

      </div>
    </div>
  );
}
