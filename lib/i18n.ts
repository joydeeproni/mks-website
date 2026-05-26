/**
 * Site-wide i18n dictionary. Four locales: English (default), Italian,
 * German, French. Strings live here grouped by section; components read
 * them via the useT() hook from LanguageProvider.
 *
 * Italics in section titles are split into ".lead" / ".italic" / ".tail"
 * pieces so the JSX can wrap the italic portion in its own span.
 */

export const LOCALES = ["en", "it", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  de: "Deutsch",
  fr: "Français",
};

export type Dictionary = {
  nav: {
    values: string;
    story: string;
    brands: string;
    materials: string;
    products: string;
    getQuote: string;
  };
  hero: {
    h1Line1: string;
    h1Line2: string;
    body: string;
    ctaStart: string;
    ctaView: string;
  };
  certifications: {
    eyebrow: string;
    sedex: string;
    wfto: string;
    bsci: string;
    iso: string;
  };
  story: {
    line1: string;
    italic: string;
    line2: string;
    body: string;
    learnMore: string;
    quote: string;
    attribution: string;
  };
  materials: {
    lead: string;
    italic: string;
    tail: string;
    body: string;
    fullGrain: string;
    smooth: string;
    shanti: string;
    vegTanned: string;
    embossed: string;
  };
  categories: {
    bags: { label: string; description: string };
    belts: { label: string; description: string };
    scarves: { label: string; description: string };
    accessories: { label: string; description: string };
    misc: { label: string; description: string };
    learnMore: string;
    tiles: {
      handBags: string;
      toteBags: string;
      slingBags: string;
      messengerBags: string;
      backpacks: string;
      weekenders: string;
      dressBelts: string;
      casualStraps: string;
      scarves: string;
      wallets: string;
      journals: string;
    };
  };
  artisanal: {
    line1: string;
    italic: string;
    line2: string;
    body: string;
    cardTitle: string;
    cardBody: string;
    readMore: string;
  };
  workshop: {
    line1: string;
    italic: string;
    body: string;
    tiles: {
      leatherSelection: string;
      edgeFinishing: string;
      handStitching: string;
      workshopWall: string;
      theBench: string;
      artisanFocus: string;
    };
  };
  partner: {
    heading: string;
    body: string;
    getQuote: { title: string; body: string };
    talkToUs: { title: string; body: string };
    orderSample: { title: string; body: string };
  };
  sustainability: {
    fairlyPaid: { body: string; link: string };
    sedexCert: { body: string; link: string };
    noChildLabor: { body: string; link: string };
    community: { body: string; link: string };
    vegTanned: { body: string; link: string };
  };
  footer: {
    partnerResources: string;
    resources: {
      capabilities: string;
      productionProcess: string;
      materialsLibrary: string;
      moqLeadTimes: string;
      whiteLabel: string;
      customDesign: string;
      requestSample: string;
      certifications: string;
    };
    products: string;
    productItems: { bags: string; belts: string; scarves: string; accessories: string; misc: string };
    materials: string;
    materialItems: { fullGrain: string; smooth: string; shanti: string; vegTanned: string; embossed: string };
    brochureHeading: string;
    brochureBody: string;
    brochurePlaceholder: string;
    brochureSubmit: string;
    contactVisit: string;
    contactHours: string;
    copyright: string;
  };
};

