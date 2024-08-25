import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.png';
import avatarPlaceholder from '../client/static/avatar-placeholder.png';
import { routes } from 'wasp/client/router';

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Locations', href: routes.PricingPageRoute.build() },
  { name: 'Documentation', href: DocsUrl },
  { name: 'Blog', href: BlogUrl },
];
export const features = [
  {
    name: '#1 W9 Form',
    description: 'Independent contractors Tax Form.',
    icon: '💸',
    href: DocsUrl,
  },
  {
    name: '#2 CMAC Contract',
    description: 'Supplemental Agreement Form.',
    icon: '🔐',
    href: DocsUrl,
  },
  {
    name: '#3 CMAC Safety Contract',
    description: 'Safety First!',
    icon: '🥞',
    href: DocsUrl,
  },
  {
    name: '#4 Identification Verification',
    description: 'ID, Sign, Submit.',
    icon: '🤝',
    href: DocsUrl,
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Whats the meaning of life?',
    answer: '42.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
