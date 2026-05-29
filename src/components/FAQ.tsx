/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section className="bg-tuscan-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold text-tuscan-rust bg-tuscan-rust/10 px-3 py-1 rounded">
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl font-bold text-tuscan-charcoal">
            Your Questions, <span className="italic text-tuscan-rust">Answered Transparently.</span>
          </h2>
          <p className="text-sm text-tuscan-grey">
            Still unsure if this is the right resource for your European adventures? Let's dive into some common inquiries our community has.
          </p>
        </div>

        {/* Vertical Accordion Stack */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;

            return (
              <div 
                key={faq.id}
                className="rounded-lg border border-tuscan-gold/20 bg-tuscan-white overflow-hidden transition-all duration-300 shadow-xs hover:border-tuscan-gold/50"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-hidden"
                >
                  <span className="flex items-center gap-3 font-serif text-base font-semibold text-tuscan-charcoal pr-4 sm:text-lg">
                    <HelpCircle className="h-5 w-5 text-tuscan-rust shrink-0" />
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tuscan-ivory text-tuscan-rust transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>

                {/* Accordion Content Panel (with smooth AnimatePresence height wrapper) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-tuscan-gold/15 bg-tuscan-ivory/20 p-6 text-sm leading-relaxed text-tuscan-grey">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
