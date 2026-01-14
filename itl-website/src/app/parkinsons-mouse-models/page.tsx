'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconTarget, IconImage, IconQuote, IconChevronRight, IconCheckCircle } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Neurodegenerative Disease Models",
  title: "Parkinson Mouse Model",
  intro: "Since 1998, Ingenious Targeting Laboratory has supported Parkinson disease research with custom mouse models enabling mechanistic studies of dopaminergic neurodegeneration, evaluation of neuroprotective strategies, and preclinical testing of disease modifying therapeutics.",
  description: "Parkinson disease mouse models provide essential platforms for investigating the molecular pathways underlying neuronal loss in the substantia nigra, testing hypotheses about alpha synuclein aggregation and spread, and developing therapies targeting LRRK2, GBA, and other genetically validated targets."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Familial PD Genes
const pdGenes = [
  { name: "SNCA (Alpha Synuclein)", desc: "Point mutations (A53T, A30P, E46K) and gene multiplications cause autosomal dominant Parkinson disease. Alpha synuclein aggregation into Lewy bodies is a pathological hallmark." },
  { name: "LRRK2", desc: "The G2019S mutation is the most common genetic cause of Parkinson disease. Increased LRRK2 kinase activity is implicated in both familial and sporadic disease." },
  { name: "PARK2, PINK1, DJ1", desc: "Recessive mutations cause early onset parkinsonism. These genes function in mitochondrial quality control and mitophagy pathways." },
  { name: "GBA", desc: "Heterozygous GBA mutations are the most common genetic risk factor for sporadic Parkinson disease, increasing risk approximately fivefold." }
];

// Model Types Table
const modelTypes = [
  { category: "Alpha Synuclein Models", models: ["SNCA Point Mutation Knockin (A53T, A30P, E46K)", "SNCA Overexpression Transgenic", "SNCA Knockout", "Conditional SNCA Models"] },
  { category: "LRRK2 Models", models: ["LRRK2 G2019S Knockin", "LRRK2 Kinase Dead Knockin", "LRRK2 Knockout", "LRRK2 R1441C/G Knockin"] },
  { category: "Mitochondrial Pathway", models: ["Parkin (Park2) Knockout", "PINK1 Knockout", "DJ1 (Park7) Knockout"] },
  { category: "GBA Models", models: ["GBA Point Mutation Knockin (N370S, L444P)", "Conditional GBA Knockout"] }
];

// Cell Type Specific Approaches
const creDrivers = [
  { name: "Dopaminergic Neuron Targeting", driver: "DAT Cre or TH Cre", desc: "Catecholaminergic neurons; DAT Cre more restricted to dopaminergic neurons" },
  { name: "Regional Specificity", driver: "En1 Cre or Pitx3 Cre", desc: "Midbrain dopaminergic neurons from early development" },
  { name: "Temporal Control", driver: "DAT CreERT2", desc: "Gene manipulation in adult dopaminergic neurons, avoiding developmental compensation" }
];

// Motor Function Tests
const motorTests = [
  { test: "Open Field", desc: "Spontaneous locomotor activity, rearing, and movement patterns" },
  { test: "Rotarod", desc: "Motor coordination and balance with accelerating protocols" },
  { test: "Pole Test", desc: "Bradykinesia assessment; time to descend correlates with dopaminergic function" },
  { test: "Gait Analysis", desc: "Stride length, cadence, and coordination; automated systems available" },
  { test: "Cylinder Test", desc: "Forelimb asymmetry in unilateral lesion models" }
];

// Neuropathology Endpoints
const neuropathologyEndpoints = [
  "Dopaminergic neuron counts: Stereological quantification of TH positive neurons in substantia nigra",
  "Striatal dopamine: HPLC measurement of dopamine and metabolites",
  "Synuclein pathology: Phospho synuclein (Ser129), aggregated synuclein, Lewy body like inclusions",
  "Neuroinflammation: Microglial activation (Iba1), astrogliosis (GFAP), and inflammatory markers"
];

// Publications Data
const publicationsData = [
  {
    authors: "Lunn MO et al.",
    year: "2025",
    title: "Variants in Lrrk2 and Snca deficiency do not alter the course of primary encephalitis due to neurotropic reovirus T3D in newborn mice.",
    journal: "PLoS One"
  },
  {
    authors: "Maekawa T et al.",
    year: "2024",
    title: "Biphenotypic Cells and alpha Synuclein Accumulation in Enteric Neurons of Leucine Rich Repeat Kinase 2 Knockout Mice.",
    journal: "Digestive Diseases and Sciences"
  },
  {
    authors: "Chen K et al.",
    year: "2023",
    title: "Leucine rich repeat kinase 2 (LRRK2) inhibition upregulates microtubule associated protein 1B to ameliorate lysosomal dysfunction and parkinsonism.",
    journal: "MedComm"
  }
];

// Testimonial Data
const testimonialData = {
  quote: "iTL produced four conditional knockout mouse models on our behalf. They have been extremely helpful and informative at all stages of the project; all the way from construct design to breeding strategies and genotyping the new mouse models.",
  author: "William A. Coetzee, DSc",
  affiliation: "NYU School of Medicine"
};

// Related Links
const relatedDiseaseModels = [
  { title: "Alzheimer's Mouse Models", href: "/alzheimers-mouse-models" },
  { title: "ALS Mouse Models", href: "/als-mouse-models" },
  { title: "Huntington's Mouse Models", href: "/huntingtons-mouse-models" },
  { title: "Neuroscience Mouse Models", href: "/neuroscience-mouse-models" }
];

