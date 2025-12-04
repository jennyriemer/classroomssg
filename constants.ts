import { ClassOffering, ComingSoonClass } from './types';

export const CLASS_OFFERINGS: ClassOffering[] = [
  {
    id: 'intro-suncatcher',
    title: 'Introduction to Stained Glass - Suncatcher Class',
    image: '/images/suncatcher-1.jpg',
    duration: '4-hour single session',
    schedule: 'Every other Saturday starting Jan 17, 2026',
    description:
      'Perfect for beginners. Learn the copper foil method while creating a beautiful light-catching piece.',
    originalPrice: 195,
    discountPrice: 145,
    features: ['Cutting glass', 'Foiling techniques', 'Soldering', 'Polishing & finishing'],

    // Detail modal fields
    gallery: [
      '/images/suncatcher-1.jpg',
      '/images/suncatcher-2.jpg',
      '/images/suncatcher-3.jpg'
    ],
    projectDescription: "You'll create a beautiful suncatcher (approximately 6-8 inches) in a design of your choice. Select from our curated pattern library featuring geometric designs, nature motifs, and classic stained glass patterns. You'll choose your own glass colors to make your piece truly unique.",
    courseStructure: [
      'Single 4-hour session'
    ],
    meetingPoint: '7075 S Alton Way, Centennial, Colorado 80112',
    cancellations:
      'Full refund for cancellations 7+ days before class. Partial refund for cancellations 48+ hours before class.',
    ageRequirement: '16+',
    groupSize: 'Maximum 6 students',
    accessibility: 'Wheelchair accessible studio',
    activityDetails: [
      'Glass Cutting: Learn proper scoring techniques and how to safely cut glass into precise shapes',
      'Pattern Work: Understand how to work from a pattern and select complementary glass colors',
      'Copper Foiling: Master the copper foil method, wrapping each glass piece with precision',
      'Soldering: Gain confidence with the soldering iron, creating strong, beautiful seams',
      'Finishing: Learn polishing and cleaning techniques for a professional result'
    ],
    additionalInfo: [
      'Please Note: All classes require hands-on participation. Students should be prepared to stand for portions of the class.',
      'Our studio is climate-controlled and well-ventilated for safety during soldering.',
      'Projects require the full session time to complete. Please arrive on time to maximize your learning experience.',
      'Each student will complete their own project to take home.'
    ],
    faqs: [
      { q: 'Do I need any prior experience?', a: 'Absolutely not! This class is designed for complete beginners. Our experienced instructors will guide you through each step.' },
      { q: 'What will I take home?', a: "You'll take home your completed stained glass suncatcher (6-8 inches) and the skills to continue your craft." },
      { q: 'Is parking available?', a: 'Yes, free parking is available at our Centennial studio location.' }
    ],
    availability: { type: 'weekly', weekday: 6, startISO: '2026-01-17', intervalWeeks: 2 },
    timeSlots: ['10:00 AM - 2:00 PM'],
    stripePriceId: 'price_REPLACE_WITH_YOUR_SUNCATCHER_PRICE_ID',
    paymentLinkUrl: 'https://buy.stripe.com/5kQeV5dv87ki0Imeizgfu02'
  },
  {
    id: 'intro-leaded',
    title: 'Introduction to Leaded Glass - Geometrics',
    image: '/images/1.jpg',
    duration: 'Single session',
    projectDescription: "You'll create a geometric leaded glass panel (approximately 8x10 inches) featuring clean lines and bold shapes. Geometric patterns are ideal for learning lead came techniques, as they showcase the beauty of the lead lines as part of the design.",
    courseStructure: [
      'Single 4-hour session'
    ],
    schedule: 'Every other Saturday starting Jan 24, 2026',
    description: 'Dive into traditional techniques used in cathedral windows and historic homes.',
    originalPrice: 225,
    discountPrice: 175,
    features: ['Traditional lead came', 'Geometric patterning', 'Cementing', 'Structural integrity'],

    gallery: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    meetingPoint: '7075 S Alton Way, Centennial, Colorado 80112',
    cancellations:
      'Full refund for cancellations 7+ days before class. Partial refund for cancellations 48+ hours before class.',
    ageRequirement: '16+',
    groupSize: 'Maximum 6 students',
    accessibility: 'Wheelchair accessible studio',
    activityDetails: [
      'Lead Came Assembly: Learn how to cut, fit, and stretch lead came for strong panels',
      'Glass Selection: Choose appropriate glass for traditional geometric patterns',
      'Cementing: Weatherproof and strengthen your panel with traditional cement',
      'Finishing: Solder joints and metal finishing for durability'
    ],
    additionalInfo: [
      'Please Note: All classes require hands-on participation. Students should be prepared to stand for portions of the class.',
      'Our studio is climate-controlled and well-ventilated for safety during soldering.'
    ],
    faqs: [
      { q: 'Do I need any prior experience?', a: 'No prior experience required, but comfort with hand tools is helpful.' },
      { q: 'What will I take home?', a: 'A leaded glass geometric panel and knowledge of traditional techniques.' }
    ],
    availability: { type: 'weekly', weekday: 6, startISO: '2026-01-24', intervalWeeks: 2 },
    timeSlots: ['10:00 AM - 2:00 PM'],
    paymentLinkUrl: 'https://buy.stripe.com/6oU3cn76K1ZY62G0rJgfu03'
  },
  {
    id: 'level2-foil',
    title: 'Level 2 Foil Techniques - 50 Piece Stained Glass',
    image: '/images/glass1.jpg',
    duration: '4-week course (1 evening/week)',
    description: 'Expand your skills with a complex, detailed project designed to challenge your precision.',
    originalPrice: 495,
    discountPrice: 395,
    features: ['Advanced foiling', 'Complex pattern cutting', '50-piece project', 'Reinforcement'],
    gallery: ['/images/glass1.jpg', '/images/glass2.jpg', '/images/glass3.jpg'],
    activityDetails: [
      'Ready to advance your copper foil skills? This intermediate course challenges you to create a complex 50-piece stained glass panel while refining your technique and building your artistic confidence.',
      'Advanced Glass Cutting: Master complex curves, inside cuts, and precision scoring for intricate patterns',
      'Color Theory: Learn to select and combine glass colors for visual impact and harmony',
      'Advanced Foiling Techniques: Perfect your foiling skills with consistent, professional-quality edges',
      'Complex Pattern Assembly: Manage large multi-piece projects from layout to completion',
      'Soldering Mastery: Develop smooth, even solder beads and learn decorative bead techniques',
      'Finishing and Framing: Professional cleaning, polishing, and optional framing techniques'
    ],
    projectDescription: 'Choose from our curated collection of intermediate patterns featuring 45-55 glass pieces. Options include florals, Art Deco designs, nature scenes, and abstract compositions. Your finished panel will measure approximately 12x16 inches—a substantial piece worthy of display.',
    courseStructure: [
      'Week 1: Pattern selection, glass selection, cutting complex pieces',
      'Week 2: Continue cutting, begin foiling, layout and fitting',
      'Week 3: Complete foiling, soldering front side, technique refinement',
      'Week 4: Solder back side, finish edges, clean and polish, display options'
    ],
    faqs: [
      { q: 'Do I need any prior experience?', a: 'Yes, this is an intermediate-level course. Students should have completed an introductory foiling class or have basic copper foil experience.' }
    ],
    schedule: 'Every Wednesday for 4 weeks from 5–9 PM starting Feb 18, 2026',
    availability: { type: 'dates', datesISO: ['2026-02-18'] },
    timeSlots: ['5:00 PM - 9:00 PM'],
    paymentLinkUrl: 'https://buy.stripe.com/4gM5kv9eS8om62G0rJgfu04'
  },
  {
    id: 'level2-art-nouveau',
    title: 'Level 2 Leaded Glass - Art Nouveau',
    image: '/images/art.jpg',
    duration: '4-week course (1 evening/week)',
    description: 'Master the elegant curves and organic lines of the Art Nouveau style.',
    originalPrice: 495,
    discountPrice: 395,
    features: ['Curved lead cutting', 'Organic design flow', 'Advanced soldering', 'Framing techniques'],
    gallery: ['/images/art.jpg', '/images/art2.jpg', '/images/art3.jpg'],
    activityDetails: [
      'Embrace the flowing, organic beauty of Art Nouveau stained glass. This intermediate course teaches you to create the graceful curves and botanical motifs characteristic of this iconic artistic movement.',
      'Cutting Flowing Curves: Develop skills for cutting S-curves, flowing lines, and organic shapes in glass',
      'Lead Came Selection: Learn to choose appropriate came profiles for different design elements',
      'Art Nouveau Design Principles: Understand the aesthetic of flowing, natural forms and asymmetrical balance',
      'Complex Lead Work: Master techniques for bending and shaping lead came around curves',
      'Advanced Soldering: Create invisible joints and smooth connections in curved lead work',
      'Artistic Finishing: Professional cementing, cleaning, and presentation techniques'
    ],
    projectDescription: 'Create an Art Nouveau inspired leaded glass panel (approximately 12x16 inches) featuring flowing botanical designs, graceful curves, or stylized natural motifs. Choose from patterns inspired by masters like Louis Comfort Tiffany and the Art Nouveau movement.',
    courseStructure: [
      'Week 1: Art Nouveau design principles, pattern selection, glass selection, begin cutting curved pieces',
      'Week 2: Master curve cutting, lead came preparation, begin panel assembly',
      'Week 3: Continue leading, fitting, and shaping; soldering techniques for curves',
      'Week 4: Complete soldering, cementing, weatherproofing, finishing, and display'
    ],
    faqs: [
      { q: 'Do I need any prior experience?', a: 'Yes, this is an intermediate-level course. Students should have completed an introductory leaded glass class or have basic lead came experience.' }
    ],
    schedule: 'Every Tuesday for 4 weeks from 5–9 PM starting Feb 17, 2026',
    availability: { type: 'dates', datesISO: ['2026-02-17'] },
    timeSlots: ['5:00 PM - 9:00 PM'],
    paymentLinkUrl: 'https://buy.stripe.com/4gMaEP62G6ge4YC2zRgfu05'
  }
];

