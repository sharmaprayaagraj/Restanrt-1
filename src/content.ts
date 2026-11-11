export const brand = {
  name: 'Resnart',
  tagline: 'Fucking good food, seriously',
}

export const nav = {
  links: [
    { label: 'The food', href: '#the-food' },
    { label: 'The story', href: '#the-story' },
    { label: 'What people say', href: '#what-people-say' },
    { label: 'Come through', href: '#come-through' },
  ],
  signIn: { label: 'Find us', href: '#' },
  cta: { label: 'Reservations', href: '#come-through' },
}

export const hero = {
  badge: 'Open tonight, then gone',
  title: ['Come hungry.', 'Fucking seriously good.'],
  highlight: 'fucking seriously good',
  description:
    'Resnart is not trying to be everything. It is fire on a plate, done right, when you want it. Book a table or see why people lose their minds over the food.',
  primary: { label: 'Book a table', href: '#come-through' },
  secondary: { label: 'The food', href: '#the-food' },
  footnote: 'Reservations close an hour before service. Walk-ins eat at the bar.',
}

export const logos = ['Fathom', 'Resnart', 'Slack', 'Northwind', 'Vertex', 'Lumen']

export const features = {
  eyebrow: 'The food',
  title: 'Food you remember the next day',
  description: 'Bold, clean flavour. Nothing gimmicky. Every plate earns its place.',
  items: [
    {
      key: 'fire',
      title: 'Fire on the grill',
      description: 'Proper heat, real smoke, well-seasoned meat that just works. No sad barbecue.',
      span: 2,
    },
    {
      key: 'veg',
      title: 'Veg that does not sit there',
      description: 'Roasted, grilled, fermented, pickled. Veg is a main character, not a sidekick.',
      span: 1,
    },
    {
      key: 'dough',
      title: 'Dough done right',
      description: 'Bread that shatters, pastry that flakes, dough that actually tastes like something.',
      span: 1,
    },
    {
      key: 'ferment',
      title: 'Fermentation magic',
      description: 'Kimchi, garums, koji, vinegars and house funk that lifts everything else on the menu.',
      span: 2,
    },
  ],
}

export const steps = {
  eyebrow: 'The story',
  title: 'How we got here',
  items: [
    {
      title: 'Cooked with fury in tiny kitchens',
      description: 'Years of bad food, shouty restaurants and empty craft. Said enough, started smaller and better.',
    },
    {
      title: 'Found the good stuff',
      description: 'Talked to butchers, farmers, fishmongers and fermenters until the menu stopped being a list and started being a story.',
    },
    {
      title: 'Kept it human',
      description: 'Small team, direct hits, no bullshit between you and the plate. The service matches the food.',
    },
  ],
}

export const showcase = {
  eyebrow: 'What the table looks like',
  title: 'Same menu, seen a few ways',
  tabs: [
    {
      key: 'tasting',
      title: 'Tasting menu',
      description: 'Seven courses, seasonal, no choices. Let us cook you full.',
    },
    {
      key: 'bar',
      title: 'Bar bites',
      description: 'Small, fast, great with a drink. For the walk-in crowd and the impatient.',
    },
    {
      key: 'sunday',
      title: 'Sunday roast',
      description: 'Big plates, slow meat, gravy that makes grown people cry a little.',
    },
  ],
}

export const metrics = [
  { value: 98, suffix: '%', label: 'Tables re-booked the next week' },
  { value: 12, decimals: 0, label: 'Courses on the tasting menu' },
  { value: 4, suffix: '/', label: 'Michelin stars we would fuck up trying for' },
  { value: 0, suffix: '', label: 'False advertising, ever' },
]

export const testimonials = {
  eyebrow: 'What people say',
  title: 'People who ate here and forgot their own name',
  items: [
    {
      quote:
        'I ate here once and I still think about it. Not in a nice way. In a way that made me mad my other dinners have been so weak.',
      name: 'Mara Soto',
      role: 'Regular at the bar, every other Thursday',
      hue: 10,
    },
    {
      quote: 'The tasting menu hit harder than a relationship ending and twice as satisfying. I do not know how to review food when it is this good. I just go.',
      name: 'Devon Park',
      role: 'First-timer who now books every month',
      hue: 340,
    },
    {
      quote: 'I have eaten at places that charge more and taste like a sad spreadsheet. Here I paid less and my soul felt looked after.',
      name: 'Leila Haddad',
      role: 'Trainer of people who eat food',
      hue: 160,
    },
    {
      quote: 'The bread alone was enough to get me to commit to life here. Then the grilled fish showed up and I forgot the bread existed, which was rude of the fish.',
      name: 'Tomas Reyes',
      role: 'Guy who now brings friends on purpose',
      hue: 270,
    },
  ],
}

