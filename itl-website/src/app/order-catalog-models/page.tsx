'use client';

/**
 * Order Inquiry - Catalog Models Page
 * Request form for ordering from the ITL catalog of mouse models
 * Design based on request-quote page pattern
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UXUIDCNavigation, UXUIDCFooter, UXUIDCAnimatedFAQ, CatalogSearch } from '@/components/UXUIDC';
import {
  IconCheckCircle,
  IconMessageCircle,
  IconPackage,
  IconQuote,
  IconArrowRight,
  IconMouse,
  IconSearch,
  IconLayers,
  IconClipboard,
  IconUsers,
} from '@/components/UXUIDC/Icons';

gsap.registerPlugin(ScrollTrigger);

// ========== FORM FIELD OPTIONS ==========
const modelCategoryOptions = [
  'Humanized Checkpoint Model',
  'Disease Model',
  'Reporter Model',
  'Cre Driver Line',
  'Knockout Model',
  'Knockin Model',
  'Double Checkpoint Model',
  'Other / Not Sure',
];

const strainOptions = [
  'C57BL/6 (standard)',
  'BALB/c',
  '129 strain',
  'Other',
  'As available',
];

const quantityOptions = [
  'Breeding pair (1 male + 1-2 females)',
  'Small cohort (5-10 mice)',
  'Medium cohort (10-25 mice)',
  'Large cohort (25+ mice)',
  'Cryopreserved (embryos/sperm)',
  'Custom quantity',
];

const urgencyOptions = [
  'Standard delivery',
  'Priority / Rush needed',
  'Flexible timeline',
];

const deliverableOptions = [
  'Live mice',
  'Cryopreserved embryos',
  'Cryopreserved sperm',
  'Not sure - need guidance',
];

const faqData = [
  {
    question: 'How do I find a specific model in your catalog?',
    answer: 'Use the search tool on this page or visit our Catalog Mouse Models page to browse by category. You can search by gene symbol, model name, or research application. If you cannot find what you need, contact us and we can help identify the right model or discuss custom options.',
  },
  {
    question: 'What is included with a catalog model order?',
    answer: 'Standard orders include genotyped, health-certified mice with full documentation including genotyping protocols, breeding recommendations, and research use guidelines. Colony management and expansion services are available if needed.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery time depends on current stock availability and whether models are available as live animals or require cryorecovery from frozen stock. Contact us for current availability and delivery estimates for specific models. Rush options may be available.',
  },
  {
    question: 'Can I get a model on a different genetic background?',
    answer: 'Yes, many catalog models can be backcrossed to alternate strain backgrounds. This requires additional time for breeding. Contact us for a quote on background conversion.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipments require appropriate import permits and health certifications. We work with experienced animal transport providers to ensure safe delivery.',
  },
  {
    question: 'What if I need modifications to a catalog model?',
    answer: 'We can often accommodate modifications to existing catalog models. For example, combining alleles, crossing to Cre lines, or adding reporters. Contact us to discuss your specific needs.',
  },
];

const alternativeContactData = [
  {
    title: 'Custom Model Quote',
    content: 'Need a model not in our catalog?',
    href: '/request-quote',
    label: 'Request Quote',
  },
  {
    title: 'Browse Full Catalog',
    content: 'Search 10,000+ available models',
    href: '/all-catalog-mouse-models',
    label: 'View Catalog',
  },
  {
    title: 'Talk to a Scientist',
    content: 'Get expert guidance on model selection',
    href: '/contact',
    label: 'Contact Us',
  },
];

// Verified testimonials from master data - https://www.genetargeting.com/testimonials
import { getTestimonialById, formatAuthorWithCredentials } from '@/data/verifiedTestimonials';

const francoTestimonial = getTestimonialById('franco-colorado')!;

const testimonials = [
  { quote: francoTestimonial.quote, name: formatAuthorWithCredentials(francoTestimonial), affiliation: francoTestimonial.affiliation },
];

// ========== PAGE COMPONENT ==========

export default function OrderInquiryCatalogModelsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showCatalogSearch, setShowCatalogSearch] = useState(false);

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
    
    const catalogOrderData = {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      institution: formData.get('institution') as string || '',
      modelName: formData.get('model-name') as string || '',
      modelNumber: formData.get('model-number') as string || '',
      geneSymbol: formData.get('gene-symbol') as string || '',
      modelCategory: formData.get('model-category') as string || '',
      strainBackground: formData.get('strain-background') as string || '',
      quantity: formData.get('quantity') as string || '',
      deliverable: formData.get('deliverable') as string || '',
      urgency: formData.get('urgency') as string || '',
      additionalNotes: formData.get('additional-notes') as string || '',
      preferredContact: formData.get('preferred-contact') as string || '',
      requestType: 'catalog-model',
    };

    try {
      const response = await fetch('/api/send-catalog-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(catalogOrderData),
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
              <IconLayers size={14} color="#00d4d4" />
              <span style={{ color: '#00d4d4', fontSize: '.75rem', fontWeight: 500 }}>
                10,000+ Models Available
              </span>
            </div>
            <h1
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '12px',
                lineHeight: 1.2,
              }}
            >
              Request a Catalog Model
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'var(--system-ui)',
                fontSize: '.875rem',
                fontWeight: 400,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Order from our extensive catalog of humanized, knockout, knockin, and reporter mouse models
            </p>
          </div>

          {/* Two Column Layout: Form + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* ===== MAIN FORM ===== */}
            <div className="lg:col-span-2 flex">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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

                {/* Model Information Row */}
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '12px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <span style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>
                      Model Information
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowCatalogSearch(!showCatalogSearch)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #e5e7eb',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        fontSize: '.75rem',
                        color: '#008080',
                        fontWeight: 500,
                      }}
                    >
                      <IconSearch size={12} />
                      {showCatalogSearch ? 'Hide Search' : 'Search Catalog'}
                    </button>
                  </div>
                  
                  {/* Expandable Catalog Search */}
                  {showCatalogSearch && (
                    <div style={{ marginBottom: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                      <CatalogSearch maxResults={5} showTitle={false} />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div>
                      <label style={labelStyle}>Model Name / Description *</label>
                      <input type="text" name="model-name" required style={inputStyle} placeholder="e.g., hPD-1 Humanized Mouse" />
                    </div>
                    <div>
                      <label style={labelStyle}>Model/Stock Number</label>
                      <input type="text" name="model-number" style={inputStyle} placeholder="If known (e.g., ITL-001)" />
                    </div>
                    <div>
                      <label style={labelStyle}>Gene Symbol</label>
                      <input type="text" name="gene-symbol" style={inputStyle} placeholder="e.g., Pdcd1, Cd274" />
                    </div>
                  </div>
                </div>

                {/* Order Specifications Row */}
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
                      Order Specifications
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div>
                      <label style={labelStyle}>Model Category</label>
                      <select name="model-category" style={selectStyle}>
                        <option value="">Select category...</option>
                        {modelCategoryOptions.map((opt) => (
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
                      <label style={labelStyle}>Quantity Needed</label>
                      <select name="quantity" style={selectStyle}>
                        <option value="">Select quantity...</option>
                        {quantityOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Deliverable Type</label>
                      <select name="deliverable" style={selectStyle}>
                        <option value="">Select type...</option>
                        {deliverableOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Timeline / Urgency</label>
                      <select name="urgency" style={selectStyle}>
                        <option value="">Select timeline...</option>
                        {urgencyOptions.map((opt) => (
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
                    placeholder="Research application, specific genotype requirements, shipping preferences, or questions..."
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p style={{ color: '#6b7280', fontSize: '.75rem', fontFamily: 'var(--system-ui)' }}>
                    * Required fields. We&apos;ll respond within 1-2 business days.
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
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                    {!isSubmitting && <IconArrowRight size={16} />}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#ecfdf5', borderRadius: '6px', border: '1px solid #10b981' }}>
                    <p style={{ color: '#065f46', fontSize: '.875rem', fontFamily: 'var(--system-ui)' }}>
                      Thank you! Your catalog model inquiry has been submitted. Our team will contact you within 1-2 business days with availability and pricing.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#fef2f2', borderRadius: '6px', border: '1px solid #ef4444' }}>
                    <p style={{ color: '#991b1b', fontSize: '.875rem', fontFamily: 'var(--system-ui)' }}>
                      There was an error submitting your request. Please try again or contact us directly at inquiry@genetargeting.com.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              {/* Order Process */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  flex: 1,
                }}
              >
                <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '.95rem', fontWeight: 600, marginBottom: '12px' }}>
                  What&apos;s Included
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {[
                    'Genotyped, health-certified animals',
                    'Complete documentation package',
                    'Genotyping protocols & primers',
                    'Breeding recommendations',
                    'Technical support included',
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

              {/* Order Timeline */}
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
                  Order Process
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { step: '1', label: '1-2 Days', desc: 'Availability check & pricing' },
                    { step: '2', label: 'Confirm', desc: 'MTA/order confirmation' },
                    { step: '3', label: 'Delivery', desc: 'Preparation & shipping' },
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
                    { num: '10,000+', label: 'Models' },
                    { num: '25+', label: 'Years' },
                    { num: 'Global', label: 'Shipping' },
                    { num: '100%', label: 'QC Tested' },
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

              {/* Need Custom? */}
              <Link
                href="/request-quote"
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
                    <IconMouse size={18} color="white" />
                  </div>
                  <div>
                    <p style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '.85rem', fontWeight: 600, margin: 0 }}>
                      Need a Custom Model?
                    </p>
                    <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                      Request a custom project quote →
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== POPULAR CATEGORIES ========== */}
      <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            Popular Model Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Humanized Checkpoint', href: '/humanized-immune-checkpoint-mice', icon: IconUsers },
              { label: 'Disease Models', href: '/disease-model-catalog', icon: IconClipboard },
              { label: 'Double Checkpoint', href: '/double-checkpoint-mice', icon: IconLayers },
              { label: 'All Catalog Models', href: '/all-catalog-mouse-models', icon: IconSearch },
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={i}
                  href={cat.href}
                  className="animate-in flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '24px 16px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#0a253c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} color="#00d4d4" />
                  </div>
                  <span
                    style={{
                      color: '#333',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {cat.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <UXUIDCAnimatedFAQ title="Frequently Asked Questions" faqs={faqData} backgroundColor="#f8fafc" />

      {/* ========== ALTERNATIVE CONTACT OPTIONS ========== */}
      <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
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
              const icons = [IconPackage, IconSearch, IconMessageCircle];
              const Icon = icons[i];
              return (
                <Link
                  key={i}
                  href={option.href}
                  className="animate-in flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: '#f8fafc',
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

      {/* ========== TESTIMONIALS ========== */}
      <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="animate-in" style={{ textAlign: 'center', color: '#ffffff', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>What Researchers Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '30px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
                <IconQuote size={24} color="#008080" style={{ marginBottom: '15px' }} />
                <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Lato, sans-serif', fontSize: '.9rem', fontWeight: 400, lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600, marginBottom: '5px' }}>— {testimonial.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Lato, sans-serif', fontSize: '.8rem', fontWeight: 400 }}>{testimonial.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section style={{ backgroundColor: '#008080', padding: '40px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '12px',
            }}
          >
            Can&apos;t Find What You Need?
          </h2>
          <p
            style={{
              fontSize: '.9rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '20px',
            }}
          >
            Our team can help you find the right model or create a custom solution tailored to your research.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#008080',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Contact Us
              <IconArrowRight size={16} color="#008080" />
            </Link>
            <Link
              href="/request-quote"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.5)',
              }}
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <UXUIDCFooter />
    </main>
  );
}