export const COMING_SOON_CLASSES: ComingSoonClass[] = [
  {
    id: 'family-crest',
    slug: 'family-crest',
    title: 'Intermediate Techniques - Family Crest',
    badge: 'Coming Soon - Spring 2026',
    description:
      'Design and create your own family crest or heraldic design using either copper foil or lead came techniques. Perfect for intermediate students ready to tackle meaningful, personalized projects.',
    duration: '4-week course',
    technique: 'Foil or Lead (student choice)',
    image: '/images/1.jpg'
  },
  {
    id: 'jewelry-box',
    slug: 'jewelry-box',
    title: 'Advanced Artistry - Family Tree Jewelry Box',
    badge: 'Coming Soon - Spring 2026',
    description:
      'Create an heirloom-quality jewelry box featuring a stained glass family tree design on the lid. Combine woodworking with advanced glass techniques to craft a treasured keepsake.',
    duration: '6-week course',
    technique: 'Advanced foil with mixed media',
    image: '/images/2.jpg'
  },
  {
    id: 'intro-painting',
    slug: 'intro-painting',
    title: 'Introduction to Glass Painting',
    badge: 'Coming Soon - Summer 2026',
    description:
      'Discover the art of painting on glass with traditional kiln-fired techniques. Learn to add details, shading, and artistic elements to your stained glass pieces using specialized glass paints and firing methods.',
    duration: 'Single 4-hour session',
    technique: 'Painting & firing',
    image: '/images/3.jpg'
  },
  {
    id: 'advanced-painting',
    slug: 'advanced-painting',
    title: 'Advanced Glass Painting',
    badge: 'Coming Soon - Summer 2026',
    description:
      'Master advanced glass painting techniques including tracing, matting, staining, and enameling. Create museum-quality painted glass panels with depth, dimension, and artistic sophistication.',
    duration: '4-week course',
    technique: 'Advanced painting & multiple firings',
    image: '/images/suncatcher-2.jpg'
  }
];
