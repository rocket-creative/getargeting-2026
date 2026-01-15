'use client';

/**
 * Request Quote Page - Ingenious Targeting Laboratory
 * Master text from: /page-text-md/request-quote.md
 * REDESIGNED: Form-first approach with form above the fold
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UXUIDCNavigation, UXUIDCFooter, UXUIDCAnimatedFAQ } from '@/components/UXUIDC';
import {
  IconFileText,
  IconCheckCircle,
  IconCalendar,
  IconMessageCircle,
  IconPackage,
  IconQuote,
  IconArrowRight,
  IconMouse,
  IconBriefcase,
} from '@/components/UXUIDC/Icons';

gsap.registerPlugin(ScrollTrigger);

// ========== FORM FIELD OPTIONS ==========
const modelTypeOptions = [
  'Conventional knockout',
  'Conditional knockout (floxed)',
  'Knockin (cDNA/point mutation/reporter/tag)',
  'Humanized model',
  'Transgenic',
  'Other',
];

const strainOptions = [
  'C57BL/6 (standard)',
  'BALB/c',
  '129 strain',
  'Other',
  'No preference',
];

const scopeOptions = [
  'Complete project',
  'Targeting vector only',
  'ES cell targeting only',
  'Microinjection only',
  'Other partial service',
];

const timelineOptions = [
  'Standard timeline',
  'Rush timeline needed',
  'Specific deadline',
];

const cohortOptions = [
  'Founders only',
  'Breeding pairs',
  'Study-ready cohort',
  'Colony management needed',
];

const formFields = {
  preferredContact: ['Email', 'Phone', 'Virtual meeting'],
};

const faqData = [
  {
    question: 'How long does it take to receive a quote?',
    answer: "Quotes are typically delivered within 2-3 business days. For complex projects requiring additional technical review, we'll provide an estimated timeline. Urgent requests can be prioritized.",
  },
  {
    question: 'What is included in a project quote?',
    answer: 'Quotes include recommended targeting strategy, allele design overview, project timeline by phase, deliverables at each milestone, pricing breakdown, and terms and conditions.',
  },
  {
    question: 'Can I get a quote for partial services?',
    answer: 'Yes. ITL provides quotes for partial services including targeting vector only, ES cell targeting only, microinjection only, or other partial services.',
  },
  {
    question: 'Is there a fee for project consultation?',
    answer: 'No, Ingenious Targeting Laboratory provides complimentary scientific consultation for project design and strategy development.',
  },
  {
    question: 'How long is a quote valid?',
    answer: 'Quotes are typically valid for 90 days from issue date. Timeline estimates may be updated if significant time passes before project initiation.',
  },
  {
    question: 'Can you quote projects for species other than mice?',
    answer: 'Yes, ITL also provides services for rat, rabbit, and other species. Include species information in your request.',
  },
];

const alternativeContactData = [
  {
    title: 'Schedule a Consultation',
    content: 'Discuss your project before requesting a quote',
    href: '/contact',
    label: 'Schedule',
  },
  {
    title: 'General Inquiries',
    content: 'Questions about services or capabilities',
    href: '/contact',
    label: 'Contact',
  },
  {
    title: 'Catalog Models',
    content: 'Browse ready-made humanized models',
    href: '/catalog-mouse-models',
    label: 'View Catalog',
  },
];

const testimonialData = {
  quote: 'The quality of service was exceptional. The team at Ingenious consistently met the highest possible standards.',
  author: 'Albert Basson, PhD',
  institution: "King's College London",
};

// ========== PAGE COMPONENT ==========

export default function RequestQuotePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-in');
    animateElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(formRef.current!);
    
    const quoteData = {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      institution: formData.get('institution') as string || '',
      geneSymbol: formData.get('gene-symbol') as string || '',
      species: formData.get('species') as string || '',
      modelType: formData.get('model-type') as string || '',
      strainBackground: formData.get('strain-background') as string || '',
      projectScope: formData.get('project-scope') as string || '',
      timelineRequirements: formData.get('timeline') as string || '',
      cohortNeeds: formData.get('cohort') as string || '',
      additionalNotes: formData.get('additional-notes') as string || '',
      preferredContact: formData.get('preferred-contact') as string || '',
    };

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom select component style
  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    backgroundColor: 'white',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    color: '#374151',
    fontFamily: 'var(--system-ui)',
    fontSize: '.875rem',
    cursor: 'pointer',
    appearance: 'none' as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '16px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    backgroundColor: 'white',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    color: '#374151',
    fontFamily: 'var(--system-ui)',
    fontSize: '.875rem',
  };

  const labelStyle = {
    color: '#374151',
    fontFamily: 'var(--system-ui)',
    fontSize: '.75rem',
    fontWeight: 500 as const,
    display: 'block',
    marginBottom: '4px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.025em',
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <UXUIDCNavigation />

      {/* ========== COMPACT HEADER + FORM SECTION ========== */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
          padding: '70px 20px 50px',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0,128,128,0.3)',
                padding: '6px 14px',
                borderRadius: '20px',
                marginBottom: '12px',
              }}
            >
              <IconCheckCircle size={14} color="#00d4d4" />
              <span style={{ color: '#00d4d4', fontSize: '.75rem', fontWeight: 500 }}>
                Free Consultation • Response in 2-3 Days
              </span>
            </div>
            <h1
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              Request a Custom Mouse Model Quote
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'var(--system-ui)',
                fontSize: '.875rem',
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Tell us about your project and receive a detailed quote with strategy recommendations
            </p>
          </div>

          {/* Two Column Layout: Form + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ===== MAIN FORM ===== */}
            <div className="lg:col-span-2">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                {/* Contact Info Row */}
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <span style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>
                      Contact Information
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input type="text" name="name" required style={inputStyle} placeholder="Your name" />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" name="email" required style={inputStyle} placeholder="email@institution.edu" />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" name="phone" style={inputStyle} placeholder="(Optional)" />
                    </div>
                    <div>
                      <label style={labelStyle}>Institution</label>
                      <input type="text" name="institution" style={inputStyle} placeholder="University/Company" />
                    </div>
                  </div>
                </div>

                {/* Gene Information Row */}
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <span style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>
                      Target Gene
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={labelStyle}>Gene Symbol *</label>
                      <input type="text" name="gene-symbol" required style={inputStyle} placeholder="e.g., Brca1, Tp53" />
                    </div>
                    <div>
                      <label style={labelStyle}>Species</label>
                      <input type="text" name="species" style={inputStyle} placeholder="Mouse, Rat, etc." defaultValue="Mouse" />
                    </div>
                  </div>
                </div>

                {/* Project Specifications Row */}
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <span style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>
                      Project Specifications
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div>
                      <label style={labelStyle}>Model Type *</label>
                      <select name="model-type" required style={selectStyle}>
                        <option value="">Select type...</option>
                        {modelTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Strain Background</label>
                      <select name="strain-background" style={selectStyle}>
                        <option value="">Select strain...</option>
                        {strainOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Project Scope</label>
                      <select name="project-scope" style={selectStyle}>
                        <option value="">Select scope...</option>
                        {scopeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Timeline</label>
                      <select name="timeline" style={selectStyle}>
                        <option value="">Select timeline...</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Cohort Needs</label>
                      <select name="cohort" style={selectStyle}>
                        <option value="">Select cohort...</option>
                        {cohortOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Contact Preference</label>
                      <select name="preferred-contact" style={selectStyle}>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="virtual meeting">Virtual Meeting</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Additional Details</label>
                  <textarea
                    name="additional-notes"
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Target region, exons, special requirements, or questions..."
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p style={{ color: '#6b7280', fontSize: '.75rem', fontFamily: 'var(--system-ui)' }}>
                    * Required fields. We&apos;ll respond within 2-3 business days.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50"
                    style={{
                      backgroundColor: '#008080',
                      padding: '12px 28px',
                      borderRadius: '6px',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      minWidth: '180px',
                    }}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                    {!isSubmitting && <IconArrowRight size={16} />}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#ecfdf5', borderRadius: '6px', border: '1px solid #10b981' }}>
                    <p style={{ color: '#065f46', fontSize: '.875rem', fontFamily: 'var(--system-ui)' }}>
                      Thank you! Your quote request has been submitted. Our team will contact you within 1-2 business days.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#fef2f2', borderRadius: '6px', border: '1px solid #ef4444' }}>
                    <p style={{ color: '#991b1b', fontSize: '.875rem', fontFamily: 'var(--system-ui)' }}>
                      There was an error submitting your request. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="lg:col-span-1 space-y-4">
              {/* What You'll Receive */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '.95rem', fontWeight: 600, marginBottom: '12px' }}>
                  Your Quote Includes
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {[
                    'Recommended targeting strategy',
                    'Allele design overview',
                    'Project timeline by phase',
                    'Deliverables at each milestone',
                    'Detailed pricing breakdown',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      <IconCheckCircle size={14} color="#00d4d4" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.8rem', fontFamily: 'var(--system-ui)', lineHeight: '1.4' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '.95rem', fontWeight: 600, marginBottom: '12px' }}>
                  What Happens Next
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { step: '1', label: '1 Day', desc: 'Acknowledgment & clarification if needed' },
                    { step: '2', label: '2-3 Days', desc: 'Feasibility review & strategy development' },
                    { step: '3', label: 'Quote', desc: 'Comprehensive proposal delivered' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div
                        style={{
                          minWidth: '24px',
                          height: '24px',
                          backgroundColor: '#008080',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '.7rem',
                          fontWeight: 700,
                        }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <span style={{ color: '#00d4d4', fontSize: '.75rem', fontWeight: 600, fontFamily: 'var(--system-ui)' }}>
                          {item.label}
                        </span>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0, lineHeight: '1.3' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Stats */}
              <div
                style={{
                  backgroundColor: 'rgba(0,128,128,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: '1px solid rgba(0,128,128,0.3)',
                }}
              >
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { num: '2,500+', label: 'Projects' },
                    { num: '25+', label: 'Years' },
                    { num: '800+', label: 'Publications' },
                    { num: '100%', label: 'Custom' },
                  ].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 700 }}>
                        {stat.num}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.65rem', fontFamily: 'var(--system-ui)' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prefer to Talk? */}
              <Link
                href="/contact"
                className="block transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#0a253c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconCalendar size={18} color="white" />
                  </div>
                  <div>
                    <p style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', fontWeight: 600, margin: 0 }}>
                      Prefer to Talk First?
                    </p>
                    <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                      Schedule a free consultation →
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <UXUIDCAnimatedFAQ title="Frequently Asked Questions" faqs={faqData} backgroundColor="white" />

      {/* ========== ALTERNATIVE CONTACT OPTIONS ========== */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#0a253c',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            Other Ways to Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alternativeContactData.map((option, i) => {
              const icons = [IconCalendar, IconMessageCircle, IconPackage];
              const Icon = icons[i];
              return (
                <Link
                  key={i}
                  href={option.href}
                  className="animate-in flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#0a253c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="white" />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '.9rem',
                        fontWeight: 600,
                        marginBottom: '2px',
                      }}
                    >
                      {option.title}
                    </h3>
                    <p
                      style={{
                        color: '#666',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.75rem',
                        margin: 0,
                      }}
                    >
                      {option.content}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== COMPACT TESTIMONIAL ========== */}
      <section style={{ backgroundColor: '#0a253c', padding: '40px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <IconQuote size={28} color="#008080" className="mx-auto mb-3" />
          <blockquote
            className="animate-in"
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'var(--system-ui)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: '1.7',
              fontStyle: 'italic',
              marginBottom: '12px',
            }}
          >
            &ldquo;{testimonialData.quote}&rdquo;
          </blockquote>
          <p style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', fontWeight: 600, margin: 0 }}>
            — {testimonialData.author}, {testimonialData.institution}
          </p>
        </div>
      </section>

      {/* ========== RELATED PAGES ========== */}
      <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#0a253c',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.4rem',
              fontWeight: 700,
              marginBottom: '24px',
            }}
          >
            Explore More
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Pricing', href: '/pricing-overview', icon: IconFileText },
              { label: 'Custom Models', href: '/custom-mouse-models', icon: IconMouse },
              { label: 'Contact', href: '/contact', icon: IconMessageCircle },
              { label: 'About ITL', href: '/about-itl', icon: IconBriefcase },
            ].map((page, i) => {
              const Icon = page.icon;
              return (
                <Link
                  key={i}
                  href={page.href}
                  className="animate-in flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '20px 16px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <Icon size={24} color="#008080" />
                  <span
                    style={{
                      color: '#333',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {page.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <UXUIDCFooter />
    </main>
  );
}
