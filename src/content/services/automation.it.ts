import type { ServicePageContent } from "./types";

export const automationIt: ServicePageContent = {
  heading: "Automazione dei processi aziendali",
  subtitle: "Le operazioni ripetitive le fa il software. Le persone controllano il risultato.",
  intro: [
    "Ci sono lavori che si ripetono uguali ogni giorno: copiare dati da un programma all'altro, rifare gli stessi documenti, mandare le stesse email, smistare file nelle cartelle, disegnare a mano un piano di carico. Li automatizzo, partendo dai dati che avete già e dagli strumenti che usate.",
  ],
  cta: "Raccontami cosa rifate a mano",
  mail: {
    subject: "Richiesta dal sito: automazione",
    body: "Ciao Simone,\n\nquale operazione ripetiamo a mano:\n\n\nquanto tempo ci porta via (al giorno o alla settimana):\n\n\ncon quali programmi o macchine:\n\n\nentro quando:\n\n",
  },
  whatsapp: "Ciao Simone, ti scrivo dal sito per un'automazione.",
  sections: [
    {
      id: "ti-riconosci",
      title: "Ti riconosci?",
      blocks: [
        {
          kind: "list",
          items: [
            { text: "Gli stessi dati vengono ricopiati da un file o da un programma all'altro." },
            { text: "Ogni mattina qualcuno ricostruisce a mano il programma della giornata." },
            { text: "Documenti e file per la produzione si preparano a mano a ogni commessa." },
            { text: "I file si spostano e si rinominano a mano nelle cartelle giuste." },
            { text: "Il piano di carico dei camion si disegna in AutoCAD o in Excel, e richiede ore." },
            { text: "I dati per le macchine vengono ricopiati a bordo macchina." },
          ],
        },
      ],
    },
    {
      id: "cosa-automatizzo",
      title: "Cosa posso automatizzare",
      blocks: [
        {
          kind: "cards",
          items: [
            {
              title: "Documenti e file",
              text: "PDF, riepiloghi, DXF e CSV generati dai dati e consegnati già organizzati in un archivio, invece che esportati e smistati a mano.",
              cases: [{ slug: "mgp-gestione-produzione", label: "MGP" }],
            },
            {
              title: "Email, calendario e programmi che si parlano",
              text: "Conferme automatiche, riepiloghi, appuntamenti che compaiono da soli nel calendario, file CSV per passare i dati ad altri software, regole di follow-up.",
              cases: [
                { slug: "mgp-gestione-produzione", label: "MGP" },
                { slug: "freelance-hub", label: "Freelance hub" },
              ],
            },
            {
              title: "Collegamento ai macchinari",
              text: "Il gestionale invia ai macchinari i dati calcolati tramite OPC-UA, quando l'operatore lo chiede, senza ricopiarli a mano.",
              cases: [{ slug: "mgp-gestione-produzione", label: "MGP" }],
            },
            {
              title: "Ottimizzazione e pianificazione",
              text: "Problemi con troppe variabili per risolverli a mano: piani di carico, assegnazioni, pianificazione del lavoro. Li ho affrontati in produzione, in ambito universitario e finanziario.",
              cases: [
                { slug: "mgp-gestione-produzione", label: "MGP" },
                { slug: "freelance-hub", label: "Freelance hub" },
              ],
            },
            {
              title: "Assistenti con l'AI, in locale",
              text: "Classificare le richieste, riassumere, preparare bozze di risposta, con modelli eseguiti sul vostro server e non su un servizio esterno.",
              cases: [{ slug: "freelance-hub", label: "Freelance hub" }],
            },
          ],
        },
      ],
    },
    {
      id: "costi",
      title: "Quanto costa",
      blocks: [
        { kind: "p", text: "Dentro un gestionale, un'automazione è una voce del preventivo. Per darvi un'idea:" },
        {
          kind: "table",
          columns: ["Automazione", "Prezzo indicativo"],
          rows: [
            ["Email di conferma automatica, al cliente e a voi", "da 200 €"],
            ["Riepilogo ogni mattina via email: chi passa, a che ora, cosa ritira", "da 250 €"],
            ["Sincronizzazione con Google Calendar", "da 350 €"],
          ],
        },
        {
          kind: "p",
          text: "Da sola, su programmi o file che avete già (un report, un passaggio di dati tra due programmi, la generazione di documenti, l'ottimizzazione dei carichi, il collegamento ai macchinari), un'automazione ha un prezzo su preventivo: lo definisco dopo aver visto il processo.",
        },
        { kind: "h3", text: "Cosa fa salire il prezzo" },
        {
          kind: "list",
          items: [
            { text: "Quanti programmi o macchine vanno collegati, e se espongono i dati in modo standard." },
            { text: "Quante eccezioni ha il processo." },
            { text: "Se il risultato deve essere modificabile da chi lo usa: in MGP il piano di carico si corregge trascinando i pezzi." },
          ],
        },
      ],
    },
    {
      id: "risparmio",
      title: "Quanto si risparmia?",
      blocks: [
        {
          kind: "p",
          text: "Dipende dal processo, e preferisco non promettere numeri in astratto. Un esempio reale: in MGP il piano di carico passa da ore di disegno in AutoCAD a una proposta in 10-15 secondi, più l'inserimento dei dati e la revisione. Prima di iniziare stimiamo insieme quanto tempo vi porta via oggi l'operazione, così sapete cosa aspettarvi.",
        },
      ],
    },
    {
      id: "assistenza",
      title: "Assistenza",
      blocks: [
        {
          kind: "p",
          text: "Un'automazione lavora su dati e programmi che cambiano: resto il riferimento se qualcosa cambia o smette di funzionare. Assistenza mensile da 150 €/mese, modifiche a 50 €/ora.",
        },
      ],
    },
    {
      id: "lavori",
      title: "Lavori reali",
      blocks: [
        {
          kind: "cases",
          items: [
            {
              slug: "mgp-gestione-produzione",
              label: "MGP",
              text: "Documenti e file di produzione generati dal sistema, piani di carico in 10-15 secondi, collegamento ai macchinari via OPC-UA.",
            },
            {
              slug: "freelance-hub",
              label: "Freelance hub",
              text: "Follow-up, notifiche, integrazioni con calendario ed email, pianificazione del lavoro con un servizio di ottimizzazione.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Dobbiamo cambiare i programmi che usiamo?",
      answer: "Di solito no: si parte da quelli che avete e si collegano. Se un programma non permette di leggere o scrivere i dati, lo vediamo nell'analisi.",
    },
    {
      question: "Le nostre macchine si possono collegare?",
      answer: "Dipende dal macchinario: deve supportare un protocollo come OPC-UA. È la prima cosa da chiedere al costruttore, e posso aiutarvi a capire cosa chiedere.",
    },
    {
      question: "Cosa succede se l'automazione si blocca?",
      answer: "Con l'assistenza attiva il sistema è controllato in automatico, ricevo un avviso e prendo in carico il problema entro 1 giorno lavorativo. Se il problema dipende da un servizio esterno (server, posta, Google), lo segnalo al fornitore.",
    },
  ],
  closing: {
    title: "Cosa rifate a mano ogni settimana?",
    text: "Raccontami l'operazione, quanto tempo vi porta via e con quali programmi o macchine lavorate. Ti rispondo con una proposta e un ordine di grandezza, senza impegno.",
  },
};