const en: Dictionary = {
  nav: {
    values: "Values",
    story: "Story",
    brands: "Brands",
    materials: "Materials",
    products: "Products",
    getQuote: "Get Quote",
  },
  hero: {
    h1Line1: "Accessories Made Responsibly,",
    h1Line2: "For Global Brands",
    body:
      "Premium leather bags, accessories, and handcrafted goods — manufactured in Kolkata, India, and exported worldwide under the Fair Trade banner.",
    ctaStart: "Start An Order",
    ctaView: "View Capabilities",
  },
  certifications: {
    eyebrow: "Independently audited · certified · trusted",
    sedex: "5-Pillar · Audited",
    wfto: "Aligned · Partner",
    bsci: "Compliant · Member",
    iso: "9001 · Quality systems",
  },
  story: {
    line1: "Family run",
    italic: "women",
    line2: "led",
    body:
      "MKS is a second-generation, women-led leather goods manufacturer based in Kolkata, India. We work with brands of all sizes — from independent designers to global retailers.",
    learnMore: "Learn More",
    quote:
      "Our mission is to create job opportunities for economically disadvantaged groups, helping them lead decent lives.",
    attribution: "Mithu Dam, Founder – MKS Exports",
  },
  materials: {
    lead: "Your",
    italic: "vision",
    tail: "our work",
    body:
      "Premium materials sourced from heritage tanneries and trusted partners. Specify with confidence — every hide is documented end-to-end.",
    fullGrain: "Full Grain Leather",
    smooth: "Smooth Leather",
    shanti: "Shanti Leather",
    vegTanned: "Vegetable Tanned",
    embossed: "Embossed Hide",
  },
  categories: {
    bags: {
      label: "Bags",
      description:
        "Handcrafted leather totes, slings, messengers, and more — built for daily use, designed for your brand.",
    },
    belts: {
      label: "Belts",
      description:
        "Saddle-stitched belts in vegetable-tanned hides, brass and steel hardware.",
    },
    scarves: {
      label: "Scarves",
      description:
        "Soft-goods crafted in partnership with Indian textile artisans.",
    },
    accessories: {
      label: "Accessories",
      description:
        "Wallets, cardholders, journals, and small leather goods.",
    },
    misc: {
      label: "Misc.",
      description: "Specialty items, prototypes, and seasonal pieces.",
    },
    learnMore: "Learn More",
    tiles: {
      handBags: "Hand Bags",
      toteBags: "Tote Bags",
      slingBags: "Sling Bags",
      messengerBags: "Messenger Bags",
      backpacks: "Backpacks",
      weekenders: "Weekenders",
      dressBelts: "Dress Belts",
      casualStraps: "Casual Straps",
      scarves: "Scarves",
      wallets: "Wallets",
      journals: "Journals",
    },
  },
  artisanal: {
    line1: "Honoring the",
    italic: "Artisanal",
    line2: "Path",
    body:
      "Our process is a slow dialogue between master and material. We do not manufacture; we cultivate objects that carry the soul of their makers.",
    cardTitle: "The Art of the Hand",
    cardBody:
      "Each piece begins with selection—only the finest hides from heritage tanneries. Our saddle-stitching technique, a method nearly lost to industrialization, ensures a seam that never unravels.",
    readMore: "Read More",
  },
  workshop: {
    line1: "Slow craft,",
    italic: "built to last",
    body:
      "Each piece moves through six pairs of hands — the same patient sequence we've practised in Kolkata for two generations.",
    tiles: {
      leatherSelection: "Leather Selection",
      edgeFinishing: "Edge Finishing",
      handStitching: "Hand Stitching",
      workshopWall: "Workshop Wall",
      theBench: "The Bench",
      artisanFocus: "Artisan Focus",
    },
  },
  partner: {
    heading: "Ready to Partner?",
    body:
      "Three honest ways to begin — from a fast quote to a sample in your hands, in days, not weeks.",
    getQuote: {
      title: "Get Quote",
      body:
        "Tell us what you need. We will come back with a clear, honest price — no hidden costs, no runaround.",
    },
    talkToUs: {
      title: "Talk To Us",
      body:
        "Not ready to commit? Order a sample first. Touch the leather, test the stitching, see the standard before you sign anything.",
    },
    orderSample: {
      title: "Order Sample",
      body:
        "If you have a unique question, our friendly team is here and ready to chat!",
    },
  },
  sustainability: {
    fairlyPaid: {
      body: "Fairly paid artisans, aligned with WFTO.",
      link: "View Ironclad Guarantee",
    },
    sedexCert: {
      body: "Sedex 5-pillar certified facility.",
      link: "View Audit Summary",
    },
    noChildLabor: {
      body: "No child labor, forced work or discrimination.",
      link: "Visit Worn Wear",
    },
    community: {
      body: "A vision towards community and rehabilitation.",
      link: "Read Our Commitment",
    },
    vegTanned: {
      body: "Vegetable-tanned leather, zero-waste patterning.",
      link: "Read Our Commitment",
    },
  },
  footer: {
    partnerResources: "Partner Resources",
    resources: {
      capabilities: "Our Capabilities",
      productionProcess: "Production Process",
      materialsLibrary: "Materials Library",
      moqLeadTimes: "MOQ & Lead Times",
      whiteLabel: "White Label",
      customDesign: "Custom Design",
      requestSample: "Request a Sample",
      certifications: "Certifications",
    },
    products: "Products",
    productItems: {
      bags: "Bags",
      belts: "Belts",
      scarves: "Scarves",
      accessories: "Accessories",
      misc: "Misc.",
    },
    materials: "Materials",
    materialItems: {
      fullGrain: "Full Grain",
      smooth: "Smooth Leather",
      shanti: "Shanti Leather",
      vegTanned: "Veg Tanned",
      embossed: "Embossed",
    },
    brochureHeading: "Get Brochure Sample",
    brochureBody:
      "See what we make. Drop your email and we'll send our capabilities brochure — full product range, materials, MOQs, lead times, and past partner work — in minutes.",
    brochurePlaceholder: "you@brand.com",
    brochureSubmit: "Send Me the Brochure",
    contactVisit:
      "Visit us in Kolkata or schedule a live walkthrough of the workshop — we're happy to host.",
    contactHours: "Mon – Fri · 9am to 6pm IST",
    copyright: "© {{year}} MKS Exports, Inc. All Rights Reserved.",
  },
};