const relatedModelTypes = [
  { title: "Knockin Mouse Models", href: "/knockin-mouse-models" },
  { title: "Point Mutation Mice", href: "/point-mutation-mice" },
  { title: "Conditional Knockout Models", href: "/conditional-knockout-mouse-models" },
  { title: "Knockout Mouse Models", href: "/knockout-mouse-models" }
];

const relatedTechnologies = [
  { title: "ES Cell Gene Targeting", href: "/es-cell-gene-targeting" },
  { title: "Cre Lox System", href: "/cre-lox-system" },
  { title: "Tissue Specific Cre Lines", href: "/tissue-specific-cre-lines" }
];

// FAQ Data
const faqData = [
  {
    question: "What Parkinson's disease mutations can be modeled in mice?",
    answer: "Common PD mutations include SNCA (alpha synuclein) mutations (A53T, A30P, E46K), LRRK2 mutations (G2019S, R1441C/G), PINK1 mutations, and Parkin mutations. Point mutation knockins can introduce any specific human mutation for disease modeling at physiological expression levels."
  },
  {
    question: "What motor tests are used to assess Parkinson's models?",
    answer: "Standard motor assessments include rotarod (motor coordination), pole test (bradykinesia), open field (locomotor activity), gait analysis (stride length, coordination), and cylinder test (forelimb asymmetry in unilateral models). Dopaminergic neuron counts in substantia nigra and striatal dopamine levels are key pathological endpoints."
  },
  {
    question: "Can conditional systems be used for Parkinson's models?",
    answer: "Yes. Conditional expression of PD mutations (e.g., Cre dependent SNCA or LRRK2 mutations) enables temporal and spatial control, allowing study of dopaminergic neuron specific effects or adult onset disease. This can avoid developmental defects and better model sporadic versus familial PD."
  },
  {
    question: "What is the typical disease progression in Parkinson's mouse models?",
    answer: "Disease progression varies by mutation and model type. SNCA transgenic models show motor deficits and synuclein pathology over 6 to 12 months. LRRK2 models may show slower progression. Knockin models at physiological expression levels typically show slower, more gradual progression than transgenic models with overexpression."
  },
  {
    question: "What strain background is best for Parkinson's models?",
    answer: "C57BL/6 is most commonly used for Parkinson's models due to extensive characterization, good motor performance, and behavioral baseline data. Strain background can affect dopaminergic function and motor phenotypes, so maintaining consistent backgrounds is important for reproducible experiments."
  }
];

export default function ParkinsonsMouseModelsPage() {
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
                  <IconTarget size={16} color="white" />
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
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>Parkinson Model Illustration</span>
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

        {/* Genetic Basis Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Genetic Basis of Parkinson Disease
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Parkinson disease results from progressive loss of dopaminergic neurons in the substantia nigra, leading to characteristic motor symptoms including tremor, rigidity, and bradykinesia. While most cases are sporadic, genetic studies have identified numerous loci associated with familial and sporadic disease risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pdGenes.map((gene, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>{gene.name}</h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.6rem' }}>{gene.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Types Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Model Types for Parkinson Disease Research
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modelTypes.map((type, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>{type.category}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {type.models.map((model, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <IconCheckCircle size={14} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ color: '#555', fontSize: '.85rem' }}>{model}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cell Type Specific Section */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Cell Type Specific Approaches
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Parkinson disease selectively affects specific neuronal populations. Conditional approaches target relevant cell types.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {creDrivers.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>{item.name}</h3>
                  <p style={{ color: '#008080', backgroundColor: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: '4px', fontSize: '.8rem', display: 'inline-block', marginBottom: '10px' }}>{item.driver}</p>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', lineHeight: '1.5rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phenotyping Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Phenotyping Parkinson Disease Models
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Motor Assessment
                </h3>
                <div className="space-y-4">
                  {motorTests.map((test, idx) => (
                    <div key={idx} style={{ borderBottom: idx < motorTests.length - 1 ? '1px solid #e5e7eb' : 'none', paddingBottom: '12px' }}>
                      <h4 style={{ color: '#008080', fontSize: '.9rem', fontWeight: 600, marginBottom: '5px' }}>{test.test}</h4>
                      <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{test.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderTop: '4px solid #2384da' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Neuropathology Endpoints
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {neuropathologyEndpoints.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <IconCheckCircle size={16} color="#2384da" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>
              Selected Publications in Parkinson Disease Research
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', marginBottom: '30px' }}>
              Recent publications demonstrate the utility of genetically engineered mouse models in Parkinson disease research:
            </p>

            <div className="grid grid-cols-1 gap-4">
              {publicationsData.map((pub, index) => (
                <div
                  key={index}
                  className="animate-in"
                  style={{
                    backgroundColor: 'white',
                    padding: '25px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #2384da'
                  }}
                >
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    <span style={{ color: '#0a253c' }}>{pub.authors}</span> ({pub.year}). <em>{pub.title}</em> <span style={{ color: '#008080', fontWeight: 500 }}>{pub.journal}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-in text-center" style={{ marginTop: '25px' }}>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
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
                fontSize: '1rem',
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Start Your Parkinson Model Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Our scientific consultants are ready to discuss your Parkinson disease research requirements and recommend the optimal model design for your program. Initial consultation is provided at no charge.
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
                href="/contact"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Disease Models
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedDiseaseModels.map((link, index) => (
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
                  Related Technologies
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedTechnologies.map((link, index) => (
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
            "name": "Parkinson Disease Mouse Models",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "Custom Parkinson disease mouse models for neurodegenerative research. Study alpha synuclein, dopamine pathways, and motor dysfunction.",
            "serviceType": "Parkinson Disease Mouse Model Generation"
          })
        }}
      />
    </div>
  );
}
