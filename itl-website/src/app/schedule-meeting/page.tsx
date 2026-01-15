'use client';

/**
 * Schedule Meeting Page - Ingenious Targeting Laboratory
 * Embeds HubSpot meetings scheduler
 */

import { useEffect } from 'react';
import Link from 'next/link';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
} from '@/components/UXUIDC';
import {
  IconPhone,
  IconMail,
  IconCheckCircle,
  IconFileText,
  IconMessageCircle,
  IconUsers,
  IconClock,
} from '@/components/UXUIDC/Icons';

// Meeting benefits
const meetingBenefits = [
  'Review your targeting strategy options',
  'Discuss allele design considerations',
  'Understand project timeline & deliverables',
  'Get answers to technical questions',
  'Receive personalized recommendations',
];

// Contact info
const contactInfo = {
  email: 'inquiry@genetargeting.com',
  phone: '+1 (631) 468-8530',
};

export default function ScheduleMeetingPage() {
  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-ignore - HubSpot global
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '242707', // ITL's HubSpot portal ID
          formId: 'REPLACE_WITH_MEETING_FORM_ID', // Replace with actual meeting form ID
          target: '#hubspot-meeting-form',
        });
      }
    };

    return () => {
      const existingScript = document.querySelector('script[src*="hsforms"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <UXUIDCNavigation />

      {/* Header Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
          padding: '70px 20px 50px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
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
            <IconUsers size={14} color="#00d4d4" />
            <span style={{ color: '#00d4d4', fontSize: '.75rem', fontWeight: 500 }}>
              Free Scientific Consultation
            </span>
          </div>
          <h1
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '12px',
            }}
          >
            Schedule a Meeting
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'var(--system-ui)',
              fontSize: '.95rem',
              fontWeight: 400,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Book a consultation with our scientific team to discuss your mouse model project requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Meeting Scheduler Column */}
            <div className="lg:col-span-2">
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  minHeight: '600px',
                }}
              >
                <h2
                  style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  Schedule Your Consultation
                </h2>
                <p
                  style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    marginBottom: '24px',
                    lineHeight: '1.5',
                  }}
                >
                  Fill in your details below and one of our scientific strategy consultants will reach out to schedule a time that works for you.
                </p>
                
                {/* HubSpot Form Container */}
                <div 
                  id="hubspot-meeting-form"
                  style={{ minHeight: '400px' }}
                >
                  {/* HubSpot form will be injected here */}
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '300px',
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    textAlign: 'center',
                    padding: '20px',
                  }}>
                    <IconClock size={40} color="#d1d5db" style={{ marginBottom: '16px' }} />
                    <p style={{ fontSize: '.9rem', marginBottom: '8px' }}>Loading consultation form...</p>
                    <p style={{ fontSize: '.8rem', color: '#999' }}>
                      Having trouble? Email us at{' '}
                      <a 
                        href="mailto:inquiry@genetargeting.com"
                        style={{ color: '#008080', textDecoration: 'underline' }}
                      >
                        inquiry@genetargeting.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-5">
              {/* What to Expect Card */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <h3
                  style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  What We&apos;ll Discuss
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {meetingBenefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <IconCheckCircle size={16} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#4b5563', fontSize: '.85rem', fontFamily: 'var(--system-ui)', lineHeight: '1.4' }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meeting Info Card */}
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid #86efac',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <IconCheckCircle size={20} color="#16a34a" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ color: '#166534', fontSize: '.9rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, margin: '0 0 4px 0' }}>
                      No Obligation
                    </p>
                    <p style={{ color: '#15803d', fontSize: '.8rem', fontFamily: 'var(--system-ui)', margin: 0, lineHeight: '1.4' }}>
                      Consultations are complimentary. Get expert advice with no commitment required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Card */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <h3
                  style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Prefer Another Way?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: '#0a253c',
                      textDecoration: 'none',
                      fontSize: '.85rem',
                      fontFamily: 'var(--system-ui)',
                    }}
                  >
                    <IconMail size={16} color="#008080" />
                    {contactInfo.email}
                  </a>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: '#0a253c',
                      textDecoration: 'none',
                      fontSize: '.85rem',
                      fontFamily: 'var(--system-ui)',
                    }}
                  >
                    <IconPhone size={16} color="#008080" />
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Quick Links Card */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <h3
                  style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Quick Links
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Link
                    href="/request-quote"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    className="hover:bg-gray-100"
                  >
                    <IconFileText size={18} color="#008080" />
                    <div>
                      <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'Poppins, sans-serif', fontWeight: 500, margin: 0 }}>
                        Request a Quote
                      </p>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                        Get project pricing
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/general-contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    className="hover:bg-gray-100"
                  >
                    <IconMessageCircle size={18} color="#008080" />
                    <div>
                      <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'Poppins, sans-serif', fontWeight: 500, margin: 0 }}>
                        Contact Form
                      </p>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                        Send us a message
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Trust Badge */}
              <div
                style={{
                  backgroundColor: '#0a253c',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, margin: '0 0 4px 0' }}>
                  25+
                </p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.8rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                  Years of Experience
                </p>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#008080', margin: '12px auto' }} />
                <p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, margin: '0 0 4px 0' }}>
                  2,500+
                </p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.8rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UXUIDCFooter />
    </main>
  );
}
