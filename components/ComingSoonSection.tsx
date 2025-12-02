import React, { useMemo, useState } from 'react';
import { Shield, Box, Brush, Palette, X, Info } from 'lucide-react';
import { COMING_SOON_CLASSES } from '../constants';

interface InterestMap {
  [id: string]: boolean;
}

const iconFor = (slug: string) => {
  switch (slug) {
    case 'family-crest':
      return <Shield className="w-10 h-10 text-brand-dark/50" aria-hidden />;
    case 'jewelry-box':
      return <Box className="w-10 h-10 text-brand-dark/50" aria-hidden />;
    case 'intro-painting':
      return <Brush className="w-10 h-10 text-brand-dark/50" aria-hidden />;
    case 'advanced-painting':
      return <Palette className="w-10 h-10 text-brand-dark/50" aria-hidden />;
    default:
      return <Info className="w-10 h-10 text-brand-dark/50" aria-hidden />;
  }
};

const ComingSoonSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<InterestMap>({});
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const selected = useMemo(() => COMING_SOON_CLASSES.find(c => c.id === selectedId) || null, [selectedId]);

  const openNotify = (id?: string) => {
    if (id) setSelectedId(id);
    setModalOpen(true);
  };

  const openDetail = (id: string) => {
    setSelectedId(id);
    setDetailOpen(true);
  };

  const closeAll = () => {
    setModalOpen(false);
    setDetailOpen(false);
    setError(null);
  };

  const toggleInterest = (id: string) => {
    setInterests(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email.';
    const anyInterest = Object.values(interests).some(Boolean) || !!selectedId;
    if (!anyInterest) return 'Select at least one class of interest.';
    return null;
  };

  const submitWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const v = validate();
    if (v) { setError(v); return; }

    // Prepare payload for future integration with Mailchimp/ConvertKit/etc.
    const payload = {
      name,
      email,
      interests: Object.entries(interests)
        .filter(([, on]) => on)
        .map(([id]) => id)
        .concat(selectedId && !(interests[selectedId]) ? [selectedId] : [])
    };

    try {
      // TODO: integrate with mailing service. Placeholder local success.
      console.log('Waitlist submission', payload);
      setSuccess('Thanks! You\'re on the waitlist. We\'ll notify you when enrollment opens.');
      setName('');
      setEmail('');
      setInterests({});
      setSelectedId(null);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="relative mt-20 md:mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-light" aria-hidden></div>
      <div className="relative container mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[36px] leading-tight font-bold text-brand-dark mb-3">Upcoming Classes</h2>
          <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full" />
          <p className="mt-5 text-brand-dark/80 max-w-3xl mx-auto text-[16px]">
            Expand your stained glass mastery with these advanced courses launching soon. Click a card to learn more or hit “Notify Me” to join the waitlist for that class.
          </p>
        </div>

        {/* Grid of Coming Soon Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-6 md:gap-8 place-items-center">
          {COMING_SOON_CLASSES.map((c) => (
            <div key={c.id} className="w-full group relative bg-white/70 rounded-xl border-2 border-dashed border-gray-300 shadow-sm overflow-hidden hover:shadow-md transition">
              {/* Watermark icon */}
              <div className="absolute right-3 top-3 opacity-50">{iconFor(c.slug)}</div>

              {/* Image placeholder area - using muted styling */}
              <div className="relative h-40 bg-brand-offwhite">
                {c.image && (
                  <img src={c.image} alt="" className="w-full h-full object-cover grayscale contrast-90 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300" loading="lazy" />
                )}
                {/* Ribbon badge */}
                <div className="absolute left-0 top-3">
                  <div className="bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-r-full shadow">{c.badge}</div>
                </div>

                {/* Hover Learn More overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button onClick={() => openDetail(c.id)} className="bg-white/90 text-brand-dark px-4 py-2 rounded-lg border border-gray-200 shadow font-semibold">Learn More</button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[22px] font-bold text-brand-dark">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/80 leading-relaxed">{c.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand-dark/80">
                  {c.duration && (
                    <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1"><span className="font-semibold">Duration:</span> {c.duration}</span>
                  )}
                  <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1"><span className="font-semibold">Price:</span> TBA</span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {c.id === 'more-classes' && c.suggestUrl ? (
                    <a href={c.suggestUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-green text-white font-semibold px-4 py-2 rounded-lg shadow hover:brightness-110 transition">Suggest a Class</a>
                  ) : (
                    <button onClick={() => openNotify(c.id)} className="bg-brand-green text-white font-semibold px-4 py-2 rounded-lg shadow hover:brightness-110 transition">Notify Me</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {detailOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overlay-fade">
          <div className="absolute inset-0 bg-black/40" onClick={closeAll} />
          <div className="relative bg-white w-[92vw] max-w-2xl rounded-xl shadow-xl border border-gray-200 panel-zoom">
            <button onClick={closeAll} className="absolute right-3 top-3 p-2 text-brand-dark/60 hover:text-brand-dark">
              <X />
            </button>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">{iconFor(selected.slug)}</div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-full">{selected.badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark">{selected.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-brand-dark/80 leading-relaxed">{selected.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {selected.duration && <span className="bg-brand-light/60 text-brand-dark px-3 py-1 rounded-full">{selected.duration}</span>}
                <span className="bg-brand-light/60 text-brand-dark px-3 py-1 rounded-full">Price: TBA</span>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => { setDetailOpen(false); setModalOpen(true); }} className="bg-brand-green text-white font-semibold px-5 py-2 rounded-lg shadow hover:brightness-110">Join the Waitlist</button>
                <button onClick={closeAll} className="px-5 py-2 rounded-lg border border-gray-300 text-brand-dark">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Waitlist Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overlay-fade">
          <div className="absolute inset-0 bg-black/40" onClick={closeAll} />
          <div className="relative bg-white w-[92vw] max-w-2xl rounded-xl shadow-xl border border-gray-200 panel-zoom">
            <button onClick={closeAll} className="absolute right-3 top-3 p-2 text-brand-dark/60 hover:text-brand-dark">
              <X />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-brand-dark">Join the Waitlist</h3>
              <p className="mt-2 text-brand-dark/80 text-sm">Select the classes you\'re interested in and we\'ll email you when enrollment opens.</p>
              <form onSubmit={submitWaitlist} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-brand-dark/80 mb-1">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-green" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-brand-dark/80 mb-1">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-green" placeholder="jane@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMING_SOON_CLASSES.map((c) => (
                    <label key={c.id} className="flex items-center gap-2 text-sm text-brand-dark/90 select-none">
                      <input type="checkbox" checked={!!interests[c.id] || selectedId === c.id} onChange={() => toggleInterest(c.id)} className="text-brand-green focus:ring-brand-green" />
                      <span>{c.title}</span>
                    </label>
                  ))}
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && <p className="text-sm text-emerald-700">{success}</p>}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button type="button" onClick={closeAll} className="px-4 py-2 rounded-lg border border-gray-300 text-brand-dark">Cancel</button>
                  <button type="submit" className="bg-brand-green text-white font-semibold px-5 py-2 rounded-lg shadow hover:brightness-110">Join the Waitlist</button>
                </div>
                <p className="text-xs text-brand-dark/60">We respect your inbox. Notifications only, no spam.</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ComingSoonSection;
