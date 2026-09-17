import type { CaseStudy } from "./types";

export const personalWebsiteIt: CaseStudy = {
  facts: ["Progetto personale in evoluzione"],
  lead: [
    "Questo sito nasce da un'esigenza della mia attività: presentare sviluppo software e fotografia sotto lo stesso nome, aiutando chi arriva a trovare il servizio che cerca. Un'azienda interessata ad automatizzare un processo e uno studente che cerca un fotografo per la laurea hanno domande e criteri di scelta diversi.",
    "Ho curato struttura, contenuti e sviluppo di un sito con due percorsi riconoscibili, una base visiva comune e contatti dedicati. Il progetto comprende il portfolio tecnico, i racconti dei lavori, le offerte fotografiche e le informazioni necessarie per avviare una richiesta.",
  ],
  contact: {
    title: "Il tuo sito deve raccontare più di un servizio?",
    text: "Raccontami la tua attività, chi vuoi raggiungere e cosa dovrebbe poter fare una persona dopo aver visitato il sito. Partiamo dai contenuti e dai percorsi, poi definiamo la soluzione tecnica.",
    button: "Parliamo del tuo sito",
  },
  sections: [
    {
      id: "brief",
      title: "Due pubblici, un'identità professionale",
      blocks: [
        { kind: "p", text: "La prima scelta riguarda l'organizzazione dei contenuti. La home presenta entrambe le attività e offre accessi distinti ai servizi e ai contatti. Il percorso sviluppo porta a problemi affrontati, progetti e casi concreti; quello fotografico porta al metodo di lavoro e ai pacchetti." },
        { kind: "list", items: [
          { term: "Chi cerca sviluppo software", text: "deve capire quali problemi posso affrontare e trovare esempi abbastanza dettagliati da valutare il mio approccio." },
          { term: "Chi cerca un fotografo", text: "deve orientarsi tra servizi, copertura, prezzi di partenza e modalità di contatto." },
          { term: "Chi vuole conoscermi", text: "trova un percorso condiviso con presentazione, esperienze e competenze." },
        ] },
        { kind: "callout", text: "La domanda che guida la pagina è concreta: cosa serve a questa persona per capire se posso aiutarla e decidere di scrivermi?" },
      ],
    },
    {
      id: "visual-system",
      title: "Un linguaggio visivo comune, due accenti",
      blocks: [
        { kind: "p", text: "Il sistema visivo usa fondi neutri, linee sottili e spaziature condivise. Il blu identifica lo sviluppo e il rosso la fotografia. La distinzione ricorre nei pulsanti, nei collegamenti e nella barra di scorrimento, insieme a titoli e descrizioni che rendono comprensibile ogni percorso anche senza affidarsi al colore." },
        { kind: "p", text: "La tipografia segue la stessa logica: un carattere monospaziato accompagna l'apertura della sezione sviluppo, mentre un carattere con grazie dà voce alla fotografia. Il testo corrente mantiene una base comune. Colori e caratteri sono definiti centralmente, così una modifica si propaga ai componenti che li utilizzano." },
        { kind: "p", text: "Il tema chiaro e quello scuro condividono la struttura, con colori dedicati per superfici, testo e contrasti. La preferenza può seguire il sistema oppure essere scelta dal visitatore. Su schermi piccoli le colonne si impilano e la navigazione si raccoglie in un menu." },
      ],
    },
    {
      id: "service-journeys",
      title: "Dal servizio alla richiesta di contatto",
      blocks: [
        { kind: "p", text: "I progetti software possono avere una scheda sintetica oppure un case study con contesto, scelte e funzionamento. La pagina lunga include un indice laterale su desktop e un indice espandibile sui dispositivi piccoli, per rendere consultabili anche racconti tecnici articolati." },
        { kind: "p", text: "Per la fotografia, la pagina lauree approfondisce una singola esigenza: confronta Proclamazione e All Inclusive, mette in evidenza la formula gruppi e riunisce servizi inclusi e domande frequenti. I prezzi sono presentati come importi di partenza, con le condizioni del servizio e delle trasferte." },
        { kind: "p", text: "I pulsanti aprono email precompilate con le informazioni utili per una prima risposta. Una richiesta software propone domande sul processo da migliorare; una richiesta laurea chiede data, sede, orari, gruppo e pacchetto. Due indirizzi separano le attività, mentre il pulsante nell'intestazione segue la sezione visitata." },
        { kind: "p", text: "La scelta delle email mantiene il sito senza un backend per i contatti. Comporta un limite esplicito: il visitatore deve usare un'applicazione di posta e il sito non può confermare che il messaggio sia stato inviato." },
      ],
    },
    {
      id: "architecture",
      title: "React per l'interfaccia, HTML per ogni indirizzo",
      blocks: [
        { kind: "p", text: "L'interfaccia è sviluppata con React e TypeScript, con Tailwind CSS per gli stili e Vite per la build. I componenti condivisi gestiscono intestazione, footer, schede e pagine di dettaglio. I dati dei progetti e i testi dei case study sono separati dalla presentazione." },
        { kind: "p", text: "Il sito è ospitato su GitHub Pages, che serve file statici. Per poter aprire direttamente un progetto da un link, la build genera un documento HTML per ogni rotta pubblicata. React prende poi in carico la navigazione nel browser. Questo passaggio è il prerendering: il contenuto iniziale esiste già nel file consegnato al visitatore." },
        { kind: "list", items: [
          { term: "Metadati per pagina", text: "titolo, descrizione, indirizzo canonico e dati per la condivisione sono associati al contenuto specifico e inseriti anche nell'HTML generato." },
          { term: "Sitemap", text: "gli indirizzi derivano dallo stesso elenco usato per generare le pagine, compresi i dettagli di progetti e presentazioni." },
          { term: "Pubblicazione", text: "GitHub Actions installa le dipendenze, esegue la build e pubblica l'output su GitHub Pages quando vengono integrati aggiornamenti nel ramo principale." },
        ] },
        { kind: "p", text: "Non è presente un pannello editoriale: per aggiornare contenuti e offerte si interviene nei file del progetto e si esegue una nuova build. È una scelta adatta alla gestione diretta del mio sito; per un cliente che aggiorna spesso i contenuti, la necessità di un CMS andrebbe valutata separatamente." },
      ],
    },
    {
      id: "language-and-consent",
      title: "Lingue, risorse locali e statistiche facoltative",
      blocks: [
        { kind: "p", text: "L'interfaccia e i case study sono disponibili in italiano e inglese. Le sezioni dei racconti mantengono gli stessi identificatori nelle due lingue. L'HTML generato dalla build è in italiano: il cambio lingua avviene nel browser e non crea due serie separate di indirizzi indicizzabili." },
        { kind: "p", text: "I caratteri tipografici sono ospitati insieme al sito. L'integrazione GA4 è predisposta per caricare il tag solo dopo il consenso alle statistiche, con rifiuto e revoca accessibili dalle preferenze cookie. I consensi pubblicitari restano negati. I test automatici verificano anche scadenza della scelta, errori di salvataggio e blocco della raccolta negli ambienti locali." },
        { kind: "p", text: "Gli eventi del sito distinguono visite e clic di contatto tra sviluppo e fotografia, senza includere il contenuto dei messaggi precompilati. Il codice filtra i percorsi e rimuove query e frammenti dagli eventi manuali. Il collaudo del tag Google reale e dei dati ricevuti resta distinto dai test del codice." },
      ],
    },
    {
      id: "outcome",
      title: "Cosa dimostra il progetto e come continua",
      blocks: [
        { kind: "p", text: "Il risultato progettuale è un sito in cui servizi, esempi e contatti seguono percorsi coerenti, mantenendo una sola base tecnica e visiva. La pagina che stai leggendo usa lo stesso sistema di contenuti e componenti degli altri case study." },
        { kind: "p", text: "Il progetto mostra il lavoro necessario per passare da una presentazione professionale a un sito mantenibile: organizzare le informazioni, definire un linguaggio visivo, costruire le pagine e gestire la pubblicazione. Le verifiche di build e dei tipi controllano l'integrazione; i test mirati coprono i comportamenti più delicati della raccolta statistica." },
        { kind: "p", text: "L'evoluzione continua con contenuti fotografici e verifiche dell'esperienza reale. Non presento aumenti di traffico, contatti o prenotazioni come risultati acquisiti: per valutarli servono osservazioni nel tempo, e un clic su un indirizzo email rimane diverso da una richiesta ricevuta." },
      ],
    },
  ],
};
