'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconImage, IconQuote, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Autoimmune & Inflammatory Research",
  title: "Immunology Mouse Models",
  intro: "Since 1998, Ingenious Targeting Laboratory has supported immunology researchers with custom mouse models contributing to peer reviewed publications in Immunity, Nature Immunology, Journal of Experimental Medicine, and leading immunology journals worldwide.",
  description: "Our immunology mouse models have advanced understanding of immune cell development, autoimmune pathogenesis, and inflammatory disease mechanisms."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Intro Data
const introData = {
  text: "Immunology mouse models enable researchers to investigate immune cell development, activation, and effector function, as well as the dysregulation underlying autoimmune and inflammatory diseases. From T cell and B cell specific knockouts that dissect lymphocyte biology to humanized immune checkpoint models for therapeutic testing, the right model design is critical for immunological discovery and translational success.",
  highlight: "Conditional approaches are essential in immunology research, where the same gene often has distinct functions in different immune cell populations. A gene required for T cell development may have entirely different roles in B cells, macrophages, or dendritic cells. Cell type specific conditional knockouts enable precise dissection of these lineage specific functions."
};

// Research Applications Data
const researchApplicationsData = [
  {
    title: "Understanding Immune Function",
    description: "Genetically engineered mouse models have transformed our understanding of immune system development and function. Knockout models reveal essential gene functions in lymphocyte development, antigen recognition, and effector responses. Reporter knockins enable visualization of immune cell populations and tracking of lineage relationships during immune responses.",
    note: "Conditional approaches allow gene manipulation in specific immune cell types at defined developmental stages, enabling dissection of gene function without disrupting earlier developmental requirements."
  },
  {
    title: "Modeling Immune Dysregulation",
    description: "Mouse models of autoimmune and inflammatory diseases have been essential for understanding disease mechanisms and testing therapeutic approaches. Key modeling strategies include:",
    strategies: [
      { name: "Immune gene knockouts", desc: "Study loss of tolerance and autoimmune pathogenesis" },
      { name: "Knockin of disease variants", desc: "Express human autoimmune susceptibility alleles" },
      { name: "Humanization", desc: "Replace mouse immune genes with human orthologs for therapeutic testing" },
      { name: "Reporter models", desc: "Track autoreactive cell populations during disease progression" }
    ]
  },
  {
    title: "Therapeutic Development",
    description: "Immunology mouse models support therapeutic development across autoimmune disease, transplantation, and immuno oncology. Humanized immune checkpoint models enable direct testing of clinical antibody candidates, while cell type specific knockouts model target inhibition in relevant immune populations."
  }
];

// Autoimmune Disease Data
const autoimmuneDiseaseData = [
  {
    title: "Systemic Autoimmune Disease",
    description: "Models of systemic autoimmunity address diseases such as lupus and rheumatoid arthritis where multiple organ systems are affected:",
    diseases: [
      { name: "Lupus models", desc: "Knockout and knockin models affecting B cell tolerance and autoantibody production" },
      { name: "Rheumatoid arthritis models", desc: "Conditional knockouts in synovial and immune compartments" },
      { name: "Sjogren syndrome models", desc: "Models of exocrine gland autoimmunity" }
    ],
    links: ["/lupus-mouse-models", "/rheumatoid-arthritis-mice"]
  },
  {
    title: "Organ Specific Autoimmunity",
    description: "Organ specific autoimmune models focus on immune attack against particular tissues:",
    diseases: [
      { name: "Multiple sclerosis models", desc: "CNS specific autoimmunity and demyelination" },
      { name: "Type 1 diabetes models", desc: "Beta cell autoimmune destruction" },
      { name: "Autoimmune thyroiditis", desc: "Thyroid specific inflammation" },
      { name: "Myasthenia gravis models", desc: "Neuromuscular junction autoimmunity" }
    ],
    note: "Conditional knockouts enable study of gene function specifically in the target organ or in the autoreactive immune population."
  }
];

