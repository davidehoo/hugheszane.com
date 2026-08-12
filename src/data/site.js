// Single place to edit the site's identity and content.

// Legal entity details, as registered at Companies House.
// These are shown publicly so Apple (and anyone else verifying us) can match
// this domain to the registered company and its owner.
export const company = {
  legalName: "Hughes Zane Ltd.",
  registrar: "Companies House, England and Wales",
  number: "16164794",
  incorporated: "6 January 2025",
  registeredOffice: "128 City Road, London, EC1V 2NX, United Kingdom",
  owner: "Davide Hu",
  // Wording matches the Companies House register exactly, so the two can be
  // cross-checked without a discrepancy.
  ownerRole:
    "Founder and Director, and the company's sole person with significant control (75%+ of shares and voting rights)",
  registerUrl:
    "https://find-and-update.company-information.service.gov.uk/company/16164794",
};

export const site = {
  name: company.legalName,
  tagline: "We build consumer products people finish.",
  intro:
    "Hughes Zane Ltd. is a London consumer product studio run by Davide Hu. We write, publish and ship things people actually use — a book, a following of around one million people across TikTok and Instagram, and subscription apps built on top of both.",
  email: "hello@hugheszane.com",
  audienceNote: "Combined 1M followers across platforms.",
  links: [
    { label: "TikTok", href: "https://www.tiktok.com/@fill_your_cup" },
    { label: "Instagram", href: "https://www.instagram.com/hugheswritings" },
    { label: "Amazon", href: "https://mybook.to/Fill_Your_Cup" },
    { label: "Email", href: "mailto:hello@hugheszane.com" },
  ],
};

export const nav = [
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
];

export const projects = [
  {
    title: "Fill Your Cup",
    year: "2025",
    href: "https://mybook.to/Fill_Your_Cup",
    blurb:
      "Our book, and the audience around it. Written, published and marketed in-house, and grown to roughly a million followers across TikTok (@fill_your_cup) and Instagram (@hugheswritings) — an audience that now seeds everything else we launch. Read it on Amazon.",
  },
  {
    title: "Holy365",
    year: "2026",
    href: "https://holy365.app",
    blurb:
      "A daily devotional app. Designed the subscription flow and built the paywall experience end to end, from first-run onboarding through pricing, trials and renewals.",
  },
];
