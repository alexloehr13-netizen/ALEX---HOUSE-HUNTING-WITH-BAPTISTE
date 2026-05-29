/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/YOUR_PRODUCT_ID_HERE";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PainPoint {
  id: string;
  numberLabel: string;
  title: string;
  description: string;
}

export interface BlueprintRow {
  id: string;
  volume: string;
  title: string;
  subtitle: string;
  description: string;
  checklist: string[];
  isLeft: boolean;
  topicIconName: "notary" | "contractor";
}

export interface ValueStackItem {
  id: string;
  title: string;
  value: number;
  badge?: string;
  description: string;
}
