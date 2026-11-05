import type { ServicePageContent } from "./types";

export const websitesEn: ServicePageContent = {
  heading: "Websites for professionals and small businesses",
  subtitle: "Working out which website you need, before what it costs.",
  intro: [
    "\"I'd like a website, but I don't understand the difference between the types.\" I hear this often, and it's a fair question: a landing page, a showcase site, a portfolio and an online shop are different things, with different costs and timeframes. Here you'll find the differences in plain words. You'll find prices too, but they are not just a number: you are not paying only for the code, you are paying for the whole process, from the written proposals to going live, and you can check every step.",
    "And if you already have a website, it doesn't necessarily need rebuilding: a tune-up is often enough.",
  ],
  cta: "Write to me about a website",
  mail: {
    subject: "Enquiry from the website: website",
    body: "Hi Simone,\n\nwhat my business does:\n\n\ndo I already have a website? (if so, its address):\n\n\nwhat kind of website I think I need (\"I don't know\" is fine):\n\n\nby when:\n\n",
  },
  whatsapp: "Hi Simone, I'm writing from your website about a website.",
  sections: [
    {
      id: "come-lavoro",
      title: "How I work, and how you can check it",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              term: "Analysis and written proposals",
              text: "I look at your current website, if you have one, we talk about goals and clients, and you usually receive two or three alternatives, each with its price, what it includes and its limits.",
              check: "you compare them item by item, and you can remove or add single parts.",
            },
            {
              term: "Design built on your brand",
              text: "a proposal made for your business, not a theme picked from a catalogue, with one round of revisions.",
              check: "you see the proposal and correct it before development starts.",
            },
            {
              term: "Development in a private preview",
              text: "the website takes shape at a protected address that Google cannot see, with one round of checks.",
              check: "you open it on your phone and your computer while I build it, and nothing goes live without your approval.",
            },
            {
              term: "Going live",
              text: "a light, fast website with the technical groundwork for Google. The old page addresses stay linked to the new ones (where possible), so you don't lose the visits from Google.",
              check: "the old links keep leading to the right pages.",
            },
            {
              term: "Payment in stages",
              text: "a deposit on signing, then at each approved delivery.",
              check: "you only pay for what you have already seen and approved.",
            },
            {
              term: "Everything in your name",
              text: "domain, hosting and Google accounts are in your name from the start, and once paid in full the website, its code and its content are yours.",
              check: "you hold the access, you don't depend on me.",
            },
          ],
        },
        { kind: "callout", text: "I take on a few projects at a time to guarantee the highest quality." },
      ],
    },
    {
      id: "tipi",
      title: "Which website do you need?",
      blocks: [
        {
          kind: "siteTypes",
          columns: ["Type", "What it is", "A good fit if…", "Pages", "Timeframe", "Price"],
          rows: [
            {
              type: "Tune-up of the website you already have",
              what: "I fix the technical problems of your current site without changing how it looks.",
              fit: "You like your website, but it brings no visits or enquiries.",
              pages: "-",
              packageId: "tune-up",
            },
            {
              type: "Landing page",
              what: "A single page with one goal: getting you contacted, presenting an offer or an event.",
              fit: "You have a specific service or initiative, and visitors from social media or word of mouth should do one thing.",
              pages: "1",
              packageId: "landing",
            },
            {
              type: "Portfolio / personal website",
              what: "Puts you and your work at the centre.",
              fit: "You're a freelancer or a creative, and clients choose you by looking at what you've done.",
              pages: "3-4",
              packageId: "portfolio",
            },
            {
              type: "Showcase website",
              what: "Presents your business: who you are, what you do, where you are, how to get in touch.",
              fit: "You have a shop, a practice or a local business and want to be found and look trustworthy.",
              pages: "4-5",
              packageId: "showcase",
            },
            {
              type: "Website with changing content",
              what: "A showcase site with a part updated often: events, news, articles, menus.",
              fit: "You have events or news to publish regularly.",
              pages: "4-5 + list",
              packageId: "events",
            },
            {
              type: "Company website with a catalogue",
              what: "Products organised by importance, dedicated pages for the main products, quote requests per product.",
              fit: "Your website is your main sales channel, abroad too.",
              pages: "dozens",
              packageId: "catalogue",
            },
            {
              type: "Online shop",
              what: "Catalogue, cart and payments.",
              fit: "You want to sell and take payments online.",
              pages: "-",
              other: { text: "Not something I build. If showing your products and receiving quote requests is enough, see the company website with a catalogue." },
            },
            {
              type: "Web application / business software",
              what: "Not a website but a work tool: users, data, calculations, documents.",
              fit: "You need to manage clients, orders or processes, not just present yourself.",
              pages: "-",
              other: { text: "See", to: "/development/gestionali-crm/", label: "Business software and CRM" },
            },
          ],
        },
        {
          kind: "p",
          text: "The prices and timeframes of the packages below are indicative, not final. Prices are starting prices, and each package says what the starting price includes. The cost and timeframe of your project are set case by case and written in the quote. Prices do not include recurring fees and third-party services: hosting, domain, graphic design (logo and visual identity), privacy advice and policy texts, stock photos. Timeframes start once I have the deposit, the texts and the photos.",
        },
      ],
    },
    {
      id: "pacchetti",
      title: "Packages",
      blocks: [
        {
          kind: "packages",
          items: [
            {
              id: "tune-up",
              title: "Tune-up of the website you already have",
              fromPrice: 450,
              weeks: "2-3 weeks",
              body: "I fix the technical problems that hold the site back on Google and lose you enquiries, without changing how it looks: languages linked to each other, titles and descriptions, links and PDFs leading to error pages, duplicate pages, a button to ask for a quote, statistics fixed if the site uses them. The starting price covers a site of up to about 20 pages in one language.",
              fit: "you're happy with how the site looks and want a contained intervention.",
              limits: "the structure stays as it is.",
              note: "Includes a check of the results 3 months after delivery. Before quoting I analyse the site: what the analysis costs depends on how in-depth it needs to be, and I tell you before starting.",
            },
            {
              id: "landing",
              title: "Landing page",
              fromPrice: 600,
              weeks: "2-3 weeks",
              body: "For a service, an offer or an event. Includes: one page with up to 6 sections, email and WhatsApp buttons, technical optimisation, 1 round of design revisions and 1 of final checks, publishing.",
              fit: "you have a single goal.",
              limits: "it doesn't present your whole business.",
            },
            {
              id: "portfolio",
              title: "Portfolio / personal website",
              fromPrice: 1200,
              weeks: "4-6 weeks",
              body: "For professionals and creatives. Includes: up to 4 pages, a gallery of your work or case studies, profile, contacts, technical optimisation, 1 round of design revisions and 1 of final checks. This website is an example.",
              fit: "clients choose you by looking at your work.",
            },
            {
              id: "showcase",
              title: "Showcase website",
              fromPrice: 1400,
              weeks: "5-6 weeks",
              body: "For local businesses and practices. Includes: up to 5 pages (for example home, about, services, contacts), map and opening hours, technical optimisation, 1 round of design revisions and 1 of final checks, publishing.",
              fit: "you want to be found locally and look trustworthy.",
              limits: "the content rarely changes; for frequent news there's the next package.",
            },
            {
              id: "events",
              title: "Website with events or news",
              fromPrice: 1900,
              weeks: "6-8 weeks",
              body: "For associations, clubs, venues. Includes: a showcase site and an events or news section, which I update at your request. A real example: Salso Running Club.",
              fit: "you have events or news to publish regularly.",
              limits: "without an admin panel, every update goes through me (the panel is among the extras).",
            },
            {
              id: "catalogue",
              title: "Company website with a catalogue",
              fromPrice: 3000,
              weeks: "10-12 weeks",
              body: "For companies that sell through their website. Includes: design based on your brand, a catalogue organised by importance, 5 dedicated pages for the main products with a quote request form for each, 1-2 languages, technical optimisation. If you already have a website, it includes moving the current content, when the content format and today's platform allow it: I check this before quoting.",
              limits: "it is not an online shop; products can't be bought on the site.",
              note: "You can start with fewer dedicated pages and add more later, paying only the difference.",
            },
          ],
        },
        { kind: "h3", text: "Extras" },
        {
          kind: "table",
          columns: ["Item", "Indicative price"],
          rows: [
            ["An extra page", "from €100"],
            ["A page in another language, with the translation provided by you", "from €40 per page"],
            ["Admin panel to update events or news yourself", "from €500"],
            ["Texts written by me, changes, extra rounds of revisions", "by the hour or with prepaid hour packages"],
            ["Photos for the website", "half day from €400, full day from €650"],
          ],
        },
      ],
    },
    {
      id: "compreso",
      title: "What every website includes",
      blocks: [
        {
          kind: "list",
          items: [
            { term: "Designed around your brand", text: "not a theme taken from a catalogue and left as it is." },
            { term: "Built for phones and computers", text: "it reads well on any screen." },
            { term: "Fast to load", text: "optimised images and lightweight pages." },
            { term: "Technical optimisation for Google", text: "titles and descriptions for every page, sitemap, the official address of every page (canonical), structured data, and languages linked to each other if the site has more than one." },
            { term: "Easy enquiries", text: "a clearly visible button, phone and email you can tap on a smartphone." },
            { term: "No tracking cookies unless they're needed", text: "if the site doesn't need them I don't add them, and there's no banner to manage, as with the Salso Running Club." },
            { term: "Other languages", text: "charged separately, among the extras." },
          ],
        },
      ],
    },
    {
      id: "costi",
      title: "What increases the price, and what is excluded from it",
      blocks: [
        { kind: "h3", text: "What raises the price" },
        {
          kind: "list",
          items: [
            { text: "More pages or more languages." },
            { text: "Texts written from scratch, rather than provided by you." },
            { text: "Photos to be taken." },
            { text: "A section you update yourself." },
            { text: "Extra features: bookings, forms, newsletters, a private area." },
            { text: "Content to move from an old website, or from several." },
            { text: "A larger number of revisions." },
            { text: "Tight delivery times (little time available)." },
          ],
        },
        { kind: "h3", text: "What's not included" },
        {
          kind: "list",
          items: [
            { text: "Recurring fees: domain, hosting and third-party services." },
            { text: "Graphic design: logo and visual identity. If you don't have them, I can work with a designer, quoted separately, as I did for the Salso Running Club." },
            { text: "New texts and translations: you provide them. On request I can point you to a translator." },
            { text: "Privacy and cookie advice and policy texts: your consultant or a dedicated service prepares them. Installing the cookie banner, on the other hand, is included." },
            { text: "Paid stock photos." },
            { text: "Advertising campaigns." },
          ],
        },
        { kind: "h3", text: "After delivery" },
        {
          kind: "table",
          columns: ["Item", "Indicative cost", "What it includes"],
          rows: [
            ["Domain and hosting", "the provider's price", "In your name. If you already have hosting, the website stays there."],
            ["Monthly support", "from €150/month", "Automatic monitoring of the site, statistics (Google Analytics, Search Console, Google Business Profile) with a monthly report, backups, checks that the contact forms work, response within 1 working day. No automatic renewal."],
            ["Content updates", "by the hour or with prepaid hour packages", "New pages, products, news, texts."],
          ],
        },
      ],
    },
    {
      id: "foto",
      title: "Website and photos from the same professional",
      blocks: [
        {
          kind: "p",
          text: "I'm also a photographer: I can take the photos for your website (premises, products, machines, team, portraits) myself, in the same style as the pages. You don't have to coordinate two people, and the site doesn't rely on stock photos.",
        },
        {
          kind: "list",
          items: [
            { term: "Half day from €400, full day from €650", text: "with post-production and high-resolution delivery. Travel beyond 50 km charged separately." },
            { term: "Usage licence", text: "you use the photos for your own communication: website, catalogues, trade fairs, social media, advertising." },
            { term: "New opening", text: "a showcase site and photos of the premises, the products and the opening." },
            { term: "Professional profile", text: "a personal website and portraits, for LinkedIn too." },
            { term: "Company image", text: "a website and photos of products, workshop and team." },
          ],
        },
        { kind: "links", items: [{ to: "/photography/", label: "See the photography", accent: "photo" }] },
      ],
    },
    {
      id: "lavori",
      title: "Some real work",
      blocks: [
        {
          kind: "cases",
          items: [
            {
              slug: "salso-running-club",
              label: "Salso Running Club",
              text: "A website for a running club in Salsomaggiore, built on a designer's visual identity. Four pages, designed for smartphones, with no cookies and no banner.",
            },
            {
              slug: "personal-website",
              label: "This website",
              text: "Two activities, two audiences, one professional identity, in Italian and English.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "I don't know which kind of website I need. Can you help?",
      answer: "Yes, that's where to start. Tell me what you do and where your clients come from. Sometimes the answer is \"for now a Google Business Profile is enough\", and I'll tell you so.",
    },
    {
      question: "Is the website mine?",
      answer: "Yes. Once paid in full, the website, its code and its content are yours. Domain, hosting and Google accounts are in your name from the start.",
    },
    {
      question: "Can I update it myself?",
      answer: "It depends on the type. A showcase site rarely changes, and I can make the updates whenever you ask. If you often publish events or news, an admin panel to do it yourself can be added.",
    },
    {
      question: "Do you build online shops?",
      answer: "No. But if showing your products and receiving quote requests is enough, with no payments on the site, the company website with a catalogue is the right fit.",
    },
    {
      question: "Will I be first on Google?",
      answer: "Nobody can guarantee a position: it also depends on the competition and on Google. The website starts with sound technical foundations, and for a local business the Google Business Profile matters a lot too; I help you set it up.",
    },
    {
      question: "How long does it take?",
      answer: "A landing page or a tune-up 2-3 weeks, a portfolio 4-6, a showcase site 5-6, a site with events 6-8, a company website with a catalogue 10-12. Timeframes start once I have the deposit, access, texts and photos: the biggest delay is usually waiting for the texts.",
    },
    {
      question: "I already have an old website. Can it be rebuilt?",
      answer: "Yes. I keep the current page addresses or link them to the new ones, so you don't lose the ranking you've already earned. Often, though, a tune-up is enough.",
    },
  ],
  closing: {
    title: "Still not sure which website you need?",
    text: "Tell me what you do and where your clients come from. I'll reply with a written proposal on the kind of website I'd recommend and a price, with no obligation.",
  },
};
