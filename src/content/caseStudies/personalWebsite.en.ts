import type { CaseStudy } from "./types";

export const personalWebsiteEn: CaseStudy = {
  facts: ["An evolving personal project"],
  lead: [
    "This website addresses a need in my own practice: presenting software development and photography under one name, while helping visitors find the service they need. A company looking to automate a process and a student looking for a graduation photographer have different questions and criteria.",
    "I designed the structure, wrote the content and developed a site with two recognisable journeys, a shared visual foundation and dedicated contact routes. It brings together a technical portfolio, detailed project stories, photography packages and the information needed to start an enquiry.",
  ],
  contact: {
    title: "Does your website need to explain more than one service?",
    text: "Tell me about your business, the people you want to reach and what someone should be able to do after visiting your site. We start with content and journeys, then define the technical solution.",
    button: "Let’s discuss your website",
  },
  sections: [
    {
      id: "brief",
      title: "Two audiences, one professional identity",
      blocks: [
        { kind: "p", text: "The first decision concerns content organisation. The homepage introduces both activities and provides separate routes to services and contacts. The development journey leads to problems addressed, projects and concrete examples; the photography journey leads to the working method and packages." },
        { kind: "list", items: [
          { term: "Software clients", text: "need to understand the problems I can tackle and find examples detailed enough to assess my approach." },
          { term: "Photography clients", text: "need to compare services, coverage, starting prices and ways to get in touch." },
          { term: "Visitors getting to know me", text: "can follow a shared route through my introduction, experience and skills." },
        ] },
        { kind: "callout", text: "The question behind each page is practical: what does this person need to decide whether I can help and whether to contact me?" },
      ],
    },
    {
      id: "visual-system",
      title: "A shared visual language with two accents",
      blocks: [
        { kind: "p", text: "The visual system uses neutral backgrounds, fine borders and shared spacing. Blue identifies development and red identifies photography. These accents appear on buttons, links and scrollbars, alongside headings and descriptions that explain each journey without relying on colour alone." },
        { kind: "p", text: "Typography follows the same logic: a monospaced face accompanies the development opening, while a serif face gives photography its voice. Body text uses a shared foundation. Colours and fonts are defined centrally, allowing changes to carry through the components that use them." },
        { kind: "p", text: "Light and dark themes share the layout, with dedicated colours for surfaces, text and contrast. Visitors can follow their system preference or choose a theme. On small screens, columns stack and navigation moves into a menu." },
      ],
    },
    {
      id: "service-journeys",
      title: "From a service to a contact enquiry",
      blocks: [
        { kind: "p", text: "Software projects can have a short description or a case study explaining context, decisions and operation. Long pages include a desktop contents sidebar and an expandable contents list on small devices, making detailed technical stories easier to navigate." },
        { kind: "p", text: "For photography, the graduation page addresses a specific need: it compares Ceremony and All Inclusive packages, highlights group pricing and brings together included services and frequently asked questions. Prices are presented as starting amounts, with service and travel conditions." },
        { kind: "p", text: "Buttons open prefilled emails with useful information for a first reply. Software enquiries prompt visitors about the process they want to improve; graduation enquiries ask for date, venue, timings, group size and package. Two inboxes separate the activities, while the header contact button follows the section being visited." },
        { kind: "p", text: "Using email keeps contact handling free of a site backend. It has an explicit limitation: visitors need a mail application, and the website cannot confirm that a message was sent." },
      ],
    },
    {
      id: "architecture",
      title: "React for the interface, HTML for each address",
      blocks: [
        { kind: "p", text: "The interface is built with React and TypeScript, using Tailwind CSS for styling and Vite for builds. Shared components handle the header, footer, cards and detail pages. Project data and case study content are separate from presentation." },
        { kind: "p", text: "The site is hosted on GitHub Pages, which serves static files. To make project pages accessible directly from a link, the build generates an HTML document for each published route. React then handles browser navigation. This is prerendering: the initial content already exists in the file delivered to the visitor." },
        { kind: "list", items: [
          { term: "Page metadata", text: "titles, descriptions, canonical addresses and sharing metadata belong to each specific piece of content and are included in the generated HTML." },
          { term: "Sitemap", text: "addresses come from the same list used to generate pages, including project and talk details." },
          { term: "Publishing", text: "GitHub Actions installs dependencies, runs the build and publishes the output to GitHub Pages when updates reach the main branch." },
        ] },
        { kind: "p", text: "There is no editorial dashboard: updating content and offers means editing project files and running a new build. This suits how I manage my own site; a client who regularly edits content would need a separate assessment of whether a CMS is appropriate." },
      ],
    },
    {
      id: "language-and-consent",
      title: "Languages, local resources and optional statistics",
      blocks: [
        { kind: "p", text: "The interface and case studies are available in Italian and English. Story sections keep matching identifiers across languages. The build generates Italian HTML: language switching happens in the browser and does not create two separate sets of indexable addresses." },
        { kind: "p", text: "Fonts are hosted with the site. The GA4 integration is designed to load its tag only after consent to statistics, with refusal and withdrawal available through cookie preferences. Advertising consents remain denied. Automated tests also cover consent expiry, storage errors and blocking collection in local environments." },
        { kind: "p", text: "Site events distinguish page visits and contact clicks for development and photography, without including prefilled message contents. The code filters paths and removes queries and fragments from manually sent events. Testing the real Google tag and received data remains separate from testing the code." },
      ],
    },
    {
      id: "outcome",
      title: "What the project demonstrates and what comes next",
      blocks: [
        { kind: "p", text: "The design outcome is a site where services, examples and contacts follow coherent journeys while sharing one technical and visual foundation. The page you are reading uses the same content system and components as the other case studies." },
        { kind: "p", text: "The project demonstrates the work involved in turning a professional introduction into a maintainable website: organising information, defining a visual language, building pages and handling publication. Build and type checks verify integration; targeted tests cover the more sensitive aspects of analytics behaviour." },
        { kind: "p", text: "Development continues with photography content and checks of the actual visitor experience. I do not present increases in traffic, enquiries or bookings as established results: evaluating those requires observations over time, and clicking an email address remains different from sending an enquiry." },
      ],
    },
  ],
};