// Inflammatory Disease Data
const inflammatoryDiseaseData = [
  {
    title: "Inflammatory Bowel Disease",
    description: "IBD models address chronic intestinal inflammation characteristic of Crohn disease and ulcerative colitis:",
    models: [
      { name: "Epithelial knockouts", desc: "Study barrier function and epithelial immune responses" },
      { name: "T cell specific knockouts", desc: "Investigate pathogenic T cell populations" },
      { name: "Macrophage knockouts", desc: "Analyze innate immune contributions to colitis" },
      { name: "Combination models", desc: "Genetic susceptibility combined with microbial triggers" }
    ],
    link: "/ibd-mouse-models"
  },
  {
    title: "Allergy and Asthma Models",
    description: "Allergic disease models address IgE mediated hypersensitivity and airway inflammation:",
    models: [
      { name: "Mast cell knockouts", desc: "Study immediate hypersensitivity" },
      { name: "Th2 pathway modifications", desc: "Investigate allergic inflammation" },
      { name: "Epithelial barrier models", desc: "Analyze sensitization and tolerance" },
      { name: "Eosinophil modifications", desc: "Study effector cell function in allergy" }
    ],
    link: "/allergy-asthma-mouse-models"
  }
];

// T Cell Cre Drivers Table
const tCellCreDrivers = [
  { driver: "CD4 Cre", target: "CD4+ and CD8+ T cells", applications: "T cell development, helper function" },
  { driver: "CD8 Cre", target: "CD8+ T cells", applications: "Cytotoxic T cell function" },
  { driver: "Lck Cre", target: "Early T cell development", applications: "Thymic selection" },
  { driver: "Foxp3 Cre", target: "Regulatory T cells", applications: "Treg development and suppression" },
  { driver: "CD2 Cre", target: "All T cells and NK cells", applications: "Pan T cell function" }
];

// B Cell Cre Drivers Table
const bCellCreDrivers = [
  { driver: "CD19 Cre", target: "All B cells", applications: "B cell development and function" },
  { driver: "CD21 Cre", target: "Mature B cells", applications: "Peripheral B cell responses" },
  { driver: "AID Cre", target: "Germinal center B cells", applications: "Affinity maturation, class switching" },
  { driver: "CD138 Cre", target: "Plasma cells", applications: "Antibody secretion" }
];

// Myeloid Cre Drivers Table
const myeloidCreDrivers = [
  { driver: "LysM Cre", target: "Macrophages, granulocytes", applications: "Innate immunity, inflammation" },
  { driver: "CD11c Cre", target: "Dendritic cells", applications: "Antigen presentation" },
  { driver: "CX3CR1 Cre", target: "Monocytes, microglia", applications: "Tissue macrophage function" },
  { driver: "CSF1R Cre", target: "Macrophage lineage", applications: "Macrophage development" }
];

// Checkpoint Humanization Table
const checkpointTable = [
  { target: "PD1", applications: "Anti PD1 antibody efficacy", modelType: "Humanized knockin" },
  { target: "PDL1", applications: "Anti PDL1 antibody efficacy", modelType: "Humanized knockin" },
  { target: "CTLA4", applications: "Anti CTLA4 efficacy, combinations", modelType: "Humanized knockin" },
  { target: "LAG3", applications: "LAG3 inhibitor evaluation", modelType: "Humanized knockin" },
  { target: "TIM3", applications: "TIM3 pathway studies", modelType: "Humanized knockin" }
];

// Technical Considerations Data
const technicalData = [
  {
    icon: IconSettings,
    title: "Pre Germline Characterization",
    description: "ES cell based targeting enables comprehensive characterization of immunology alleles before mouse generation. This pre germline analysis confirms correct allele structure, mutation sequence, and absence of random integration events.",
    note: "For humanized immune models, sequence verification confirms exact human sequence integration. Functional testing can verify human specific antibody binding in ES cells prior to mouse production."
  },
  {
    icon: IconDNA,
    title: "Strain Background Considerations",
    description: "Strain background significantly impacts immune phenotypes. Key considerations include:",
    strains: [
      { name: "C57BL/6", desc: "Th1 biased, commonly used for autoimmune models" },
      { name: "BALB/c", desc: "Th2 biased, preferred for some allergy and parasitic disease studies" },
      { name: "NOD", desc: "Spontaneous autoimmune diabetes, useful background for type 1 diabetes models" },
      { name: "129 strains", desc: "Variable immune phenotypes depending on substrain" }
    ],
    note: "MHC haplotype differences between strains affect antigen presentation and T cell responses. Our scientific team advises on optimal strain selection for immunological phenotyping."
  },
  {
    icon: IconLayers,
    title: "Derivative Allele Flexibility",
    description: "The derivative allele system provides maximum flexibility for immunology research programs:",
    alleles: [
      { name: "tm1a", desc: "Reporter allele for immune cell expression analysis" },
      { name: "tm1b", desc: "Null allele for global knockout studies" },
      { name: "tm1c", desc: "Conditional allele for cell type specific deletion" },
      { name: "tm1d", desc: "Conditional null after Cre mediated excision" }
    ],
    note: "A single project generates alleles suitable for global knockout studies, cell type specific conditional knockouts across multiple immune lineages, and reporter analysis of gene expression patterns."
  }
];

