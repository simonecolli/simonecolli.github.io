import type { ServicePageContent } from "./types";

export const businessIt: ServicePageContent = {
  heading: "Gestionali e CRM su misura",
  subtitle: "Un sistema costruito sul tuo modo di lavorare, non il contrario.",
  intro: [
    "Clienti in un file, ordini al telefono, preventivi in un altro file, e lo stesso dato ricopiato tre volte prima di arrivare a destinazione. Costruisco gestionali e CRM che mettono queste informazioni in un posto solo, con le regole della tua attività dentro il software e non nella testa di chi sa usare il file Excel.",
    "Si usano dal computer e dallo smartphone.",
  ],
  cta: "Raccontami come lavori oggi",
  mail: {
    subject: "Richiesta dal sito: gestionale o CRM",
    body: "Ciao Simone,\n\ncosa gestiamo oggi e con quali strumenti (Excel, email, telefono, programmi…):\n\n\nquante persone lo userebbero:\n\n\ncosa vorremmo ottenere:\n\n\nentro quando:\n\n",
  },
  whatsapp: "Ciao Simone, ti scrivo dal sito per un gestionale o un CRM.",
  sections: [
    {
      id: "ti-riconosci",
      title: "Ti riconosci?",
      blocks: [
        {
          kind: "list",
          items: [
            { text: "Lo stesso dato viene inserito più volte, in file diversi." },
            { text: "Gli ordini arrivano al telefono e i conti di quanto resta si fanno a mano." },
            { text: "Preventivi e documenti si rifanno a mano a ogni commessa." },
            { text: "Clienti e richieste sono sparsi tra email, WhatsApp, cartelle e appunti." },
            { text: "C'è un file Excel che funziona solo se lo usa una certa persona." },
            { text: "Hai provato un software pronto, ma ti obbligava a cambiare il modo di lavorare." },
          ],
        },
      ],
    },
    {
      id: "cosa-costruisco",
      title: "Cosa posso costruire",
      blocks: [
        {
          kind: "cards",
          items: [
            {
              title: "CRM",
              text: "Contatti, trattative, clienti e progetti collegati: dal primo contatto al preventivo accettato.",
              cases: [{ slug: "freelance-hub", label: "Freelance Hub" }],
            },
            {
              title: "Gestionale di commesse e produzione",
              text: "Dalla commessa ai documenti e ai file per la produzione, generati dal sistema.",
              cases: [{ slug: "mgp-gestione-produzione", label: "MGP" }],
            },
            {
              title: "Ordini e capacità produttiva",
              text: "Il sistema tiene il conto di quanto puoi ancora produrre e propone il primo giorno libero.",
            },
            {
              title: "Preventivi, contratti e documenti",
              text: "PDF generati dai dati già inseriti, senza ricopiarli in un modello.",
              cases: [{ slug: "freelance-hub", label: "Freelance Hub" }],
            },
            {
              title: "Prodotti configurabili",
              text: "L'azienda definisce da sola modelli, formule e regole, senza toccare il codice.",
              cases: [{ slug: "mgp-gestione-produzione", label: "MGP" }],
            },
            {
              title: "Report e previsioni",
              text: "Incassi, margini, ore stimate e lavorate, previsioni sui mesi successivi.",
              cases: [{ slug: "freelance-hub", label: "Freelance Hub" }],
            },
            {
              title: "Area clienti",
              text: "I tuoi clienti accedono, vedono i loro ordini, prenotano o scaricano.",
              cases: [{ slug: "photography-delivery", label: "Photo Delivery (prototipo)" }],
            },
          ],
        },
      ],
    },
    {
      id: "pronto-o-su-misura",
      title: "Software pronto o su misura?",
      blocks: [
        { kind: "p", text: "Non sempre serve un software su misura, e conviene saperlo prima di spendere." },
        {
          kind: "list",
          items: [
            { term: "Software pronto", text: "basta se il tuo processo è simile a quello di tante altre attività, se lo usano poche persone e ti va bene adattarti al programma." },
            { term: "Su misura", text: "conviene se il processo è il tuo punto di forza e non vuoi stravolgerlo, se oggi vive in molti file Excel collegati tra loro, o se il gestionale deve parlare con altri programmi o con le macchine." },
          ],
        },
        { kind: "p", text: "Se dopo l'analisi la risposta è \"ti basta un software pronto\", te lo dico." },
      ],
    },
    {
      id: "costi",
      title: "Quanto costa",
      blocks: [
        {
          kind: "p",
          text: "Un gestionale non ha un prezzo di listino: dipende da quanti processi copre e da quanto sono complessi. Per darti un'idea, questi sono gli ordini di grandezza.",
        },
        {
          kind: "packages",
          items: [
            {
              id: "single-process",
              title: "Gestionale per un processo",
              fromPrice: 2000,
              approx: true,
              weeks: "circa 4 settimane",
              body: "Per esempio ordini e capacità produttiva, con conferme automatiche via email e uso da smartphone.",
            },
            {
              id: "integrations",
              title: "Con automazioni e integrazioni",
              fromPrice: 3000,
              approx: true,
              weeks: "5-6 settimane",
              body: "In più, per esempio: fasce orarie, un riepilogo ogni mattina via email, sincronizzazione con Google Calendar.",
            },
            {
              id: "client-area",
              title: "Con area clienti",
              fromPrice: 5000,
              approx: true,
              weeks: "8-10 settimane",
              body: "In più, i tuoi clienti accedono e prenotano da soli, con regole che evitano le sovraprenotazioni.",
            },
            {
              id: "platform",
              title: "Piattaforma con configurazione, calcoli e integrazioni",
              body: "Come MGP: prodotti configurabili dall'azienda, calcoli, documenti e file di produzione, pianificazione dei carichi, collegamento ai macchinari. Si sviluppa per passi.",
            },
          ],
        },
        {
          kind: "callout",
          text: "Si parte dal necessario. Ogni proposta è fatta di voci separate: si può partire dalla versione base e aggiungere funzioni dopo, pagando solo la differenza.",
        },
        { kind: "h3", text: "Cosa fa salire il prezzo" },
        {
          kind: "list",
          items: [
            { text: "Numero di processi e di tipi di utente." },
            { text: "Un'area per i tuoi clienti, con accessi e regole." },
            { text: "Documenti e file da generare." },
            { text: "Collegamenti con altri software o sistemi: calendario, email, contabilità, macchinari." },
            { text: "Dati da recuperare dai file Excel di oggi." },
          ],
        },
        { kind: "h3", text: "Cosa di solito non è compreso" },
        {
          kind: "list",
          items: [
            { text: "App da pubblicare su App Store o Google Play: la web app si installa sul telefono senza passare dagli store." },
            { text: "Notifiche push: gli avvisi arrivano via email." },
            { text: "Pagamenti online, fatturazione e collegamento alla contabilità." },
            { text: "Funzionamento senza connessione." },
            { text: "Testi legali per i tuoi clienti, come l'informativa privacy." },
          ],
        },
      ],
    },
    {
      id: "dati",
      title: "Dove gira, di chi sono i dati e di chi è il software",
      blocks: [
        {
          kind: "list",
          items: [
            { term: "Il server è intestato a te", text: "lo paghi direttamente tu, e io ho l'accesso da amministratore per l'assistenza. Anche posta e account Google restano tuoi." },
            { term: "I dati sono tuoi", text: "clienti, ordini, prezzi e statistiche si possono esportare in qualsiasi momento." },
            { term: "La proprietà intellettuale del software resta mia", text: "il codice, la struttura del database, la documentazione e la base tecnica che riutilizzo nei miei progetti. Al saldo ricevi una licenza d'uso perpetua per la tua attività; il codice sorgente non viene consegnato." },
          ],
        },
      ],
    },
    {
      id: "sicurezza",
      title: "Sicurezza e dati personali",
      blocks: [
        {
          kind: "list",
          items: [
            { term: "Sicuro fin dal progetto", text: "dati personali cifrati anche nei backup, connessioni HTTPS, password mai salvate in chiaro, ogni utente vede solo quello che gli serve." },
            { term: "Solo i dati necessari", text: "si raccoglie quello che serve al lavoro, niente di più." },
            { term: "Responsabile del trattamento", text: "per lo sviluppo e l'assistenza firmo un accordo di nomina a responsabile del trattamento (art. 28 GDPR)." },
            { term: "Il resto del GDPR", text: "le misure tecniche aiutano ma non bastano da sole: informativa e registro dei trattamenti restano a cura tua, come titolare." },
          ],
        },
      ],
    },
    {
      id: "come-lavoro",
      title: "Il mio metodo di lavoro",
      blocks: [
        {
          kind: "steps",
          items: [
            { term: "Colloquio", text: "sul processo di oggi, con obiettivi e vincoli." },
            { term: "Proposte scritte", text: "di solito tre versioni (base, intermedia, completa), ognuna con cosa comprende, a chi è adatta, i suoi limiti e i tempi." },
            { term: "Sviluppo", text: "schermate e regole di calcolo da approvare lungo la strada, con un giro di revisione compreso." },
            { term: "Collaudo", text: "alla consegna hai un numero concordato di giorni per provare il sistema; i malfunzionamenti li correggo senza costi." },
            { term: "Messa in uso", text: "l'assistenza si aggiunge se serve." },
          ],
        },
        { kind: "p", text: "Il pagamento è diviso in milestone concordate in fase di preventivo." },
      ],
    },
    {
      id: "assistenza",
      title: "Assistenza",
      blocks: [
        {
          kind: "list",
          items: [
            { term: "Assistenza mensile, da 150 €/mese", text: "controllo automatico del sistema, presa in carico entro 1 giorno lavorativo, verifica dei backup e degli aggiornamenti di sicurezza, report mensile con le statistiche di utilizzo." },
            { term: "Modifiche e nuove funzioni", text: "si pagano a ore o con pacchetti di ore prepagati." },
            { term: "Attività stagionali", text: "l'assistenza può fermarsi fuori stagione." },
            { term: "Senza assistenza attiva", text: "gli aggiornamenti di sicurezza non sono garantiti." },
          ],
        },
      ],
    },
    {
      id: "lavori",
      title: "Alcuni lavori reali",
      blocks: [
        {
          kind: "cases",
          items: [
            {
              slug: "mgp-gestione-produzione",
              label: "MGP, gestione della produzione per un'azienda manifatturiera",
              text: "Da 7-8 schede Excel per commessa a un sistema che genera calcoli, documenti e file di produzione. Prodotti configurabili dall'azienda senza modificare il software.",
            },
            {
              slug: "freelance-hub",
              label: "Freelance Hub, CRM e gestionale per la mia attività",
              text: "Dal contatto al progetto, dal lavoro svolto all'incasso, con previsioni sui mesi successivi.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Posso continuare a usare Excel?",
      answer: "Sì, il passaggio non deve essere tutto in una volta, e i dati si possono sempre esportare in Excel.",
    },
    {
      question: "Potrò modificare qualcosa da solo?",
      answer: "Dipende da cosa cambia più spesso. In MGP l'azienda modifica prodotti, formule e documenti da tabelle, senza toccare il codice.",
    },
    {
      question: "Serve un'app da scaricare?",
      answer: "No: è una web app che si installa sul telefono con un'icona, come un'app, senza passare dagli store.",
    },
    {
      question: "Quanto ci vuole?",
      answer: "Indicativamente da 4 settimane per un gestionale su un processo a 8-10 per uno con area clienti, mentre progetti come MGP richiedono più tempo e si sviluppano per passi. Considera però che i tempi dipendono molto anche da te: da quanto velocemente rispondi alle domande, provi le schermate e mi dai un riscontro.",
    },
    {
      question: "E se poi servono modifiche?",
      answer: "Le facciamo, a ore o con un pacchetto di ore prepagate.",
    },
  ],
  closing: {
    title: "Come lavori oggi?",
    text: "Raccontami cosa gestisci, con quali strumenti e cosa vorresti ottenere. Ti rispondo con una proposta scritta e una stima dei costi, senza impegno.",
  },
};
