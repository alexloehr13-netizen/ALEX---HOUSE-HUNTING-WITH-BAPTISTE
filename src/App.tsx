/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import AboutAuthor from "./components/AboutAuthor";
import SecondaryCTA from "./components/SecondaryCTA";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

export default function App() {
  return (
    <div className="min-h-screen pt-[66px] bg-tuscan-ivory selection:bg-tuscan-rust/10 selection:text-tuscan-rust text-tuscan-charcoal font-sans antialiased overflow-x-hidden">
      {/* Countdown Promo Banner */}
      <PromoBanner />

      <main>
        {/* SECTION B: Hook & Curiosity Hero Section */}
        <Hero />

        {/* SECTION F: About the Author (Baptiste Authority & Trust) */}
        <AboutAuthor />

        {/* SECONDARY CALL TO ACTION: Added below Baptiste's Author description */}
        <SecondaryCTA />

        {/* SECTION G: The Guarantee (Risk Reversal) */}
        <Guarantee />

        {/* SECTION H: FAQ Section (Interactive Accordion) */}
        <FAQ />
      </main>

      {/* SECTION I: Final Call to Action & Copyright Footer */}
      <Footer />
    </div>
  );
}

