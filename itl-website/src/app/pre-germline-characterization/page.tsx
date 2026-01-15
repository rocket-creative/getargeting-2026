'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconTarget, IconImage, IconQuote, IconChevronRight, IconCheckCircle, IconDNA } from '@/components/UXUIDC/Icons';

const heroData = {
  badge: "Quality Assurance",
  title: "Pre-Germline Characterization",
  intro: "Before germline transmission, Ingenious Targeting Laboratory performs comprehensive characterization of targeted ES cell clones, ensuring that only correctly targeted clones proceed to chimera production and significantly reducing project risk.",
  description: "Pre-germline characterization validates targeting at the molecular level before the time and expense of chimera production and breeding, giving researchers confidence in their custom models."
};

const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

const characterizationSteps = [
  { step: "Southern Blot Analysis", description: "Gold standard for confirming homologous recombination at the target locus. Detects correct integration, rules out random integration, and confirms single copy insertion." },
  { step: "PCR Screening", description: "Long range PCR across the homology arms confirms correct targeting. 5 prime and 3 prime junction PCR validates both arms of homologous recombination." },
  { step: "Karyotyping", description: "Chromosome analysis ensures ES cells maintain normal ploidy. Abnormal karyotype cells cannot produce germline competent chimeras." },
  { step: "Copy Number Analysis", description: "qPCR based copy number analysis confirms single copy integration. Multiple integrations complicate breeding and can cause unexpected phenotypes." }
];

const southernBlotDetails = [
  { aspect: "5 prime Probe", purpose: "Detects correct integration at the 5 prime homology arm. Band shift from wild type to targeted allele confirms recombination." },
  { aspect: "3 prime Probe", purpose: "Confirms correct integration at the 3 prime homology arm. Essential for ruling out partial integrations." },
  { aspect: "Internal Probe", purpose: "Detects the targeting cassette (Neo, selection marker). Confirms single copy and rules out tandem duplications." }
];

const qualityMetrics = [
  { metric: "Targeting Efficiency", typical: "1 to 30% of screened clones", factors: "Varies by locus, construct design, ES cell line" },
  { metric: "Karyotype Normal", typical: ">80% of targeted clones", factors: "Clone passage number, ES cell line quality" },
  { metric: "Single Copy Verified", typical: "Most correctly targeted clones", factors: "Southern blot and qPCR confirmation" }
];

const cloneSelectionCriteria = [
  { criterion: "Correct Southern Pattern", importance: "Critical - confirms homologous recombination" },
  { criterion: "Normal Karyotype", importance: "Essential for germline transmission" },
  { criterion: "Single Copy Integration", importance: "Prevents breeding complications" },
  { criterion: "Good Growth Characteristics", importance: "Supports chimera production" }
];

const projectTimeline = [
  { phase: "ES Cell Targeting", duration: "8 to 12 weeks", includes: "Electroporation, selection, clone picking" },
  { phase: "Pre-Germline Characterization", duration: "4 to 6 weeks", includes: "Southern blot, PCR, karyotyping" },
  { phase: "Chimera Production", duration: "8 to 12 weeks", includes: "Blastocyst injection, foster transfer" },
  { phase: "Germline Transmission", duration: "8 to 12 weeks", includes: "Breeding, genotyping F1 pups" }
];

// Verified testimonials from master data - https://www.genetargeting.com/testimonials
import { getTestimonialById, formatAuthorWithCredentials } from '@/data/verifiedTestimonials';
const francoTestimonial = getTestimonialById('franco-colorado')!;
const testimonials = [{ quote: francoTestimonial.quote, author: formatAuthorWithCredentials(francoTestimonial), affiliation: francoTestimonial.affiliation }];

const relatedLinks = [
  { title: "ES Cell Gene Targeting", href: "/es-cell-gene-targeting" },
  { title: "Knockout Mouse Models", href: "/knockout-mouse-models" },
  { title: "Knockin Mouse Models", href: "/knockin-mouse-models" },
  { title: "Conditional Knockout Models", href: "/conditional-knockout-mouse-models" }
];

const faqData = [
  { question: "Why is pre-germline characterization important?", answer: "Pre-germline characterization validates correct targeting before investing time and resources in chimera production and breeding. Identifying incorrectly targeted clones early saves months of work and ensures that mice produced carry the intended modification." },
  { question: "What does Southern blot analysis confirm?", answer: "Southern blot confirms homologous recombination at the target locus by detecting band shifts from wild type to targeted allele sizes. Probes at 5 prime, 3 prime, and internal positions rule out random integration, partial integration, and multiple copy insertion." },
  { question: "Why is karyotyping necessary for ES cell clones?", answer: "ES cells must maintain normal chromosome number (40 for mouse) to produce germline competent chimeras. Abnormal karyotype clones (aneuploid) cannot contribute to the germline, making them unsuitable for mouse production regardless of correct targeting." },
  { question: "How many clones are typically characterized?", answer: "Typically 3 to 6 correctly targeted clones undergo full characterization. Multiple clones are characterized because not all targeted clones will have normal karyotype or produce germline transmission. Having multiple validated clones provides backup options." }
];

export default function PreGermlineCharacterizationPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (heroRef.current) { gsap.fromTo(heroRef.current.querySelectorAll('.hero-animate'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }); }
      document.querySelectorAll('.animate-in').forEach((el) => { gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } }); });
    };
    loadGSAP();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      <main id="main-content">
        <section ref={heroRef} style={{ background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)', padding: '80px 20px 60px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="hero-animate" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: '20px', marginBottom: '20px' }}><IconDNA size={16} color="white" /><span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>{heroData.badge}</span></div>
                <h1 className="hero-animate" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '20px' }}>{heroData.title}</h1>
                <p className="hero-animate" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', fontWeight: 400, lineHeight: '1.7rem', marginBottom: '15px' }}>{heroData.intro}</p>
                <p className="hero-animate" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', fontWeight: 400, lineHeight: '1.6rem', marginBottom: '25px' }}>{heroData.description}</p>
                <div className="hero-animate flex flex-wrap gap-4">
                  <Link href="/request-quote" className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'white', color: '#0a253c', padding: '10px 20px', fontSize: '.85rem', fontWeight: 500 }}><span>Request a Quote</span><span>→</span></Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'transparent', color: 'white', padding: '10px 20px', border: '2px solid white', fontSize: '.85rem', fontWeight: 500 }}><span>Talk to a Scientist</span><span>→</span></Link>
                </div>
              </div>
              <div className="hero-animate"><div style={{ border: '2px dashed rgba(255,255,255,0.4)', borderRadius: '8px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.05)' }}><IconImage size={60} color="rgba(255,255,255,0.4)" /><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>ES Cell Characterization Illustration</span></div></div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#0a253c', padding: '30px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (<div key={index} className="text-center"><div style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700 }}><UXUIDCAnimatedCounter end={stat.value} suffix={stat.suffix} /></div><div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.85rem' }}>{stat.label}</div></div>))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>Characterization Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {characterizationSteps.map((step, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>{step.step}</h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>Southern Blot Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {southernBlotDetails.map((item, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', borderTop: '4px solid #2384da' }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>{item.aspect}</h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>Project Timeline</h2>
            <div className="animate-in" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                <thead><tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}><th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Phase</th><th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Duration</th><th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Includes</th></tr></thead>
                <tbody>{projectTimeline.map((row, idx) => (<tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}><td style={{ padding: '15px', color: 'white', fontSize: '.85rem', fontWeight: 500 }}>{row.phase}</td><td style={{ padding: '15px', color: 'rgba(255,255,255,0.85)', fontSize: '.85rem' }}>{row.duration}</td><td style={{ padding: '15px', color: 'rgba(255,255,255,0.85)', fontSize: '.85rem' }}>{row.includes}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>Clone Selection Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cloneSelectionCriteria.map((item, index) => (
                <div key={index} className="animate-in" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <IconCheckCircle size={24} color="#008080" style={{ flexShrink: 0 }} />
                  <div><h3 style={{ color: '#0a253c', fontSize: '.95rem', fontWeight: 600, marginBottom: '5px' }}>{item.criterion}</h3><p style={{ color: '#555', fontSize: '.85rem' }}>{item.importance}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>What Researchers Say</h2>
            {testimonials.map((testimonial, index) => (<div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,128,128,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><IconQuote size={20} color="#008080" /></div><blockquote style={{ color: '#333', fontSize: '.9rem', lineHeight: '1.6rem', fontStyle: 'italic', marginBottom: '15px' }}>&ldquo;{testimonial.quote}&rdquo;</blockquote><p style={{ color: '#0a253c', fontWeight: 600, fontSize: '.85rem', marginBottom: '2px' }}>— {testimonial.author}</p><p style={{ color: '#666', fontSize: '.8rem' }}>{testimonial.affiliation}</p></div>))}
          </div>
        </section>

        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>Start Your ES Cell Targeting Project</h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>Our comprehensive pre-germline characterization ensures that only validated, correctly targeted ES cell clones proceed to chimera production, saving you time and guaranteeing quality.</p>
            <div className="animate-in flex flex-wrap justify-center gap-4">
              <Link href="/request-quote" className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#008080', color: 'white', padding: '12px 30px', fontSize: '.9rem', fontWeight: 500 }}><span>Request a Quote</span><span>→</span></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 30px', border: '2px solid white', fontSize: '.9rem', fontWeight: 500 }}><span>Free Consultation</span><span>→</span></Link>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>Frequently Asked Questions</h2>
            <div className="animate-in"><UXUIDCAnimatedFAQ faqs={faqData} /></div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h3 className="animate-in" style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>Related Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedLinks.map((link, index) => (<div key={index} className="animate-in"><Link href={link.href} className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600" style={{ color: '#2384da', fontSize: '.85rem' }}><IconChevronRight size={12} color="#2384da" /><span>{link.title}</span></Link></div>))}
            </div>
          </div>
        </section>
      </main>
      <UXUIDCFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Pre-Germline Characterization", "provider": { "@type": "Organization", "name": "Ingenious Targeting Laboratory" }, "description": "Comprehensive ES cell clone characterization before germline transmission since 1998.", "serviceType": "Pre-Germline Characterization" }) }} />
    </div>
  );
}
