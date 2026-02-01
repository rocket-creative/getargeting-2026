'use client';

/**
 * General Contact Page - ingenious targeting laboratory
 * Embeds HubSpot contact form
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
  IconMapPin,
  IconClock,
  IconCalendar,
  IconFileText,
  IconCheckCircle,
} from '@/components/UXUIDC/Icons';

// Contact information
const contactInfo = {
  email: 'inquiry@genetargeting.com',
  phone: '+1 (631) 468-8534',
  hours: 'Monday - Friday, 9 AM - 5 PM ET',
  address: 'ingenious targeting laboratory\n761-80 Coates Avenue\nHolbrook, NY 11741',
};

export default function GeneralContactPage() {
  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-expect-error - HubSpot global object
      if (window.hbspt) {
        // @ts-expect-error - HubSpot forms API
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '242707', // ITL's HubSpot portal ID
          formId: 'REPLACE_WITH_CONTACT_FORM_ID', // Replace with actual form ID
          target: '#hubspot-form-container',
        });
      }
    };

    return () => {
      // Cleanup if needed
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
          <h1
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '12px',
            }}
          >
            Contact Us
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
            Have a question or need assistance? Fill out the form below and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <h2
                  style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                  }}
                >
                  Send Us a Message
                </h2>
                
                {/* HubSpot Form Container */}
                <div 
                  id="hubspot-form-container" 
                  style={{ minHeight: '400px' }}
                >
                  {/* HubSpot form will be injected here */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '300px',
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                  }}>
                    Loading contact form...
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-5">
              {/* Contact Info Card */}
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
                  Contact Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <IconMail size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Email</p>
                      <a href={`mailto:${contactInfo.email}`} style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', textDecoration: 'none' }}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <IconPhone size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Phone</p>
                      <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', textDecoration: 'none' }}>
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <IconClock size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Hours</p>
                      <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <IconMapPin size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Address</p>
                      <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', margin: 0, whiteSpace: 'pre-line' }}>
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
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
                    href="/schedule-meeting"
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
                    <IconCalendar size={18} color="#008080" />
                    <div>
                      <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'Poppins, sans-serif', fontWeight: 500, margin: 0 }}>
                        Schedule a Meeting
                      </p>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                        Book a consultation
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Response Time Card */}
              <div
                style={{
                  backgroundColor: '#0a253c',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <IconCheckCircle size={20} color="#00d4d4" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ color: 'white', fontSize: '.9rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, margin: '0 0 4px 0' }}>
                      Fast Response
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.8rem', fontFamily: 'var(--system-ui)', margin: 0, lineHeight: '1.4' }}>
                      We typically respond to inquiries within 1 business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UXUIDCFooter />
    </main>
  );
}