// Publications Data
const publicationsData = [
  {
    authors: "Clausen BE et al.",
    year: "1999",
    title: "Conditional gene targeting in macrophages and granulocytes using LysMcre mice.",
    journal: "Transgenic Research 8(4): 265 to 277"
  },
  {
    authors: "Kise M et al.",
    year: "2025",
    title: "The exacerbating role of Ras guanyl releasing protein 1 in idiopathic inflammatory myopathies.",
    journal: "Clinical Immunology 282: 110636"
  },
  {
    authors: "Luo PY et al.",
    year: "2025",
    title: "Autophagy of Kupffer cells modulates CD8 T cell activation in primary biliary cholangitis.",
    journal: "Gut gutjnl 2025 335611"
  }
];

// Testimonial Data
const testimonialData = {
  quote: "The quality of service was exceptional and performed to the highest possible standards.",
  author: "Albert Basson, PhD",
  affiliation: "King's College London"
};

// Related Links
const immunologyDiseaseLinks = [
  { title: "Autoimmune Disease Mice", href: "/autoimmune-disease-mice" },
  { title: "Inflammatory Disease Mice", href: "/inflammatory-disease-mice" },
  { title: "IBD Mouse Models", href: "/ibd-mouse-models" },
  { title: "Lupus Mouse Models", href: "/lupus-mouse-models" },
  { title: "Rheumatoid Arthritis Mice", href: "/rheumatoid-arthritis-mice" },
  { title: "Allergy Asthma Mouse Models", href: "/allergy-asthma-mouse-models" }
];

const relatedModelTypes = [
  { title: "Knockout Mouse Models", href: "/knockout-mouse-models" },
  { title: "Conditional Knockout Mouse Models", href: "/conditional-knockout-mouse-models" },
  { title: "Knockin Mouse Models", href: "/knockin-mouse-models" },
  { title: "Humanized Mouse Models", href: "/humanized-mouse-models" },
  { title: "Humanized Immune Checkpoint Mice", href: "/humanized-immune-checkpoint-mice" }
];

const relatedTherapeuticAreas = [
  { title: "Oncology Mouse Models", href: "/oncology-mouse-models" },
  { title: "Immuno Oncology Mouse Models", href: "/immuno-oncology-mouse-models" },
  { title: "Metabolic Disease Mouse Models", href: "/metabolic-disease-mouse-models" }
];

const projectResources = [
  { title: "Tissue Specific Cre Lines", href: "/tissue-specific-cre-lines" },
  { title: "Strain Selection Guide", href: "/strain-selection-guide" },
  { title: "Model Generation Timeline", href: "/model-generation-timeline" },
  { title: "FAQs", href: "/faqs" }
];