const it: Dictionary = {
  nav: {
    values: "Valori",
    story: "Storia",
    brands: "Marchi",
    materials: "Materiali",
    products: "Prodotti",
    getQuote: "Richiedi un preventivo",
  },
  hero: {
    h1Line1: "Accessori realizzati con responsabilità,",
    h1Line2: "per marchi globali",
    body:
      "Borse, accessori e prodotti artigianali in pelle di qualità — confezionati a Kolkata, in India, ed esportati in tutto il mondo sotto l'insegna del Fair Trade.",
    ctaStart: "Avvia un ordine",
    ctaView: "Le nostre capacità",
  },
  certifications: {
    eyebrow: "Verificato in modo indipendente · certificato · affidabile",
    sedex: "5 Pilastri · Verificato",
    wfto: "Partner · Allineato",
    bsci: "Membro · Conforme",
    iso: "9001 · Sistemi di qualità",
  },
  story: {
    line1: "Conduzione familiare",
    italic: "guidata da",
    line2: "donne",
    body:
      "MKS è un produttore di pelletteria di seconda generazione, guidato da donne, con sede a Kolkata, India. Lavoriamo con marchi di ogni dimensione — da designer indipendenti a rivenditori globali.",
    learnMore: "Scopri di più",
    quote:
      "La nostra missione è creare opportunità di lavoro per i gruppi economicamente svantaggiati, aiutandoli a condurre una vita dignitosa.",
    attribution: "Mithu Dam, Fondatrice – MKS Exports",
  },
  materials: {
    lead: "La tua",
    italic: "visione",
    tail: "il nostro lavoro",
    body:
      "Materiali di pregio selezionati da concerie storiche e partner di fiducia. Specifica con sicurezza — ogni pelle è tracciata dal primo all'ultimo passaggio.",
    fullGrain: "Pelle pieno fiore",
    smooth: "Pelle liscia",
    shanti: "Pelle Shanti",
    vegTanned: "Concia vegetale",
    embossed: "Pelle stampata",
  },
  categories: {
    bags: {
      label: "Borse",
      description:
        "Tote, tracolle, messenger e altro in pelle fatta a mano — pensate per l'uso quotidiano, disegnate per il tuo marchio.",
    },
    belts: {
      label: "Cinture",
      description:
        "Cinture cucite a sellaio in pelli conciate al vegetale, con fibbie in ottone e acciaio.",
    },
    scarves: {
      label: "Sciarpe",
      description:
        "Tessili soft realizzati in collaborazione con artigiani tessili indiani.",
    },
    accessories: {
      label: "Accessori",
      description:
        "Portafogli, portacarte, taccuini e piccola pelletteria.",
    },
    misc: {
      label: "Varie",
      description: "Articoli speciali, prototipi e pezzi stagionali.",
    },
    learnMore: "Scopri di più",
    tiles: {
      handBags: "Borse a mano",
      toteBags: "Tote bag",
      slingBags: "Borse a tracolla",
      messengerBags: "Messenger",
      backpacks: "Zaini",
      weekenders: "Weekender",
      dressBelts: "Cinture eleganti",
      casualStraps: "Cinture casual",
      scarves: "Sciarpe",
      wallets: "Portafogli",
      journals: "Taccuini",
    },
  },
  artisanal: {
    line1: "Onoriamo il",
    italic: "percorso",
    line2: "artigianale",
    body:
      "Il nostro processo è un dialogo lento tra maestro e materiale. Non produciamo, coltiviamo oggetti che portano in sé l'anima di chi li realizza.",
    cardTitle: "L'arte della mano",
    cardBody:
      "Ogni pezzo inizia con la selezione — solo le pelli più pregiate da concerie storiche. La nostra cucitura a sellaio, una tecnica quasi perduta con l'industrializzazione, garantisce una cucitura che non si scuce mai.",
    readMore: "Leggi di più",
  },
  workshop: {
    line1: "Artigianato lento,",
    italic: "costruito per durare",
    body:
      "Ogni pezzo passa per sei paia di mani — la stessa sequenza paziente che pratichiamo a Kolkata da due generazioni.",
    tiles: {
      leatherSelection: "Selezione della pelle",
      edgeFinishing: "Rifinitura dei bordi",
      handStitching: "Cucitura a mano",
      workshopWall: "Parete del laboratorio",
      theBench: "Il banco di lavoro",
      artisanFocus: "Concentrazione artigiana",
    },
  },
  partner: {
    heading: "Vuoi diventare partner?",
    body:
      "Tre modi onesti per iniziare — da un preventivo rapido a un campione tra le mani, in giorni, non settimane.",
    getQuote: {
      title: "Preventivo",
      body:
        "Dicci di cosa hai bisogno. Ti risponderemo con un prezzo chiaro e onesto — nessun costo nascosto, nessun giro di parole.",
    },
    talkToUs: {
      title: "Parliamone",
      body:
        "Non sei ancora pronto? Ordina prima un campione. Tocca la pelle, prova la cucitura, vedi lo standard prima di firmare qualsiasi cosa.",
    },
    orderSample: {
      title: "Ordina un campione",
      body:
        "Hai una domanda particolare? Il nostro team è qui, gentile e pronto a fare due chiacchiere.",
    },
  },
  sustainability: {
    fairlyPaid: {
      body: "Artigiani retribuiti equamente, in linea con la WFTO.",
      link: "Garanzia Ironclad",
    },
    sedexCert: {
      body: "Stabilimento certificato Sedex a 5 pilastri.",
      link: "Sintesi dell'audit",
    },
    noChildLabor: {
      body: "Nessun lavoro minorile, forzato o discriminatorio.",
      link: "Visita Worn Wear",
    },
    community: {
      body: "Una visione di comunità e riabilitazione.",
      link: "Il nostro impegno",
    },
    vegTanned: {
      body: "Pelle conciata al vegetale, taglio a zero sprechi.",
      link: "Il nostro impegno",
    },
  },
  footer: {
    partnerResources: "Risorse per i partner",
    resources: {
      capabilities: "Le nostre capacità",
      productionProcess: "Processo produttivo",
      materialsLibrary: "Libreria materiali",
      moqLeadTimes: "MOQ e tempi di consegna",
      whiteLabel: "White label",
      customDesign: "Design su misura",
      requestSample: "Richiedi un campione",
      certifications: "Certificazioni",
    },
    products: "Prodotti",
    productItems: {
      bags: "Borse",
      belts: "Cinture",
      scarves: "Sciarpe",
      accessories: "Accessori",
      misc: "Varie",
    },
    materials: "Materiali",
    materialItems: {
      fullGrain: "Pieno fiore",
      smooth: "Pelle liscia",
      shanti: "Pelle Shanti",
      vegTanned: "Concia veg.",
      embossed: "Stampata",
    },
    brochureHeading: "Richiedi il catalogo",
    brochureBody:
      "Scopri cosa realizziamo. Lasciaci la tua email e ti invieremo il catalogo completo — gamma prodotti, materiali, MOQ, tempi di consegna e collaborazioni passate — in pochi minuti.",
    brochurePlaceholder: "tu@marchio.com",
    brochureSubmit: "Inviami il catalogo",
    contactVisit:
      "Visitaci a Kolkata o prenota un tour del laboratorio — saremo felici di ospitarti.",
    contactHours: "Lun – Ven · 9:00 – 18:00 IST",
    copyright: "© {{year}} MKS Exports, Inc. Tutti i diritti riservati.",
  },
};

