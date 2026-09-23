import type { CaseStudy } from "./types";

// Every figure below comes from the paper
// (PLOS Computational Biology, 17 September 2026,
// doi:10.1371/journal.pcbi.1014724).
export const pandelosPlusEn: CaseStudy = {
  kind: "publication",
  facts: [
    "Published in PLOS Computational Biology",
    "September 2026",
    "Simone Colli, Emiliano Maresi, Vincenzo Bonnici",
  ],
  lead: [
    "PanDelos-plus is a parallel algorithm for computing sequence homology in pangenomic analysis: working out, across many bacterial genomes, which genes belong to the same family. It is a full gene-centric redesign of PanDelos, a tool that tackles the problem without alignments and without parameters to tune.",
    "The work was published in PLOS Computational Biology on 17 September 2026. On synthetic datasets PanDelos-plus runs up to 14 times faster than the original and uses up to 96% less memory, while staying consistent with the results of the original algorithm.",
  ],
  metrics: [
    { value: "14x", label: "faster than the original, best case on the synthetic datasets" },
    { value: "-96%", label: "memory used, best case on the synthetic datasets" },
    { value: "600", label: "genomes in the largest synthetic dataset used in the tests" },
    { value: "0.7 GB", label: "of RAM for E. coli, against 20.2 GB for PanDelos" },
  ],
  sections: [
    {
      id: "problem",
      title: "The problem: all-against-all comparisons",
      blocks: [
        { kind: "p", text: "Identifying homologous gene families across multiple genomes is a central step in bacterial pangenomics. It traditionally requires comparing every gene against every other, a computation that grows quickly with the number of genomes analysed." },
        { kind: "p", text: "PanDelos approaches the problem with k-mer profiles, without aligning sequences and without parameters to tune, combining speed, ease of use and accuracy competitive with state-of-the-art methods. The growing availability of genomic data, however, calls for tools that scale to ever larger collections." },
      ],
    },
    {
      id: "approach",
      title: "The parallel redesign",
      blocks: [
        { kind: "p", text: "PanDelos-plus parallelises the two most computationally demanding phases and cuts memory use with lighter data structures." },
        { kind: "list", items: [
          { term: "Best Hit detection", text: "for each pair of genomes, every gene of the first is compared with all genes of the second using generalised Jaccard similarity. The work is split by rows: one gene against the whole target genome." },
          { term: "Bidirectional Best Hit extraction", text: "gene pairs that pick each other as best match are extracted in parallel with the same scheme." },
          { term: "Thread pool", text: "threads take the available units of work until every comparison is done, so the load spreads across the machine's cores." },
        ] },
      ],
    },
    {
      id: "results",
      title: "Results on real genomes",
      blocks: [
        { kind: "p", text: "Besides the synthetic datasets, generated with PANPROVA up to 600 genomes, the comparison with PanDelos was repeated on four groups of complete bacterial genomes taken from NCBI RefSeq." },
        { kind: "list", items: [
          { term: "Escherichia coli", text: "from 619 s to 46 s and from 20.2 GB to 0.7 GB of RAM: 13.5 times faster, 96.5% less memory." },
          { term: "Mycoplasma", text: "from 563 s to 65 s and from 2.2 GB to 0.7 GB: 8.7 times faster, 68.2% less memory." },
          { term: "Salmonella enterica", text: "from 216 s to 16 s and from 12.8 GB to 0.5 GB: 13.5 times faster, 96.1% less memory." },
          { term: "Xanthomonas campestris", text: "from 1015 s to 73 s and from 15.7 GB to 0.7 GB: 13.9 times faster, 95.5% less memory." },
        ] },
      ],
    },
    {
      id: "impact",
      title: "What it makes possible",
      blocks: [
        { kind: "p", text: "These improvements let much larger collections of bacterial genomes be analysed on standard multicore workstations. The PanDelos methodology becomes applicable to population-scale comparative genomics, for a more precise description of pangenome structure and dynamics." },
      ],
    },
  ],
};
