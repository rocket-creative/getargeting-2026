/**
 * Publications Data for Ingenious Targeting Laboratory
 * 
 * HOW TO UPDATE:
 * 1. Add new publications to the beginning of the appropriate year array
 * 2. If adding a new year, create a new entry at the top of the publicationsByYear object
 * 3. Each publication should have: authors, year, title, journal, volume/issue info
 * 
 * FORMAT:
 * {
 *   authors: "Author A, Author B, Author C.",
 *   year: 2025,
 *   title: "Publication title here.",
 *   journal: "Journal Name",
 *   volume: "Volume(Issue): Pages" // or "Online ahead of print"
 * }
 */

export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  volume: string;
}

export interface PublicationsByYear {
  [year: string]: Publication[];
}

export const publicationsByYear: PublicationsByYear = {
  "2025": [
    {
      authors: "Tebbe L, Ikelle L, Makia MS, Kakakhel M, Al-Ubaidi MR, Naash MI.",
      year: 2025,
      title: "Syntaxin 3B Mediates Light-Dependent Interactions with STXBP1 and Arrestin 4: Distinct Roles in Rods and Cones.",
      journal: "Adv Sci (Weinh)",
      volume: "Online ahead of print"
    },
    {
      authors: "Salzbank J, Lacaille H, Gaby J, O'Reilly JJ, Kissner M, Vacher CM, Penn AA.",
      year: 2025,
      title: "Microglia alter sex-specific cerebellar myelination following placental hormone loss.",
      journal: "Nat Commun",
      volume: "16(1): 9846"
    },
    {
      authors: "Diamond EL, Emile JF, Fujino T, Haroche J, Maron MI, Lewis AM, Rahman J, Reiner AS, Bossert D, Rosenblum M, Yabe M, Petrova-Drus K, Francis JH, Rotemberg V, Rampal RK, Yoo S, Daniyan AF, Mahajan S, Hatzoglou V, Young R, Ulaner GA, Rösler W, Hershkovitz-Rokah O, Shpilberg O, Mazor RD, Chen LYC, Singer M, Cuibus MA, Weis K, Benbarche S, Zhang P, Fox N, Castro C, Tittley S, Witkowski M, Cohen-Aubart F, Terriou L, Hanoun M, Schleinitz N, Sosa G, Hautala T, De Lassus LF, Rosen N, Abdel-Wahab O, Durham BH.",
      year: 2025,
      title: "RAF-independent MEK mutations drive refractory histiocytic neoplasms but respond to ERK inhibition.",
      journal: "Cancer Cell",
      volume: "Online ahead of print"
    },
    {
      authors: "Reinartz DM, Escamilla-Rivera V, Shao M, Tribble SL, Caulin C, Wilson JE.",
      year: 2025,
      title: "Impact of absent in melanoma 2 on head and neck squamous cell carcinoma development.",
      journal: "J Immunol",
      volume: "vkaf224"
    },
    {
      authors: "Chandrasekharan B, Wu H, Smoller C, Kim J, Wolfarth AA, Eboka R, Boyer D, Metzger AJ, Addis CR, Liu K, Srinivasan S, Macpherson AJ, Jones RM, Neish AS.",
      year: 2025,
      title: "Microbiota-dependent formylated peptide receptor (Fpr1/2) signaling regulates enteric nervous system development and gastrointestinal motility in mice.",
      journal: "Cell Mol Gastroenterol Hepatol",
      volume: "12(19): 101624"
    },
    {
      authors: "Norlander AE, Abney M, Zhang J, Polosukhin VV, Thomas CM, Ceneviva ZJ, AlMotairy R, Patel R, Cephus JY, Toki S, Zhou W, Chatila TA, Newcomb DC, Peebles RS Jr.",
      year: 2025,
      title: "Prostaglandin I2 signaling restrains Treg ST2 expression by repressing β-catenin in allergic airway inflammation.",
      journal: "J Allergy Clin Immunol",
      volume: "Online ahead of print"
    },
    {
      authors: "MacDowell Kaswan ZA, Hurtado M, Chen EY, Steelman AJ, McCusker RH.",
      year: 2025,
      title: "Ido1 or Ido2 deficiency in myeloid-derived cells attenuates TMEV-induced ictogenesis.",
      journal: "J Neuroimmunol",
      volume: "2025(408): 578707"
    },
    {
      authors: "Jiang Y, Sachdeva K, Goulbourne CN, Berg MJ, Peddy J, Stavrides PH, Pensalfini A, Pawlik M, Malampati S, Whyte L, Basavarajappa BS, Shivakumar S, Bleiwas C, Smiley JF, Mathews PM, Nixon RA.",
      year: 2025,
      title: "Increased neuronal expression of the early endosomal adaptor APPL1 leads to endosomal and synaptic dysfunction with cholinergic neurodegeneration.",
      journal: "J Neurosci",
      volume: "29(45): e2331242025"
    },
    {
      authors: "Zhou W, Zhang J, Chowdhury NU, Norlander AE, Toki S, Abney M, Rusznak M, Gibson-Corley KN, Cook DP, Newcomb DC, Peebles RS Jr.",
      year: 2025,
      title: "PGI2 signaling metabolically reprograms CD4 Th2 cells and represses allergic airway inflammation.",
      journal: "J Immunol",
      volume: "9(214): 2270-2280"
    },
    {
      authors: "Choe HJ, Lee JS, Park JY, Lee SA, Park YJ, Chung SS, Park KS.",
      year: 2025,
      title: "SENP2 regulates UCP1-dependent thermogenesis in brown adipocytes via deSUMOylation of ERRα.",
      journal: "Exp Mol Med",
      volume: "6(57): 1283-1293"
    },
    {
      authors: "Brown AC, Uddin MJ, Munday RM, Naz F, Moreau GB, Ramakrishnan G, Rich SS, Haque R, Wojcik GL, Duggal P, Marie C, Petri WA Jr.",
      year: 2025,
      title: "The cAMP responsive element modulator (CREM) transcription factor influences susceptibility to undernutrition and infection.",
      journal: "mBio",
      volume: "8(16): e0139025"
    },
    {
      authors: "Wang L, Noyer L, Jishage M, Wang YH, Tao AY, McDermott M, Gando I, Sidhu I, Hu K, Zhong L, Sun K, Drmic D, Kaufmann U, Feske S.",
      year: 2025,
      title: "CLNS1A regulates genome stability and cell cycle progression to control CD4 T cell function and autoimmunity.",
      journal: "Sci Immunol",
      volume: "108(10): eadq8860"
    },
    {
      authors: "Milanick W, Li J, Thomas CI, Al-Yaari M, Guerrero-Given D, Kamasawa N, Young SM Jr.",
      year: 2025,
      title: "Presynaptic α2δs specify synaptic gain, not synaptogenesis, in the mammalian brain.",
      journal: "Neuron",
      volume: "12(113): p1886-1897.E9"
    },
    {
      authors: "Pioli KT, Ritchie M, Haq H, Pioli PD.",
      year: 2025,
      title: "Jchain-Diphtheria Toxin Receptor Mice Allow for Diphtheria Toxin-Mediated Depletion of Antibody-Secreting Cells and Analysis of Differentiation Kinetics.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Mohassel P, Hearn H, Rooney J, Zou Y, Johnson K, Norato G, Nalls MA, Yun P, Ogata T, Silverstein S, Sleboda DA, Roberts TJ, Rifkin DB, Bönnemann CG.",
      year: 2025,
      title: "Collagen type VI regulates TGF-β bioavailability in skeletal muscle in mice.",
      journal: "J Clin Invest",
      volume: "9(135): e173354"
    },
    {
      authors: "Lee B, Kwon JT, Jeong Y, Caris H, Oh D, Feng M, Davila Mejia I, Zhang X, Ishikawa T, Watson BR, Moffitt JR, Chung K, Huh JR, Choi GB.",
      year: 2025,
      title: "Inflammatory and anti-inflammatory cytokines bidirectionally modulate amygdala circuits regulating anxiety.",
      journal: "Cell",
      volume: "8(188): 2190-2202.e15"
    },
    {
      authors: "Ham H, Hirdler JB, Bihnam DT, Mao Z, Gicobi JK, Macedo BG, Rodriguez-Quevedo MF, Schultz DF, Correia C, Zhong J, Martinez KE, Banuelos A, Ashton DS, Lagnado AB, Guo R, Pessoa R, Pandey A, Li H, Lucien F, Borges da Silva H, Dong H, Billadeau DD.",
      year: 2025,
      title: "Lysosomal NKG7 restrains mTORC1 activity to promote CD8+ T cell durability and tumor control.",
      journal: "Nat Commun",
      volume: "16(1): 1628"
    },
    {
      authors: "Zong P, Li CX, Feng J, Yue Z, Nethramangalath T, Xie Y, Qin X, Cicchetti M, Cai Y, Jellison E, Matsushita M, Runnels LW, Yue L.",
      year: 2025,
      title: "TRPM7 channel activity promotes the pathogenesis of abdominal aortic aneurysms.",
      journal: "Nat Cardiovasc Res",
      volume: "4(2): 197-215"
    },
    {
      authors: "Navarro HI, Daly AE, Rodriguez B, Wu S, Ngo KA, Fraser A, Schiffman A, Liu Y, Smale ST, Chia JJ, Hoffmann A.",
      year: 2025,
      title: "NF-κB RelB suppresses the inflammatory gene expression programs of dendritic cells by competing with RelA for binding to target gene promoters.",
      journal: "Cell Discov",
      volume: "11(1): 13"
    },
    {
      authors: "Mao Z, Hirdler JB, Gicobi JK, Maynes M, Hsu MA, Dellacecca ER, Zhang W, Teske JJ, Li Y, Zhao G, Lucien-Matteoni F, da Silva HB, Billadeau DD, Dong H.",
      year: 2025,
      title: "PD-1 prelimits both the cytotoxic and exhaustion potential in thymic CD8+ T cells and impacts the maintenance of peripheral tumor immunity.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Shaikh K, Bowman M, McCormick SM, Gao L, Zhang J, White J, Tawil J, Kapoor A, Arav-Boger R, Norbury CC, Harhaj EW.",
      year: 2025,
      title: "ZFAND6 promotes TRAF2-dependent mitophagy to restrain cGAS-STING signaling.",
      journal: "iScience",
      volume: "1(28): 111544"
    }
  ],
  "2024": [
    {
      authors: "Nargis T, Muralidharan C, Enriquez JR, Wang JE, Kaylan K, Chakraborty A, Pratuangtham S, Figatner K, Nelson JB, May SC, Nadler JL, Boxer MB, Maloney DJ, Tersey SA, Mirmira RG.",
      year: 2024,
      title: "12-Lipoxygenase inhibition delays onset of autoimmune diabetes in human gene replacement mice.",
      journal: "JCI Insight",
      volume: "24(9): e185299"
    },
    {
      authors: "Alexander M, Upadhyay V, Rock R, Ramirez L, Trepka K, Puchalska P, Orellana D, Ang QY, Whitty C, Turnbaugh JA, Tian Y, Dumlao D, Nayak R, Patterson A, Newman JC, Crawford PA, Turnbaugh PJ.",
      year: 2024,
      title: "A diet-dependent host metabolite shapes the gut microbiota to protect from autoimmunity.",
      journal: "Cell Rep",
      volume: "11(43): 114891"
    },
    {
      authors: "Ghosh A, Chénier I, Leung YH, Oppong AK, Peyot M-L, Madiraju SRM, Al-Khairi I, Abubaker J, Al-Mulla F, Prentki M, Abu-Farha M.",
      year: 2024,
      title: "Adipocyte Angptl8 deletion improves glucose and energy metabolism and obesity associated inflammation in mice.",
      journal: "iScience",
      volume: "12(27): 111292"
    },
    {
      authors: "Tran P, Mishra P, Williams LG, Moskalenko R, Sharma S, Nilsson AK, Watt DL, Andersson P, Bergh A, Pursell ZF, Chabes A.",
      year: 2024,
      title: "Altered dNTP pools accelerate tumor formation in mice.",
      journal: "Nucleic Acids Res",
      volume: "52(20): 12475-12486"
    },
    {
      authors: "Bowman RL, Dunbar AJ, Mishra T, Xiao W, Waarts MR, Maestre IF, Eisman SE, Cai L, Mowla S, Shah N, Youn A, Bennett L, Fontenard S, Gounder S, Gandhi A, Bowman M, O'Connor K, Zaroogian Z, Sánchez-Vela P, Martinez Benitez AR, Werewski M, Park Y, Csete IS, Krishnan A, Lee D, Boorady N, Potts CR, Jenkins MT, Cai SF, Carroll MP, Meyer SE, Miles LA, Ferrell PB Jr, Trowbridge JJ, Levine RL.",
      year: 2024,
      title: "In vivo models of subclonal oncogenesis and dependency in hematopoietic malignancy.",
      journal: "Cancer Cell",
      volume: "11(42): 1955-1969.e7"
    },
    {
      authors: "Liang C, Malik S, He M, Groom L, Ture SK, O'Connor TN, Morrell CN, Bhatt AS, Bhatti A, Bhagat K, Bhardwaj N, Dirksen RT.",
      year: 2024,
      title: "Compound heterozygous RYR1-RM mouse model reveals disease pathomechanisms and muscle adaptations to promote postnatal survival.",
      journal: "FASEB J",
      volume: "20(38): e70120"
    },
    {
      authors: "Liouta K, Lubas M, Venugopal V, Chabbert J, Jeannière C, Diaz C, Munier M, Tessier B, Claverol S, Favereaux A, Sainlos M, de Wit J, Letellier M, Thoumine O, Chamma I.",
      year: 2024,
      title: "LRRTM2 controls presynapse nano-organization and AMPA receptor sub-positioning through Neurexin-binding interface.",
      journal: "Nat Commun",
      volume: "15(1): 8807"
    },
    {
      authors: "Ramasamy C, Neelamegam K, Ramachandran S, Xia H, Kapusta DR, Danesh FR, Pandey KN.",
      year: 2024,
      title: "Podocyte Cell-Specific Npr1 is Required for Blood Pressure and Renal Homeostasis in Male and Female Mice: Role of Sex-Specific Differences.",
      journal: "Physiol Genomics",
      volume: "56(10): 672-690"
    },
    {
      authors: "Hockemeyer K, Sakellaropoulos T, Chen X, Ivashkiv O, Sirenko M, Zhou H, Gambi G, Battistello E, Avrampou K, Sun Z, Guillamot M, Chiriboga L, Jour G, Dolgalev I, Corrigan K, Bhatt, Osman I, Tsirigos A, Kourtis N, Aifantis I.",
      year: 2024,
      title: "The stress response regulator HSF1 modulates natural killer cell anti-tumour immunity.",
      journal: "Nat Cell Biol",
      volume: "26(10): 1734-1744"
    },
    {
      authors: "Marshall Moscon S, Neely E, Proctor E, Connor J.",
      year: 2024,
      title: "A common variant in the iron regulatory gene (Hfe) alters the metabolic and transcriptional landscape in brain regions vulnerable to neurodegeneration.",
      journal: "J Neurochem",
      volume: "9(168): 3132-3153"
    },
    {
      authors: "van Doremalen N, Bushmaker T, Fischer RJ, Okumura A, Figueroa Acosta DM, McMinn RJ, Letko M, Scott D, Saturday G, Munster VJ.",
      year: 2024,
      title: "Transmission dynamics of MERS-CoV in a transgenic human DPP4 mouse model.",
      journal: "npj Viruses",
      volume: "2(36)"
    },
    {
      authors: "Andres-Hernando A, Orlicky DJ, Kuwabara M, Fini MA, Tolan DR, Johnson RJ, Lanaspa MA.",
      year: 2024,
      title: "Activation of AMPD2 drives metabolic dysregulation and liver disease in mice with hereditary fructose intolerance.",
      journal: "Commun Biol",
      volume: "7(1): 849"
    },
    {
      authors: "Sabui S, Anthonymuthu S, Ramamoorthy K, Skupsky J, Jennings TSK, Rahmatpanah F, Fleckenstein JM, Said HM.",
      year: 2024,
      title: "Effect of knocking out mouse Slc44a4 on colonic uptake of the microbiota-generated thiamine pyrophosphate and on colon physiology.",
      journal: "Am J Physiol Gastrointest Liver Physiol",
      volume: "327(1): G36-G46"
    },
    {
      authors: "Serrano J, Boyd J, Brown IS, Mason C, Smith KR, Karolyi K, Maurya SK, Meshram NN, Serna V, Link GM, Gardell SJ, Kyriazis GA.",
      year: 2024,
      title: "The TAS1R2 G-protein-coupled receptor is an ambient glucose sensor in skeletal muscle that regulates NAD homeostasis and mitochondrial capacity.",
      journal: "Nat Commun",
      volume: "15(1): 4915"
    },
    {
      authors: "Du SW, Komirisetty R, Lewandowski D, Choi EH, Panas D, Suh S, Tabaka M, Radu RA, Palczewski K.",
      year: 2024,
      title: "Conditional deletion of miR-204 and miR-211 in murine retinal pigment epithelium results in retinal degeneration.",
      journal: "J Biol Chem",
      volume: "300(6): 107344"
    },
    {
      authors: "Corral-Sarasa J, Manuel Martínez-Gálvez J, González-García P, Wendling O, Jiménez-Sánchez L, López-Herrador S, Quinzii CM, Díaz-Casado ME, López LC.",
      year: 2024,
      title: "4-Hydroxybenzoic acid rescues multisystemic disease and perinatal lethality in a mouse model of mitochondrial disease.",
      journal: "Cell Rep",
      volume: "43(5): 114148"
    },
    {
      authors: "Bassetto M, Kolesnikov AV, Lewandowski D, Kiser JZ, Halabi M, Einstein DE, Choi EH, Palczewski K, Kefalov VJ, Kiser PD.",
      year: 2024,
      title: "Dominant role for pigment epithelial CRALBP in supplying visual chromophore to photoreceptors.",
      journal: "Cell Rep",
      volume: "43(5): 114143"
    },
    {
      authors: "Benbarche S, Pineda JMB, Galvis LB, Biswas J, Liu B, Wang E, Zhang Q, Hogg SJ, Lyttle K, Dahi A, Lewis AM, Sarchi M, Rahman J, Fox N, Ai Y, Mehta S, Garippa R, Ortiz-Pacheco J, Li Z, Monetti M, Stanley RF, Doulatov S, Bradley RK, Abdel-Wahab O.",
      year: 2024,
      title: "GPATCH8 modulates mutant SF3B1 mis-splicing and pathogenicity in hematologic malignancies.",
      journal: "Mol Cell",
      volume: "84(10): 1886-1903"
    },
    {
      authors: "Thomas ME, Qi W, Walsh MP, Ma J, Westover T, Abdelhamed S, Ezzell LJ, Rolle C, Xiong E, Rosikiewicz W, Xu B, Loughran AJ, Pruett-Miller SM, Janke LJ, Klco JM.",
      year: 2024,
      title: "Functional characterization of cooperating MGA mutations in RUNX1::RUNX1T1 acute myeloid leukemia.",
      journal: "Leukemia",
      volume: "5(38): 991-1002"
    },
    {
      authors: "Dunbar AJ, Bowman RL, Park YC, O'Connor K, Izzo F, Myers RM, Karzai A, Zaroogian Z, Kim WJ, Fernández-Maestre I, Waarts MR, Nazir A, Xiao W, Codilupi T, Brodsky M, Farina M, Cai L, Cai SF, Wang B, An W, Yang JL, Mowla S, Eisman SE, Hanasoge Somasundara AV, Glass JL, Mishra T, Houston R, Guzzardi E, Martinez Benitez AR, Viny AD, Koche RP, Meyer SC, Landau DA, Levine RL.",
      year: 2024,
      title: "Jak2V617F Reversible Activation Shows Its Essential Requirement in Myeloproliferative Neoplasms.",
      journal: "Cancer Discov",
      volume: "14(5): 737-751"
    },
    {
      authors: "Kittaka M, Mizuno N, Morino H, Yoshimoto T, Zhu T, Liu S, Wang Z, Mayahara K, Iio K, Kondo K, Kondo T, Hayashi T, Coghlan S, Teno Y, Anh Phung Doan A, Levitan M, Choi RB, Matsuda S, Ouhara K, Wan J, Cassidy AM, Pelletier S, Nampoothiri S, Urtizberea AJ, Robling AG, Ono M, Kawakami H, Reichenberger EJ, Ueki Y.",
      year: 2024,
      title: "Loss-of-function OGFRL1 variants identified in autosomal recessive cherubism families.",
      journal: "JBMR Plus",
      volume: "8(6): ziae050"
    },
    {
      authors: "Tsvilovskyy V, Ottenheijm R, Kriebs U, Schütz A, Diakopoulos KN, Jha A, Bildl W, Wirth A, Böck J, Jaślan D, Ferro I, Taberner FJ, Kalinina O, Hildebrand S, Wissenbach U, Weissgerber P, Vogt D, Eberhagen C, Mannebach S, Berlin M, Kuryshev V, Schumacher D, Philippaert K, Camacho-Londoño JE, Mathar I, Dieterich C, Klugbauer N, Biel M, Wahl-Schott C, Lipp P, Flockerzi V, Zischka H, Algül H, Lechner SG, Lesina M, Grimm C, Fakler B, Schulte U, Muallem S, Freichel M.",
      year: 2024,
      title: "OCaR1 endows exocytic vesicles with autoregulatory competence by preventing uncontrolled Ca2+ release, exocytosis, and pancreatic tissue damage.",
      journal: "J Clin Invest",
      volume: "134(7): e169428"
    },
    {
      authors: "Herrera JL, Komatsu M.",
      year: 2024,
      title: "Akt3 activation by R-Ras in an endothelial cell enforces quiescence and barrier stability of neighboring endothelial cells via Jagged1.",
      journal: "Cell Rep",
      volume: "43(3): 113837"
    },
    {
      authors: "Yamada M, Keller RR, Lopez Gutierrez R, Cameron D, Suzuki H, Sanghrajka R, Vaynshteyn J, Gerwin J, Maura F, Hooper W, Shah M, Robine N, Demarest P, Bayin NS, Jubierre Zapater L, Reed C, Hébert S, Masilionis I, Chaligne R, Socci ND, Taylor MD, Kleinman CL, Joyner AL, Raju P, Kentsis A.",
      year: 2024,
      title: "Childhood cancer mutagenesis caused by transposase-derived PGBD5.",
      journal: "Sci Adv",
      volume: "10(12): eadn4649"
    },
    {
      authors: "Xu J, Choi R, Gupta K, Warren HR, Santhanam L, Pluznick JL.",
      year: 2024,
      title: "An evolutionarily conserved olfactory receptor is required for sex differences in blood pressure.",
      journal: "Science Advances",
      volume: "12(10): eadk1487"
    },
    {
      authors: "Amici DR, Alhayek S, Klein AT, Wang YZ, Wilen AP, Song W, Zhu P, Thakkar A, King MA, Steffeck AW, Alasady MJ, Peek C, Savas JN, Mendillo ML.",
      year: 2024,
      title: "Tight regulation of a nuclear HAPSTR1-HUWE1 pathway essential for mammalian life.",
      journal: "Life Sci Alliance",
      volume: "7(5): e202302370"
    },
    {
      authors: "Ma J, Al Moussawi K, Lou H, Chan HF, Wang Y, Chadwick J, Phetsouphanh C, Slee EA, Zhong S, Leissing TM, Roth A, Qin X, Chen S, Yin J, Ratnayaka I, Hu Y, Louphrasitthiphol P, Taylor L, Bettencourt PJG, Muers M, Greaves DR, McShane H, Goldin R, Soilleux EJ, Coleman ML, Ratcliffe PJ, Lu X.",
      year: 2024,
      title: "Deficiency of factor-inhibiting HIF creates a tumor-promoting immune microenvironment.",
      journal: "Proc Natl Acad Sci U S A",
      volume: "121(10): e2309957121"
    },
    {
      authors: "Chakrabarti S, Klich JD, Khallaf MA, Hulme AJ, Sánchez-Carranza O, Baran ZM, Rossi A, Huang AT-L, Pohl T, Fleischer R, Fürst C, Hammes A, Bégay V, Hörnberg H, Finol-Urdaneta RK, Poole K, Dottori M, Lewin GR.",
      year: 2024,
      title: "Touch sensation requires the mechanically gated ion channel ELKIN1.",
      journal: "Science",
      volume: "6686(383): 992-998"
    },
    {
      authors: "Desiderio S, Schwaller F, Tartour K, Padmanabhan K, Lewin GR, Carroll P, Marmigere F.",
      year: 2024,
      title: "Touch receptor end-organ innervation and function require sensory neuron expression of the transcription factor Meis2.",
      journal: "eLife",
      volume: "12(RP89287)"
    },
    {
      authors: "Chhabra KH, Bathina S, Faniyan TS, Samuel DJ, Raza MU, de Souza Cordeiro LM, Viana Di Prisco G, Atwood BK, Robles J, Bainbridge L, Davis A.",
      year: 2024,
      title: "ADGRL1 is a glucose receptor involved in mediating energy and glucose homeostasis.",
      journal: "Diabetologia",
      volume: "67(1): 170-189"
    }
  ],
  "2023": [
    {
      authors: "Lenz G, Luther SA, Thome M.",
      year: 2023,
      title: "Identification of Tensin-3 as a MALT1 substrate that controls B cell adhesion and lymphoma dissemination.",
      journal: "Proc Natl Acad Sci U S A",
      volume: "120(52): e2301155120"
    },
    {
      authors: "Miyauchi S, Arimoto KI, Liu M, Zhang Y, Zhang DE.",
      year: 2023,
      title: "Reprogramming of tumor-associated macrophages via NEDD4-mediated CSF1R degradation by targeting USP18.",
      journal: "Cell Rep",
      volume: "42(12): 113560"
    },
    {
      authors: "Engavale M, Hernandez CJ, Infante A, LeRoith T, Radovan E, Evans L, Villarreal J, Reilly CM, Sutton RB, Keyel PA.",
      year: 2023,
      title: "Deficiency of macrophage-derived Dnase1L3 causes lupus-like phenotypes in mice.",
      journal: "J Leukoc Biol",
      volume: "114(6): 547-556"
    },
    {
      authors: "Doremalen Nv, Bushmaker T, Fischer RJ, Okumura A, Figueroa D, McMinn RJ, Letko M, Saturday G, Munster VJ.",
      year: 2023,
      title: "Transmission dynamics of MERS-CoV in a transgenic human DPP4 mouse model.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Thomas CI, Anderson JR, Alexis A, Guerrero-Given D, Chavez A, McNabb MC, Unal B, Bhagat D, Bass CE, Bhatt BS, Bolton MM, Bhalla N, Bhardwaj A, Bhatt P, Ehlers MD, Bhatt A, Kamasawa N.",
      year: 2023,
      title: "A multi-faceted analysis of synapses reveals the role of neuroligin-1 cleavage in presynaptic vesicle accumulation in the lateral amygdala.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Le TDV, Liu D, Ellis BJ, Collins S, Ayala JE.",
      year: 2023,
      title: "Glucagon-Like Peptide-1 Receptor Activation Stimulates PKA-Mediated Phosphorylation of Raptor and this Contributes to the Weight Loss Effect of Liraglutide.",
      journal: "Elife",
      volume: "6(12): e80944"
    },
    {
      authors: "Alexander M, Upadhyay V, Rock R, Ramirez L, Puchalska P, Orellana D, Ang QY, Turnbaugh JA, Tian Y, Dumlao D, Nayak R, Patterson A, Newman JC, Crawford PA, Turnbaugh PJ.",
      year: 2023,
      title: "A diet-dependent host metabolite shapes the gut microbiota to protect from autoimmunity.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Haley M, Bertrand J, Anderson VT, Fuad M, Frenguelli BG, Corrêa SAL, Wall MJ.",
      year: 2023,
      title: "Arc expression regulates long-term potentiation magnitude and metaplasticity in area CA1 of the hippocampus in ArcKR mice.",
      journal: "Eur J Neurosci",
      volume: "58(10): 4166-4180"
    },
    {
      authors: "Burzynski LC, Morales-Maldonado A, Rodgers A, Kitt LA, Humphry M, Figg N, Bennett MR, Clarke MCH.",
      year: 2023,
      title: "Thrombin-activated interleukin-1α drives atherogenesis, but also promotes vascular smooth muscle cell proliferation and collagen production.",
      journal: "Cardiovasc Res",
      volume: "119(12): 2179-89"
    },
    {
      authors: "Liu Q, Bell BJ, Kim DW, Lee SS, Keles MF, Blum ID, Wang AA, Blank EJ, Xiong J, Bedont JL, Chang AJ, Issa H, Cohen JY, Blackshaw S, Wu MN.",
      year: 2023,
      title: "A clock-dependent brake for rhythmic arousal in the dorsomedial hypothalamus.",
      journal: "Nat Commun",
      volume: "14(1): 6381"
    },
    {
      authors: "Parekh VI, Brinster LR, Guan B, Simonds WF, Weinstein LS, Agarwal SK.",
      year: 2023,
      title: "A Knock-In Mouse Model of the Gcm2 Variant p.Y392S Develops Normal Parathyroid Glands.",
      journal: "J Endocr Soc",
      volume: "7(11): bvad126"
    },
    {
      authors: "Chen YH, Wu HL, Gower BA, Azziz R.",
      year: 2023,
      title: "SAT386 Constitutive Overexpression Of Microrna-93 As A Cause Of Metabolic Dysfunction And Hyperandrogenism In Polycystic Ovary Syndrome (PCOS): Evidence From A Transgenic (Mir-93+) Murine Model.",
      journal: "J Endocr Soc",
      volume: "7(Suppl 1): bvad114.1691"
    },
    {
      authors: "Martin M, Motolani A, Kim HG, Collins AM, Alipourgivi F, Jin J, Wei H, Wood BA, Ma YY, Dong XC, Mirmira RG, Lu T.",
      year: 2023,
      title: "KDM2A Deficiency in the Liver Promotes Abnormal Liver Function and Potential Liver Damage.",
      journal: "Biomolecules",
      volume: "13(10): 1457"
    },
    {
      authors: "Klco J, Iii MT, Qi W, Walsh M, Ma J, Westover T, Abdelhamed S, Ezzell L, Rolle C, Xiong E, Rosikiewicz W, Xu B, Pruett-Miller S, Loughran A, Janke L.",
      year: 2023,
      title: "Functional Characterization of Cooperating MGA Mutations in RUNX1::RUNX1T1 Acute Myeloid Leukemia.",
      journal: "Res Sq",
      volume: ""
    },
    {
      authors: "Crane R, Tebbe L, Mwoyosvi ML, Al-Ubaidi MR, Naash MI.",
      year: 2023,
      title: "Expression of the human usherin c.2299delG mutation leads to early-onset auditory loss and stereocilia disorganization.",
      journal: "Commun Biol",
      volume: "6(1): 933"
    },
    {
      authors: "Watt HJ, Chawla AS, Lamoliatte F, Pryde S, Knatko E, Rasmussen KD, Bending D, Swamy M.",
      year: 2023,
      title: "Rewiring of the TCR signalosome in natural intestinal Intraepithelial T lymphocytes drives non-deletional tolerance.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Tworak A, Kolesnikov AV, Hong JD, Choi EH, Luu JC, Palczewska G, Dong Z, Lewandowski D, Brooks MJ, Campello L, Swaroop A, Kiser PD, Kefalov VJ, Palczewski K.",
      year: 2023,
      title: "Rapid RGR-dependent visual pigment recycling is mediated by the RPE and specialized Müller glia.",
      journal: "Cell Rep",
      volume: "42(8): 112982"
    },
    {
      authors: "Mazucanti CH, Kennedy V Jr, Premathilake HU, Doyle ME, Tian J, Liu QR, O'Connell J, Camandola S, Egan JM.",
      year: 2023,
      title: "AAV5-mediated manipulation of insulin expression in choroid plexus has long-term metabolic and behavioral consequences.",
      journal: "Cell Rep",
      volume: "42(8): 112903"
    },
    {
      authors: "Tsitsikov EN, Phan KP, Liu Y, Tsytsykova AV, Paterno R, Sherry DM, Johnson AC, Dunn IF.",
      year: 2023,
      title: "Spontaneous Mutation in 2310061I04Rik Results in Reduced Expression of Mitochondrial Genes and Impaired Brain Myelination.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Feng W, Lopez JR, Antrobus S, Zheng J, Uryash A, Dong Y, Beqollari D, Bhatt A, Bhardwaj R, Bannister RA, Hopkins PM, Beam KG, Allen PD, Pessah IN.",
      year: 2023,
      title: "Putative malignant hyperthermia mutation CaV1.1-R174W is insufficient to trigger a fulminant response to halothane or confer heat stress intolerance.",
      journal: "J Biol Chem",
      volume: "299(8): 104992"
    },
    {
      authors: "Souza G, Stornetta DS, Shi Y, Lim E, Berry FE, Bayliss DA, Abbott SBG.",
      year: 2023,
      title: "Neuromedin B-expressing neurons in the retrotrapezoid nucleus regulate respiratory homeostasis and promote stable breathing in adult mice.",
      journal: "J Neurosci",
      volume: "43(30): 5501-5520"
    },
    {
      authors: "Tsitsikov EN, Phan KP, Liu Y, Tsytsykova AV, Kinter M, Selland L, Garman L, Griffin C, Dunn IF.",
      year: 2023,
      title: "TRAF7 is an essential regulator of blood vessel integrity during mouse embryonic and neonatal development.",
      journal: "iScience",
      volume: "26(8): 107474"
    },
    {
      authors: "Ikelle L, Makia M, Lewis T, Crane R, Kakakhel M, Conley SM, Birtley JR, Arshavsky VY, Al-Ubaidi MR, Naash MI.",
      year: 2023,
      title: "Comparative study of PRPH2 D2 loop mutants reveals divergent disease mechanism in rods and cones.",
      journal: "Cell Mol Life Sci",
      volume: "80(8): 214"
    },
    {
      authors: "Dong L, Cheng R, Ma X, Liang W, Hong Y, Li H, Zhou K, Du Y, Takahashi Y, Zhang X, Li X, Ma JX.",
      year: 2023,
      title: "Regulation of monocyte activation by PPARα through interaction with the cGAS-STING pathway.",
      journal: "Diabetes",
      volume: "72(7): 958-972"
    },
    {
      authors: "Li H, Chaitankar V, Cui L, Chen W, Chin K, Zhu J, Liu W, Rodgers GP.",
      year: 2023,
      title: "Characterization of olfactomedin 4+ cells in prostate and urethral-tube epithelium during murine postnatal development and in adult mice.",
      journal: "Sci Rep",
      volume: "13(1): 10290"
    },
    {
      authors: "Fauteux-Daniel S, Merlo Pich LM, Girard-Guyonvarc'h C, Caruso A, Rodriguez E, Gabay C.",
      year: 2023,
      title: "The role of interleukin-18 and interleukin-18 binding protein in K/BxN serum transfer-induced arthritis.",
      journal: "Front Immunol",
      volume: "14: 1215364"
    },
    {
      authors: "Kouvaros S, Bhatt A, Bhardwaj R, Bizup B, Solis O, Kumar M, Ventriglia E, Curry FP, Michaelides M, Tzounopoulos T.",
      year: 2023,
      title: "A CRE/DRE dual recombinase transgenic mouse reveals synaptic zinc-mediated thalamocortical neuromodulation.",
      journal: "Sci Adv",
      volume: "9(23): eadf3525"
    },
    {
      authors: "Chakrabarti S, Klich JD, Khallaf MA, Sánchez-Carranza O, Baran ZM, Rossi A, Tzu-Lun Huang A, Pohl T, Fleischer R, Fürst C, Hammes A, Bégay V, Hörnberg H, Poole K, Lewin GR.",
      year: 2023,
      title: "Touch sensation requires the mechanically-gated ion channel Elkin1.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Harel M, Fauteux-Daniel S, Rodriguez E, Palmer G, Gabay C.",
      year: 2023,
      title: "IL-18 Binding Protein-Producing Cells Attenuate Anemia in Murine Macrophage Activation Syndrome.",
      journal: "J Immunol",
      volume: "210(11): 1790-1803"
    },
    {
      authors: "Zapater LJ, Rodriguez-Fos E, Planas-Felix M, Lewis S, Cameron D, Demarest P, Nabila A, Zhao J, Bergin P, Reed C, Yamada M, Pagnozzi A, Nava C, Bourel-Ponchel E, Neilson DE, Dursun A, Özgül RK, Akar HT, Socci ND, Hayes M, Rabadan R, Torrents D, Kruer MC, Toth M, Kentsis A.",
      year: 2023,
      title: "A transposase-derived gene required for human brain development.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Fernandez RF, Wilson ES, Diaz V, Martínez-Gardeazabal J, Foguth R, Cannon JR, Jackson SN, Hermann BP, Eells JB, Ellis JM.",
      year: 2023,
      title: "Lipid metabolism in dopaminergic neurons influences light entrainment.",
      journal: "J Neurochem",
      volume: "165(3): 379-90"
    },
    {
      authors: "Fellermeyer M, Anzilotti C, Paluch C, Cornall RJ, Davis SJ, Gileadi U.",
      year: 2023,
      title: "Combination CD200R/PD-1 blockade in a humanised mouse model.",
      journal: "Immunother Adv",
      volume: "3(1): ltad006"
    },
    {
      authors: "Liang W, Huang L, Whelchel A, Yuan T, Ma X, Cheng R, Takahashi Y, Karamichos D, Ma J-X.",
      year: 2023,
      title: "Peroxisome proliferator-activated receptor-α (PPARα) regulates wound healing and mitochondrial metabolism in the cornea.",
      journal: "Proc Natl Acad Sci U S A",
      volume: "120(13): e2217576120"
    },
    {
      authors: "Yang Y, Reid MA, Hanse EA, Li H, Li Y, Ruiz BI, Fan Q, Kong M.",
      year: 2023,
      title: "SAPS3 subunit of protein phosphatase 6 is an AMPK inhibitor and controls metabolic homeostasis upon dietary challenge in male mice.",
      journal: "Nat Commun",
      volume: "14(1): 1368"
    },
    {
      authors: "Poria D, Kolesnikov AV, Lee TJ, Salom D, Palczewski K, Kefalov VJ.",
      year: 2023,
      title: "Investigating the Role of Rhodopsin F45L Mutation in Mouse Rod Photoreceptor Signaling and Survival.",
      journal: "eNeuro",
      volume: "10(3)"
    },
    {
      authors: "Flinois A, Méan I, Mutero-Maeda A, Guillemot L, Citi S.",
      year: 2023,
      title: "Paracingulin recruits CAMSAP3 to tight junctions and regulates microtubule and polarized epithelial organization.",
      journal: "J Cell Sci",
      volume: "137(5): jcs260745"
    },
    {
      authors: "Wang J, Zhang Z, Guan J, Tung HC, Xie J, Huang H, Chen Y, Xu M, Ren S, Li S, Zhang M, Yang D, Xie W.",
      year: 2023,
      title: "Hepatocyte estrogen sulfotransferase inhibition protects female mice from Concanavalin A-induced T cell-mediated hepatitis independent of estrogens.",
      journal: "J Biol Chem",
      volume: "299(3): 103026"
    },
    {
      authors: "Kim JS, Sun H, Meeker S, Undem BJ.",
      year: 2023,
      title: "Role of NaV1.9 in inflammatory mediator-induced activation of mouse airway vagal C-fibres.",
      journal: "J Physiol",
      volume: "601(6): 1139-1150"
    },
    {
      authors: "Tebbe L, Mwoyosvi ML, Crane R, Makia MS, Kakakhel M, Cosgrove D, Al-Ubaidi MR, Naash MI.",
      year: 2023,
      title: "The usherin mutation c.2299delG leads to its mislocalization and disrupts interactions with whirlin and VLGR1.",
      journal: "Nat Commun",
      volume: "14(1): 972"
    },
    {
      authors: "Kyriazis G, Serrano J, Boyd J, Mason C, Smith K, Karolyi K, Kondo S, Brown I, Maurya S, Meshram N, Serna V, Gilger J, Branch D, Gardell S, Baskin K, Ayala J, Pratley R, Goodpaster B, Coen P.",
      year: 2023,
      title: "The TAS1R2 sweet taste receptor regulates skeletal muscle mass and fitness.",
      journal: "Res Sq [Preprint]",
      volume: ""
    },
    {
      authors: "Barth K, Vasić V, McDonald B, Heinig N, Wagner MC, Schumann U, Röhlecke C, Bicker F, Schumann L, Radyushkin K, Baumgart J, Tenzer S, Zipp F, Meinhardt M, Alitalo K, Tegeder I, Schmidt MHH.",
      year: 2023,
      title: "EGFL7 loss correlates with increased VEGF-D expression, upregulating hippocampal adult neurogenesis and improving spatial learning and memory.",
      journal: "Cell Mol Life Sci",
      volume: "80(2): 54"
    },
    {
      authors: "Mlynarczyk C, Teater M, Pae J, Chin CR, Wang L, Arulraj T, Barisic D, Papin A, Hoehn KB, Kots E, Ersching J, Bandyopadhyay A, Barin E, Poh HX, Evans CM, Chadburn A, Chen Z, Shen H, Isles HM, Pelzer B, Tsialta I, Doane AS, Geng H, Rehman MH, Melnick J, Morgan W, Nguyen DTT, Elemento O, Kharas MG, Jaffrey SR, Scott DW, Khelashvili G, Meyer-Hermann M, Victora GD, Melnick A.",
      year: 2023,
      title: "BTG1 mutation yields supercompetitive B cells primed for malignant transformation.",
      journal: "Science",
      volume: "379(6629): eabj7412"
    }
  ],
  "2022": [
    {
      authors: "Nakamura S, Tanimoto K, Bhawal UK.",
      year: 2022,
      title: "Ribosomal Stress Couples with the Hypoxia Response in Dec1-Dependent Orthodontic Tooth Movement.",
      journal: "Int J Mol Sci",
      volume: "24(1): 618"
    },
    {
      authors: "Ojeda-Alonso J, Bégay V, Garcia-Contreras J, Campos-Pérez A, Purfürst B, Lewin G.",
      year: 2022,
      title: "Lack of evidence for participation of TMEM150c/TENTONIN3 in sensory mechanotransduction.",
      journal: "J Gen Physiol",
      volume: "154(12): e202213098"
    },
    {
      authors: "Engelmann J, Zarrer J, Gensch V, Riecken K, Berenbrok N, Luu TV, Beitzen-Heineke A, Vargas-Delgado ME, Pantel K, Bokemeyer C, Bhamidipati S, Darwish IS, Masuda E, Burstyn-Cohen T, Alberto EJ, Ghosh S, Rothlin C, Hesse E, Taipaleenmäki H, Ben-Batalla I, Loges S.",
      year: 2022,
      title: "Regulation of bone homeostasis by MERTK and TYRO3.",
      journal: "Nat Commun",
      volume: "13(1): 7689"
    },
    {
      authors: "Wischhof L, Lee HM, Tutas J, Overkott C, Tedt E, Stork M, Peitz M, Brüstle O, Ulas T, Händler K, Schultze JL, Ehninger D, Nicotera P, Salomoni P, Bano D.",
      year: 2022,
      title: "BCL7A-containing SWI/SNF/BAF complexes modulate mitochondrial bioenergetics during neural progenitor differentiation.",
      journal: "EMBO J",
      volume: "41(23): e110595"
    },
    {
      authors: "Yuan T, Dong L, Pearsall EA, Zhou K, Cheng R, Ma JX.",
      year: 2022,
      title: "The Protective Role of Microglial PPARα in Diabetic Retinal Neurodegeneration and Neurovascular Dysfunction.",
      journal: "Cells",
      volume: "11(23): 3869"
    },
    {
      authors: "Xu J, Choi R, Gupta K, Warren HR, Santhanam L, Pluznick JL.",
      year: 2022,
      title: "An evolutionarily conserved olfactory receptor is required for sex differences in blood pressure.",
      journal: "bioRxiv",
      volume: ""
    },
    {
      authors: "Abdelhamed S, Thomas ME, Westover T, Umeda M, Xiong E, Rolle C, Walsh MP, Wu H, Schwartz JR, Valentine V, Valentine M, Pounds S, Ma J, Janke LJ, Klco JM.",
      year: 2022,
      title: "Mutant Samd9l expression impairs hematopoiesis and induces bone marrow failure in mice.",
      journal: "J Clin Invest",
      volume: "132(21): e158869"
    },
    {
      authors: "Keller TCS, Lechauve C, Keller AS, Broseghini-Filho GB, Butcher JT, Askew Page HR, Islam A, Yin Tan Z, DeLalio LJ, Brooks S, Sharma P, Hong K, Xu W, Simão Padilha A, Ruddiman CA, Best AK, Macal E, Kim-Shapiro DB, Christ G, Yan Z, Cortese-Krott MM, Ricart K, Patel R, Bender TP, Sonkusare SK, Weiss MJ, Ackerman H, Columbus L, Isakson BE.",
      year: 2022,
      title: "Endothelial alpha globin is a nitrite reductase.",
      journal: "Nat Commun",
      volume: "13(1): 6405"
    }
  ]
};

// Helper function to get all years sorted in descending order
export const getYears = (): string[] => {
  return Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));
};

// Helper function to get total publication count
export const getTotalPublicationCount = (): number => {
  return Object.values(publicationsByYear).reduce((total, pubs) => total + pubs.length, 0);
};

// Helper function to search publications
export const searchPublications = (query: string): Publication[] => {
  const lowerQuery = query.toLowerCase();
  const results: Publication[] = [];
  
  Object.values(publicationsByYear).forEach(pubs => {
    pubs.forEach(pub => {
      if (
        pub.authors.toLowerCase().includes(lowerQuery) ||
        pub.title.toLowerCase().includes(lowerQuery) ||
        pub.journal.toLowerCase().includes(lowerQuery)
      ) {
        results.push(pub);
      }
    });
  });
  
  return results;
};
