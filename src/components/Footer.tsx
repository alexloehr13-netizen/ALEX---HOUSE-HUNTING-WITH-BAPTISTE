/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Sparkles, ShieldCheck } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "../types";

export default function Footer() {
  const handleCheckout = () => {
    window.open(HOTMART_CHECKOUT_URL, "_blank");
  };

  return (
    <footer className="bg-tuscan-charcoal text-tuscan-white border-t border-tuscan-gold/25">
      {/* Centered Final Call to Action Block */}
      <div className="mx-auto max-w-4xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        
        <div className="rounded-lg bg-[linear-gradient(135deg,rgba(192,86,56,0.15)_0%,rgba(196,164,104,0.15)_100%)] border border-tuscan-gold/30 p-8 text-center space-y-6 md:p-12">
          
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-tuscan-gold/15 text-tuscan-gold">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
              Ready to Buy Your Expat Dream Cottage Safely?
            </h3>
            <p className="text-sm text-[#DFCDAB] max-w-lg mx-auto leading-relaxed">
              Don't let unexpected notary bills or strict historical zones turn your European adventure into a financial disaster. Educate yourself today.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={handleCheckout}
              className="group relative flex w-full max-w-md items-center justify-center gap-2 rounded bg-emerald-600 px-10 py-4.5 text-base font-bold text-tuscan-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-[1.03] cursor-pointer"
            >
              <span>BUY NOW (Just $17,99)</span>
            </button>
            
            <p className="text-xs text-[#BEB5AD]/85 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-tuscan-gold" />
              <span>Secure checkout handled by Hotmart. Instant PDF Delivery.</span>
            </p>
          </div>

        </div>

        {/* Bottom Logo & Context Details */}
        <div className="mt-16 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <BookOpen className="h-5 w-5 text-tuscan-rust" />
            <span className="font-serif text-lg tracking-tight select-none">
              House Hunting <span className="font-sans text-xs uppercase tracking-widest text-[#C4A468] font-bold ml-1">with Baptiste</span>
            </span>
          </div>

          {/* Policy Links Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#BEB5AD]/80 font-medium">
            <a href="#pricing" className="hover:text-tuscan-gold transition-colors">Order Page</a>
            <span>•</span>
            <button onClick={() => alert("Privacy Policy summary: All purchases are secured via Hotmart and no consumer personal data is sold.")} className="hover:text-tuscan-gold transition-colors focus:outline-hidden">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => alert("Expat Return Guarantee terms: Customers are protected by a full 7-day refund guarantee from purchase date.")} className="hover:text-tuscan-gold transition-colors focus:outline-hidden">Refund Policy</button>
          </div>
        </div>

        {/* Informative Disclaimer and Copyright */}
        <div className="mt-10 border-t border-white/5 pt-6 text-[10px] text-[#A6998C] leading-relaxed space-y-4">
          <p className="text-center md:text-left">
            Disclaimer: The information, spreadsheets, checklists, and directory content inside "The Real Cost of Buying a Cheap House in Europe" eBook represent compiled boots-on-the-ground research for illustrative expat purposes. We are not certified financial consultants, registered lawyers, or official notary officers. Expat buyers must always complete due diligence via physical inspections and certified local representation before binding real estate exchanges.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-t border-white/5 pt-4 text-[11px]">
            <span>© {new Date().getFullYear()} House Hunting with Baptiste. All rights reserved.</span>
            <span className="text-tuscan-gold-light opacity-80 uppercase tracking-widest text-[9px] font-bold">Tuscan Editorial Edition v1.2</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
