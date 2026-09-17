import type { CaseStudy } from "./types";

export const mgpIt: CaseStudy = {
  facts: ["Operativo", "Installato su server aziendale"],

  highlight: {
    context: "Piattaforma sviluppata per un'azienda manifatturiera, oggi operativa sul server aziendale.",
    before: {
      title: "Prima",
      items: [
        "7–8 schede Excel da compilare e impaginare a mano per ogni commessa",
        "Macro e script PowerShell, con i file da smistare a mano nelle cartelle",
        "Piani di carico preparati in AutoCAD, con ore di lavoro",
      ],
    },
    after: {
      title: "Con MGP",
      items: [
        "La commessa si compila una volta: calcoli, documenti e file di produzione li genera il sistema",
        "Un archivio ZIP già organizzato per tipologia di prodotto",
        "Una proposta di piano di carico in circa 10–15 secondi",
      ],
    },
  },

  lead: [
    "MGP è una piattaforma che ho sviluppato per un'azienda manifatturiera per gestire la preparazione delle commesse, il calcolo dei dati di produzione e la generazione dei documenti e dei file necessari alle lavorazioni.",
    "Il progetto nasce da un processo concreto da ripensare: una sequenza di operazioni distribuite tra Excel, macro Visual Basic e script PowerShell, con numerosi passaggi manuali e regole difficili da aggiornare. Da questa base, MGP si è ampliato con la pianificazione dei carichi per produzione e preventivi, il collegamento ai macchinari e un modulo di assistenza integrato.",
    "La richiesta che ha guidato la progettazione era permettere all'azienda di definire e modificare autonomamente i propri modelli di prodotto, senza dover intervenire sul codice dell'applicazione o contattare lo sviluppatore per ogni variazione.",
  ],

  metrics: [
    { value: "21", label: "righe di prodotti al massimo per commessa, il limite del foglio di partenza" },
    { value: "7–8", label: "schede Excel da compilare e impaginare a mano, una commessa alla volta" },
    { value: "4/5", label: "tipologie di prodotto, ognuna con lo stesso processo da ripetere" },
    { value: "10–15 s", label: "per una proposta di piano di carico, contro le ore richieste in AutoCAD" },
  ],

  sections: [
    {
      id: "starting-process",
      title: "Il processo di partenza",
      blocks: [
        {
          kind: "p",
          text: "Prima di MGP, per preparare una commessa il dipendente doveva copiare un file Excel e inserire le quote dei prodotti in un foglio iniziale. Il calcolo dipendeva da macro il cui comportamento non era sempre chiaro.",
        },
        {
          kind: "callout",
          text: "Per ottenere il risultato, gli operatori avevano imparato a premere due volte lo stesso pulsante.",
        },
        {
          kind: "p",
          text: "Il lavoro proseguiva attraverso sette o otto schede Excel. Ogni scheda richiedeva attenzione alla stampa: colonne da nascondere o mostrare, contenuti da adattare al formato A4 e, quando lo spazio non bastava, fogli A3.",
        },
        {
          kind: "p",
          text: "Dopo una prima esportazione, il dipendente spostava i file in una cartella di lavoro separata ed eseguiva diversi script PowerShell. Da qui si apriva un ulteriore gruppo di file xlsx da compilare, dai quali venivano prodotti manualmente altri PDF. I file destinati alle lavorazioni, inclusi DXF e TLF proprietari per i macchinari, venivano generati allo stesso livello e dovevano essere suddivisi a mano nelle rispettive cartelle.",
        },
        {
          kind: "figure",
          diagram: "mgp-process",
          caption: "Lo stesso risultato, prima e dopo: la catena manuale fra Excel, script e smistamento dei file, e il percorso che oggi parte dalla commessa e arriva a un archivio già organizzato.",
        },
        {
          kind: "p",
          text: "Il foglio iniziale consentiva di inserire al massimo 21 righe di prodotti. Per un'azienda con un alto grado di personalizzazione, questo rappresentava un vincolo operativo significativo.",
        },
        {
          kind: "p",
          text: "Il processo si ripeteva per quattro o cinque tipologie di prodotto. Anche modificarlo era laborioso: formule, costanti e condizioni erano distribuite tra macro e script difficili da leggere, con dipendenze poco evidenti e scarsa documentazione. Aggiornare una regola richiedeva di ricostruire il funzionamento delle parti coinvolte.",
        },
      ],
    },
    {
      id: "from-order-to-files",
      title: "Dalla commessa ai file di produzione",
      blocks: [
        {
          kind: "p",
          text: "Con MGP, il dipendente accede alla propria area e gestisce una struttura organizzata per clienti, commesse e singoli prodotti. Le informazioni sono consultabili e modificabili direttamente dalla piattaforma.",
        },
        {
          kind: "p",
          text: "All'interno della stessa commessa possono essere inseriti prodotti di tipologie differenti. L'operatore seleziona il modello e compila i campi previsti, inserendo quote e altre informazioni necessarie alla lavorazione.",
        },
        {
          kind: "p",
          text: "Quando più pezzi condividono caratteristiche simili, può duplicare un inserimento esistente e modificare soltanto i valori differenti. Questo evita di ricompilare ogni volta tutti i dati.",
        },
        {
          kind: "p",
          text: "Una volta completata la commessa, l'operatore conferma l'ordine. Il sistema prende in carico l'elaborazione, esegue i calcoli e genera i documenti e i file previsti dai modelli utilizzati.",
        },
        {
          kind: "p",
          text: "Al termine, il dipendente scarica un archivio ZIP già organizzato su più livelli: prima per tipologia di prodotto, poi nelle sottocartelle definite durante la configurazione del modello. Da qui può stampare i documenti e distribuire il materiale alla produzione e ai fornitori.",
        },
        {
          kind: "p",
          text: "La sequenza di calcoli, esportazioni, esecuzione di script e organizzazione dei file viene così gestita dalla piattaforma.",
        },
      ],
    },
    {
      id: "configuration",
      title: "Configurare i prodotti senza modificare il software",
      blocks: [
        {
          kind: "p",
          text: "Una delle richieste principali dell'azienda era poter gestire in autonomia le proprie tipologie di prodotto. Questa esigenza comprendeva sia i dati da chiedere all'operatore sia le regole che trasformano quei dati in informazioni e file di produzione.",
        },
        {
          kind: "p",
          text: "Ho realizzato un sistema di configurazione basato su tabelle, accessibile agli utenti con ruolo amministratore. L'amministratore seleziona la tipologia di tabella, le assegna un nome e ne compila le righe seguendo le colonne previste e il manuale utente.",
        },
        { kind: "p", text: "Attraverso questo sistema può definire:" },
        {
          kind: "list",
          items: [
            { term: "Dati di ingresso", text: "campi numerici e testuali, menu a tendina e ordine di visualizzazione durante la compilazione." },
            { term: "Costanti", text: "quote fisse, moltiplicatori, testi e altri valori condivisi tra più elaborazioni." },
            { term: "Formule matematiche", text: "calcoli che utilizzano input, costanti e risultati di altre formule." },
            { term: "Condizioni e checkpoint", text: "regole che determinano quali elaborazioni eseguire e quando possono essere valutate." },
            { term: "Documenti e file", text: "PDF, riepiloghi personalizzati, file TLF e DXF basati su prototipi e CSV per l'interfacciamento con altri software." },
            { term: "Contenuti condizionali", text: "file da produrre soltanto in determinate situazioni, immagini da aggiungere ai PDF e documenti esterni da includere automaticamente." },
            { term: "Organizzazione dell'output", text: "nomi e percorsi di destinazione personalizzabili, anche attraverso valori calcolati." },
            { term: "Raggruppamenti", text: "criteri per riunire prodotti con caratteristiche comuni e aggregarne i dati nei documenti." },
          ],
        },
        {
          kind: "p",
          text: "Per esempio, due inserimenti con le stesse dimensioni e quantità rispettivamente pari a due e quattro possono comparire nel riepilogo come un'unica voce con quantità sei. Un prodotto con dimensioni differenti viene mantenuto separato.",
        },
        {
          kind: "p",
          text: "La configurazione richiede la conoscenza del prodotto e delle convenzioni del sistema. Le regole vengono però espresse attraverso tabelle e formule, senza modificare il codice dell'applicazione.",
        },
      ],
    },
    {
      id: "rule-engine",
      title: "Il motore che collega dati, formule e condizioni",
      blocks: [
        {
          kind: "p",
          text: "Dietro la configurazione a tabelle è presente un microservizio specializzato nella valutazione delle regole.",
        },
        {
          kind: "p",
          text: "Ogni tabella possiede un identificatore alfabetico univoco e ogni riga un identificatore numerico univoco al suo interno. La combinazione dei due consente di referenziare un elemento anche da una tabella differente.",
        },
        {
          kind: "p",
          text: "Se, per esempio, a#2 identifica l'altezza e a#3 la larghezza, una formula può utilizzare l'espressione a#2 * a#3 per calcolare la superficie. Il risultato può a sua volta essere richiamato da altre formule o utilizzato nei documenti generati.",
        },
        {
          kind: "figure",
          diagram: "mgp-rule-graph",
          caption: "Ogni riga è indirizzabile da qualunque tabella. Il motore ne ricava un grafo di dipendenze e lo percorre; i checkpoint trattengono le righe che non possono ancora essere valutate.",
        },
        {
          kind: "p",
          text: "Il motore costruisce un grafo a partire dalla configurazione e propaga i calcoli secondo le dipendenze tra gli elementi. I checkpoint aggiungono vincoli di esecuzione: le righe che richiedono un determinato checkpoint attendono il suo rilascio prima di essere valutate.",
        },
        {
          kind: "p",
          text: "Questo permette di coordinare elaborazioni di natura diversa: acquisire dati, risolvere formule, valutare condizioni e predisporre gli output previsti per il prodotto.",
        },
      ],
    },
    {
      id: "load-planning",
      title: "Pianificazione dei carichi in produzione",
      blocks: [
        {
          kind: "p",
          text: "MGP è stato esteso con un sistema di nesting per calcolare la disposizione dei prodotti sui pianali degli autocarri.",
        },
        {
          kind: "p",
          text: "In produzione, il sistema utilizza alcuni dei dati già inseriti nella commessa per ricavare l'impronta dei pezzi sul pianale. Il motore di ottimizzazione impiega euristiche per contenere i tempi di elaborazione e proporre una disposizione in circa 10–15 secondi nei casi d'uso descritti.",
        },
        {
          kind: "p",
          text: "L'operatore può lasciare al sistema la selezione degli autocarri tra quelli configurati oppure scegliere direttamente quali tipologie utilizzare e in quale quantità. Può inoltre decidere se consentire la rotazione dei pezzi durante il calcolo.",
        },
        {
          kind: "p",
          text: "Il risultato è revisionabile attraverso un'interfaccia drag & drop: il dipendente può riposizionare i pezzi per adattare il piano alle esigenze operative.",
        },
        {
          kind: "figure",
          diagram: "mgp-load-plan",
          caption: "Dalla disposizione sul pianale il sistema ricava due sequenze distinte: l'ordine in cui montare i pezzi e l'ordine in cui caricarli.",
        },
        { kind: "p", text: "Dal piano vengono ricavate due sequenze distinte:" },
        {
          kind: "list",
          items: [
            { text: "L'ordine di montaggio dei prodotti, pensato per agevolare il caricamento successivo." },
            { text: "L'ordine di caricamento sugli autocarri." },
          ],
        },
        {
          kind: "p",
          text: "Il sistema genera PDF riepilogativi con i pezzi da montare, le sequenze di montaggio e carico e la rappresentazione grafica della disposizione sui pianali.",
        },
        { kind: "h3", text: "Parametri configurabili dall'azienda" },
        { kind: "p", text: "Anche il nesting segue il principio di configurabilità dei modelli." },
        {
          kind: "p",
          text: "L'amministratore definisce gli autocarri disponibili, le tolleranze associate ai prodotti e la corrispondenza tra le dimensioni del pezzo e il suo ingombro sul pianale. Può stabilire, per esempio, se la larghezza rappresenta l'impronta lungo l'asse X oppure lungo l'asse Y dell'autocarro.",
        },
        {
          kind: "p",
          text: "Le tolleranze vengono utilizzate nella gestione dei prodotti raggruppati secondo specifiche logiche e vincoli. Il motore elabora quindi il piano a partire dai parametri configurati e dalle scelte dell'operatore.",
        },
      ],
    },
    {
      id: "machines",
      title: "Collegamento con i macchinari aziendali",
      blocks: [
        {
          kind: "p",
          text: "Le informazioni ottenute dalla pianificazione possono essere trasmesse ai macchinari tramite protocollo OPC UA.",
        },
        {
          kind: "p",
          text: "L'invio avviene su richiesta esplicita dell'operatore, attraverso un pulsante nell'interfaccia. I dati elaborati dalla piattaforma vengono così utilizzati anche per agevolare il montaggio e l'interazione con le macchine.",
        },
        {
          kind: "p",
          text: "La pianificazione del trasporto è quindi collegata alla preparazione delle lavorazioni: la disposizione sul bilico contribuisce a definire la sequenza con cui predisporre i prodotti.",
        },
      ],
    },
    {
      id: "quotes",
      title: "Piani di carico già in fase di preventivo",
      blocks: [
        {
          kind: "p",
          text: "La funzionalità di nesting è disponibile anche per la preventivazione, attraverso un flusso dedicato.",
        },
        {
          kind: "p",
          text: "Chi prepara il preventivo inserisce quote e tolleranze in un modulo, con la possibilità di duplicare le righe simili. Può quindi avviare lo stesso motore di ottimizzazione utilizzato in produzione, scegliere automaticamente o manualmente gli autocarri e revisionare il risultato nell'interfaccia avanzata.",
        },
        {
          kind: "p",
          text: "Il sistema genera i PDF del piano di carico, pronti per essere controllati e inviati alla ditta di trasporti.",
        },
        {
          kind: "callout",
          text: "Nei casi d'uso riportati dall'azienda, la preparazione manuale del piano in AutoCAD richiedeva ore di lavoro. Con MGP, l'elaborazione restituisce una proposta in circa 10–15 secondi, a cui si aggiungono l'inserimento iniziale dei dati e la revisione del risultato.",
        },
      ],
    },
    {
      id: "file-preview",
      title: "Anteprima dei file tecnici",
      blocks: [
        {
          kind: "p",
          text: "MGP integra visualizzatori per consultare rapidamente i file TLF e DXF generati, direttamente dalla piattaforma.",
        },
        {
          kind: "p",
          text: "Per i TLF, questa funzionalità risponde a un'esigenza specifica: la consultazione richiede normalmente software proprietario, una chiavetta dedicata e una postazione con determinati requisiti di sistema.",
        },
        {
          kind: "p",
          text: "L'anteprima integrata consente di effettuare un primo controllo visivo senza dover utilizzare quella postazione soltanto per aprire il file.",
        },
      ],
    },
    {
      id: "changelog",
      title: "Registro delle modifiche e backup dei modelli",
      blocks: [
        {
          kind: "p",
          text: "La piattaforma mette a disposizione un registro in cui annotare chi ha modificato un modello, quando è intervenuto e che cosa ha cambiato, riportando la situazione precedente e quella successiva.",
        },
        {
          kind: "p",
          text: "Questo registro conserva il contesto degli interventi sulle configurazioni e permette di documentarne l'evoluzione.",
        },
        {
          kind: "p",
          text: "Separatamente, i modelli possono essere esportati in formato JSON e successivamente reimportati per ripristinare una configurazione salvata.",
        },
      ],
    },
    {
      id: "support",
      title: "Assistenza e richieste di evoluzione integrate",
      blocks: [
        {
          kind: "p",
          text: "Il cliente può segnalare problemi, chiedere supporto e proporre nuove funzionalità direttamente da MGP.",
        },
        {
          kind: "p",
          text: "La richiesta può includere una descrizione, riferimenti ai modelli coinvolti, eventuali codici di errore e allegati come immagini, PDF o fogli di calcolo. Le segnalazioni vengono tracciate e catalogate automaticamente.",
        },
        { kind: "p", text: "Il sistema assegna il livello di urgenza considerando diversi fattori, tra cui:" },
        {
          kind: "list",
          items: [
            { text: "Il numero di utenti interessati dal problema." },
            { text: "Il fatto che la problematica si sia già presentata." },
            { text: "L'eventuale blocco della produzione." },
            { text: "La disponibilità di soluzioni temporanee per continuare a lavorare." },
          ],
        },
        {
          kind: "p",
          text: "Il cliente può sovrascrivere il livello assegnato automaticamente, assumendosi la responsabilità della modifica.",
        },
        {
          kind: "p",
          text: "Le richieste vengono inoltrate agli sviluppatori via email e restano consultabili nello storico dell'utente. Supporto ed evoluzione della piattaforma dispongono così di un canale strutturato, con il contesto e i materiali necessari per valutare ogni segnalazione.",
        },
      ],
    },
    {
      id: "hosting",
      title: "Installazione su server aziendale",
      blocks: [
        {
          kind: "p",
          text: "MGP è installato sul server dell'azienda, mantenendo internamente i dati delle commesse, le configurazioni dei prodotti e i file di produzione.",
        },
        {
          kind: "p",
          text: "L'installazione nell'infrastruttura aziendale affianca la configurabilità del sistema: l'azienda dispone dei propri dati e degli strumenti per aggiornare le regole produttive previste dalla piattaforma.",
        },
      ],
    },
    {
      id: "status",
      title: "Un progetto operativo che continua a evolvere",
      blocks: [
        {
          kind: "p",
          text: "Il nucleo iniziale di MGP è stato completato ed è utilizzato in azienda. Le estensioni successive hanno ampliato il percorso dalla preparazione delle commesse alla pianificazione del trasporto e al collegamento con i macchinari.",
        },
        {
          kind: "p",
          text: "Il progetto mostra il lavoro svolto per comprendere un processo esistente, ricostruirne le regole e trasformarle in un sistema utilizzabile dagli operatori e configurabile dall'azienda.",
        },
      ],
    },
  ],
};
