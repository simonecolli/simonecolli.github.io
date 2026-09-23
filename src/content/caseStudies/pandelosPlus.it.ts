import type { CaseStudy } from "./types";

// Every figure below comes from the paper
// (PLOS Computational Biology, 17 September 2026,
// doi:10.1371/journal.pcbi.1014724).
export const pandelosPlusIt: CaseStudy = {
  kind: "publication",
  facts: [
    "Pubblicato su PLOS Computational Biology",
    "Settembre 2026",
    "Simone Colli, Emiliano Maresi, Vincenzo Bonnici",
  ],
  lead: [
    "PanDelos-plus è un algoritmo parallelo per calcolare l'omologia di sequenza nell'analisi pangenomica: riconoscere, confrontando molti genomi batterici, quali geni appartengono alla stessa famiglia. È una riprogettazione completa, centrata sui geni, di PanDelos, uno strumento che affronta il problema senza allineamenti e senza parametri da impostare.",
    "Il lavoro è stato pubblicato su PLOS Computational Biology il 17 settembre 2026. Sui dataset sintetici PanDelos-plus è fino a 14 volte più veloce dell'originale e usa fino al 96% di memoria in meno, restando coerente con i risultati dell'algoritmo di partenza.",
  ],
  metrics: [
    { value: "14x", label: "esecuzione più veloce dell'originale, nel caso migliore sui dataset sintetici" },
    { value: "-96%", label: "memoria utilizzata, nel caso migliore sui dataset sintetici" },
    { value: "600", label: "genomi nel dataset sintetico più grande usato nei test" },
    { value: "0,7 GB", label: "di RAM per E. coli, contro i 20,2 GB di PanDelos" },
  ],
  sections: [
    {
      id: "problem",
      title: "Il problema: confronti tutti contro tutti",
      blocks: [
        { kind: "p", text: "Identificare le famiglie di geni omologhi in più genomi è un passaggio centrale della pangenomica batterica. Tradizionalmente richiede confronti di tutti i geni contro tutti, un calcolo che cresce rapidamente con il numero di genomi analizzati." },
        { kind: "p", text: "PanDelos affronta il problema con profili di k-mer, senza allineare le sequenze e senza parametri da regolare, combinando velocità, semplicità d'uso e un'accuratezza competitiva con i metodi allo stato dell'arte. La disponibilità crescente di dati genomici chiede però strumenti che scalino a collezioni sempre più grandi." },
      ],
    },
    {
      id: "approach",
      title: "Il ridisegno parallelo",
      blocks: [
        { kind: "p", text: "PanDelos-plus parallelizza le due fasi più onerose dal punto di vista computazionale e riduce la memoria con strutture dati più leggere." },
        { kind: "list", items: [
          { term: "Ricerca dei Best Hit", text: "per ogni coppia di genomi, ogni gene del primo viene confrontato con tutti i geni del secondo tramite la similarità di Jaccard generalizzata. Il lavoro è suddiviso per righe: un gene contro l'intero genoma di destinazione." },
          { term: "Estrazione dei Bidirectional Best Hit", text: "le coppie di geni che si scelgono a vicenda come migliore corrispondenza vengono estratte in parallelo con lo stesso schema." },
          { term: "Thread pool", text: "i thread prelevano le unità di lavoro disponibili finché tutti i confronti sono completati, così il carico si distribuisce sui core della macchina." },
        ] },
      ],
    },
    {
      id: "results",
      title: "Risultati sui genomi reali",
      blocks: [
        { kind: "p", text: "Oltre ai dataset sintetici, generati con PANPROVA fino a 600 genomi, il confronto con PanDelos è stato ripetuto su quattro gruppi di genomi batterici completi presi da NCBI RefSeq." },
        { kind: "list", items: [
          { term: "Escherichia coli", text: "da 619 s a 46 s e da 20,2 GB a 0,7 GB di RAM: 13,5 volte più veloce, 96,5% di memoria in meno." },
          { term: "Mycoplasma", text: "da 563 s a 65 s e da 2,2 GB a 0,7 GB: 8,7 volte più veloce, 68,2% di memoria in meno." },
          { term: "Salmonella enterica", text: "da 216 s a 16 s e da 12,8 GB a 0,5 GB: 13,5 volte più veloce, 96,1% di memoria in meno." },
          { term: "Xanthomonas campestris", text: "da 1015 s a 73 s e da 15,7 GB a 0,7 GB: 13,9 volte più veloce, 95,5% di memoria in meno." },
        ] },
      ],
    },
    {
      id: "impact",
      title: "Cosa rende possibile",
      blocks: [
        { kind: "p", text: "Con questi miglioramenti collezioni di genomi batterici molto più grandi possono essere analizzate su normali workstation multicore. La metodologia di PanDelos diventa applicabile alla genomica comparativa su scala di popolazione, per descrivere con più precisione la struttura e l'evoluzione dei pangenomi." },
      ],
    },
  ],
};
