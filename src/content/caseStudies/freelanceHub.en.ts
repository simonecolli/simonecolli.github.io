import type { CaseStudy } from "./types";

export const freelanceHubEn: CaseStudy = {
  facts: ["Personal project", "Running on my own server", "Under active validation"],

  lead: [
    "Freelance Hub is the system I built to gather the information and the work of my freelance practice in one place: leads, clients, projects, requests, quotations, contracts, payments, and time planning.",
    "The project came out of a concrete personal need. I was handling clients and projects through folders and notes in Obsidian, while requests arrived through separate forms, email, and WhatsApp. Quotations were prepared from a template and sent by email. The information existed, but it lived across different tools and had to be maintained and reconstructed by hand.",
    "At the time I was considering combining my professional work with a doctorate, so I started building tools to organise my time and cut down the administrative work. That academic path did not happen, but the need stayed: to follow the work from one place, and to understand how the business is doing.",
  ],

  sections: [
    {
      id: "first-contact",
      title: "From first contact to project",
      blocks: [
        {
          kind: "p",
          text: "The path can start with recording a prospective client: what they do, notes, where the contact came from, and where the conversation stands.",
        },
        {
          kind: "figure",
          diagram: "fh-flow",
          caption: "The same information, before and after: the tools that held it without knowing about each other, and the chain that now runs from first contact to payment and feeds the analytics.",
        },
        {
          kind: "p",
          text: "Every change in a lead's status is recorded with its date. When the lead accepts a quotation, it becomes a client. A client can have several projects, each with its own details, progress, budget, and time estimates.",
        },
        {
          kind: "p",
          text: "Each record gathers the context of the relationship: requests, projects, communications, notes, and documents. The information can be consulted without hunting through separate folders and conversations.",
        },
        {
          kind: "p",
          text: "Freelance Hub is an internal tool: I am its only user. Clients have no direct access.",
        },
      ],
    },
    {
      id: "requests",
      title: "Requests and work done",
      blocks: [
        {
          kind: "p",
          text: "Requests are organised by client and project, with a type, a priority, a status, and a deadline.",
        },
        {
          kind: "p",
          text: "The system records the tasks, their estimated and actual durations, the communications, and the costs attached to them. The structure ties what was asked for to the work done and the resources it took.",
        },
        {
          kind: "p",
          text: "Each project has a Gantt chart with phases and notes. A timer logs hours against each phase. The Gantt chart exports to PNG, SVG, or PDF, including a version to send to the client.",
        },
        {
          kind: "p",
          text: "Notes can be organised by context and category, keeping working instructions and project information together.",
        },
      ],
    },
    {
      id: "quotes-contracts",
      title: "Quotations, pro formas, contracts, and reporting",
      blocks: [
        {
          kind: "p",
          text: "Freelance Hub prepares quotations and contracts from the data already held in the system.",
        },
        {
          kind: "p",
          text: "A quotation can hold several alternative packages, each with its own sections, lines, and totals. Each quotation keeps its revisions, and common items come from a catalogue. The PDF carries the business details and signature blocks. When the client accepts, the system creates the project.",
        },
        {
          kind: "p",
          text: "An accepted quotation produces pro forma invoices: full, deposit, or balance, with yearly numbering and a PDF. Payments link to the pro forma, and the system shows what is still to be collected.",
        },
        {
          kind: "p",
          text: "Contracts start from versioned templates: every version stays saved. The system fills the template with the client, project, and business details.",
        },
        {
          kind: "p",
          text: "The reporting section takes a client, a project, and a period, with the choice of including notes and an hour-by-hour breakdown. The point is to reuse what was recorded during the work for the reporting as well.",
        },
      ],
    },
    {
      id: "payments",
      title: "Payments, expenses, and what is actually available",
      blocks: [
        {
          kind: "p",
          text: "Payments received can be recorded, inspected, and corrected when entered wrongly. Each one can be attached to a client and a project, keeping the date, amount, method, and reference.",
        },
        {
          kind: "p",
          text: "The financial view separates the total received from the amounts set aside for tax and from what is actually available once that is put away. The summary shows income, expenses, tax set aside, and what is left, by year and by month.",
        },
        {
          kind: "p",
          text: "There is also handling for rates, business expenses, and recurring income. Recurring entries represent ongoing arrangements, such as maintenance and periodic retainers, alongside one-off work. Recurring expenses have a due date: before a renewal, the system sends me an email.",
        },
      ],
    },
    {
      id: "intelligence",
      title: "Business intelligence to steer the work",
      blocks: [
        {
          kind: "callout",
          text: "In my first year freelancing, one of the main things I needed was a sense of where the business was heading in the months ahead.",
        },
        {
          kind: "p",
          text: "That is why I added a business intelligence module. The feature I use most is the revenue forecast: a view that combines history, recurring income, and the recent trend to project the months ahead.",
        },
        {
          kind: "figure",
          diagram: "fh-forecast",
          caption: "The forecast starts from the months already recorded and the recurring share, and projects the ones ahead; the summaries are read at three, six, and twelve months.",
        },
        {
          kind: "p",
          text: "The panel shows summaries at three, six, and twelve months, alongside the chart of history and projections. The projections are a reference for planning, grounded in the recorded data.",
        },
        { kind: "p", text: "The other analyses available cover:" },
        {
          kind: "list",
          items: [
            { text: "Revenue and margins, accounting for project costs and business expenses." },
            { text: "Estimated hours against hours actually worked." },
            { text: "Income per hour, compared with the nominal rates." },
            { text: "Opportunities and conversions by acquisition source." },
            { text: "How long each lead stage lasts, and where leads drop off." },
            { text: "The distribution and trend of incoming requests." },
            { text: "Recorded feedback and ratings." },
            { text: "History and projections of what client relationships are worth over time." },
          ],
        },
        {
          kind: "p",
          text: "These get used at very different rates today. The forecast is central to how I work day to day; the finer analyses of rates and profitability grow more useful as the data accumulates.",
        },
      ],
    },
    {
      id: "planning",
      title: "Planning the workload",
      blocks: [
        {
          kind: "p",
          text: "Freelance Hub has an area for availability and for planning the work.",
        },
        {
          kind: "p",
          text: "Working hours, exceptions for individual days, and fixed blocks can all be set, personal commitments included. Weekly, monthly, and yearly views compare the time available with the time already taken.",
        },
        {
          kind: "p",
          text: "An overview shows the load of each week and the breaks. Tasks link to the phases of the project's Gantt chart.",
        },
        {
          kind: "figure",
          diagram: "fh-schedule",
          caption: "The hours declared available, the commitments that do not move, and the work the optimisation service places in what is left.",
        },
        {
          kind: "p",
          text: "An optimisation service takes the task estimates and the configured constraints and proposes a plan. The aim is to spread the work while respecting deadlines and everything else already committed.",
        },
        {
          kind: "p",
          text: "Daily summaries, a record of what got in the way, and habit tracking round this part off, keeping the tie to the original need: organising work and personal time together rather than separately.",
        },
      ],
    },
    {
      id: "photo-events",
      title: "Photography events",
      blocks: [
        {
          kind: "p",
          text: "Alongside development projects, Freelance Hub has a mode for photography events.",
        },
        {
          kind: "p",
          text: "An event can involve several buyers rather than corresponding to a single client. The structure collects the requests and payments attached to it and reports on the event's takings, the number of buyers, and the average purchase.",
        },
        {
          kind: "p",
          text: "This mode was also designed with an eye to the photo sales and delivery system I am building. Connecting the two projects is a planned extension.",
        },
      ],
    },
    {
      id: "automation",
      title: "Automation and supporting tools",
      blocks: [
        {
          kind: "p",
          text: "Further modules cut down the repetitive work: email templates, follow-up rules, notifications, calendar and mail integrations, and links to other systems.",
        },
        {
          kind: "p",
          text: "There is also an assistant backed by language models run through Ollama or LM Studio. What is implemented so far covers suggested classification and sizing of requests, summaries, and draft replies.",
        },
        {
          kind: "p",
          text: "An activity log, anonymising a client on request (GDPR), and a section for preparing and exporting portfolio case studies complete the system.",
        },
      ],
    },
    {
      id: "status",
      title: "Where it runs and where it stands",
      blocks: [
        {
          kind: "p",
          text: "Freelance Hub has run on my home server since mid-September 2026, and I use it to run the business. Choosing my own infrastructure also answers a wish to keep closer control over client data.",
        },
        {
          kind: "p",
          text: "Development started in April 2026 and is still going. With v2 I rebuilt the interface: the dashboard shows an overview of the day, and a command palette reaches every section.",
        },
        {
          kind: "p",
          text: "The code has 1,699 automated tests: 1,368 in the backend and 331 in the frontend. The pipeline blocks any drop in coverage and checks types with mypy --strict. For security it runs gitleaks, bandit, pip-audit, npm audit, and Trivy, plus mutation testing on the GraphQL security layer.",
        },
        {
          kind: "p",
          text: "The project is under active validation: using it every day is how the flows get checked, anomalies get found, and features get refined against real needs.",
        },
        {
          kind: "callout",
          text: "Its value comes from connecting information that used to be scattered: from the lead to the project, from the work done to the payment, through to reading how the business as a whole is going.",
        },
      ],
    },
  ],
};