// FAQ Data
const faqData = [
  {
    question: "What types of immune cell specific knockouts can be generated?",
    answer: "Common immune cell-specific Cre drivers include CD4-Cre (T cells), CD19-Cre (B cells), LysM-Cre (myeloid cells/macrophages), and CX3CR1-Cre (microglia). Inducible Cre systems enable temporal control. Cell type selection depends on your research question and target gene function."
  },
  {
    question: "Why are humanized immune checkpoint models needed for immunotherapy research?",
    answer: "Most checkpoint inhibitor antibodies are designed to target human proteins and do not cross-react with mouse orthologs. Humanized checkpoint models express human PD1, PDL1, CTLA4, or other targets, enabling efficacy testing of clinical antibodies in immunocompetent mice with functional immune systems."
  },
  {
    question: "What strain background should I use for immunology studies?",
    answer: "C57BL/6 is most common for autoimmune and Th1-biased immune responses. BALB/c is preferred for Th2-biased responses and some allergy studies. NOD background is used for type 1 diabetes models. Strain selection affects immune phenotype, so choose based on your experimental requirements."
  },
  {
    question: "Can I combine multiple immune gene modifications in one model?",
    answer: "Yes. Multiple alleles can be combined through breeding to study gene interactions in immune pathways. For example, combining T cell and B cell knockouts enables study of how adaptive immune components interact. Humanized checkpoint combinations (e.g., PD1/CTLA4) support combination immunotherapy studies."
  },
  {
    question: "How do conditional knockouts work for immune cell specific studies?",
    answer: "Floxed alleles are crossed to cell type-specific Cre drivers. For example, a floxed gene crossed to CD4-Cre produces T cell-specific knockout while preserving gene function in other cell types. This enables study of cell-autonomous versus non-cell-autonomous immune gene function."
  }
];

