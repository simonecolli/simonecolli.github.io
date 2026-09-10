import type { CaseStudy } from "./types";

export const freelanceHubIt: CaseStudy = {
  facts: ["Progetto personale", "In uso sul mio server", "In validazione attiva"],

  lead: [
    "Freelance Hub è un gestionale che ho sviluppato per riunire in un unico ambiente le informazioni e le attività del mio lavoro da libero professionista: contatti commerciali, clienti, progetti, richieste, preventivi, contratti, pagamenti e pianificazione del tempo.",
    "Il progetto nasce da un'esigenza personale concreta. Gestivo clienti e progetti attraverso cartelle e appunti in Obsidian, mentre le richieste arrivavano tramite moduli separati, email e WhatsApp. I preventivi venivano preparati da un template e inviati via email. Le informazioni esistevano, ma erano distribuite tra strumenti diversi e dovevano essere mantenute e ricostruite manualmente.",
    "Inizialmente stavo valutando di affiancare l'attività professionale a un dottorato. Ho quindi iniziato a costruire strumenti che mi aiutassero a organizzare il tempo e ridurre il lavoro amministrativo. Anche se quel percorso accademico non si è poi concretizzato, il bisogno è rimasto: seguire il lavoro da un punto unico e capire come sta andando l'attività.",
  ],

  sections: [
    {
      id: "first-contact",
      title: "Dal primo contatto al progetto",
      blocks: [
        {
          kind: "p",
          text: "Il percorso può iniziare dalla registrazione di un potenziale cliente, con informazioni sull'attività, note, provenienza del contatto e stato della trattativa.",
        },
        {
          kind: "figure",
          diagram: "fh-flow",
          caption: "Le stesse informazioni, prima e dopo: gli strumenti che le tenevano senza conoscersi tra loro, e la catena che oggi va dal contatto all'incasso e alimenta le analisi.",
        },
        {
          kind: "p",
          text: "Quando il contatto si concretizza, una funzione permette di convertirlo in cliente e creare un progetto collegato. Ogni cliente può avere più progetti, ciascuno con informazioni, stato di avanzamento, budget e stime del tempo necessario.",
        },
        {
          kind: "p",
          text: "Le schede raccolgono il contesto del rapporto: richieste, progetti, comunicazioni, note e documenti. Questo permette di consultare le informazioni senza doverle cercare tra cartelle e conversazioni separate.",
        },
        {
          kind: "p",
          text: "Attualmente utilizzo Freelance Hub come strumento interno per la mia attività. L'accesso diretto da parte dei clienti è un ambito ancora da validare.",
        },
      ],
    },
    {
      id: "requests",
      title: "Richieste e lavoro svolto",
      blocks: [
        {
          kind: "p",
          text: "Le richieste sono organizzate per cliente e progetto, con tipologia, priorità, stato e scadenza.",
        },
        {
          kind: "p",
          text: "Il sistema prevede la registrazione delle attività, delle durate stimate ed effettive, delle comunicazioni e dei costi associati. La struttura permette di collegare ciò che è stato richiesto al lavoro svolto e alle risorse impiegate.",
        },
        {
          kind: "p",
          text: "Le note possono essere organizzate per contesto e categoria, mantenendo insieme indicazioni operative e informazioni utili al progetto.",
        },
      ],
    },
    {
      id: "quotes-contracts",
      title: "Preventivi, contratti e rendicontazione",
      blocks: [
        {
          kind: "p",
          text: "Freelance Hub comprende la preparazione di preventivi e contratti a partire dai dati già presenti nel gestionale.",
        },
        {
          kind: "p",
          text: "Il flusso dei preventivi prevede la generazione di PDF e la creazione del progetto a seguito della registrazione dell'accettazione. I contratti utilizzano modelli compilabili con le informazioni del cliente e del progetto.",
        },
        {
          kind: "p",
          text: "La sezione report permette di selezionare cliente, progetto e periodo, scegliendo se includere note e dettaglio delle ore. L'obiettivo è riutilizzare le informazioni registrate durante il lavoro anche per la rendicontazione.",
        },
      ],
    },
    {
      id: "payments",
      title: "Pagamenti, spese e disponibilità",
      blocks: [
        {
          kind: "p",
          text: "Il gestionale permette di registrare gli incassi, consultarne i dettagli e correggere eventuali inserimenti errati. I pagamenti possono essere associati al cliente e al progetto, mantenendo data, importo, metodo e riferimento.",
        },
        {
          kind: "p",
          text: "La vista economica distingue il totale ricevuto dalle somme accantonate per le tasse e dall'importo disponibile dopo l'accantonamento.",
        },
        {
          kind: "p",
          text: "Sono presenti inoltre la gestione delle tariffe, delle spese aziendali e delle entrate ricorrenti. Le ricorrenze consentono di rappresentare rapporti continuativi, come manutenzioni e compensi periodici, accanto ai lavori occasionali.",
        },
      ],
    },
    {
      id: "intelligence",
      title: "Business intelligence per orientare l'attività",
      blocks: [
        {
          kind: "callout",
          text: "Nel primo anno da libero professionista, uno dei bisogni principali era capire quale andamento potesse avere l'attività nei mesi successivi.",
        },
        {
          kind: "p",
          text: "Per questo ho integrato un modulo di business intelligence. La funzione che utilizzo maggiormente è la previsione degli incassi: una vista che collega storico, entrate ricorrenti e andamento recente per costruire proiezioni sui mesi futuri.",
        },
        {
          kind: "figure",
          diagram: "fh-forecast",
          caption: "La previsione parte dai mesi già registrati e dalla quota ricorrente, e proietta i successivi; i riepiloghi si leggono a tre, sei e dodici mesi.",
        },
        {
          kind: "p",
          text: "Il pannello presenta riepiloghi a tre, sei e dodici mesi, insieme al grafico dello storico e delle previsioni. Le proiezioni costituiscono un riferimento per la pianificazione, basato sui dati registrati.",
        },
        { kind: "p", text: "Le altre analisi disponibili comprendono:" },
        {
          kind: "list",
          items: [
            { text: "Ricavi e margini, considerando costi dei progetti e spese aziendali." },
            { text: "Confronto tra ore stimate ed effettivamente lavorate." },
            { text: "Rapporto tra incassi e ore, confrontato con le tariffe nominali." },
            { text: "Opportunità commerciali e conversioni per fonte di acquisizione." },
            { text: "Distribuzione e andamento delle richieste." },
            { text: "Feedback e valutazioni registrate." },
            { text: "Storico e proiezioni del valore economico dei rapporti con i clienti." },
          ],
        },
        {
          kind: "p",
          text: "Questi strumenti hanno oggi frequenze di utilizzo differenti. Le previsioni sono centrali nel mio uso quotidiano; le analisi più dettagliate di tariffe e redditività accompagnano la progressiva raccolta dei dati.",
        },
      ],
    },
    {
      id: "planning",
      title: "Pianificare il carico di lavoro",
      blocks: [
        {
          kind: "p",
          text: "Freelance Hub include un'area dedicata alla disponibilità e alla pianificazione delle attività.",
        },
        {
          kind: "p",
          text: "È possibile impostare ore lavorative, eccezioni per singole giornate e blocchi fissi, includendo anche impegni personali. Le viste settimanali, mensili e annuali permettono di confrontare il tempo disponibile con quello già occupato.",
        },
        {
          kind: "figure",
          diagram: "fh-schedule",
          caption: "Le ore dichiarate disponibili, gli impegni che non si spostano e le attività che il servizio di ottimizzazione colloca in quello che resta.",
        },
        {
          kind: "p",
          text: "Un servizio di ottimizzazione utilizza le stime delle attività e i vincoli configurati per elaborare proposte di pianificazione. L'obiettivo è distribuire il lavoro tenendo conto delle scadenze e degli altri impegni.",
        },
        {
          kind: "p",
          text: "Riepiloghi giornalieri, annotazione degli ostacoli e monitoraggio delle abitudini completano questa parte, mantenendo il legame con l'esigenza iniziale di organizzare insieme lavoro e tempo personale.",
        },
      ],
    },
    {
      id: "photo-events",
      title: "Gestione degli eventi fotografici",
      blocks: [
        {
          kind: "p",
          text: "Accanto ai progetti di sviluppo, Freelance Hub comprende una modalità dedicata agli eventi fotografici.",
        },
        {
          kind: "p",
          text: "Un evento può coinvolgere più acquirenti, invece di corrispondere a un solo cliente. La struttura permette di raccogliere le richieste e i pagamenti collegati e di analizzare gli incassi dell'evento, il numero di acquirenti e l'importo medio degli acquisti.",
        },
        {
          kind: "p",
          text: "Questa modalità è stata pensata anche in vista dell'integrazione con il sistema di vendita e consegna delle fotografie che sto costruendo. Il collegamento tra i due progetti rappresenta un'estensione prevista.",
        },
      ],
    },
    {
      id: "automation",
      title: "Automazioni e strumenti di supporto",
      blocks: [
        {
          kind: "p",
          text: "La piattaforma comprende ulteriori moduli per ridurre le attività ripetitive: template per le email, regole di follow-up, notifiche, integrazioni con calendario e posta elettronica e collegamenti con altri sistemi.",
        },
        {
          kind: "p",
          text: "È presente anche un assistente con supporto a modelli linguistici eseguiti tramite Ollama o LM Studio. Le funzioni implementate comprendono suggerimenti di classificazione e stima delle richieste, riepiloghi e bozze di risposta.",
        },
        {
          kind: "p",
          text: "Completano il gestionale la gestione dei collaboratori, il registro delle attività e una sezione per preparare ed esportare case study destinati al portfolio.",
        },
      ],
    },
    {
      id: "status",
      title: "Installazione e stato del progetto",
      blocks: [
        {
          kind: "p",
          text: "Freelance Hub è installato sul mio server di casa e viene utilizzato nella gestione dell'attività. La scelta di un'infrastruttura propria risponde anche al desiderio di mantenere maggiore controllo sui dati dei clienti.",
        },
        {
          kind: "p",
          text: "Il progetto è in validazione attiva: l'utilizzo quotidiano serve a verificare i flussi, individuare anomalie e affinare le funzioni in base alle necessità reali.",
        },
        {
          kind: "callout",
          text: "Il suo valore nasce dal collegamento tra informazioni prima disperse: dal contatto commerciale al progetto, dal lavoro svolto all'incasso, fino alla lettura dell'andamento complessivo dell'attività.",
        },
      ],
    },
  ],
};
