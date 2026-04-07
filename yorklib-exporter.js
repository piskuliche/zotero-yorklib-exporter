const YORKLIB_JOURNALS = {
  ACMTransMathSoft: "ACM Trans. Math Soft.",
  AccChemRes: "Acc. Chem. Res.",
  AdvChemPhys: "Adv. Chem. Phys.",
  AdvPhysOrgChem: "Adv. Phys. Org. Chem.",
  AdvQuantumChem: "Adv. Quantum Chem.",
  AngewChemIntEd: "Angew. Chem. Int. Ed.",
  AnnuRevBiochem: "Annu. Rev. Biochem.",
  AnnuRevBiophysBiomolStruct: "Annu. Rev. Biophys. Biomol. Struct.",
  AnnuRevPhysChem: "Annu. Rev. Phys. Chem.",
  BiochemBiophysResCommun: "Biochem. Biophys. Res. Commun.",
  Biochemistry: "Biochemistry",
  BiophysChem: "Biophys. Chem.",
  BiophysJ: "Biophys. J.",
  Biopolymers: "Biopolymers",
  Cell: "Cell",
  ChemBioChem: "ChemBioChem",
  ChemBiol: "Chem. Biol.",
  ChemCommun: "Chem. Commun.",
  ChemEurJ: "Chem. Eur. J.",
  ChemPhys: "Chem. Phys.",
  ChemPhysChem: "Chem. Phys. Chem.",
  ChemPhysLett: "Chem. Phys. Lett.",
  ChemRev: "Chem. Rev.",
  ComputPhysCommun: "Comput. Phys. Commun.",
  CrystGrowthDes: "Cryst. Growth Des.",
  CurrOpinChemBiol: "Curr. Opin. Chem. Biol.",
  CurrOpinStructBiol: "Curr. Opin. Struct. Biol.",
  EMBOJ: "EMBO J.",
  EnvironHealthPersp: "Environ. Health Persp.",
  EurBiophysJ: "Eur. Biophys. J.",
  EurJBiochem: "Eur. J. Biochem.",
  FEBSLett: "FEBS Lett.",
  InorgChem: "Inorg. Chem.",
  IntJQuantumChem: "Int. J. Quantum Chem.",
  JAmChemSoc: "J. Am. Chem. Soc.",
  JBiolChem: "J. Biol. Chem.",
  JBiolInorgChem: "J. Biol. Inorg. Chem.",
  JBiomolStructDyn: "J. Biomol. Struct. Dyn.",
  JChemEduc: "J. Chem. Educ.",
  JChemInfComputSci: "J. Chem. Inf. Comput. Sci.",
  JChemPhys: "J. Chem. Phys.",
  JChemSocFaradayTrans: "J. Chem. Soc. Faraday Trans.",
  JChemSocPerkinTrans: "J. Chem. Soc. Perkin Trans. 2",
  JChemTheoryComput: "J. Chem. Theory Comput.",
  JCollSciTeach: "J. Coll. Sci. Teach.",
  JComputAidedMolDes: "J. Comput.-Aided Mol. Des.",
  JComputChem: "J. Comput. Chem.",
  JComputPhys: "J. Comput. Phys.",
  JMassSpectrom: "J. Mass. Spectrom.",
  JMathPhys: "J. Math. Phys.",
  JMedChem: "J. Med. Chem.",
  JMolBiol: "J. Mol. Biol.",
  JMolGraphics: "J. Mol. Graphics",
  JMolModel: "J. Mol. Model.",
  "JMolStruct(Theochem)": "J. Mol. Struct. (Theochem)",
  JMolStruct: "J. Mol. Struct.",
  JOrgChem: "J. Org. Chem.",
  JPhysChem: "J. Phys. Chem.",
  JPhysChemA: "J. Phys. Chem. A",
  JPhysChemB: "J. Phys. Chem. B",
  JPhysCondensMatter: "J. Phys. Condens. Matter",
  JSciEducTechnol: "J. Sci. Educ. Technol.",
  JVirol: "J. Virol.",
  MolCell: "Mol. Cell",
  MolPhys: "Mol. Phys.",
  Nature: "Nature",
  NatBiotech: "Nat. Biotech.",
  NatCellBiol: "Nat. Cell. Biol.",
  NatChemBiol: "Nat. Chem. Biol.",
  NatMed: "Nat. Med.",
  NatStructBiol: "Nat. Struct. Biol.",
  NucleicAcidsRes: "Nucleic Acids Res.",
  OrgLett: "Org. Lett.",
  PhysChemChemPhys: "Phys. Chem. Chem. Phys.",
  PhysRevA: "Phys. Rev. A",
  PhysRevB: "Phys. Rev. B",
  PhysRevE: "Phys. Rev. E",
  PhysRevLett: "Phys. Rev. Lett.",
  PhysStatusSolidiB: "Phys. Status Solidi. B",
  ProcNatlAcadSci: "Proc. Natl. Acad. Sci. USA",
  ProteinSci: "Protein Sci.",
  Proteins: "Proteins",
  QRevBiophys: "Q. Rev. Biophys.",
  RNA: "RNA",
  ResSciEduc: "Res. Sci. Educ.",
  ResSciTechnolEduc: "Res. Sci. Technol. Educ.",
  RevComputChem: "Rev. Comput. Chem.",
  RevModPhys: "Rev. Mod. Phys.",
  Science: "Science",
  Structure: "Structure",
  SurfSci: "Surf. Sci.",
  TheorChemAcc: "Theor. Chem. Acc.",
  AmJPhys: "Am. J. Phys.",
  CellBioEduc: "Cell Bio. Educ.",
  ChemEducResPract: "Chem. Educ. Res. Prac.",
  ComputEduc: "Comput. Educ.",
  IntlJSciEduc: "Intl. J. Sci. Educ."
};

