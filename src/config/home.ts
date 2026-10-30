export const hero = {
  greeting: "Hi, I'm Maria.",
  title: 'I make things people use,',
  highlight: 'and things they didn’t know they needed.',
  text: 'I’m a Product Designer based in Montreal. Outside client work, I run a sticker shop, and a toll-free rant line.',
  primary: { label: 'See selected work', href: '/#work' },
  secondary: { label: 'About me', href: '/about/' },
  facts: [
    { value: '20+', label: 'years in digital product design' },
    { value: '100+', label: 'products shipped' },
    { value: '∞', label: 'side quest ideas and counting' },
  ],
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Projects',
  text: 'A curated selection of projects demonstrating how I bridge the gap between business objectives and user experience across diverse industries.',
  /** How many featured case studies the homepage shows. */
  limit: 3,
};

export const work2 = {
  eyebrow: 'Selected work',
  title: 'Projects',
  text: 'The work I get paid for and the work I love doing.',
  /** How many featured case studies the homepage shows. */
  limit: 2,
};

export const services = {
  eyebrow: 'What I do',
  title: 'From fuzzy brief to shipped product',
  items: [
    {
      icon: 'lightbulb',
      title: 'Product strategy',
      text: 'Framing the real problem, mapping what users need first, and deciding what not to build.',
    },
    {
      icon: 'workflow',
      title: 'UX and flows',
      text: 'Research, journeys, and information architecture for workflows that carry real weight.',
    },
    {
      icon: 'layers',
      title: 'Design systems',
      text: 'Tokens, components, and documentation that keep a growing product coherent.',
    },
    {
      icon: 'pen-tool',
      title: 'Interface craft',
      text: 'High-fidelity UI, prototypes, and handoff details that survive contact with engineering.',
    },
  ],
};

export const testimonials = {
  eyebrow: 'Kind words',
  title: 'What teams say',
  items: [
    {
      quote:
        'Maria took a dashboard our users tolerated and made it the part of the product they open first. She asked the questions nobody else on the team was asking.',
      name: 'Daniel Brooks',
      role: 'Head of Product, Nextpoint',
    },
    {
      quote:
        'She has a rare way of making complicated systems feel calm. Our caseworkers stopped asking for training after the redesign shipped.',
      name: 'Priya Shah',
      role: 'Director of Operations, b.combs',
    },
    {
      quote:
        'Equal parts strategist and craftsperson. Every review with Maria left us with fewer screens and a clearer product.',
      name: 'Lukas Weber',
      role: 'Founder, Nestara',
    },
  ],
};

export const closing = {
  eyebrow: "Let's work together",
  title: 'Let’s build something',
  highlight: "meaningful.",
  text: 'I’m based in Montreal and would love to hear from you. Say hi, bonjour, or hola!',
};
