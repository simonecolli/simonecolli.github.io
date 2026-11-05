import type { ServicePageContent } from "./types";

export const automationEn: ServicePageContent = {
  heading: "Business process automation",
  subtitle: "The software does the repetitive work. People check the result.",
  intro: [
    "Some tasks repeat the same way every day: copying data from one program to another, redoing the same documents, sending the same emails, sorting files into folders, drawing a load plan by hand. I automate them, starting from the data you already have and the tools you use.",
  ],
  cta: "Tell me what you redo by hand",
  mail: {
    subject: "Enquiry from the website: automation",
    body: "Hi Simone,\n\nwhich task we repeat by hand:\n\n\nhow much time it takes (per day or per week):\n\n\nwith which programs or machines:\n\n\nby when:\n\n",
  },
  whatsapp: "Hi Simone, I'm writing from your website about an automation.",
  sections: [
    {
      id: "ti-riconosci",
      title: "Sound familiar?",
      blocks: [
        {
          kind: "list",
          items: [
            { text: "The same data is copied from one file or program to another." },
            { text: "Every morning someone rebuilds the day's schedule by hand." },
            { text: "Documents and production files are prepared by hand for every work order." },
            { text: "Files are moved and renamed by hand into the right folders." },
            { text: "The truck load plan is drawn in AutoCAD or Excel, and it takes hours." },
            { text: "Data for the machines is retyped at the machine." },
          ],
        },
      ],
    },
    {
      id: "cosa-automatizzo",
      title: "What I can automate",
      blocks: [
        {
          kind: "cards",
          items: [
            {
              title: "Documents and files",
              text: "PDFs, summaries, DXF and CSV files generated from the data and delivered already organised in an archive, instead of being exported and sorted by hand.",
              cases: [{ slug: "mgp-gestione-produzione", label: "MGP" }],
            },
            {
              title: "Email, calendar and programs that talk to each other",
              text: "Automatic confirmations, summaries, appointments that appear in the calendar by themselves, CSV files to pass data to other software, follow-up rules.",
              cases: [
                { slug: "mgp-gestione-produzione", label: "MGP" },
                { slug: "freelance-hub", label: "Freelance Hub" },
              ],
            },
            {
              title: "Connection to the machines",
              text: "The management software sends the calculated data to the machines via OPC-UA when the operator asks, without retyping it.",
              cases: [{ slug: "mgp-gestione-produzione", label: "MGP" }],
            },
            {
              title: "Optimisation and planning",
              text: "Problems with too many variables to solve by hand: load plans, assignments, work scheduling. I've tackled them in production, in academia and in finance.",
              cases: [
                { slug: "mgp-gestione-produzione", label: "MGP" },
                { slug: "freelance-hub", label: "Freelance Hub" },
              ],
            },
            {
              title: "AI assistants, running locally",
              text: "Classifying requests, summarising, drafting replies, with models running on your server rather than on an external service.",
              cases: [{ slug: "freelance-hub", label: "Freelance Hub" }],
            },
          ],
        },
      ],
    },
    {
      id: "costi",
      title: "What it costs",
      blocks: [
        { kind: "p", text: "Inside business software, an automation is one item of the quote. To give you an idea:" },
        {
          kind: "table",
          columns: ["Automation", "Indicative price"],
          rows: [
            ["Automatic confirmation email, to the client and to you", "from €200"],
            ["A summary every morning by email: who's coming, at what time, what they collect", "from €250"],
            ["Sync with Google Calendar", "from €350"],
          ],
        },
        {
          kind: "p",
          text: "On its own, on programs or files you already have (a report, passing data between two programs, generating documents, optimising loads, connecting machines), an automation is priced on quotation: I set the price once I've seen the process.",
        },
        { kind: "h3", text: "What raises the price" },
        {
          kind: "list",
          items: [
            { text: "How many programs or machines need connecting, and whether they expose their data in a standard way." },
            { text: "How many exceptions the process has." },
            { text: "Whether the result must be editable by the people using it: in MGP the load plan is corrected by dragging the pieces." },
          ],
        },
      ],
    },
    {
      id: "risparmio",
      title: "How much does it save?",
      blocks: [
        {
          kind: "p",
          text: "It depends on the process, and I'd rather not promise numbers in the abstract. A real example: in MGP the load plan goes from hours of drawing in AutoCAD to a proposal in 10-15 seconds, plus entering the data and reviewing the result. Before starting we estimate together how much time the task takes you today, so you know what to expect.",
        },
      ],
    },
    {
      id: "assistenza",
      title: "Support",
      blocks: [
        {
          kind: "p",
          text: "An automation works on data and programs that change: I remain your point of contact if something changes or stops working. Monthly support from €150/month; changes are paid by the hour or with prepaid hour packages.",
        },
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
              slug: "mgp-gestione-produzione",
              label: "MGP",
              text: "Documents and production files generated by the system, load plans in 10-15 seconds, connection to the machines via OPC-UA.",
            },
            {
              slug: "freelance-hub",
              label: "Freelance Hub",
              text: "Follow-ups, notifications, calendar and email integrations, work scheduling with an optimisation service.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do we have to change the programs we use?",
      answer: "Usually not: we start from the ones you have and connect them. If a program doesn't allow its data to be read or written, we find out during the analysis.",
    },
    {
      question: "Can our machines be connected?",
      answer: "It depends on the machine: it has to support a protocol such as OPC-UA. It's the first thing to ask the manufacturer, and I can help you work out what to ask.",
    },
    {
      question: "What happens if the automation stops?",
      answer: "With active support the system is monitored automatically: I get an alert and take charge of the problem within 1 working day. If the problem depends on an external service (server, email, Google), I report it to the provider.",
    },
  ],
  closing: {
    title: "What do you redo by hand every week?",
    text: "Tell me about the task, how much time it takes and which programs or machines you work with. I'll reply with a written proposal and a cost estimate, with no obligation.",
  },
};
