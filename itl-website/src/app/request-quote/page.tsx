'use client';

/**
 * Request Quote Page - Ingenious Targeting Laboratory
 * Master text from: /page-text-md/request-quote.md
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UXUIDCNavigation, UXUIDCFooter, UXUIDCAnimatedFAQ, UXUIDCAnimatedCounter } from '@/components/UXUIDC';
import {
  IconFileText,
  IconTarget,
  IconSettings,
  IconMicroscope,
  IconClock,
  IconUsers,
  IconCheckCircle,
  IconMail,
  IconPhone,
  IconCalendar,
  IconMessageCircle,
  IconClipboard,
  IconPackage,
  IconSearch,
  IconQuote,
  IconArrowRight,
  IconDNA,
  IconMouse,
  IconBriefcase,
} from '@/components/UXUIDC/Icons';

gsap.registerPlugin(ScrollTrigger);

// ========== STATS BAR ==========
const statsBar = [
  { number: '2,500+', label: 'Projects Completed' },
  { number: '800+', label: 'Publications' },
  { number: '25+', label: 'Years of Excellence' },
  { number: '100%', label: 'Custom Solutions' },
];

// ========== MASTER TEXT DATA ==========

const heroData = {
  title: 'Mouse Model Quote Request',
  content: "Submit your mouse model project details to receive a customized quote including timeline, deliverables, and pricing. Ingenious Targeting Laboratory's scientific consultants will review your request and provide strategic recommendations along with project pricing.",
};

const projectInfoSections = [
  {
    title: 'Target Gene Information',
    items: [
      'Gene symbol and species',
      'Target region (exons, promoter, full gene)',
      'Any known targeting considerations',
    ],
  },
  {
    title: 'Model Type',
    items: [
      'Conventional knockout',
      'Conditional knockout (floxed allele)',
      'Knockin (cDNA, point mutation, reporter, tag)',
      'Humanized model',
      'Transgenic',
      'Other modification',
    ],
  },
  {
    title: 'Strain Background',
    items: [
      'C57BL/6 (standard)',
      'BALB/c',
      '129 strain',
      'Other preference',
      'No preference',
    ],
  },
  {
    title: 'Project Scope',
    items: [
      'Complete project (vector through germline transmission)',
      'Targeting vector only',
      'ES cell targeting only',
      'Microinjection only',
      'Other partial service',
    ],
  },
  {
    title: 'Timeline Considerations',
    items: [
      'Standard timeline acceptable',
      'Rush timeline needed',
      'Specific deadline requirements',
    ],
  },
  {
    title: 'Cohort Requirements',
    items: [
      'Founders only',
      'Breeding pairs',
      'Study ready cohort (specify size)',
      'Ongoing colony management needed',
    ],
  },
];

const afterSubmitSteps = [
  { label: 'Within 1 Business Day', content: 'Our team acknowledges receipt and may request clarification if needed.' },
  { label: 'Within 2 to 3 Business Days', content: 'Scientific consultants review targeting feasibility and develop strategy recommendations.' },
  { 
    label: 'Quote Delivery', 
    content: 'Comprehensive quote including:',
    items: [
      'Recommended targeting strategy',
      'Allele design overview',
      'Project timeline by phase',
      'Deliverables at each milestone',
      'Pricing breakdown',
      'Terms and conditions',
    ],
  },
];

const formFields = {
  contact: ['Name', 'Email', 'Phone', 'Institution/Company', 'Department'],
  project: ['Gene symbol', 'Modification type', 'Model type', 'Strain background', 'Timeline requirements', 'Cohort needs', 'Additional notes'],
  preferredContact: ['Email', 'Phone', 'Virtual meeting'],
};

const whyRequestData = {
  title: 'Why Request a Quote from Ingenious Targeting Laboratory',
  paragraphs: [
    'With over 2,500 custom mouse model projects completed since 1998, Ingenious Targeting Laboratory brings extensive experience to every project. Our scientific consultants review each quote request carefully to provide accurate pricing and strategic recommendations.',
    'We understand that project budgets are important, and we work to provide cost effective solutions that meet your research requirements. Our quotes include detailed breakdowns of project phases, timeline expectations, and deliverables to help you make informed decisions.',
  ],
};

const nextStepsData = {
  title: 'Next Steps After Receiving Your Quote',
  content: 'Once you receive your quote, our team is available to discuss any questions or concerns. We can adjust project scope, explore alternative approaches, or provide additional detail about any aspect of the proposed work.',
};

const quoteProcessData = {
  title: 'Quote Request Process',
  content: 'After submitting your quote request, our scientific team reviews your project details and develops a comprehensive proposal. This includes detailed breakdown of project phases, timeline estimates, cost factors, and strategic recommendations for optimal targeting approaches.',
  content2: 'We understand that project budgets are important, and we work to provide cost effective solutions that meet your research requirements. Our quotes include all project phases from vector construction through delivery of study ready cohorts.',
};

const quoteFollowUpData = {
  title: 'Quote Follow Up',
  content: 'Once you receive your quote, our team is available to discuss any questions or concerns. We can adjust project scope, explore alternative approaches, or provide additional detail about any aspect of the proposed work. Our goal is to ensure you have all the information needed to make informed decisions about your mouse model project.',
};

const responseTimeData = {
  title: 'Quote Response Timeline',
  content: "We understand that timely quotes are important for project planning. Our team works to provide comprehensive quotes within 3 to 5 business days of receiving your request. For complex projects or projects requiring additional technical review, we'll provide an estimated timeline for quote delivery.",
  content2: "If you have urgent timeline requirements, please indicate this in your quote request. We can prioritize urgent requests and provide expedited quote delivery when needed.",
};

const faqData = [
  {
    question: 'What information do I need to provide for a quote request?',
    answer: 'Provide target gene information (gene symbol, species, target region), model type (knockout, knockin, conditional, humanized, transgenic), strain background preference (C57BL/6, BALB/c, 129, or no preference), project scope (complete project or partial services), timeline considerations (standard or rush), and cohort requirements (founders, breeding pairs, or study-ready cohort).',
  },
  {
    question: 'How long does it take to receive a quote?',
    answer: "Quotes are typically delivered within 2-3 business days after receiving your request. For complex projects requiring additional technical review, we'll provide an estimated timeline for quote delivery. Urgent requests can be prioritized for expedited quote delivery when needed.",
  },
  {
    question: 'What is included in a project quote?',
    answer: 'Quotes include recommended targeting strategy, allele design overview, project timeline by phase, deliverables at each milestone, pricing breakdown, and terms and conditions. Quotes are customized based on your specific research requirements and project scope.',
  },
  {
    question: 'Can I get a quote for partial services?',
    answer: 'Yes. ITL provides quotes for partial services including targeting vector only, ES cell targeting only, microinjection only, or other partial services. Pricing is based on the specific scope of work requested. Contact ITL to discuss your partial service needs.',
  },
  {
    question: 'What happens after I receive my quote?',
    answer: "After receiving your quote, ITL's team is available to discuss any questions or concerns. We can adjust project scope, explore alternative approaches, or provide additional detail about any aspect of the proposed work. Our goal is to ensure you have all the information needed to make informed decisions.",
  },
  {
    question: 'How long is a quote valid?',
    answer: 'Quotes are typically valid for 90 days from issue date. Timeline estimates may be updated if significant time passes before project initiation.',
  },
  {
    question: 'Is there a fee for project consultation?',
    answer: 'No, Ingenious Targeting Laboratory provides complimentary scientific consultation for project design and strategy development.',
  },
  {
    question: 'What if my project changes after receiving a quote?',
    answer: 'Contact your project coordinator to discuss modifications. Updated quotes can be provided for scope changes.',
  },
  {
    question: 'Can you quote projects for species other than mice?',
    answer: 'Yes, Ingenious Targeting Laboratory also provides services for rat, rabbit, and other species. Include species information in your request.',
  },
  {
    question: 'What about international shipping?',
    answer: 'Ingenious Targeting Laboratory ships mice internationally. Shipping and import requirements are addressed during project planning.',
  },
];

const alternativeContactData = [
  {
    title: 'Schedule a Consultation First',
    content: 'If you prefer to discuss your project before requesting a formal quote:',
    href: '/contact',
    label: 'Schedule Consultation',
  },
  {
    title: 'General Inquiries',
    content: 'For questions about Ingenious Targeting Laboratory services or capabilities:',
    href: '/contact',
    label: 'Contact Us',
  },
  {
    title: 'Catalog Models',
    content: 'For humanized immune checkpoint mice and other catalog models:',
    href: '/catalog-mouse-models',
    label: 'View Catalog',
  },
];


const resourcesData = [
  { label: 'Model Generation Timeline', href: '/model-generation-timeline' },
  { label: 'Knockout Strategy Guide', href: '/knockout-mouse-models' },
  { label: 'Conditional vs Conventional Guide', href: '/conditional-vs-conventional-guide' },
  { label: 'FAQs', href: '/resources' },
];

const testimonialData = {
  quote: 'The quality of service was exceptional. The team at Ingenious consistently met the highest possible standards in every aspect of our project.',
  author: 'Albert Basson, PhD',
  institution: "King's College London",
};

// ========== PAGE COMPONENT ==========

export default function RequestQuotePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-in');
    animateElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
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
    
    // Prepare data for API route
    const quoteData = {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      institution: formData.get('institution-company') as string || '',
      department: formData.get('department') as string || '',
      geneSymbol: formData.get('gene-symbol') as string || '',
      modificationType: formData.get('modification-type') as string || '',
      modelType: formData.get('model-type') as string || '',
      strainBackground: formData.get('strain-background') as string || '',
      timelineRequirements: formData.get('timeline-requirements') as string || '',
      cohortNeeds: formData.get('cohort-needs') as string || '',
      additionalNotes: formData.get('additional-notes') as string || '',
      preferredContact: formData.get('preferred-contact') as string || '',
    };

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
      <UXUIDCNavigation />

      {/* ========== HERO SECTION ========== */}
      <section
        ref={heroRef}
        style={{
          background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)',
          padding: '80px 20px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Pattern */}
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1 }}>
          <svg width="400" height="400" viewBox="0 0 400 400">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="400" height="400" fill="url(#grid)" />
          </svg>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="animate-in"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>
                  Free Consultation Included
                </span>
              </div>

              <h1
                className="animate-in"
                style={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {heroData.title}
              </h1>

              <p
                className="animate-in"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: '1.7rem',
                  marginBottom: '25px',
                }}
              >
                {heroData.content}
              </p>

              <div className="animate-in flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: '#008080',
                    padding: '10px 20px',
                    minWidth: '180px',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.85rem',
                    fontWeight: 500,
                  }}
                >
                  <span>Submit Quote Request</span>
                  <span>→</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-900"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '10px 20px',
                    minWidth: '180px',
                    border: '2px solid white',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.85rem',
                    fontWeight: 500,
                  }}
                >
                  <span>Schedule Consultation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="animate-in hidden lg:block">
              <div
                style={{
                  border: '2px dashed rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
              >
                <IconFileText size={60} color="rgba(255,255,255,0.4)" />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>
                  Quote Request Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR - Animated Counter ========== */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <UXUIDCAnimatedCounter stats={statsBar} />
        </div>
      </section>

      {/* ========== PROJECT INFORMATION NEEDED ========== */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '15px',
            }}
          >
            Project Information Needed
          </h2>
          <p
            className="animate-in text-center"
            style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            To provide an accurate quote, please include the following information in your request:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectInfoSections.map((section, i) => {
              const icons = [IconTarget, IconDNA, IconMicroscope, IconClipboard, IconClock, IconUsers];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '25px',
                    border: '.5px solid #e0e0e0',
                    borderTop: '4px solid #008080',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#0a253c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '15px',
                    }}
                  >
                    <Icon size={24} color="white" />
                  </div>
                  <h3
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '12px',
                    }}
                  >
                    {section.title}
                  </h3>
                  <ul style={{ paddingLeft: '18px', flex: 1 }}>
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          color: '#666',
                          fontFamily: 'var(--system-ui)',
                          fontSize: '.85rem',
                          fontWeight: 300,
                          lineHeight: '1.6rem',
                          marginBottom: '6px',
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHAT HAPPENS AFTER YOU SUBMIT ========== */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '40px',
            }}
          >
            What Happens After You Submit
          </h2>

          <div className="space-y-6">
            {afterSubmitSteps.map((step, i) => (
              <div
                key={i}
                className="animate-in flex gap-6 items-start"
                style={{
                  backgroundColor: 'white',
                  padding: '25px',
                  border: '.5px solid #e0e0e0',
                }}
              >
                <div
                  style={{
                    minWidth: '40px',
                    height: '40px',
                    backgroundColor: '#008080',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                    }}
                  >
                    {step.content}
                  </p>
                  {step.items && (
                    <ul style={{ paddingLeft: '18px', marginTop: '10px' }}>
                      {step.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            color: '#666',
                            fontFamily: 'var(--system-ui)',
                            fontSize: '.85rem',
                            fontWeight: 300,
                            lineHeight: '1.6rem',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUOTE REQUEST FORM ========== */}
      <section id="quote-form" style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '40px',
            }}
          >
            Quote Request Form
          </h2>

          <form ref={formRef} onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="animate-in" style={{ marginBottom: '30px' }}>
              <h3
                style={{
                  color: '#008080',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '15px',
                }}
              >
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formFields.contact.map((field) => (
                  <div key={field}>
                    <label
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.8rem',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {field}
                    </label>
                    <input
                      type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
                      name={field.toLowerCase().replace(/\//g, '-')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.9rem',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="animate-in" style={{ marginBottom: '30px' }}>
              <h3
                style={{
                  color: '#008080',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '15px',
                }}
              >
                Project Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formFields.project.slice(0, -1).map((field) => (
                  <div key={field}>
                    <label
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.8rem',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {field}
                    </label>
                    <input
                      type="text"
                      name={field.toLowerCase().replace(/\s/g, '-')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.9rem',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '15px' }}>
                <label
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.8rem',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  Additional notes
                </label>
                <textarea
                  name="additional-notes"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div className="animate-in" style={{ marginBottom: '30px' }}>
              <h3
                style={{
                  color: '#008080',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '15px',
                }}
              >
                Preferred Contact Method
              </h3>
              <div className="flex flex-wrap gap-6">
                {formFields.preferredContact.map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferred-contact"
                      value={method.toLowerCase()}
                      style={{ accentColor: '#008080' }}
                    />
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.9rem',
                      }}
                    >
                      {method}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="animate-in text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#008080',
                  padding: '10px 20px',
                  minWidth: '180px',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.85rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Quote Request'}</span>
                {!isSubmitting && <span>→</span>}
              </button>
              
              {submitStatus === 'success' && (
                <p style={{ color: '#00d4d4', marginTop: '15px', fontFamily: 'var(--system-ui)', fontSize: '.9rem' }}>
                  Thank you! Your quote request has been submitted. Our team will contact you within 1 business day.
                </p>
              )}
              {submitStatus === 'error' && (
                <p style={{ color: '#ff6b6b', marginTop: '15px', fontFamily: 'var(--system-ui)', fontSize: '.9rem' }}>
                  There was an error submitting your request. Please try again or contact us directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ========== WHY REQUEST A QUOTE ========== */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="animate-in">
              <div
                style={{
                  border: '2px dashed #e0e0e0',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f7f7f7',
                }}
              >
                <IconBriefcase size={50} color="#ccc" />
                <span style={{ color: '#999', fontSize: '.8rem', marginTop: '10px' }}>
                  Experience Image
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2
                className="animate-in"
                style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                }}
              >
                {whyRequestData.title}
              </h2>
              {whyRequestData.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="animate-in"
                  style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.6rem',
                    marginBottom: '15px',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEXT STEPS / PROCESS / FOLLOW UP / TIMELINE ========== */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Next Steps */}
            <div
              className="animate-in"
              style={{
                backgroundColor: 'white',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                borderTop: '4px solid #134978',
              }}
            >
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                {nextStepsData.title}
              </h3>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                }}
              >
                {nextStepsData.content}
              </p>
            </div>

            {/* Quote Process */}
            <div
              className="animate-in"
              style={{
                backgroundColor: 'white',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                borderTop: '4px solid #008080',
              }}
            >
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                {quoteProcessData.title}
              </h3>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                  marginBottom: '10px',
                }}
              >
                {quoteProcessData.content}
              </p>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                }}
              >
                {quoteProcessData.content2}
              </p>
            </div>

            {/* Quote Follow Up */}
            <div
              className="animate-in"
              style={{
                backgroundColor: 'white',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                borderTop: '4px solid #008080',
              }}
            >
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                {quoteFollowUpData.title}
              </h3>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                }}
              >
                {quoteFollowUpData.content}
              </p>
            </div>

            {/* Response Timeline */}
            <div
              className="animate-in"
              style={{
                backgroundColor: 'white',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                borderTop: '4px solid #134978',
              }}
            >
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                {responseTimeData.title}
              </h3>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                  marginBottom: '10px',
                }}
              >
                {responseTimeData.content}
              </p>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                }}
              >
                {responseTimeData.content2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <UXUIDCAnimatedFAQ title="Frequently Asked Questions" faqs={faqData} backgroundColor="white" />

      {/* ========== ALTERNATIVE CONTACT OPTIONS ========== */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '40px',
            }}
          >
            Alternative Contact Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alternativeContactData.map((option, i) => {
              const icons = [IconCalendar, IconMessageCircle, IconPackage];
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    border: '.5px solid #e0e0e0',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#0a253c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 15px',
                    }}
                  >
                    <Icon size={28} color="white" />
                  </div>
                  <h3
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '10px',
                    }}
                  >
                    {option.title}
                  </h3>
                  <p
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                      marginBottom: '15px',
                      flex: 1,
                    }}
                  >
                    {option.content}
                  </p>
                  <Link
                    href={option.href}
                    className="mt-auto inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      backgroundColor: '#134978',
                      padding: '10px 20px',
                      minWidth: '160px',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 500,
                    }}
                  >
                    <span>{option.label}</span>
                    <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== RESOURCES ========== */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '15px',
            }}
          >
            Resources
          </h2>
          <p
            className="animate-in text-center"
            style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              marginBottom: '30px',
            }}
          >
            Review these resources before submitting your request:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resourcesData.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="animate-in flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: 'white',
                  padding: '18px 20px',
                  border: '.5px solid #e0e0e0',
                }}
              >
                <IconArrowRight size={18} color="#008080" />
                <span
                  style={{
                    color: '#333',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 500,
                  }}
                >
                  {resource.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL ========== */}
      <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <IconQuote size={40} color="#008080" className="mx-auto mb-4" />
          <h2
            className="animate-in"
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            What Researchers Say
          </h2>
          <blockquote
            className="animate-in"
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'var(--system-ui)',
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: '1.8rem',
              fontStyle: 'italic',
              marginBottom: '20px',
            }}
          >
            &ldquo;{testimonialData.quote}&rdquo;
          </blockquote>
          <p
            className="animate-in"
            style={{
              color: '#008080',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '.9rem',
              fontWeight: 600,
            }}
          >
            — {testimonialData.author}
          </p>
          <p
            className="animate-in"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--system-ui)',
              fontSize: '.85rem',
              fontWeight: 300,
            }}
          >
            {testimonialData.institution}
          </p>
          <Link
            href="/about-itl"
            className="animate-in inline-flex items-center gap-2 mt-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-teal-700"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '10px 20px',
              border: '2px solid white',
              fontFamily: 'var(--system-ui)',
              fontSize: '.85rem',
              fontWeight: 500,
            }}
          >
            <span>View All Testimonials</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ========== RELATED PAGES ========== */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            Related Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Pricing Overview', href: '/pricing-overview', icon: IconFileText },
              { label: 'Custom Mouse Models', href: '/custom-mouse-models', icon: IconMouse },
              { label: 'Contact Us', href: '/contact', icon: IconMessageCircle },
              { label: 'About ITL', href: '/about-itl', icon: IconBriefcase },
            ].map((page, i) => {
              const Icon = page.icon;
              return (
                <Link
                  key={i}
                  href={page.href}
                  className="animate-in flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '25px 20px',
                    border: '.5px solid #e0e0e0',
                    textAlign: 'center',
                  }}
                >
                  <Icon size={30} color="#008080" />
                  <span
                    style={{
                      color: '#333',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
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
