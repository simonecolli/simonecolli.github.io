import type { CaseStudy } from "./types";

export const mgpEn: CaseStudy = {
  facts: ["In production", "Installed on the company server"],

  highlight: {
    context: "A platform built for a manufacturing company, now running on the company's own server.",
    before: {
      title: "Before",
      items: [
        "7-8 Excel sheets to fill in and lay out by hand for every work order",
        "Macros and PowerShell scripts, with files sorted into folders by hand",
        "Load plans drawn up in AutoCAD, taking hours of work",
      ],
    },
    after: {
      title: "With MGP",
      items: [
        "The work order is filled in once: the system produces the calculations, documents and production files",
        "A ZIP archive already organised by product type",
        "A proposed load plan in about 10-15 seconds",
      ],
    },
  },

  lead: [
    "MGP is a platform I built for a manufacturing company to handle the preparation of work orders, the calculation of production data, and the generation of the documents and files the shop floor needs.",
    "The project started from a real process that needed rethinking: a sequence of steps spread across Excel, Visual Basic macros, and PowerShell scripts, with a great deal of manual work and rules that were hard to change. From that base, MGP grew to cover load planning for both production and quotations, a link to the shop-floor machines, and an integrated support module.",
    "The requirement that shaped the design was this: the company had to be able to define and change its own product models on its own, without touching the application code or calling the developer for every variation.",
  ],

  metrics: [
    { value: "21", label: "product rows per job at most, the hard limit of the original spreadsheet" },
    { value: "7-8", label: "Excel sheets to fill in and lay out for print, one job at a time" },
    { value: "4/5", label: "product types, each repeating the same process from the start" },
    { value: "10-15 s", label: "for a proposed load plan, against the hours it took in AutoCAD" },
  ],

  sections: [
    {
      id: "starting-process",
      title: "The process it replaced",
      blocks: [
        {
          kind: "p",
          text: "Before MGP, preparing a work order meant copying an Excel file and typing the product dimensions into a first sheet. The calculation depended on macros whose behaviour was not always clear.",
        },
        {
          kind: "callout",
          text: "To get the right result, operators had learned to press the same button twice.",
        },
        {
          kind: "p",
          text: "The work then went through seven or eight Excel sheets. Each one needed care to print: columns to hide or show, content to fit onto A4 and, when that was not enough, A3.",
        },
        {
          kind: "p",
          text: "After a first export, the employee moved the files into a separate working folder and ran several PowerShell scripts. That opened onto a further set of xlsx files to fill in, from which more PDFs were produced by hand. The files bound for the shop floor, including the proprietary DXF and TLF formats the machines read, were all written to the same level and had to be sorted into their folders manually.",
        },
        {
          kind: "figure",
          diagram: "mgp-process",
          caption: "The same outcome, before and after: the manual chain across Excel, scripts, and file sorting, and the path that now runs from the work order to an archive that arrives already organised.",
        },
        {
          kind: "p",
          text: "The first sheet accepted at most 21 product rows. For a company that builds to order, that was a real operational constraint.",
        },
        {
          kind: "p",
          text: "The whole process repeated for four or five product types. Changing it was laborious too: formulas, constants, and conditions were scattered across macros and scripts that were hard to read, with dependencies that were not obvious and little documentation. Updating one rule meant reconstructing how the surrounding pieces worked.",
        },
      ],
    },
    {
      id: "from-order-to-files",
      title: "From work order to production files",
      blocks: [
        {
          kind: "p",
          text: "With MGP, the employee signs in and works with a structure organised by customer, work order, and individual product. The information can be read and changed directly in the platform.",
        },
        {
          kind: "p",
          text: "A single work order can hold products of different types. The operator picks the model and fills in the fields it defines, entering dimensions and whatever else the job requires.",
        },
        {
          kind: "p",
          text: "When several pieces are alike, an existing entry can be duplicated and only the differing values changed, instead of retyping everything.",
        },
        {
          kind: "p",
          text: "Once the work order is complete, the operator confirms it. The platform takes over: it runs the calculations and generates the documents and files the chosen models call for.",
        },
        {
          kind: "p",
          text: "At the end, the employee downloads a ZIP archive already organised on several levels: first by product type, then into the subfolders defined when the model was configured. From there the documents can be printed and handed to production and to suppliers.",
        },
        {
          kind: "p",
          text: "The sequence of calculations, exports, script runs, and file sorting is now the platform's job rather than the operator's.",
        },
      ],
    },
    {
      id: "configuration",
      title: "Configuring products without changing the software",
      blocks: [
        {
          kind: "p",
          text: "One of the company's main requirements was to manage its own product types independently. That covered both the data to ask the operator for and the rules that turn that data into production information and files.",
        },
        {
          kind: "p",
          text: "I built a table-based configuration system, available to users with the administrator role. The administrator picks a table type, gives it a name, and fills in its rows following the defined columns and the user manual.",
        },
        { kind: "p", text: "Through this system they can define:" },
        {
          kind: "list",
          items: [
            { term: "Input data", text: "numeric and text fields, dropdown menus, and the order in which they appear while filling the form." },
            { term: "Constants", text: "fixed dimensions, multipliers, text, and other values shared across several calculations." },
            { term: "Formulas", text: "calculations built on inputs, constants, and the results of other formulas." },
            { term: "Conditions and checkpoints", text: "rules that decide which calculations run and when they may be evaluated." },
            { term: "Documents and files", text: "PDFs, custom summaries, TLF and DXF files based on prototypes, and CSV for interfacing with other software." },
            { term: "Conditional content", text: "files produced only in certain situations, images to add to PDFs, and external documents to include automatically." },
            { term: "Output layout", text: "custom names and destination paths, which can themselves be built from calculated values." },
            { term: "Grouping", text: "criteria for merging products that share characteristics and aggregating their data in the documents." },
          ],
        },
        {
          kind: "p",
          text: "For example, two entries with the same dimensions and quantities of two and four can appear in the summary as a single line with a quantity of six. A product with different dimensions stays separate.",
        },
        {
          kind: "p",
          text: "Configuring it requires knowing the product and the conventions of the system. But the rules are expressed as tables and formulas, with no change to the application code.",
        },
      ],
    },
    {
      id: "rule-engine",
      title: "The engine that ties data, formulas, and conditions together",
      blocks: [
        {
          kind: "p",
          text: "Behind the table-based configuration sits a microservice dedicated to evaluating the rules.",
        },
        {
          kind: "p",
          text: "Every table has a unique alphabetic identifier, and every row a numeric identifier unique within it. The two combined let one element be referenced from a different table.",
        },
        {
          kind: "p",
          text: "If a#2 is the height and a#3 the width, a formula can use a#2 * a#3 to compute the area. That result can in turn be referenced by other formulas or used in the generated documents.",
        },
        {
          kind: "figure",
          diagram: "mgp-rule-graph",
          caption: "Every row is addressable from any table. The engine derives a dependency graph from the configuration and walks it; checkpoints hold back the rows that cannot be evaluated yet.",
        },
        {
          kind: "p",
          text: "The engine builds a graph from the configuration and propagates the calculations along the dependencies between elements. Checkpoints add execution constraints: rows that require a given checkpoint wait for it to be released before they are evaluated.",
        },
        {
          kind: "p",
          text: "That is what makes it possible to coordinate work of different kinds in one pass: collecting data, resolving formulas, evaluating conditions, and preparing the outputs the product calls for.",
        },
      ],
    },
    {
      id: "load-planning",
      title: "Load planning on the shop floor",
      blocks: [
        {
          kind: "p",
          text: "MGP was extended with a nesting system that works out how products are arranged on truck beds.",
        },
        {
          kind: "p",
          text: "In production, the system reuses data already entered in the work order to derive each piece's footprint on the bed. The optimisation engine uses heuristics to keep processing time down and proposes an arrangement in roughly 10-15 seconds in the cases described here.",
        },
        {
          kind: "p",
          text: "The operator can let the system choose among the configured trucks, or pick which types to use and how many. They can also decide whether pieces may be rotated during the calculation.",
        },
        {
          kind: "p",
          text: "The result can be reviewed through a drag-and-drop interface: the employee can move pieces around to fit the plan to how the work actually runs.",
        },
        {
          kind: "figure",
          diagram: "mgp-load-plan",
          caption: "From the arrangement on the bed the system derives two distinct sequences: the order in which pieces are assembled, and the order in which they are loaded.",
        },
        { kind: "p", text: "Two distinct sequences come out of the plan:" },
        {
          kind: "list",
          items: [
            { text: "The assembly order of the products, arranged to make the loading that follows easier." },
            { text: "The loading order onto the trucks." },
          ],
        },
        {
          kind: "p",
          text: "The system generates summary PDFs listing the pieces to assemble, the assembly and loading sequences, and a drawing of how everything sits on the beds.",
        },
        { kind: "h3", text: "Parameters the company controls" },
        { kind: "p", text: "Nesting follows the same principle of configurability as the product models." },
        {
          kind: "p",
          text: "The administrator defines the available trucks, the tolerances attached to the products, and how a piece's dimensions map to its footprint on the bed. They can decide, for instance, whether width is the footprint along the truck's X axis or its Y axis.",
        },
        {
          kind: "p",
          text: "The tolerances come into play when handling products grouped by specific rules and constraints. The engine then works out the plan from the configured parameters and the operator's choices.",
        },
      ],
    },
    {
      id: "machines",
      title: "Talking to the shop-floor machines",
      blocks: [
        {
          kind: "p",
          text: "The information produced by the planning step can be sent to the machines over OPC UA.",
        },
        {
          kind: "p",
          text: "It is sent only when the operator asks for it, through a button in the interface. The data the platform has already computed is then used to support assembly and the interaction with the machines.",
        },
        {
          kind: "p",
          text: "Transport planning is therefore tied to preparing the work itself: how the pieces sit on the trailer helps define the order in which they are made ready.",
        },
      ],
    },
    {
      id: "quotes",
      title: "Load plans at quotation time",
      blocks: [
        {
          kind: "p",
          text: "Nesting is available for quotations too, through a dedicated flow.",
        },
        {
          kind: "p",
          text: "Whoever prepares the quotation enters dimensions and tolerances in a form, with the option to duplicate similar rows. They can then run the same optimisation engine used in production, choose trucks automatically or by hand, and review the result in the advanced interface.",
        },
        {
          kind: "p",
          text: "The system generates the load plan PDFs, ready to be checked and sent to the haulage company.",
        },
        {
          kind: "callout",
          text: "In the cases the company reported, preparing the plan by hand in AutoCAD took hours. With MGP, the engine returns a proposal in roughly 10-15 seconds, on top of which come entering the data and reviewing the result.",
        },
      ],
    },
    {
      id: "file-preview",
      title: "Previewing the technical files",
      blocks: [
        {
          kind: "p",
          text: "MGP includes viewers for the generated TLF and DXF files, so they can be checked from the platform itself.",
        },
        {
          kind: "p",
          text: "For TLF this answers a specific problem: opening one normally requires proprietary software, a licence dongle, and a workstation that meets particular system requirements.",
        },
        {
          kind: "p",
          text: "The built-in preview allows a first visual check without occupying that workstation just to open a file.",
        },
      ],
    },
    {
      id: "changelog",
      title: "Change log and model backups",
      blocks: [
        {
          kind: "p",
          text: "The platform provides a log for recording who changed a model, when, and what they changed, with the state before and after.",
        },
        {
          kind: "p",
          text: "The log keeps the context around changes to the configurations and makes their history possible to document.",
        },
        {
          kind: "p",
          text: "Separately, models can be exported as JSON and imported again later to restore a saved configuration.",
        },
      ],
    },
    {
      id: "support",
      title: "Support and change requests, built in",
      blocks: [
        {
          kind: "p",
          text: "The customer can report problems, ask for help, and propose new features from inside MGP.",
        },
        {
          kind: "p",
          text: "A request can carry a description, references to the models involved, any error codes, and attachments such as images, PDFs, or spreadsheets. Reports are tracked and categorised automatically.",
        },
        { kind: "p", text: "The system assigns an urgency level from several factors, among them:" },
        {
          kind: "list",
          items: [
            { text: "How many users the problem affects." },
            { text: "Whether the same problem has come up before." },
            { text: "Whether production is blocked." },
            { text: "Whether a workaround exists that lets work continue." },
          ],
        },
        {
          kind: "p",
          text: "The customer can override the level the system assigned, taking responsibility for the change.",
        },
        {
          kind: "p",
          text: "Requests are forwarded to the developers by email and stay visible in the user's history. Support and further development therefore have a structured channel, with the context and material needed to assess each report.",
        },
      ],
    },
    {
      id: "hosting",
      title: "Installed on the company's own server",
      blocks: [
        {
          kind: "p",
          text: "MGP runs on the company's server, keeping work order data, product configurations, and production files in house.",
        },
        {
          kind: "p",
          text: "Running inside their own infrastructure sits alongside the configurability of the system: the company holds its own data and has the means to update the production rules the platform applies.",
        },
      ],
    },
    {
      id: "status",
      title: "A working system that keeps growing",
      blocks: [
        {
          kind: "p",
          text: "The initial core of MGP is finished and in daily use at the company. Later extensions widened the path from preparing work orders to planning transport and talking to the machines.",
        },
        {
          kind: "p",
          text: "The project shows the work of understanding an existing process, reconstructing its rules, and turning them into a system operators can use and the company can configure.",
        },
      ],
    },
  ],
};
