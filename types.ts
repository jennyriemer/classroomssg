export interface ClassFAQ {
  q: string;
  a: string;
}

export interface ComingSoonClass {
  id: string;
  slug: string; // used for icon selection
  title: string;
  badge: string; // e.g., "Coming Soon - Spring 2026"
  description: string;
  duration?: string;
  technique?: string;
  image?: string;
  suggestUrl?: string; // optional external link for suggestions/feedback
}

export type AvailabilityRule =
  | { type: 'weekly'; weekday: number; startISO: string; intervalWeeks?: number }
  | { type: 'dates'; datesISO: string[] };

export interface ClassOffering {
  id: string;
  title: string;
  image: string;
  duration: string;
  schedule?: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  features: string[];
  // Detail modal additions
  gallery?: string[];
  activityDetails?: string[];
  projectDescription?: string; // "Your Project" accordion content
  courseStructure?: string[];  // "Course Structure" accordion bullets
  meetingPoint?: string;
  ageRequirement?: string;
  groupSize?: string;
  accessibility?: string;
  cancellations?: string;
  additionalInfo?: string[];
  faqs?: ClassFAQ[];
  availability?: AvailabilityRule;
  timeSlots?: string[]; // e.g., ['9:00 AM - 1:00 PM']
  stripePriceId?: string; // Stripe Price ID for Checkout
  paymentLinkUrl?: string; // Stripe Payment Link alternative
}