const de: Dictionary = {
  nav: {
    values: "Werte",
    story: "Geschichte",
    brands: "Marken",
    materials: "Materialien",
    products: "Produkte",
    getQuote: "Angebot anfragen",
  },
  hero: {
    h1Line1: "Verantwortungsvoll gefertigte Accessoires,",
    h1Line2: "für globale Marken",
    body:
      "Hochwertige Ledertaschen, Accessoires und handgefertigte Waren — produziert in Kolkata, Indien, und weltweit unter der Fair-Trade-Flagge exportiert.",
    ctaStart: "Auftrag starten",
    ctaView: "Unsere Möglichkeiten",
  },
  certifications: {
    eyebrow: "Unabhängig geprüft · zertifiziert · vertrauenswürdig",
    sedex: "5-Säulen · Geprüft",
    wfto: "Partner · Ausgerichtet",
    bsci: "Mitglied · Konform",
    iso: "9001 · Qualitätssysteme",
  },
  story: {
    line1: "Familiengeführt",
    italic: "von Frauen",
    line2: "geleitet",
    body:
      "MKS ist ein in zweiter Generation, von Frauen geführter Hersteller von Lederwaren mit Sitz in Kolkata, Indien. Wir arbeiten mit Marken jeder Größe — von unabhängigen Designern bis zu globalen Händlern.",
    learnMore: "Mehr erfahren",
    quote:
      "Unsere Mission ist es, Beschäftigungsmöglichkeiten für wirtschaftlich benachteiligte Gruppen zu schaffen und ihnen zu einem würdigen Leben zu verhelfen.",
    attribution: "Mithu Dam, Gründerin – MKS Exports",
  },
  materials: {
    lead: "Ihre",
    italic: "Vision,",
    tail: "unsere Arbeit",
    body:
      "Premium-Materialien aus traditionsreichen Gerbereien und vertrauenswürdigen Partnern. Spezifizieren Sie mit Sicherheit — jede Haut ist von Anfang bis Ende dokumentiert.",
    fullGrain: "Vollnarbenleder",
    smooth: "Glattleder",
    shanti: "Shanti-Leder",
    vegTanned: "Pflanzlich gegerbt",
    embossed: "Geprägtes Leder",
  },
  categories: {
    bags: {
      label: "Taschen",
      description:
        "Handgefertigte Lederbeutel, Slings, Messenger und mehr — gebaut für den Alltag, gestaltet für Ihre Marke.",
    },
    belts: {
      label: "Gürtel",
      description:
        "Mit Sattelstich genähte Gürtel aus pflanzlich gegerbten Häuten, Beschläge aus Messing und Stahl.",
    },
    scarves: {
      label: "Schals",
      description:
        "Textilwaren in Zusammenarbeit mit indischen Textilhandwerkern gefertigt.",
    },
    accessories: {
      label: "Accessoires",
      description:
        "Geldbörsen, Kartenhalter, Notizbücher und kleine Lederwaren.",
    },
    misc: {
      label: "Sonstiges",
      description: "Spezialartikel, Prototypen und saisonale Stücke.",
    },
    learnMore: "Mehr erfahren",
    tiles: {
      handBags: "Handtaschen",
      toteBags: "Tote-Bags",
      slingBags: "Slings",
      messengerBags: "Messenger",
      backpacks: "Rucksäcke",
      weekenders: "Weekender",
      dressBelts: "Anzuggürtel",
      casualStraps: "Freizeitgürtel",
      scarves: "Schals",
      wallets: "Geldbörsen",
      journals: "Notizbücher",
    },
  },
  artisanal: {
    line1: "Wir ehren den",
    italic: "handwerklichen",
    line2: "Weg",
    body:
      "Unser Prozess ist ein langsamer Dialog zwischen Meister und Material. Wir fertigen nicht, wir kultivieren Objekte, die die Seele ihrer Macher tragen.",
    cardTitle: "Die Kunst der Hand",
    cardBody:
      "Jedes Stück beginnt mit der Auswahl — nur die feinsten Häute aus traditionsreichen Gerbereien. Unsere Sattelstich-Technik, eine durch Industrialisierung fast verlorene Methode, sorgt für eine Naht, die niemals aufgeht.",
    readMore: "Weiterlesen",
  },
  workshop: {
    line1: "Langsames Handwerk,",
    italic: "für die Ewigkeit",
    body:
      "Jedes Stück durchläuft sechs Paar Hände — dieselbe geduldige Reihenfolge, die wir in Kolkata seit zwei Generationen praktizieren.",
    tiles: {
      leatherSelection: "Lederauswahl",
      edgeFinishing: "Kantenbearbeitung",
      handStitching: "Handnähen",
      workshopWall: "Werkstattwand",
      theBench: "Die Werkbank",
      artisanFocus: "Handwerker-Konzentration",
    },
  },
  partner: {
    heading: "Bereit für eine Partnerschaft?",
    body:
      "Drei ehrliche Wege zu beginnen — vom schnellen Angebot bis zu einem Muster in Ihren Händen, in Tagen, nicht Wochen.",
    getQuote: {
      title: "Angebot anfragen",
      body:
        "Sagen Sie uns, was Sie brauchen. Wir antworten mit einem klaren, ehrlichen Preis — keine versteckten Kosten, kein Hin und Her.",
    },
    talkToUs: {
      title: "Mit uns sprechen",
      body:
        "Noch nicht bereit für eine Verpflichtung? Bestellen Sie zuerst ein Muster. Fassen Sie das Leder an, prüfen Sie die Naht, sehen Sie den Standard, bevor Sie etwas unterzeichnen.",
    },
    orderSample: {
      title: "Muster bestellen",
      body:
        "Haben Sie eine besondere Frage? Unser freundliches Team ist da und gesprächsbereit.",
    },
  },
  sustainability: {
    fairlyPaid: {
      body: "Fair bezahlte Handwerker, im Einklang mit der WFTO.",
      link: "Ironclad-Garantie",
    },
    sedexCert: {
      body: "Sedex 5-Säulen-zertifizierter Betrieb.",
      link: "Audit-Zusammenfassung",
    },
    noChildLabor: {
      body: "Keine Kinderarbeit, keine Zwangsarbeit, keine Diskriminierung.",
      link: "Worn Wear besuchen",
    },
    community: {
      body: "Eine Vision für Gemeinschaft und Rehabilitation.",
      link: "Unser Engagement",
    },
    vegTanned: {
      body: "Pflanzlich gegerbtes Leder, abfallfreier Zuschnitt.",
      link: "Unser Engagement",
    },
  },
  footer: {
    partnerResources: "Partner-Ressourcen",
    resources: {
      capabilities: "Unsere Möglichkeiten",
      productionProcess: "Produktionsprozess",
      materialsLibrary: "Materialbibliothek",
      moqLeadTimes: "MOQ & Lieferzeiten",
      whiteLabel: "White Label",
      customDesign: "Individuelles Design",
      requestSample: "Muster anfordern",
      certifications: "Zertifizierungen",
    },
    products: "Produkte",
    productItems: {
      bags: "Taschen",
      belts: "Gürtel",
      scarves: "Schals",
      accessories: "Accessoires",
      misc: "Sonstiges",
    },
    materials: "Materialien",
    materialItems: {
      fullGrain: "Vollnarben",
      smooth: "Glattleder",
      shanti: "Shanti-Leder",
      vegTanned: "Pflanzlich",
      embossed: "Geprägt",
    },
    brochureHeading: "Broschüre anfordern",
    brochureBody:
      "Sehen Sie, was wir herstellen. Hinterlassen Sie Ihre E-Mail, und wir senden Ihnen unsere Broschüre — Produktpalette, Materialien, MOQs, Lieferzeiten und frühere Partnerschaften — in wenigen Minuten.",
    brochurePlaceholder: "sie@marke.com",
    brochureSubmit: "Broschüre senden",
    contactVisit:
      "Besuchen Sie uns in Kolkata oder vereinbaren Sie eine Werkstattführung — wir freuen uns über Ihren Besuch.",
    contactHours: "Mo – Fr · 9:00 bis 18:00 Uhr IST",
    copyright: "© {{year}} MKS Exports, Inc. Alle Rechte vorbehalten.",
  },
};

