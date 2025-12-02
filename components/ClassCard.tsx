import React from 'react';
import { Clock, Calendar, CheckCircle2, Users } from 'lucide-react';
import { ClassOffering } from '../types';

interface ClassCardProps {
  offering: ClassOffering;
  onOpen?: (offering: ClassOffering) => void;
}

const ClassCard: React.FC<ClassCardProps> = ({ offering, onOpen }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col h-full relative group">
       {/* Badge */}
      <div className="absolute top-4 right-4 bg-brand-green/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm z-10 flex items-center gap-1 shadow-sm">
        <Users size={12} />
        <span>Max 6 Students</span>
      </div>

      {/* Image */}
      <div className="h-48 overflow-hidden relative bg-brand-light">
        <img 
          src={offering.image} 
          alt={offering.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/hero-1.svg'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-dark mb-2 leading-tight min-h-[3.5rem]">
          {offering.title}
        </h3>

        {/* Meta Data */}
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
            <span>{offering.duration}</span>
          </div>
          {offering.schedule && (
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
              <span>{offering.schedule}</span>
            </div>
          )}
        </div>
        
        {/* Features List */}
        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">What you'll learn</h4>
          <ul className="space-y-1">
            {offering.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 mt-1 text-brand-green/70 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA - Pushed to bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm line-through font-medium">
                ${offering.originalPrice}
              </span>
              <span className="text-2xl font-bold text-brand-green">
                ${offering.discountPrice}
              </span>
            </div>
            <div className="text-xs text-gray-400 font-medium mb-1">
              per person
            </div>
          </div>
          
          <button 
            type="button"
            className="w-full bg-brand-green text-white font-semibold py-3 px-4 rounded transition-all duration-300 hover:bg-[#6a8f3b] hover:shadow-lg focus:ring-2 focus:ring-brand-green/50 focus:outline-none active:scale-[0.98]"
            onClick={() => onOpen?.(offering)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