export default function ImmunologyMouseModelsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      
      if (heroRef.current) {
        const heroElements = heroRef.current.querySelectorAll('.hero-animate');
        gsap.fromTo(heroElements,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
        );
      }
      
      const animatedElements = document.querySelectorAll('.animate-in');
      animatedElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    };
    
    loadGSAP();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          style={{
            background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)',
            padding: '80px 20px 60px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="hero-animate"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    marginBottom: '20px'
                  }}
                >
                  <IconShield size={16} color="white" />
                  <span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>{heroData.badge}</span>
                </div>
                
                <h1 
                  className="hero-animate"
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: '20px'
                  }}
                >
                  {heroData.title}
                </h1>
                
                <p 
                  className="hero-animate"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    lineHeight: '1.7rem',
                    marginBottom: '15px'
                  }}
                >
                  {heroData.intro}
                </p>
                
                <p 
                  className="hero-animate"
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.6rem',
                    marginBottom: '25px'
                  }}
                >
                  {heroData.description}
                </p>
                
                <div className="hero-animate flex flex-wrap gap-4">
                  <Link 
                    href="/request-quote"
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundColor: 'white',
                      color: '#0a253c',
                      padding: '10px 20px',
                      minWidth: '160px',
                      fontSize: '.85rem',
                      fontWeight: 500
                    }}
                  >
                    <span>Request a Quote</span>
                    <span>→</span>
                  </Link>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                      padding: '10px 20px',
                      minWidth: '160px',
                      border: '2px solid white',
                      fontSize: '.85rem',
                      fontWeight: 500
                    }}
                  >
                    <span>Talk to a Scientist</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
              
              <div className="hero-animate">
                <div style={{
                  border: '2px dashed rgba(255,255,255,0.4)',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }}>
                  <IconImage size={60} color="rgba(255,255,255,0.4)" />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>Immunology Mouse Model Visual</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ backgroundColor: '#0a253c', padding: '30px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700 }}>
                    <UXUIDCAnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.85rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="animate-in" style={{ color: '#555', fontSize: '1rem', lineHeight: '1.8rem', marginBottom: '20px' }}>
              {introData.text}
            </p>
            <p className="animate-in" style={{ color: '#008080', fontSize: '1rem', lineHeight: '1.8rem', fontWeight: 500 }}>
              {introData.highlight}
            </p>
          </div>
        </section>

        {/* Research Applications Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
              Research Applications in Immunology
            </h2>
            
            {researchApplicationsData.map((app, index) => (
              <div key={index} className="animate-in" style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px' }}>
                  {app.title}
                </h3>
                <p style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '15px' }}>
                  {app.description}
                </p>
                {app.note && (
                  <p style={{ color: '#008080', fontSize: '.9rem', fontStyle: 'italic' }}>
                    {app.note}
                  </p>
                )}
                {app.strategies && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {app.strategies.map((strategy, idx) => (
                      <div key={idx} style={{ backgroundColor: 'white', padding: '15px', borderRadius: '6px', borderLeft: '3px solid #008080' }}>
                        <span style={{ color: '#0a253c', fontWeight: 600, fontSize: '.9rem' }}>{strategy.name}:</span>
                        <span style={{ color: '#666', marginLeft: '8px', fontSize: '.9rem' }}>{strategy.desc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Autoimmune Disease Models Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
              Autoimmune Disease Models
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {autoimmuneDiseaseData.map((disease, index) => (
                <div 
                  key={index}
                  className="animate-in"
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    borderTop: '4px solid #008080'
                  }}
                >
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {disease.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '15px' }}>
                    {disease.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                    {disease.diseases.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '10px' }}>
                        <span style={{ color: '#008080', fontWeight: 500, fontSize: '.85rem' }}>{item.name}:</span>
                        <span style={{ color: '#666', fontSize: '.85rem', marginLeft: '5px' }}>{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  {disease.note && (
                    <p style={{ color: '#008080', fontSize: '.85rem', fontStyle: 'italic' }}>
                      {disease.note}
                    </p>
                  )}
                  {disease.links && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {disease.links.map((link, idx) => (
                        <Link 
                          key={idx}
                          href={link}
                          className="inline-flex items-center gap-1 transition-colors duration-300"
                          style={{ color: '#2384da', fontSize: '.8rem', fontWeight: 500 }}
                        >
                          <span>Learn more</span>
                          <IconChevronRight size={12} color="#2384da" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inflammatory Disease Models Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
              Inflammatory Disease Models
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inflammatoryDiseaseData.map((disease, index) => (
                <div 
                  key={index}
                  className="animate-in"
                  style={{
                    backgroundColor: 'white',
                    padding: '25px',
                    borderRadius: '8px',
                    borderTop: '4px solid #2384da'
                  }}
                >
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {disease.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '15px' }}>
                    {disease.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                    {disease.models.map((model, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <IconCheckCircle size={14} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ color: '#555', fontSize: '.85rem' }}>
                          <strong style={{ color: '#0a253c' }}>{model.name}:</strong> {model.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={disease.link}
                    className="inline-flex items-center gap-2 transition-colors duration-300"
                    style={{ color: '#2384da', fontSize: '.85rem', fontWeight: 500 }}
                  >
                    <span>Learn more</span>
                    <IconChevronRight size={14} color="#2384da" />
                  </Link>
                </div>
              ))}
            </div>
            
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', marginTop: '30px' }}>
              ITL has generated models for psoriasis, inflammatory arthritis, vasculitis, and other inflammatory diseases. Each model is designed based on the specific immune mechanisms driving the research program.
            </p>
          </div>
        </section>

        {/* Immune Cell Specific Models Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
              Immune Cell Specific Models
            </h2>
            
            {/* T Cell Models */}
            <div className="animate-in" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px' }}>
                T Cell Models
              </h3>
              <p style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '20px' }}>
                T cell specific genetic manipulation enables study of T lymphocyte development and function:
              </p>
              
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#0a253c' }}>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Cre Driver</th>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Target Population</th>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tCellCreDrivers.map((row, index) => (
                      <tr 
                        key={index}
                        style={{ 
                          backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                          borderBottom: '1px solid #e5e7eb'
                        }}
                      >
                        <td style={{ padding: '12px 15px', color: '#0a253c', fontWeight: 500 }}>{row.driver}</td>
                        <td style={{ padding: '12px 15px', color: '#555' }}>{row.target}</td>
                        <td style={{ padding: '12px 15px', color: '#555' }}>{row.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* B Cell Models */}
            <div className="animate-in" style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px' }}>
                B Cell Models
              </h3>
              <p style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '20px' }}>
                B cell specific models address antibody production and humoral immunity:
              </p>
              
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#0a253c' }}>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Cre Driver</th>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Target Population</th>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bCellCreDrivers.map((row, index) => (
                      <tr 
                        key={index}
                        style={{ 
                          backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                          borderBottom: '1px solid #e5e7eb'
                        }}
                      >
                        <td style={{ padding: '12px 15px', color: '#0a253c', fontWeight: 500 }}>{row.driver}</td>
                        <td style={{ padding: '12px 15px', color: '#555' }}>{row.target}</td>
                        <td style={{ padding: '12px 15px', color: '#555' }}>{row.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Myeloid Cell Models */}
            <div className="animate-in">
              <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px' }}>
                Myeloid Cell Models
              </h3>
              <p style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '20px' }}>
                Myeloid specific models address innate immunity and inflammation:
              </p>
              
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#0a253c' }}>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Cre Driver</th>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Target Population</th>
                      <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myeloidCreDrivers.map((row, index) => (
                      <tr 
                        key={index}
                        style={{ 
                          backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                          borderBottom: '1px solid #e5e7eb'
                        }}
                      >
                        <td style={{ padding: '12px 15px', color: '#0a253c', fontWeight: 500 }}>{row.driver}</td>
                        <td style={{ padding: '12px 15px', color: '#555' }}>{row.target}</td>
                        <td style={{ padding: '12px 15px', color: '#555' }}>{row.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="animate-in flex flex-wrap gap-4 mt-6">
              <Link 
                href="/conditional-knockout-mouse-models"
                className="inline-flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#008080', fontSize: '.9rem', fontWeight: 500 }}
              >
                <span>Learn about Conditional Knockouts</span>
                <IconChevronRight size={16} color="#008080" />
              </Link>
              <Link 
                href="/tissue-specific-cre-lines"
                className="inline-flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#008080', fontSize: '.9rem', fontWeight: 500 }}
              >
                <span>View Cre Driver Lines</span>
                <IconChevronRight size={16} color="#008080" />
              </Link>
            </div>
          </div>
        </section>

        {/* Humanized Immune Models Section */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Humanized Immune Models
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in">
                <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>
                  Immune Checkpoint Humanization
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.95rem', lineHeight: '1.6rem', marginBottom: '15px' }}>
                  Humanized checkpoint models express human versions of immune regulatory proteins for therapeutic antibody testing:
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', fontStyle: 'italic' }}>
                  Single and dual checkpoint humanized models support evaluation of monotherapy and combination immunotherapy approaches.
                </p>
              </div>
              
              <div className="animate-in">
                <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: '15px' }}>
                  Cytokine and Receptor Humanization
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.95rem', lineHeight: '1.6rem' }}>
                  Humanization of cytokines, cytokine receptors, and other immune molecules enables testing of human specific therapeutics in an immunocompetent mouse system.
                </p>
              </div>
            </div>
            
            {/* Checkpoint Table */}
            <div className="animate-in" style={{ marginTop: '30px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Target</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Applications</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Model Type</th>
                  </tr>
                </thead>
                <tbody>
                  {checkpointTable.map((row, index) => (
                    <tr 
                      key={index}
                      style={{ 
                        backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)',
                        borderBottom: '1px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      <td style={{ padding: '12px 15px', color: 'white', fontWeight: 500 }}>{row.target}</td>
                      <td style={{ padding: '12px 15px', color: 'rgba(255,255,255,0.9)' }}>{row.applications}</td>
                      <td style={{ padding: '12px 15px', color: 'rgba(255,255,255,0.9)' }}>{row.modelType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="animate-in flex flex-wrap gap-4 mt-6">
              <Link 
                href="/humanized-immune-checkpoint-mice"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'white',
                  color: '#008080',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontSize: '.85rem',
                  fontWeight: 500
                }}
              >
                <span>Explore Checkpoint Models</span>
                <IconChevronRight size={16} color="#008080" />
              </Link>
              <Link 
                href="/humanized-mouse-models"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '10px 20px',
                  border: '2px solid white',
                  borderRadius: '4px',
                  fontSize: '.85rem',
                  fontWeight: 500
                }}
              >
                <span>All Humanized Models</span>
                <IconChevronRight size={16} color="white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Considerations Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>
              Technical Considerations
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {technicalData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="animate-in"
                    style={{
                      backgroundColor: 'white',
                      padding: '30px',
                      borderRadius: '8px',
                      borderLeft: '4px solid #008080'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,128,128,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComponent size={24} color="#008080" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: 600, marginBottom: '10px' }}>
                          {item.title}
                        </h3>
                        <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '15px' }}>
                          {item.description}
                        </p>
                        {item.strains && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                            {item.strains.map((strain, idx) => (
                              <div key={idx} style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
                                <span style={{ color: '#0a253c', fontWeight: 600, fontSize: '.85rem' }}>{strain.name}:</span>
                                <span style={{ color: '#666', fontSize: '.85rem', marginLeft: '5px' }}>{strain.desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.alleles && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                            {item.alleles.map((allele, idx) => (
                              <div key={idx} style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
                                <span style={{ color: '#0a253c', fontWeight: 600, fontSize: '.85rem' }}>{allele.name}:</span>
                                <span style={{ color: '#666', fontSize: '.85rem', marginLeft: '5px' }}>{allele.desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.note && (
                          <p style={{ color: '#008080', fontSize: '.85rem', fontStyle: 'italic', marginTop: '15px' }}>
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="animate-in mt-6">
              <Link 
                href="/mouse-strain-backgrounds"
                className="inline-flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#008080', fontSize: '.9rem', fontWeight: 500 }}
              >
                <span>Learn about Strain Backgrounds</span>
                <IconChevronRight size={16} color="#008080" />
              </Link>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>
              Selected Publications in Immunology
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', marginBottom: '30px' }}>
              Models generated by Ingenious Targeting Laboratory have supported immunology research:
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {publicationsData.map((pub, index) => (
                <div 
                  key={index}
                  className="animate-in"
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #2384da'
                  }}
                >
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    <span style={{ color: '#0a253c' }}>{pub.authors}</span> {pub.year}. <em>{pub.title}</em> <span style={{ color: '#008080', fontWeight: 500 }}>{pub.journal}</span>
                  </p>
                </div>
              ))}
            </div>
            
            <div className="animate-in text-center" style={{ marginTop: '25px' }}>
              <Link 
                href="/publications"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#2384da',
                  color: 'white',
                  padding: '10px 25px',
                  borderRadius: '4px',
                  fontSize: '.85rem',
                  fontWeight: 500
                }}
              >
                <span>View All Publications</span>
                <IconChevronRight size={16} color="white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="animate-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,128,128,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px'
              }}>
                <IconQuote size={30} color="#008080" />
              </div>
              <blockquote style={{ 
                color: '#333', 
                fontSize: '1.1rem', 
                lineHeight: '1.8rem',
                fontStyle: 'italic',
                marginBottom: '25px'
              }}>
                &ldquo;{testimonialData.quote}&rdquo;
              </blockquote>
              <div>
                <p style={{ color: '#0a253c', fontWeight: 600, fontSize: '.95rem', marginBottom: '3px' }}>
                  — {testimonialData.author}
                </p>
                <p style={{ color: '#666', fontSize: '.85rem' }}>
                  {testimonialData.affiliation}
                </p>
              </div>
              <Link 
                href="/testimonials"
                className="inline-flex items-center gap-2 transition-colors duration-300 mt-4"
                style={{ color: '#008080', fontSize: '.9rem', fontWeight: 500 }}
              >
                <span>Read more testimonials</span>
                <IconChevronRight size={16} color="#008080" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Start Your Immunology Model Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Our scientific consultants are ready to discuss your immunology research requirements and recommend the optimal model design for your program. Initial consultation is provided at no charge and includes target analysis, immune cell specific Cre recommendations, and timeline estimates.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-4">
              <Link 
                href="/request-quote"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: '#008080',
                  color: 'white',
                  padding: '12px 30px',
                  fontSize: '.9rem',
                  fontWeight: 500
                }}
              >
                <span>Request a Quote</span>
                <span>→</span>
              </Link>
              <Link 
                href="/request-quote"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '12px 30px',
                  border: '2px solid white',
                  fontSize: '.9rem',
                  fontWeight: 500
                }}
              >
                <span>Free Consultation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
            <div className="animate-in">
              <UXUIDCAnimatedFAQ faqs={faqData} />
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Immunology Disease Models
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {immunologyDiseaseLinks.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link 
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Model Types
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedModelTypes.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link 
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Therapeutic Areas
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedTherapeuticAreas.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link 
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Project Resources
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {projectResources.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link 
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <UXUIDCFooter />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Immunology Mouse Models",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "Custom immunology mouse models for immune system research. Study immune function, disease mechanisms, and therapeutics. Autoimmune and inflammatory disease models since 1998.",
            "serviceType": "Custom Mouse Model Generation"
          })
        }}
      />
    </div>
  );
}
