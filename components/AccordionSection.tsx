import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between py-3 text-left font-semibold transition-colors ${
          open ? 'text-brand-green' : 'text-brand-dark'
        }`}
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180 text-brand-green' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300"
        style={{ maxHeight: open ? 800 : 0 }}
      >
        <div className="pb-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