var YorklibExporter = {
  id: null,
  version: null,
  rootURI: null,
  menuItemId: "yorklib-export-selected",

  init({ id, version, rootURI }) {
    this.id = id;
    this.version = version;
    this.rootURI = rootURI;
  },

  addToAllWindows() {
    for (const window of Zotero.getMainWindows()) {
      this.addToWindow(window);
    }
  },

  removeFromAllWindows() {
    for (const window of Zotero.getMainWindows()) {
      this.removeFromWindow(window);
    }
  },

  addToWindow(window) {
    if (!window || window.document.getElementById(this.menuItemId)) {
      return;
    }

    const toolsPopup = window.document.getElementById("menu_ToolsPopup");
    if (!toolsPopup) {
      return;
    }

    const menuitem = window.document.createXULElement("menuitem");
    menuitem.id = this.menuItemId;
    menuitem.setAttribute("label", "Export Selected Items to Yorklib...");
    menuitem.addEventListener("command", () => {
      this.exportSelectedItems(window).catch((error) => {
        Zotero.logError(error);
        this.alert(window, "Yorklib Export Failed", String(error));
      });
    });
    toolsPopup.appendChild(menuitem);
  },

  removeFromWindow(window) {
    const menuitem = window?.document?.getElementById(this.menuItemId);
    if (menuitem) {
      menuitem.remove();
    }
  },

  async exportSelectedItems(window) {
    const pane = Zotero.getActiveZoteroPane();
    if (!pane) {
      this.alert(window, "Yorklib Export", "No active Zotero pane found.");
      return;
    }

    const selectedItems = pane.getSelectedItems() || [];
    const parentItems = this.getUniqueParentItems(selectedItems);
    if (!parentItems.length) {
      this.alert(window, "Yorklib Export", "Select at least one regular item or attachment.");
      return;
    }

    const outputRoot = await this.pickDestinationDirectory(window);
    if (!outputRoot) {
      return;
    }

    const destinationDirs = await this.ensureOutputDirectories(outputRoot);
    const results = [];
    for (const item of parentItems) {
      results.push(await this.exportItem(item, destinationDirs));
    }

    await this.writeCombinedBibFiles(destinationDirs, results);
    const missingAbstracts = await this.writeMissingAbstractReport(destinationDirs, results);
    const missingAbstractsPath = PathUtils.join(destinationDirs.fullbib, "missing_abstracts.txt");

    const exported = results.filter((result) => result.status === "exported");
    const skipped = results.filter((result) => result.status === "skipped");
    const complete = exported.filter((result) => result.bucket === "complete");
    const incomplete = exported.filter((result) => result.bucket === "incomplete");
    const misc = exported.filter((result) => result.bucket === "misc");
    const message = [
      `Exported ${exported.length} item(s) to ${outputRoot}.`,
      `Complete: ${complete.length} -> ${destinationDirs.complete}.`,
      `Needs attention: ${incomplete.length} -> ${destinationDirs.incomplete}.`,
      `Misc: ${misc.length} -> ${destinationDirs.misc}.`,
      `Combined bibs: ${destinationDirs.fullbib}.`,
      `Missing abstracts: ${missingAbstracts.length} -> ${missingAbstractsPath}.`,
      `Copied PDFs: ${exported.filter((result) => result.pdfCopied).length}.`,
      missingAbstracts.length ? missingAbstracts.map((result) => `- ${result.key}: ${result.title}`).join("\n") : "",
      skipped.length ? `Skipped: ${skipped.length}.` : "",
      skipped.length ? skipped.map((result) => `- ${result.title}: ${result.reason}`).join("\n") : ""
    ].filter(Boolean).join("\n\n");

    this.alert(window, "Yorklib Export", message);
  },

  getUniqueParentItems(items) {
    const seen = new Set();
    const parents = [];

    for (const item of items) {
      let parent = item;
      if (item.isAttachment() || item.isNote()) {
        const parentItem = item.parentItem;
        if (!parentItem) {
          continue;
        }
        parent = parentItem;
      }

      if (!parent.isRegularItem()) {
        continue;
      }
      if (seen.has(parent.id)) {
        continue;
      }
      seen.add(parent.id);
      parents.push(parent);
    }

    return parents;
  },

  async pickDestinationDirectory(window) {
    const picker = Cc["@mozilla.org/filepicker;1"].createInstance(Ci.nsIFilePicker);
    picker.init(window, "Choose Export Folder", Ci.nsIFilePicker.modeGetFolder);
    const response = await new Promise((resolve) => picker.open(resolve));
    if (response !== Ci.nsIFilePicker.returnOK) {
      return null;
    }
    return picker.file.path;
  },

  async ensureOutputDirectories(outputRoot) {
    const complete = PathUtils.join(outputRoot, "complete");
    const incomplete = PathUtils.join(outputRoot, "needs_attention");
    const misc = PathUtils.join(outputRoot, "misc");
    const fullbib = PathUtils.join(outputRoot, "fullbib_output");
    await IOUtils.makeDirectory(complete, { createAncestors: true, ignoreExisting: true });
    await IOUtils.makeDirectory(incomplete, { createAncestors: true, ignoreExisting: true });
    await IOUtils.makeDirectory(misc, { createAncestors: true, ignoreExisting: true });
    await IOUtils.makeDirectory(fullbib, { createAncestors: true, ignoreExisting: true });
    return { complete, incomplete, misc, fullbib };
  },

  async exportItem(item, destinationDirs) {
    const metadata = this.extractMetadata(item);
    if (!metadata.title) {
      return {
        status: "skipped",
        title: item.getField("title") || `[Item ${item.id}]`,
        reason: "missing title"
      };
    }

    const key = this.buildYorklibKey(metadata);
    const problems = this.collectProblems(metadata);
    const bucket = this.classifyBucket(metadata, problems);
    const destinationDir = destinationDirs[bucket];
    const bibPath = PathUtils.join(destinationDir, `${key}.bib`);
    const bibText = this.renderBibtex(key, metadata);
    await IOUtils.writeUTF8(bibPath, bibText);

    const pdfCopied = await this.copyFirstPdfAttachment(item, destinationDir, key);
    if (!pdfCopied) {
      problems.push("missing PDF");
    }

    const finalBucket = this.classifyBucket(metadata, problems);
    if (finalBucket !== bucket) {
      const finalBibPath = PathUtils.join(destinationDirs[finalBucket], `${key}.bib`);
      await IOUtils.move(bibPath, finalBibPath);
    }

    return {
      status: "exported",
      title: metadata.title,
      key,
      pdfCopied,
      bucket: finalBucket,
      problems,
      bibText,
      missingAbstract: !metadata.annote
    };
  },

  async writeCombinedBibFiles(destinationDirs, results) {
    const exported = results.filter((result) => result.status === "exported");
    const completedText = exported
      .filter((result) => result.bucket === "complete")
      .map((result) => result.bibText)
      .join("");
    const unpublishedText = exported
      .filter((result) => result.bucket === "incomplete")
      .map((result) => result.bibText)
      .join("");
    const miscText = exported
      .filter((result) => result.bucket === "misc")
      .map((result) => result.bibText)
      .join("");

    await IOUtils.writeUTF8(
      PathUtils.join(destinationDirs.fullbib, "completed.bib"),
      completedText
    );
    await IOUtils.writeUTF8(
      PathUtils.join(destinationDirs.fullbib, "unpublished.bib"),
      unpublishedText
    );
    await IOUtils.writeUTF8(
      PathUtils.join(destinationDirs.fullbib, "misc.bib"),
      miscText
    );
  },

  async writeMissingAbstractReport(destinationDirs, results) {
    const missingAbstracts = results.filter(
      (result) => result.status === "exported" && result.missingAbstract
    );
    const reportText = missingAbstracts.length
      ? missingAbstracts.map((result) => `${result.key}\t${result.title}`).join("\n") + "\n"
      : "";
    await IOUtils.writeUTF8(
      PathUtils.join(destinationDirs.fullbib, "missing_abstracts.txt"),
      reportText
    );
    return missingAbstracts;
  },

  extractMetadata(item) {
    const creators = this.getPrimaryCreators(item);
    const authors = creators.map((creator) => this.formatCreator(creator)).filter(Boolean);
    const lastName = this.resolveFirstCreatorLastName(item, creators);
    const url = item.getField("url") || "";
    const extra = item.getField("extra") || "";
    const journalAbbreviation = item.getField("journalAbbreviation") || "";
    const journalTitle = item.getField("publicationTitle") || item.getField("websiteTitle") || "";
    const archive = item.getField("archive") || "";
    const archiveLocation = item.getField("archiveLocation") || "";
    const archiveID = item.getField("archiveID") || "";
    const arxivId = this.resolveArxivId(archiveID, archiveLocation, url, extra);
    const isArxiv = this.isArxivItem(item, archive, archiveLocation, archiveID, url, extra, arxivId);
    const journalInfo = isArxiv
      ? { key: "arXiv", abbreviation: "arXiv", matched: true }
      : this.resolveYorklibJournal(journalAbbreviation, journalTitle);
    const year = this.extractYear(item.getField("date") || item.getField("year"));
    const volume = item.getField("volume") || "";
    const issue = item.getField("issue") || item.getField("number") || "";
    const pages = this.normalizePages(item.getField("pages") || "");
    const annote = item.getField("abstractNote") || "";
    const doi = item.getField("DOI") || this.extractDoiFromField(url);
    const pmcid = this.extractPMCID(item.getField("extra") || "");

    return {
      author: authors.join(" and "),
      title: item.getField("title") || "",
      journal: isArxiv ? "arXiv preprint" : journalInfo.abbreviation,
      journalKey: journalInfo.key,
      journalAbbreviation,
      journalTitle,
      journalMatched: journalInfo.matched,
      year,
      volume,
      issue,
      pages,
      annote,
      doi,
      PMCID: pmcid,
      lastName,
      isArxiv,
      arxivId,
      archiveLocation
    };
  },

  formatCreator(creator) {
    if (!creator) {
      return "";
    }

    if (creator.fieldMode === 1) {
      return creator.lastName || creator.name || "";
    }

    const given = creator.firstName || creator.first || "";
    const family = creator.lastName || creator.last || creator.name || "";
    if (!family) {
      return given;
    }
    if (/\s/.test(family)) {
      return `${given} {${family}}`.trim();
    }
    return `${given} ${family}`.trim();
  },

  getPrimaryCreators(item) {
    const creators = item.getCreators ? item.getCreators() : [];
    const preferred = creators.filter((creator) => this.isPrimaryCreator(creator));
    if (preferred.length) {
      return preferred;
    }

    const fallbackAuthors = this.parseNameField(item.getField("author") || "");
    if (fallbackAuthors.length) {
      return fallbackAuthors;
    }

    const fallbackEditors = this.parseNameField(item.getField("editor") || "");
    if (fallbackEditors.length) {
      return fallbackEditors;
    }

    if (creators.length) {
      return creators.filter((creator) => this.formatCreator(creator));
    }

    const firstCreator = item.getField("firstCreator") || "";
    if (!firstCreator) {
      return [];
    }

    return [{
      fieldMode: 1,
      lastName: String(firstCreator).replace(/\set al\.?$/i, "").trim()
    }];
  },

  isPrimaryCreator(creator) {
    const creatorType = creator?.creatorType || creator?.creatorTypeName || "";
    if (typeof creatorType === "string") {
      return creatorType === "author" || creatorType === "editor";
    }

    const creatorTypeID = creator?.creatorTypeID;
    if (creatorTypeID && Zotero.CreatorTypes?.getName) {
      const name = Zotero.CreatorTypes.getName(creatorTypeID);
      return name === "author" || name === "editor";
    }

    return false;
  },

  parseNameField(value) {
    if (!value) {
      return [];
    }

    return String(value)
      .split(/\s+and\s+/i)
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name) => {
        if (name.includes(",")) {
          const [last, first] = name.split(",", 2).map((part) => part.trim());
          return { firstName: first || "", lastName: last || "" };
        }

        const parts = name.split(/\s+/);
        if (parts.length === 1) {
          return { fieldMode: 1, lastName: parts[0] };
        }

        return {
          firstName: parts.slice(0, -1).join(" "),
          lastName: parts[parts.length - 1]
        };
      });
  },

  creatorFamilyName(creator) {
    if (!creator) {
      return "";
    }
    return creator.lastName || creator.last || creator.name || "";
  },

  resolveFirstCreatorLastName(item, creators) {
    const explicitCreator = this.creatorFamilyName(creators[0]);
    if (explicitCreator) {
      return explicitCreator;
    }

    const firstCreator = item.getField("firstCreator") || "";
    if (!firstCreator) {
      return "";
    }

    return String(firstCreator)
      .replace(/\set al\.?$/i, "")
      .split(/\s+(?:and|&)\s+/i)[0]
      .trim();
  },

  extractYear(dateValue) {
    if (!dateValue) {
      return "";
    }
    const match = String(dateValue).match(/\b(\d{4})\b/);
    return match ? match[1] : "";
  },

  normalizePages(pages) {
    if (!pages) {
      return "";
    }
    return String(pages).replace(/\s*-\s*/g, "--");
  },

  extractPageFrom(pages) {
    if (!pages) {
      return "";
    }
    return String(pages).split("--")[0].split("-")[0];
  },

  extractDoiFromField(value) {
    if (!value) {
      return "";
    }
    const match = String(value).match(/10\.\d{4,9}\/[^\s]+/i);
    return match ? match[0].replace(/[),.;]+$/, "") : "";
  },

  extractPMCID(extra) {
    if (!extra) {
      return "";
    }
    const match = String(extra).match(/\bPMCID\s*:\s*(PMC\d+)\b/i);
    return match ? match[1] : "";
  },

  extractArxivIdFromField(value) {
    if (!value) {
      return "";
    }

    const normalized = String(value).trim();
    const prefixedMatch = normalized.match(/\barXiv:\s*([A-Za-z0-9.\-]+(?:\/[A-Za-z0-9.\-]+)?)\b/i);
    if (prefixedMatch) {
      return prefixedMatch[1];
    }

    const modernMatch = normalized.match(/\b\d{4}\.\d{4,5}(?:v\d+)?\b/i);
    if (modernMatch) {
      return modernMatch[0];
    }

    const legacyMatch = normalized.match(/\b[a-z\-]+(?:\.[A-Z]{2})?\/\d{7}(?:v\d+)?\b/i);
    return legacyMatch ? legacyMatch[0] : "";
  },

  resolveArxivId(archiveID, archiveLocation, url, extra) {
    return this.extractArxivIdFromField(archiveID)
      || this.extractArxivIdFromField(url)
      || this.extractArxivIdFromField(extra)
      || this.extractArxivIdFromField(archiveLocation);
  },

  isArxivItem(item, archive, archiveLocation, archiveID, url, extra, arxivId) {
    const itemTypeID = item?.itemTypeID;
    const itemType = itemTypeID && Zotero.ItemTypes?.getName
      ? Zotero.ItemTypes.getName(itemTypeID)
      : "";
    const archiveText = [archive, archiveLocation, archiveID, url, extra, itemType]
      .filter(Boolean)
      .join(" ");
    return /\barxiv\b/i.test(archiveText) || Boolean(arxivId);
  },

  keyTokenSegment(value) {
    if (!value) {
      return "";
    }
    return this.asciiToken(value).replace(/[^A-Za-z0-9]+/g, "");
  },

  missingKeyToken(label) {
    return `XX${label}`;
  },

  buildYorklibKey(metadata) {
    const last = this.asciiToken(metadata.lastName).replace(/\s+/g, "") || this.missingKeyToken("AUTHOR");
    const journal = metadata.journalKey
      || this.journalToken(metadata.journalAbbreviation || metadata.journal)
      || this.missingKeyToken("JOURNAL");
    const year = metadata.year || this.missingKeyToken("YEAR");
    const volume = metadata.volume
      || (metadata.isArxiv ? "preprint" : this.missingKeyToken("VOL"));
    const pageFrom = this.extractPageFrom(metadata.pages)
      || (metadata.isArxiv
        ? this.keyTokenSegment(metadata.arxivId) || this.missingKeyToken("ARXIV")
        : this.missingKeyToken("PAGE"));
    return `${last}_${journal}_${year}_v${volume}_p${pageFrom}`;
  },

  collectProblems(metadata) {
    const problems = [];
    if (!metadata.author) {
      problems.push("missing author");
    }
    if (!metadata.lastName || this.asciiToken(metadata.lastName).replace(/\s+/g, "") === "") {
      problems.push("missing first-author surname for key");
    }
    if (!metadata.journal && !metadata.isArxiv) {
      problems.push("missing journal");
    }
    if (metadata.journalTitle && !metadata.journalAbbreviation && !metadata.isArxiv) {
      problems.push("missing journal abbreviation");
    }
    if (metadata.journalAbbreviation && !metadata.journalMatched && !metadata.isArxiv) {
      problems.push("journal abbreviation not mapped to Yorklib");
    }
    if (!metadata.year) {
      problems.push("missing year");
    }
    if (!metadata.volume && !metadata.isArxiv) {
      problems.push("missing volume");
    }
    if (!metadata.pages && !metadata.isArxiv) {
      problems.push("missing pages");
    }
    if (!metadata.doi && !metadata.isArxiv) {
      problems.push("missing DOI");
    }
    if (metadata.isArxiv && !metadata.arxivId) {
      problems.push("missing arXiv identifier");
    }
    return problems;
  },

  classifyBucket(metadata, problems) {
    if (metadata.isArxiv) {
      return "incomplete";
    }

    if (!problems.length) {
      return "complete";
    }

    const nonJournalProblems = problems.filter(
      (problem) =>
        problem !== "missing journal abbreviation" &&
        problem !== "journal abbreviation not mapped to Yorklib"
    );
    if (!nonJournalProblems.length) {
      return "misc";
    }

    return "incomplete";
  },

  asciiToken(value) {
    if (!value) {
      return "";
    }
    return String(value)
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\x20-\x7E]/g, "");
  },

  journalToken(value) {
    if (!value) {
      return "";
    }
    return this.asciiToken(value).replace(/[\s\-.]/g, "");
  },

  normalizeJournalLookup(value) {
    if (!value) {
      return "";
    }
    return this.asciiToken(value).toLowerCase().replace(/[^a-z0-9]+/g, "");
  },

  resolveYorklibJournal(journalAbbreviation, journalTitle) {
    const abbrLookup = this.normalizeJournalLookup(journalAbbreviation);
    const titleLookup = this.normalizeJournalLookup(journalTitle);

    for (const [key, abbreviation] of Object.entries(YORKLIB_JOURNALS)) {
      const keyLookup = this.normalizeJournalLookup(key);
      const knownAbbrLookup = this.normalizeJournalLookup(abbreviation);
      if (abbrLookup && (abbrLookup === knownAbbrLookup || abbrLookup === keyLookup)) {
        return { key, abbreviation, matched: true };
      }
      if (titleLookup && (titleLookup === knownAbbrLookup || titleLookup === keyLookup)) {
        return { key, abbreviation, matched: true };
      }
    }

    const fallback = journalAbbreviation || journalTitle || "";
    return {
      key: this.journalToken(fallback),
      abbreviation: fallback,
      matched: false
    };
  },

  renderBibtex(key, metadata) {
    const fields = metadata.isArxiv ? [
      ["author", metadata.author],
      ["title", metadata.title, true],
      ["journal", metadata.journal],
      ["year", metadata.year],
      ["eprint", metadata.arxivId],
      ["archivePrefix", "arXiv"],
      ["primaryClass", metadata.archiveLocation],
      ["annote", metadata.annote, false, true],
      ["PMCID", metadata.PMCID],
      ["doi", metadata.doi]
    ] : [
      ["author", metadata.author],
      ["title", metadata.title, true],
      ["journal", metadata.journal],
      ["year", metadata.year],
      ["volume", metadata.volume],
      ["issue", metadata.issue],
      ["pages", metadata.pages],
      ["annote", metadata.annote, false, true],
      ["PMCID", metadata.PMCID],
      ["doi", metadata.doi]
    ];

    const lines = [`@Article{${key},`];
    for (const [field, rawValue, protectTitle, alwaysInclude] of fields) {
      if (!rawValue && !alwaysInclude) {
        continue;
      }
      const normalizedValue = this.normalizeBibFieldValue(field, rawValue == null ? "" : String(rawValue));
      const value = this.formatBibValue(normalizedValue, Boolean(protectTitle));
      lines.push(`    ${(field + " =").padEnd(11, " ")} ${value},`);
    }
    lines.push("}");
    lines.push("");
    return lines.join("\n");
  },

  normalizeBibFieldValue(field, value) {
    const normalized = String(value).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    if (field === "annote") {
      // Yorklib's validator is much less fragile when the abstract stays on one logical line.
      return normalized.replace(/\s*\n\s*/g, " ").replace(/\s+/g, " ").trim();
    }
    return normalized;
  },

  formatBibValue(value, protectTitle) {
    if (/^\d+$/.test(value)) {
      return value;
    }

    const escaped = this.convertUnicodeToLatex(value);

    if (protectTitle) {
      return `{{${escaped}}}`;
    }
    return `{${escaped}}`;
  },

  convertUnicodeToLatex(value) {
    const directMap = {
      "\u03b1": "{$\\alpha$}",
      "\u03b2": "{$\\beta$}",
      "\u03b3": "{$\\gamma$}",
      "\u03b4": "{$\\delta$}",
      "\u03b5": "{$\\epsilon$}",
      "\u03b6": "{$\\zeta$}",
      "\u03b7": "{$\\eta$}",
      "\u03b8": "{$\\theta$}",
      "\u03b9": "{$\\iota$}",
      "\u03ba": "{$\\kappa$}",
      "\u03bb": "{$\\lambda$}",
      "\u03bc": "{$\\mu$}",
      "\u03bd": "{$\\nu$}",
      "\u03be": "{$\\xi$}",
      "\u03c0": "{$\\pi$}",
      "\u03c1": "{$\\rho$}",
      "\u03c3": "{$\\sigma$}",
      "\u03c4": "{$\\tau$}",
      "\u03c5": "{$\\upsilon$}",
      "\u03c6": "{$\\phi$}",
      "\u03c7": "{$\\chi$}",
      "\u03c8": "{$\\psi$}",
      "\u03c9": "{$\\omega$}",
      "\u0394": "{$\\Delta$}",
      "\u0398": "{$\\Theta$}",
      "\u039b": "{$\\Lambda$}",
      "\u039e": "{$\\Xi$}",
      "\u03a0": "{$\\Pi$}",
      "\u03a3": "{$\\Sigma$}",
      "\u03a6": "{$\\Phi$}",
      "\u03a8": "{$\\Psi$}",
      "\u03a9": "{$\\Omega$}",
      "\u00d7": "{$\\times$}",
      "\u00b1": "{$\\pm$}",
      "\u2212": "--",
      "\u2013": "--",
      "\u2014": "---",
      "\u00b0": "{$^\\circ$}",
      "\u212b": "\\AA{}",
      "\u2264": "{$\\leq$}",
      "\u2265": "{$\\geq$}",
      "\u2248": "{$\\approx$}",
      "\u2018": "'",
      "\u2019": "'",
      "\u201c": "``",
      "\u201d": "''",
      "\u2026": "...",
      "\u00a0": " ",
      "\u2009": " ",
      "\u2002": " ",
      "\u2003": " ",
      "\u200b": "",
      "\u00df": "{\\ss}",
      "\u00e6": "{\\ae}",
      "\u00c6": "{\\AE}",
      "\u0153": "{\\oe}",
      "\u0152": "{\\OE}",
      "\u00f8": "{\\o}",
      "\u00d8": "{\\O}",
      "\u0142": "{\\l}",
      "\u0141": "{\\L}"
    };

    let output = "";
    for (const char of String(value)) {
      output += this.latexForCharacter(char, directMap);
    }
    return this.forcePrintableAscii(output);
  },

  latexForCharacter(char, directMap) {
    if (Object.prototype.hasOwnProperty.call(directMap, char)) {
      return directMap[char];
    }

    if (/[\x20-\x7E]/.test(char)) {
      return this.escapeAsciiForLatex(char);
    }

    const decomposed = char.normalize("NFD");
    const base = decomposed[0];
    const marks = decomposed.slice(1);
    if (/^[A-Za-z]$/.test(base) && marks) {
      const accented = this.applyLatexCombiningMarks(base, marks);
      if (accented) {
        return accented;
      }
      return this.escapeAsciiForLatex(base);
    }

    const asciiFallback = this.asciiToken(char);
    if (asciiFallback) {
      return asciiFallback
        .split("")
        .map((piece) => this.escapeAsciiForLatex(piece))
        .join("");
    }

    return "";
  },

  applyLatexCombiningMarks(base, marks) {
    let output = base;
    for (const mark of marks) {
      switch (mark) {
        case "\u0301":
          output = `\\'{${output}}`;
          break;
        case "\u0300":
          output = `\\\`{${output}}`;
          break;
        case "\u0302":
          output = `\\^{${output}}`;
          break;
        case "\u0303":
          output = `\\~{${output}}`;
          break;
        case "\u0308":
          output = `\\"{${output}}`;
          break;
        case "\u0304":
          output = `\\={${output}}`;
          break;
        case "\u0307":
          output = `\\.{${output}}`;
          break;
        case "\u030c":
          output = `\\v{${output}}`;
          break;
        case "\u0327":
          output = `\\c{${output}}`;
          break;
        case "\u0328":
          output = `\\k{${output}}`;
          break;
        case "\u030a":
          output = base === "A" ? "\\AA{}" : base === "a" ? "\\aa{}" : `\\r{${output}}`;
          break;
        default:
          return "";
      }
    }
    return output;
  },

  escapeAsciiForLatex(char) {
    switch (char) {
      case "\n":
        return "\n";
      case "\t":
        return " ";
      case "\\":
        return "\\textbackslash{}";
      case "{":
        return "\\{";
      case "}":
        return "\\}";
      case "#":
        return "\\#";
      case "$":
        return "\\$";
      case "%":
        return "\\%";
      case "&":
        return "\\&";
      case "_":
        return "\\_";
      case "^":
        return "\\^{}";
      case "~":
        return "\\~{}";
      default:
        return char;
    }
  },

  forcePrintableAscii(value) {
    let output = "";
    for (const char of String(value)) {
      if (char === "\n") {
        output += "\n";
        continue;
      }
      if (char === "\t") {
        output += " ";
        continue;
      }
      const code = char.charCodeAt(0);
      if (code >= 0x20 && code <= 0x7e) {
        output += char;
        continue;
      }

      const asciiFallback = this.asciiToken(char);
      if (asciiFallback) {
        output += asciiFallback.replace(/[^\x20-\x7E]/g, "");
        continue;
      }

      output += " ";
    }
    return output;
  },

  async copyFirstPdfAttachment(item, destinationDir, key) {
    const attachmentIDs = item.getAttachments ? item.getAttachments() : [];
    if (!attachmentIDs.length) {
      return false;
    }

    const attachments = Zotero.Items.get(attachmentIDs) || [];
    for (const attachment of attachments) {
      if (attachment.attachmentContentType !== "application/pdf") {
        continue;
      }

      const sourcePath = attachment.getFilePath();
      if (!sourcePath) {
        continue;
      }

      const destinationPath = PathUtils.join(destinationDir, `${key}.pdf`);
      await IOUtils.copy(sourcePath, destinationPath);
      return true;
    }

    return false;
  },

  alert(window, title, message) {
    Services.prompt.alert(window, title, message);
  }
};