export const pricing = {
  eyebrow: 'Come through',
  title: 'How you eat here, priced like a proper menu',
  description: 'No surprise fees. No tiny portions with big ego. Just food, sized the way food should be.',
  yearlyNote: '',
  popularLabel: 'Most chosen',
  tiers: [
    {
      name: 'Bar bites',
      monthly: null,
      yearly: null,
      description: 'Come alone, come with two people, stay for one drink or four. Small plates, big flavour.',
      cta: 'Walk in at the bar',
      popular: false,
      features: [
        'Any bar snack, any time',
        'House draught on release',
        'Chef at the counter most nights',
        'No reservation, no patience needed',
      ],
    },
    {
      name: 'Tasting menu',
      monthly: null,
      yearly: null,
      description: 'The full assault on your ability to hold back. Seven courses, drinks matched à la carte.',
      cta: 'Book the tasting menu',
      popular: true,
      features: [
        'Seven courses, changed with the season',
        'Table paired with wine or zero-proof',
        'Small-plate pre-game from the chef',
        'Desserts that actually finish the night',
      ],
    },
    {
      name: 'Private room',
      monthly: null,
      yearly: null,
      description: 'For the birthday, the business dinner that should not be a spreadsheet, and the group that wants to be loud without being moved on.',
      cta: 'Reserve the room',
      features: [
        'Everything in Tasting menu',
        'Custom menu with the chef',
        'Full bar tab, settled after',
        'Your own floor for the night',
      ],
    },
  ],
}

export const faq = {
  title: 'Questions, answered like a human',
  items: [
    {
      q: 'Do I need a reservation?',
      a: 'For the tasting menu and the room, yes. For the bar, no. Arrive hungry and leave your ego at the door.',
    },
    {
      q: 'What if I am vegetarian or do not eat some things?',
      a: 'Tell us when you book. The menu bends. Vegetarians eat real food here, not a sad afterthought.',
    },
    {
      q: 'Is it fancy?',
      a: 'It is good. You can wear a jacket if you want. You can wear a hoodie if you want. We are less interested in your shoes than in you eating well.',
    },
    {
      q: 'Can I bring kids?',
      a: 'Depends how loud and how small. Call us and we will tell you straight. We are not an all-night soft play, but we are not monsters either.',
    },
    {
      q: 'What about allergies and everything else?',
      a: 'Tell us before you arrive. We take it seriously and we are good at it. If we cannot safely do your thing, we will say so and not lie.',
    },
    {
      q: 'Do you serve alcohol?',
      a: 'Yes. Wine, beer, cocktails and a few zero-proof things that are not just sad juice. Ask the bar if you want something that does not taste like regret.',
    },
  ],
}

export const cta = {
  title: 'Book a table and die in fathome of how good it is',
  description: 'There is a table with your name on it. Probably yours. Possibly not. Either way, it is there.',
  button: 'Reserve a table',
  success: 'You are on the list. We will text when the table is ready.',
}

export const footer = {
  blurb: 'Fucking good food. That is all. That is the whole plan.',
  columns: [
    { title: 'The food', links: ['Tasting menu', 'Bar bites', 'Sunday roast', 'Drink list', 'Allergens'] },
    { title: 'The place', links: ['Address', 'Opening hours', 'Book a table', 'Private room', 'Press'] },
    { title: 'The people', links: ['Our team', 'See the kitchen', 'Work with us', 'Private dining', 'Contact'] },
    { title: 'Practical', links: ['Privacy', 'Terms', 'Cookies', 'Accessibility', 'Licenses'] },
  ],
  legal: `© ${new Date().getFullYear()} Resnart. Fucking good food.`,
  socials: [
    {
      label: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
    },
    {
      label: 'TikTok',
      icon: 'M19.59 6.69a4.68 4.68 0 0 1-3.35-4.4 4.68 4.68 0 0 1 4.4-3.35 5.039 5.039 0 0 1 0 7.73 4.68 4.68 0 0 1-5 5.8 5.54 5.54 0 0 1-1.62-.06 5.35 5.35 0 0 0-.27 2.48c0 2.912.26 5.762 1.73 8.27a4.87 4.87 0 0 1-1.34 3.52c-.03.02-.06.04-.09.06a5.25 5.25 0 0 1-5.22 4.03 5.36 5.36 0 0 1-5.36-5.36c0-.22.01-.44.04-.66a5.24 5.24 0 0 1 1.1-2.88c.04-.09.08-.18.13-.27a4.82 4.82 0 0 1 3.86-1.32 5.19 5.19 0 0 1 1.23.08c3.34.46 6.34-1.04 8.19-4.27a5.12 5.12 0 0 1 4.22-1.21A5.25 5.25 0 0 1 19.59 6.69z',
    },
    {
      label: 'YouTube',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
  ],
}