const fr: Dictionary = {
  nav: {
    values: "Valeurs",
    story: "Histoire",
    brands: "Marques",
    materials: "Matériaux",
    products: "Produits",
    getQuote: "Demander un devis",
  },
  hero: {
    h1Line1: "Des accessoires fabriqués avec responsabilité,",
    h1Line2: "pour les marques du monde entier",
    body:
      "Sacs en cuir, accessoires et objets artisanaux haut de gamme — fabriqués à Kolkata, en Inde, et exportés dans le monde entier sous la bannière du Commerce équitable.",
    ctaStart: "Lancer une commande",
    ctaView: "Nos savoir-faire",
  },
  certifications: {
    eyebrow: "Audité indépendamment · certifié · de confiance",
    sedex: "5 piliers · Audité",
    wfto: "Partenaire · Aligné",
    bsci: "Membre · Conforme",
    iso: "9001 · Systèmes qualité",
  },
  story: {
    line1: "Affaire familiale",
    italic: "dirigée par",
    line2: "des femmes",
    body:
      "MKS est un fabricant de maroquinerie de deuxième génération, dirigé par des femmes, basé à Kolkata, en Inde. Nous travaillons avec des marques de toutes tailles — des designers indépendants aux grandes enseignes mondiales.",
    learnMore: "En savoir plus",
    quote:
      "Notre mission est de créer des opportunités d'emploi pour les groupes économiquement défavorisés, en les aidant à mener une vie digne.",
    attribution: "Mithu Dam, Fondatrice – MKS Exports",
  },
  materials: {
    lead: "Votre",
    italic: "vision,",
    tail: "notre travail",
    body:
      "Des matériaux premium issus de tanneries historiques et de partenaires de confiance. Spécifiez en toute confiance — chaque peau est documentée de bout en bout.",
    fullGrain: "Cuir pleine fleur",
    smooth: "Cuir lisse",
    shanti: "Cuir Shanti",
    vegTanned: "Tannage végétal",
    embossed: "Cuir embossé",
  },
  categories: {
    bags: {
      label: "Sacs",
      description:
        "Sacs cabas, bandoulières et messengers en cuir fabriqués à la main — conçus pour l'usage quotidien, dessinés pour votre marque.",
    },
    belts: {
      label: "Ceintures",
      description:
        "Ceintures cousues à la selle en cuirs au tannage végétal, boucles en laiton et en acier.",
    },
    scarves: {
      label: "Écharpes",
      description:
        "Textiles souples réalisés en partenariat avec des artisans textiles indiens.",
    },
    accessories: {
      label: "Accessoires",
      description:
        "Portefeuilles, porte-cartes, carnets et petite maroquinerie.",
    },
    misc: {
      label: "Divers",
      description: "Pièces spéciales, prototypes et éditions saisonnières.",
    },
    learnMore: "En savoir plus",
    tiles: {
      handBags: "Sacs à main",
      toteBags: "Cabas",
      slingBags: "Bandoulières",
      messengerBags: "Messengers",
      backpacks: "Sacs à dos",
      weekenders: "Sacs week-end",
      dressBelts: "Ceintures habillées",
      casualStraps: "Ceintures décontractées",
      scarves: "Écharpes",
      wallets: "Portefeuilles",
      journals: "Carnets",
    },
  },
  artisanal: {
    line1: "Honorer le",
    italic: "chemin",
    line2: "artisanal",
    body:
      "Notre processus est un dialogue lent entre le maître et la matière. Nous ne fabriquons pas, nous cultivons des objets qui portent l'âme de leurs faiseurs.",
    cardTitle: "L'art de la main",
    cardBody:
      "Chaque pièce commence par la sélection — uniquement les plus belles peaux issues de tanneries historiques. Notre couture à la selle, une technique presque perdue avec l'industrialisation, garantit une couture qui ne se défait jamais.",
    readMore: "Lire la suite",
  },
  workshop: {
    line1: "Artisanat patient,",
    italic: "fait pour durer",
    body:
      "Chaque pièce passe entre six paires de mains — la même séquence patiente que nous pratiquons à Kolkata depuis deux générations.",
    tiles: {
      leatherSelection: "Sélection du cuir",
      edgeFinishing: "Finition des bords",
      handStitching: "Couture à la main",
      workshopWall: "Mur d'atelier",
      theBench: "L'établi",
      artisanFocus: "Concentration artisanale",
    },
  },
  partner: {
    heading: "Prêt à devenir partenaire ?",
    body:
      "Trois façons honnêtes de commencer — d'un devis rapide à un échantillon entre vos mains, en jours, pas en semaines.",
    getQuote: {
      title: "Demander un devis",
      body:
        "Dites-nous ce dont vous avez besoin. Nous revenons avec un prix clair et honnête — pas de frais cachés, pas de détours.",
    },
    talkToUs: {
      title: "Parlons-en",
      body:
        "Pas encore prêt à vous engager ? Commandez d'abord un échantillon. Touchez le cuir, testez la couture, voyez la qualité avant de signer quoi que ce soit.",
    },
    orderSample: {
      title: "Commander un échantillon",
      body:
        "Une question particulière ? Notre équipe est là, prête à discuter sans détour.",
    },
  },
  sustainability: {
    fairlyPaid: {
      body: "Artisans rémunérés équitablement, alignés avec la WFTO.",
      link: "Garantie Ironclad",
    },
    sedexCert: {
      body: "Établissement certifié Sedex 5 piliers.",
      link: "Résumé d'audit",
    },
    noChildLabor: {
      body: "Pas de travail des enfants, ni forcé, ni discriminatoire.",
      link: "Visiter Worn Wear",
    },
    community: {
      body: "Une vision tournée vers la communauté et la réinsertion.",
      link: "Notre engagement",
    },
    vegTanned: {
      body: "Cuir au tannage végétal, découpe zéro déchet.",
      link: "Notre engagement",
    },
  },
  footer: {
    partnerResources: "Ressources partenaires",
    resources: {
      capabilities: "Nos savoir-faire",
      productionProcess: "Processus de production",
      materialsLibrary: "Bibliothèque de matériaux",
      moqLeadTimes: "MOQ & délais",
      whiteLabel: "Marque blanche",
      customDesign: "Design sur mesure",
      requestSample: "Demander un échantillon",
      certifications: "Certifications",
    },
    products: "Produits",
    productItems: {
      bags: "Sacs",
      belts: "Ceintures",
      scarves: "Écharpes",
      accessories: "Accessoires",
      misc: "Divers",
    },
    materials: "Matériaux",
    materialItems: {
      fullGrain: "Pleine fleur",
      smooth: "Cuir lisse",
      shanti: "Cuir Shanti",
      vegTanned: "Tannage végétal",
      embossed: "Embossé",
    },
    brochureHeading: "Demander la brochure",
    brochureBody:
      "Découvrez ce que nous fabriquons. Laissez votre email et nous vous enverrons notre brochure de savoir-faire — gamme de produits, matériaux, MOQs, délais et partenariats passés — en quelques minutes.",
    brochurePlaceholder: "vous@marque.com",
    brochureSubmit: "Envoyez-moi la brochure",
    contactVisit:
      "Rendez-nous visite à Kolkata ou planifiez une visite guidée de l'atelier — c'est un plaisir de vous accueillir.",
    contactHours: "Lun – Ven · 9h00 à 18h00 IST",
    copyright: "© {{year}} MKS Exports, Inc. Tous droits réservés.",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, it, de, fr };
