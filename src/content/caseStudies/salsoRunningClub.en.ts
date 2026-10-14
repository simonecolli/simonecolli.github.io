import type { CaseStudy } from "./types";

export const salsoRunningClubEn: CaseStudy = {
  facts: ["Website for a running club", "Built with a designer", "Live"],
  lead: [
    "Salso Running Club is a running club in Salsomaggiore Terme that started as a group of friends. There is no membership and no fee: runs are organised in a WhatsApp group, everyone goes at their own pace, and the run often ends with an aperitivo.",
    "The club already had a recognisable voice: a logo, colours, two mascots, stickers, T-shirts and an Instagram profile, all designed by Margherita Corinti. What it lacked was a place where someone meeting the club for the first time could understand what it is and how to join. I designed, built and published the website starting from her visual identity, and I keep it up to date.",
  ],
  contact: {
    title: "Do you have a club, an association or a community to present?",
    text: "Tell me how your group works, where people come from and what they should do after visiting the site. If you already have a visual identity we start from it; if you work with a designer, we build the site together.",
    button: "Let's talk about your site",
  },
  sections: [
    {
      id: "brief",
      title: "From an informal group to an address worth sharing",
      blocks: [
        { kind: "p", text: "The club lives in informal places: a chat, Instagram stories, stickers around town. That works for people who are already in. Someone coming from outside can't find the basic answers: who are you, when do you run, do I need to be fit, how do I join." },
        { kind: "list", items: [
          { term: "Someone who sees a sticker or a post", text: "needs to understand within seconds that the group is open, non-competitive and has no sign-up." },
          { term: "Someone who wants to try a run", text: "needs to know how a run comes together and find the way into the group straight away." },
          { term: "Someone proposing a collaboration", text: "a bar, an event or a brand, needs to know who to write to." },
        ] },
        { kind: "callout", text: "The question behind the site: what does a person who knows nobody need in order to show up for the next run?" },
      ],
    },
    {
      id: "designer-collaboration",
      title: "Bringing an existing identity to the web",
      blocks: [
        { kind: "p", text: "The starting point was not a blank page. Margherita had already defined the club's language: a bold logo, red and beige, a strawberry and a three-eyed banana, a playful tone in the posts. My job was to translate that language into a system for the web, without flattening it into the standard template of a sports club website." },
        { kind: "p", text: "Red and beige are the base of the palette. I added a yellow, a light blue and sand tones to tell steps and surfaces apart, leaving the two main colours to do the recognising. Headings use a serif typeface in a very heavy weight, paired with a readable sans-serif for body text." },
        { kind: "p", text: "The mascots, the event posters and the photos from the runs go into the pages as content. A few recurring elements tie the sections together: dashed trails that recall a running route and a red band with the club's name scrolling across it." },
        { kind: "p", text: "The copy follows the tone of the social profiles too: direct, ironic, informal. The About page gives space to the graphic project, told by Margherita in the first person, and a notes page says who did what. The credit is explicit on both sites." },
        { kind: "callout", text: "Working on someone else's identity means working out which elements need adapting to the screen and which should stay as they were, because they are the ones people recognise." },
      ],
    },
    {
      id: "structure",
      title: "Four pages, one invitation",
      blocks: [
        { kind: "p", text: "The home page opens with a question, \"HEY! Fancy a run?\", next to a preview of a group chat showing how a run comes together. Then come the next event, the latest runs and three steps to join. About tells the club's story and introduces the people behind it. Events explains how runs work, lists the events organised and the runs already done, and collects the contacts. Notes carries credits and privacy." },
        { kind: "p", text: "Almost every section leads to the same place: the WhatsApp group to run, Instagram for collaborations and questions. There is no sign-up form because the club has none. In the same way, the list of runs is not a calendar: the next run happens when someone proposes it in the group, and the site says so. The pages describe how the club actually works, not a structure that doesn't exist." },
        { kind: "p", text: "The pages are designed for phones first, because the channels the site is shared on, Instagram and WhatsApp, are used on the phone. On larger screens sections sit side by side and the navigation comes out of the menu." },
      ],
    },
    {
      id: "content-updates",
      title: "Events and runs without an admin panel",
      blocks: [
        { kind: "p", text: "Events, runs and team members are described in data files kept apart from the components. An event has a name, date, time, place, description and an optional poster; a run has only a date and, when needed, a time and place. The pages sort them by date, and a small map of the last five weeks colours the days the group went running." },
        { kind: "p", text: "For now I enter the updates myself: I add an entry, rebuild the site and publish it. At the current pace of events that is enough, and it adds no costs and no private area to protect." },
        { kind: "p", text: "The limit is stated plainly: every change goes through me. If events become more frequent or other club members need to update the calendar, I would look at a lightweight CMS or a shared spreadsheet as the data source." },
      ],
    },
    {
      id: "architecture",
      title: "Static pages, no tracking",
      blocks: [
        { kind: "p", text: "The site is built with React and TypeScript, with Tailwind CSS for styling and Vite for the build. Every address is generated as a complete HTML document, with its own title, description and social sharing data; the sitemap comes from the same list of pages, so it cannot point to one that doesn't exist." },
        { kind: "p", text: "It is published on Cloudflare, which serves the static files. A small worker adds search engine directives to the responses and keeps the error page out of the index." },
        { kind: "p", text: "The site uses no cookies, no traffic analytics and no forms. So there is no consent banner, and the notes page explains in a few lines which technical data the infrastructure still logs. For a club with no administrative structure, that means no paperwork for analytics and low hosting costs." },
      ],
    },
    {
      id: "outcome",
      title: "What the project shows",
      blocks: [
        { kind: "p", text: "The club has a stable address to share, where information stays put instead of scrolling away in a chat. Someone arriving from a sticker or a post finds on one page what to expect and how to join." },
        { kind: "p", text: "The project shows three things: working with a designer from an existing identity, turning an informal tone into clear pages, and choosing a technical solution sized to the people who will use and maintain it." },
        { kind: "p", text: "I don't present growth in participants or contacts as an effect of the site. The club was already growing before it, and separating the site's contribution would take data that, by choice, I don't collect." },
      ],
    },
  ],
};
