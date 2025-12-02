import React, { useEffect, useState } from 'react';
import { X, MapPin, Clock, Users, User, Info } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { ClassOffering } from '../types';
import ImageGallery from './ImageGallery';
import BookingCalendar from './BookingCalendar';
import AccordionSection from './AccordionSection';

interface ClassDetailModalProps {
  open: boolean;
  offering: ClassOffering | null;
  onClose: () => void;
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string);

const ClassDetailModal: React.FC<ClassDetailModalProps> = ({ open, offering, onClose }) => {
  const [selectedDateISO, setSelectedDateISO] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !offering) return null;

  const {
    title,
    duration,
    gallery = [],
    meetingPoint = '7075 S Alton Way, Centennial, Colorado 80112',
    cancellations = 'Full refund for cancellations 7+ days before class. Partial refund for cancellations 48+ hours before class.',
    ageRequirement = '16+',
    groupSize = 'Maximum 6 students',
    accessibility = 'Wheelchair accessible studio',
    activityDetails = [],
    projectDescription = '',
    courseStructure = [],
    additionalInfo = [],
    faqs = [
      { q: 'Do I need any prior experience?', a: 'Varies by class - see details above.' },
      { q: 'What will I take home?', a: "You'll take home your completed stained glass project and the skills to continue your craft." },
      { q: 'What if I need to cancel?', a: 'Full refund for cancellations 7+ days before class. Partial refund for cancellations 48+ hours before class.' },
      { q: 'Is parking available?', a: 'Yes, free parking is available at our Centennial studio location.' },
    ],
    availability,
    timeSlots,
  } = offering;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 overlay-fade" 
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute inset-4 md:inset-8 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 panel-zoom modal-pad">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-brand-light/60">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark">{title}</h2>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded hover:bg-white">
            <X className="w-6 h-6 text-brand-dark" />
          </button>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 h-[calc(100%-64px)] overflow-auto">
          {/* Left column: Gallery */}
          <div className="lg:col-span-4">
            <ImageGallery images={gallery} />
          </div>

          {/* Center column: Accordions */}
          <div className="lg:col-span-5">
            <AccordionSection title="Overview" defaultOpen>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2"><Clock className="w-4 h-4 text-brand-green mt-0.5" /><span><span className="font-semibold">Duration:</span> {duration}</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-brand-green mt-0.5" /><span><span className="font-semibold">Meeting Point:</span> {meetingPoint}</span></div>
                <div className="flex items-start gap-2"><Users className="w-4 h-4 text-brand-green mt-0.5" /><span><span className="font-semibold">Group Size:</span> {groupSize}</span></div>
                <div className="flex items-start gap-2"><User className="w-4 h-4 text-brand-green mt-0.5" /><span><span className="font-semibold">Age:</span> {ageRequirement}</span></div>
                <div className="flex items-start gap-2 sm:col-span-2"><Info className="w-4 h-4 text-brand-green mt-0.5" /><span><span className="font-semibold">Accessibility:</span> {accessibility}</span></div>
                <div className="flex items-start gap-2 sm:col-span-2"><Info className="w-4 h-4 text-brand-green mt-0.5" /><span><span className="font-semibold">Cancellations:</span> {cancellations}</span></div>
              </div>
            </AccordionSection>

            <AccordionSection title="Activity Details">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {activityDetails.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
                {activityDetails.length === 0 && (
                  <li>Details coming soon.</li>
                )}
              </ul>
            </AccordionSection>

            <AccordionSection title="Your Project">
              {projectDescription ? (
                <p className="text-sm leading-relaxed">{projectDescription}</p>
              ) : (
                <p className="text-sm">Details coming soon.</p>
              )}
            </AccordionSection>

            <AccordionSection title="Course Structure">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {courseStructure && courseStructure.length > 0 ? (
                  courseStructure.map((t, i) => (<li key={i}>{t}</li>))
                ) : (
                  <li>Details coming soon.</li>
                )}
              </ul>
            </AccordionSection>

            <AccordionSection title="What to Bring">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Bring your readers or prescription glasses if needed - you'll be glad you did!</li>
                <li>All tools, materials, and supplies needed for your project are provided. You're welcome to bring water or your own drinks or snacks.</li>
              </ul>
            </AccordionSection>

            <AccordionSection title="Additional Information">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {additionalInfo.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
                {additionalInfo.length === 0 && (
                  <>
                    <li>Please Note: All classes require hands-on participation. Students should be prepared to stand for portions of the class.</li>
                    <li>Our studio is climate-controlled and well-ventilated for safety during soldering.</li>
                  </>
                )}
              </ul>
            </AccordionSection>

            <AccordionSection title="FAQs">
              <div className="space-y-3 text-sm">
                {faqs.map((f, i) => (
                  <div key={i}>
                    <div className="font-semibold text-brand-dark">Q: {f.q}</div>
                    <div className="text-gray-700">A: {f.a}</div>
                  </div>
                ))}
              </div>
            </AccordionSection>

            <AccordionSection title="Cancellation Policy">
              <p className="text-sm">{cancellations} Please contact us at <a className="text-brand-green underline" href="mailto:contact@scottishstainedglass.com">contact@scottishstainedglass.com</a> or call <a className="text-brand-green" href="tel:+18668465758">1-866-846-5758</a> to process cancellations.</p>
            </AccordionSection>
          </div>

          {/* Right column: Calendar */}
          <div className="lg:col-span-3">
            <BookingCalendar
              availability={availability}
              timeSlots={timeSlots}
              initialYear={2025}
              initialMonth={0}
              onSelect={(iso) => setSelectedDateISO(iso)}
            />

            <div className="mt-4">
              <button
                type="button"
                className={`w-full py-3 px-4 rounded font-semibold text-white transition-colors ${
                  selectedDateISO ? 'bg-[#81aa4c] hover:bg-[#6a8f3b]' : 'bg-gray-300 cursor-not-allowed'
                }`}
                onClick={() => {
                  if (!selectedDateISO) return;
                  // Prefer Payment Link if provided
                  if (offering?.paymentLinkUrl) {
                    const u = new URL(offering.paymentLinkUrl);
                    // Attach a reference to identify class/date in Stripe dashboard
                    u.searchParams.set('client_reference_id', `${offering.id}:${selectedDateISO}`);
                    window.location.href = u.toString();
                    return;
                  }
                  const priceId = offering?.stripePriceId;
                  if (!priceId) {
                    alert('Stripe not configured yet. Provide a Payment Link or a Stripe Price ID.');
                    return;
                  }
                  if (!priceId.startsWith('price_')) {
                    alert('A Stripe Price ID is required (starts with "price_"). You provided a product ID.');
                    return;
                  }
                  const origin = window.location.origin;
                  stripePromise.then(async (stripe) => {
                    if (!stripe) {
                      alert('Stripe failed to load.');
                      return;
                    }
                    const result = await (stripe as any).redirectToCheckout({
                      lineItems: [{ price: priceId, quantity: 1 }],
                      mode: 'payment',
                      successUrl: `${origin}/success.html?class=${encodeURIComponent(offering.id)}&date=${encodeURIComponent(selectedDateISO)}`,
                      cancelUrl: `${origin}/cancel.html`,
                    });
                    if (result.error) {
                      alert(result.error.message || 'Unable to redirect to Stripe Checkout.');
                    }
                  });
                }}
                disabled={!selectedDateISO}
              >
                Enroll Now
              </button>
              {!selectedDateISO && (
                <p className="text-xs text-gray-500 mt-2">Select a date to enable checkout.</p>
              )}
              {!offering?.stripePriceId && !offering?.paymentLinkUrl && (
                <p className="text-xs text-amber-600 mt-2">Stripe not connected: add stripePriceId or paymentLinkUrl in constants.ts when ready.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailModal;
