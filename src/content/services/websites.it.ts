import type { ServicePageContent } from "./types";

export const websitesIt: ServicePageContent = {
  heading: "Siti web per professionisti e piccole attività",
  subtitle: "Capire che sito ti serve, prima ancora di quanto costa.",
  intro: [
    "\"Vorrei un sito, ma non capisco la differenza tra i vari tipi.\" È una domanda che sento spesso, ed è giusta: landing page, sito vetrina, portfolio ed e-commerce sono cose diverse, con costi e tempi diversi. Qui trovi le differenze spiegate in modo semplice e un prezzo indicativo per ciascuna.",
    "E se un sito ce l'hai già, non è detto che vada rifatto: spesso basta una messa a punto.",
  ],
  cta: "Scrivimi per un sito",
  mail: {
    subject: "Richiesta dal sito: sito web",
    body: "Ciao Simone,\n\nche attività ho:\n\n\nho già un sito? (se sì, l'indirizzo):\n\n\nche tipo di sito penso mi serva (va bene anche \"non lo so\"):\n\n\nentro quando:\n\n",
  },
  whatsapp: "Ciao Simone, ti scrivo dal sito per un sito web.",
  sections: [
    {
      id: "tipi",
      title: "Che tipo di sito ti serve?",
      blocks: [
        {
          kind: "siteTypes",
          columns: ["Tipo", "Cos'è", "Fa per te se…", "Pagine", "Tempi", "Prezzo"],
          rows: [
            {
              type: "Messa a punto del sito che hai già",
              what: "Correggo i problemi tecnici del sito attuale, senza cambiarne l'aspetto.",
              fit: "Il sito ti piace, ma non porta visite o contatti.",
              pages: "-",
              packageId: "tune-up",
            },
            {
              type: "Landing page",
              what: "Una pagina sola con un obiettivo: farti contattare, presentare un'offerta o un evento.",
              fit: "Hai un servizio o un'iniziativa precisa e chi arriva da social o passaparola deve fare una cosa sola.",
              pages: "1",
              packageId: "landing",
            },
            {
              type: "Portfolio / sito personale",
              what: "Mette al centro te e i tuoi lavori.",
              fit: "Sei un libero professionista o un creativo e i clienti scelgono guardando cosa hai fatto.",
              pages: "3-4",
              packageId: "portfolio",
            },
            {
              type: "Sito vetrina",
              what: "Presenta l'attività: chi sei, cosa fai, dove sei, come contattarti.",
              fit: "Hai un negozio, uno studio o un'attività locale e vuoi essere trovato e dare un'immagine affidabile.",
              pages: "4-5",
              packageId: "showcase",
            },
            {
              type: "Sito con contenuti che cambiano",
              what: "Un sito vetrina con una parte aggiornata spesso: eventi, novità, articoli, menu.",
              fit: "Hai eventi o novità da pubblicare con regolarità.",
              pages: "4-5 + elenco",
              packageId: "events",
            },
            {
              type: "Sito aziendale con catalogo",
              what: "Prodotti organizzati per importanza, pagine dedicate ai prodotti principali, richieste di preventivo per prodotto.",
              fit: "Il sito è il tuo canale di vendita principale, anche verso l'estero.",
              pages: "decine",
              packageId: "catalogue",
            },
            {
              type: "Negozio online",
              what: "Catalogo, carrello e pagamenti.",
              fit: "Vuoi vendere e incassare online.",
              pages: "-",
              other: { text: "Non lo realizzo. Se ti basta mostrare i prodotti e ricevere richieste di preventivo, guarda il sito aziendale con catalogo." },
            },
            {
              type: "Applicazione web / gestionale",
              what: "Non è un sito ma uno strumento di lavoro: utenti, dati, calcoli, documenti.",
              fit: "Devi gestire clienti, ordini o processi, non solo presentarti.",
              pages: "-",
              other: { text: "Vedi", to: "/development/gestionali-crm/", label: "Gestionali e CRM" },
            },
          ],
        },
        {
          kind: "p",
          text: "I prezzi sono a partire da: ogni pacchetto qui sotto dice cosa comprende il prezzo minimo. Non comprendono canoni e servizi di terzi: hosting, dominio, grafica (logo e identità visiva), consulenza e testi per la privacy, foto d'archivio. I tempi partono da quando ho acconto, testi e foto.",
        },
      ],
    },
    {
      id: "pacchetti",
      title: "Pacchetti",
      blocks: [
        {
          kind: "packages",
          items: [
            {
              id: "tune-up",
              title: "Messa a punto del sito che hai già",
              fromPrice: 450,
              weeks: "2-3 settimane",
              body: "Correggo i problemi tecnici che penalizzano il sito su Google e fanno perdere contatti, senza cambiarne l'aspetto: lingue collegate tra loro, titoli e descrizioni, link e PDF che portano a pagine di errore, pagine duplicate, pulsante per chiedere un preventivo, statistiche sistemate se il sito le usa. Il prezzo minimo vale per un sito fino a circa 20 pagine in una lingua.",
              fit: "l'aspetto del sito ti va bene e vuoi un intervento contenuto.",
              limits: "la struttura resta quella attuale.",
              note: "Comprende un controllo dei risultati 3 mesi dopo la consegna. Prima del preventivo analizzo il sito: il costo dell'analisi dipende da quanto deve essere approfondita, e te lo dico prima di iniziare.",
            },
            {
              id: "landing",
              title: "Landing page",
              fromPrice: 600,
              weeks: "2-3 settimane",
              body: "Per un servizio, un'offerta o un evento. Comprende: una pagina fino a 6 sezioni, pulsanti email e WhatsApp, ottimizzazione tecnica, 1 giro di revisione grafica e 1 di verifica, pubblicazione.",
              fit: "hai un obiettivo solo.",
              limits: "non presenta tutta l'attività.",
            },
            {
              id: "portfolio",
              title: "Portfolio / sito personale",
              fromPrice: 1200,
              weeks: "4-6 settimane",
              body: "Per professionisti e creativi. Comprende: fino a 4 pagine, galleria dei lavori o casi studio, profilo, contatti, ottimizzazione tecnica, 1 giro di revisione grafica e 1 di verifica. Questo sito è un esempio.",
              fit: "i clienti ti scelgono guardando i tuoi lavori.",
            },
            {
              id: "showcase",
              title: "Sito vetrina",
              fromPrice: 1400,
              weeks: "5-6 settimane",
              body: "Per attività locali e studi. Comprende: fino a 5 pagine (per esempio home, chi siamo, servizi, contatti), mappa e orari, ottimizzazione tecnica, 1 giro di revisione grafica e 1 di verifica, pubblicazione.",
              fit: "vuoi essere trovato in zona e dare un'immagine affidabile.",
              limits: "i contenuti cambiano di rado; per novità frequenti c'è il pacchetto successivo.",
            },
            {
              id: "events",
              title: "Sito con eventi o novità",
              fromPrice: 1900,
              weeks: "6-8 settimane",
              body: "Per associazioni, club, locali. Comprende: sito vetrina e sezione eventi o novità, che aggiorno io su tua richiesta. Esempio reale: Salso Running Club.",
              fit: "hai eventi o novità da pubblicare con regolarità.",
              limits: "senza pannello, ogni aggiornamento passa da me (il pannello è tra gli extra).",
            },
            {
              id: "catalogue",
              title: "Sito aziendale con catalogo",
              fromPrice: 3000,
              weeks: "10-12 settimane",
              body: "Per aziende che vendono attraverso il sito. Comprende: grafica sul marchio, catalogo organizzato per importanza, 5 pagine dedicate ai prodotti principali con un modulo di richiesta per prodotto, 1-2 lingue, ottimizzazione tecnica. Se hai già un sito, comprende il trasferimento dei contenuti attuali, quando il formato dei contenuti e la piattaforma di oggi lo permettono: lo verifico prima del preventivo.",
              limits: "non è un negozio online, i prodotti non si comprano dal sito.",
              note: "Si può partire con meno pagine dedicate e aggiungerne dopo, pagando solo la differenza.",
            },
          ],
        },
        { kind: "h3", text: "Extra" },
        {
          kind: "table",
          columns: ["Voce", "Prezzo"],
          rows: [
            ["Pagina in più", "da 100 €"],
            ["Pagina in un'altra lingua, con traduzione fornita da te", "da 40 € a pagina"],
            ["Pannello per aggiornare da solo eventi o novità", "da 500 €"],
            ["Testi scritti da me, modifiche, giri di revisione in più", "50 €/ora"],
            ["Foto per il sito", "mezza giornata da 400 €, giornata da 650 €"],
          ],
        },
      ],
    },
    {
      id: "compreso",
      title: "Cosa comprende ogni sito",
      blocks: [
        {
          kind: "list",
          items: [
            { term: "Progettato sul tuo marchio", text: "non un tema preso da un catalogo e lasciato com'è." },
            { term: "Pensato per smartphone e computer", text: "si legge bene su qualsiasi schermo." },
            { term: "Veloce da caricare", text: "immagini ottimizzate e pagine leggere." },
            { term: "Ottimizzazione tecnica per Google", text: "titoli e descrizioni per ogni pagina, sitemap, indirizzo ufficiale di ogni pagina (canonical), dati strutturati, e lingue collegate tra loro se il sito ne ha più di una." },
            { term: "Richieste di contatto facili", text: "pulsante ben visibile, telefono ed email cliccabili da smartphone." },
            { term: "Anteprima privata", text: "il sito lo vedi online, su un indirizzo protetto e invisibile a Google, prima della pubblicazione." },
            { term: "Niente cookie di tracciamento se non servono", text: "se il sito non ne ha bisogno non li metto, e non c'è nessun banner da gestire, come per il Salso Running Club." },
            { term: "Altre lingue", text: "a parte, tra gli extra." },
          ],
        },
      ],
    },
    {
      id: "costi",
      title: "Cosa fa salire il prezzo, e cosa resta fuori",
      blocks: [
        { kind: "h3", text: "Cosa fa salire il prezzo" },
        {
          kind: "list",
          items: [
            { text: "Più pagine o più lingue." },
            { text: "Testi da scrivere da zero, invece che forniti da te." },
            { text: "Foto da fare." },
            { text: "Un'area che aggiorni da solo." },
            { text: "Funzioni in più: prenotazioni, moduli, newsletter, area riservata." },
            { text: "Contenuti da trasferire da un sito vecchio o da più siti." },
            { text: "Più giri di revisione." },
          ],
        },
        { kind: "h3", text: "Cosa non è compreso" },
        {
          kind: "list",
          items: [
            { text: "Canoni ricorrenti: dominio, hosting e servizi di terzi." },
            { text: "Grafica: logo e identità visiva. Se non li hai, posso lavorare con un designer, con un preventivo a parte, come ho fatto per il Salso Running Club." },
            { text: "Testi nuovi e traduzioni: li fornisci tu. Su richiesta ti indico un traduttore." },
            { text: "Consulenza e testi legali di privacy e cookie: li prepara il tuo consulente o un servizio dedicato. L'installazione tecnica del banner invece è compresa." },
            { text: "Foto d'archivio a pagamento." },
            { text: "Campagne pubblicitarie." },
          ],
        },
        { kind: "h3", text: "Dopo la consegna" },
        {
          kind: "table",
          columns: ["Voce", "Costo", "Cosa comprende"],
          rows: [
            ["Dominio e hosting", "costo del fornitore", "Intestati a te. Se hai già un hosting, il sito resta lì."],
            ["Assistenza mensile", "da 150 €/mese", "Controllo automatico del sito, statistiche (Google Analytics, Search Console, scheda Google Business) con un report mensile, copia di sicurezza, verifica dei moduli di contatto, presa in carico entro 1 giorno lavorativo. Nessun rinnovo automatico."],
            ["Aggiornamenti dei contenuti", "50 €/ora", "Nuove pagine, prodotti, novità, testi. Anche con pacchetti di ore prepagate."],
          ],
        },
      ],
    },
    {
      id: "foto",
      title: "Sito e foto dallo stesso professionista",
      blocks: [
        {
          kind: "p",
          text: "Sono anche fotografo: le foto del sito (locale, prodotti, macchine, team, ritratti) posso farle io, con lo stesso stile delle pagine. Ti eviti di coordinare due persone e il sito non usa foto prese da archivi online.",
        },
        {
          kind: "list",
          items: [
            { term: "Mezza giornata da 400 €, giornata intera da 650 €", text: "con post-produzione e consegna in alta risoluzione. Trasferte oltre 50 km a parte." },
            { term: "Licenza d'uso", text: "le foto le usi per la tua comunicazione: sito, cataloghi, fiere, social, pubblicità." },
            { term: "Nuova apertura", text: "sito vetrina e foto del locale, dei prodotti e dell'inaugurazione." },
            { term: "Profilo professionale", text: "sito personale e ritratti, da usare anche su LinkedIn." },
            { term: "Immagine aziendale", text: "sito e foto di prodotti, reparto e team." },
          ],
        },
        { kind: "links", items: [{ to: "/photography/", label: "Guarda le fotografie" }] },
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
              slug: "salso-running-club",
              label: "Salso Running Club",
              text: "Sito per un running club di Salsomaggiore, costruito sull'identità visiva di una designer. Quattro pagine, pensate per lo smartphone, senza cookie né banner.",
            },
            {
              slug: "personal-website",
              label: "Questo sito",
              text: "Due attività, due pubblici, un'identità professionale, in italiano e in inglese.",
            },
          ],
        },
      ],
    },
    {
      id: "come-lavoro",
      title: "Come lavoro",
      blocks: [
        {
          kind: "steps",
          items: [
            { term: "Analisi e incontro", text: "guardo il sito che hai, se ce l'hai, e parliamo di obiettivi e clienti." },
            { term: "Proposte scritte", text: "di solito due o tre alternative, ognuna con il suo prezzo, cosa comprende e i suoi limiti. Si possono togliere o aggiungere singole voci." },
            { term: "Grafica", text: "una proposta grafica, con un giro di revisione." },
            { term: "Sviluppo in anteprima", text: "vedi il sito su un indirizzo protetto, con un giro di verifica prima della pubblicazione." },
            { term: "Pubblicazione", text: "gli indirizzi delle pagine vecchie restano collegati ai nuovi, così non perdi le visite da Google." },
            { term: "Dopo", text: "se ti serve, l'assistenza continua. Quando i primi mesi sono compresi, lo trovi scritto nel preventivo." },
          ],
        },
        { kind: "p", text: "Si paga a fasi: acconto alla firma, poi a ogni consegna approvata. Al saldo sito, codice e contenuti sono tuoi." },
        { kind: "callout", text: "Seguo pochi progetti alla volta per garantire la massima qualità." },
      ],
    },
  ],
  faqs: [
    {
      question: "Non so che tipo di sito mi serve. Puoi aiutarmi?",
      answer: "Sì, è il punto da cui partire. Scrivimi cosa fai e da dove arrivano i clienti. A volte la risposta è \"per ora ti basta la scheda Google\", e te lo dico.",
    },
    {
      question: "Il sito è mio?",
      answer: "Sì. Al saldo il sito, il codice e i contenuti sono tuoi. Dominio, hosting e account Google sono intestati a te fin dall'inizio.",
    },
    {
      question: "Posso aggiornarlo da solo?",
      answer: "Dipende dal tipo. Un sito vetrina cambia di rado e gli aggiornamenti posso farli io, a 50 € l'ora o con un pacchetto di ore. Se pubblichi spesso eventi o novità, si può aggiungere un pannello per farlo da solo, da 500 €.",
    },
    {
      question: "Fai anche negozi online?",
      answer: "No. Se però ti basta mostrare i prodotti e ricevere richieste di preventivo, senza pagamenti sul sito, il sito aziendale con catalogo fa al caso tuo.",
    },
    {
      question: "Arriverò primo su Google?",
      answer: "Nessuno può garantire una posizione: dipende anche dalla concorrenza e da Google. Il sito nasce con le basi tecniche fatte bene, e per un'attività locale conta molto anche la scheda Google Business, che ti aiuto a impostare.",
    },
    {
      question: "Quanto ci vuole?",
      answer: "Una landing page o una messa a punto 2-3 settimane, un portfolio 4-6, un sito vetrina 5-6, un sito con eventi 6-8, un sito aziendale con catalogo 10-12. I tempi partono quando ho acconto, accessi, testi e foto: di solito il ritardo più grande è aspettare i testi.",
    },
    {
      question: "Ho già un sito vecchio. Si può rifare?",
      answer: "Sì. Mantengo gli indirizzi delle pagine attuali o li collego ai nuovi, così non perdi il posizionamento già raggiunto. Spesso però basta una messa a punto.",
    },
  ],
  closing: {
    title: "Non sai ancora che sito ti serve?",
    text: "Scrivimi cosa fai e da dove arrivano i tuoi clienti. Ti rispondo con il tipo di sito che consiglierei e un prezzo, senza impegno.",
  },
};
