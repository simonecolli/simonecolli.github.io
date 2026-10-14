import type { CaseStudy } from "./types";

export const salsoRunningClubIt: CaseStudy = {
  facts: ["Sito per un running club", "In collaborazione con una designer", "Online"],
  lead: [
    "Salso Running Club è un running club di Salsomaggiore Terme nato da un gruppo di amici. Non ci sono iscrizioni né quote: le uscite si organizzano in un gruppo WhatsApp, ognuno corre alla sua velocità e spesso si finisce con un aperitivo.",
    "Il club aveva già una voce riconoscibile: logo, colori, due mascotte, sticker, magliette e un profilo Instagram, progettati da Margherita Corinti. Mancava un posto in cui chi incontra il club per la prima volta potesse capire cos'è e come unirsi. Ho progettato, sviluppato e pubblicato il sito partendo dalla sua identità visiva, e ne curo l'aggiornamento.",
  ],
  contact: {
    title: "Hai un club, un'associazione o una community da raccontare?",
    text: "Raccontami come funziona il vostro gruppo, da dove arrivano le persone e cosa dovrebbero fare dopo aver visitato il sito. Se avete già un'identità visiva partiamo da quella; se lavorate con un designer, il sito lo costruiamo insieme.",
    button: "Parliamo del vostro sito",
  },
  sections: [
    {
      id: "brief",
      title: "Da un gruppo informale a un indirizzo da condividere",
      blocks: [
        { kind: "p", text: "Il club vive in luoghi informali: una chat, le storie su Instagram, gli sticker in giro per la città. Per chi è già dentro funziona. Chi arriva da fuori non trova le risposte di base: chi siete, quando correte, devo essere allenato, come mi unisco." },
        { kind: "list", items: [
          { term: "Chi vede uno sticker o un post", text: "deve capire in pochi secondi che è un gruppo aperto, senza competizione e senza iscrizioni." },
          { term: "Chi vuole provare una corsa", text: "deve sapere come nasce un'uscita e trovare subito il modo per entrare nel gruppo." },
          { term: "Chi propone una collaborazione", text: "un locale, un evento o un marchio, deve sapere a chi scrivere." },
        ] },
        { kind: "callout", text: "La domanda che guida il sito: cosa serve a una persona che non conosce nessuno per presentarsi alla prossima corsa?" },
      ],
    },
    {
      id: "designer-collaboration",
      title: "Portare sul web un'identità che esisteva già",
      blocks: [
        { kind: "p", text: "Il punto di partenza non era un foglio bianco. Margherita aveva già definito il linguaggio del club: un logo dal carattere deciso, il rosso e il beige, una fragola e una banana con tre occhi, un tono scherzoso nei post. Il mio lavoro è stato tradurre quel linguaggio in un sistema per il web, senza ridurlo al modello standard di un sito per associazioni sportive." },
        { kind: "p", text: "Il rosso e il beige sono la base della palette. Ho aggiunto un giallo, un azzurro e toni sabbia per distinguere i passaggi e le superfici, lasciando ai due colori principali il ruolo di riconoscimento. I titoli usano un carattere con grazie in un peso molto pesante, affiancato da un carattere senza grazie leggibile per il testo corrente." },
        { kind: "p", text: "Le mascotte, le locandine degli eventi e le foto delle uscite entrano nelle pagine come contenuto. Alcuni elementi ricorrenti tengono insieme le sezioni: tracciati tratteggiati che richiamano un percorso di corsa e una striscia rossa con il nome del club in scorrimento." },
        { kind: "p", text: "Anche i testi seguono il tono dei social: diretti, ironici, informali. La pagina Chi siamo dedica uno spazio al progetto grafico, raccontato da Margherita in prima persona, e una pagina di note dice chi ha fatto cosa. Il credito è esplicito su entrambi i siti." },
        { kind: "callout", text: "Lavorare sull'identità di qualcun altro significa capire quali elementi vanno adattati allo schermo e quali vanno lasciati com'erano, perché sono quelli che le persone riconoscono." },
      ],
    },
    {
      id: "structure",
      title: "Quattro pagine, un solo invito",
      blocks: [
        { kind: "p", text: "La home si apre con una domanda, \"HEY! Ti va di correre?\", e con l'anteprima di una chat di gruppo che mostra come nasce un'uscita. Seguono il prossimo evento, le ultime corse e i tre passi per unirsi. Chi siamo racconta la storia del club e le persone che lo seguono. Eventi spiega come funzionano le uscite, elenca gli eventi organizzati e le corse già fatte, e raccoglie i contatti. Note riporta crediti e privacy." },
        { kind: "p", text: "Quasi ogni sezione porta allo stesso punto: il gruppo WhatsApp per correre, Instagram per collaborazioni e domande. Non c'è un modulo di iscrizione perché il club non ne ha uno. Allo stesso modo, l'elenco delle uscite non è un calendario: la prossima corsa nasce quando qualcuno la propone nel gruppo, e il sito lo dice. Le pagine descrivono come funziona davvero il club, non una struttura che non esiste." },
        { kind: "p", text: "Le pagine sono progettate prima per lo smartphone, perché i canali da cui arriva il sito, Instagram e WhatsApp, si usano dal telefono. Su schermi grandi le sezioni si affiancano e la navigazione esce dal menu." },
      ],
    },
    {
      id: "content-updates",
      title: "Eventi e uscite senza un pannello di gestione",
      blocks: [
        { kind: "p", text: "Eventi, uscite e persone del team sono descritti in file di dati separati dai componenti. Un evento ha nome, data, orario, luogo, descrizione e una locandina facoltativa; un'uscita ha solo la data e, se serve, orario e luogo. Le pagine li ordinano per data, e una piccola mappa delle ultime cinque settimane colora i giorni in cui il gruppo è uscito a correre." },
        { kind: "p", text: "Oggi gli aggiornamenti li inserisco io: aggiungo una voce, rigenero il sito e lo pubblico. Per il ritmo attuale degli eventi è sufficiente, e non aggiunge costi né un'area riservata da proteggere." },
        { kind: "p", text: "Il limite è esplicito: ogni modifica passa da me. Se gli eventi diventano più frequenti o altre persone del club devono aggiornare il calendario, valuterei un CMS leggero o un foglio condiviso come sorgente dei dati." },
      ],
    },
    {
      id: "architecture",
      title: "Pagine statiche, nessun tracciamento",
      blocks: [
        { kind: "p", text: "Il sito è sviluppato con React e TypeScript, con Tailwind CSS per gli stili e Vite per la build. Ogni indirizzo viene generato come documento HTML completo, con titolo, descrizione e dati per la condivisione sui social; la sitemap deriva dallo stesso elenco di pagine, così non può citarne una che non esiste." },
        { kind: "p", text: "La pubblicazione avviene su Cloudflare, che serve i file statici. Un piccolo worker aggiunge alle risposte le indicazioni per i motori di ricerca ed esclude la pagina di errore dall'indicizzazione." },
        { kind: "p", text: "Il sito non usa cookie, statistiche di traffico né moduli. Non serve quindi un banner di consenso, e la pagina di note spiega in poche righe quali dati tecnici registra comunque l'infrastruttura. Per un club senza una struttura amministrativa significa nessuna pratica da gestire per le statistiche e costi di hosting contenuti." },
      ],
    },
    {
      id: "outcome",
      title: "Cosa dimostra il progetto",
      blocks: [
        { kind: "p", text: "Il club ha un indirizzo stabile da condividere, in cui le informazioni restano al loro posto invece di scorrere via in una chat. Chi arriva da uno sticker o da un post trova in una pagina cosa aspettarsi e come unirsi." },
        { kind: "p", text: "Il progetto mostra tre cose: collaborare con una designer partendo da un'identità esistente, tradurre un tono informale in pagine chiare, e scegliere una soluzione tecnica proporzionata a chi la userà e la manterrà." },
        { kind: "p", text: "Non presento una crescita di partecipanti o di contatti come effetto del sito. Il club cresceva già prima, e distinguere il contributo del sito richiederebbe dati che, per scelta, non raccolgo." },
      ],
    },
  ],
};
