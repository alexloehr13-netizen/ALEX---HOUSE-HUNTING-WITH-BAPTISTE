/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-[66px] z-[90] w-full border-b border-tuscan-gold/15 bg-tuscan-ivory/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: House Hunting with Baptiste logo */}
        <div id="header-logo" className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-tuscan-rust" />
          <span className="font-serif text-lg tracking-tight select-none sm:text-xl">
            House Hunting <span className="font-sans text-xs uppercase tracking-widest text-tuscan-gold font-semibold ml-1">with Baptiste</span>
          </span>
        </div>
        
        {/* Right: Badge */}
        <div id="header-badge" className="hidden sm:block">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-tuscan-gold/40 bg-tuscan-white px-3.5 py-1 text-xs font-medium text-tuscan-charcoal tracking-wide shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tuscan-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tuscan-rust"></span>
            </span>
            <span>Join <strong className="font-semibold text-tuscan-rust">2,500+ Readers</strong> Preparing for Their Dream</span>
          </div>
        </div>
        
        {/* Small badge for mobile */}
        <div className="block sm:hidden flex items-center gap-1 text-[11px] font-medium text-tuscan-rust uppercase tracking-wider bg-tuscan-gold/10 px-2.5 py-0.5 rounded-full">
          2,500+ Saved
        </div>
      </div>
    </header>
  );
}
