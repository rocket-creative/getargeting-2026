/**
 * |UXUIDC| Footer - Dark grey background with white text
 * @version 2.2.0
 * Fixed padding/margin, all text white
 */

import Link from 'next/link';
import Image from 'next/image';

const footerSections = [
  {
    title: 'Custom Models',
    links: [
      { label: 'Knockout Models', href: '/knockout-mouse-models' },
      { label: 'Conditional Knockout', href: '/conditional-knockout-mouse-models' },
      { label: 'Knockin Models', href: '/knockin-mouse-models' },
      { label: 'Humanized Models', href: '/humanized-mouse-models' },
      { label: 'Transgenic Service', href: '/transgenic-mouse-service' },
      { label: 'Catalog Models', href: '/all-catalog-mouse-models' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Colony Management', href: '/colony-management-services' },
      { label: 'Cryopreservation', href: '/cryopreservation-services' },
      { label: 'Genotyping', href: '/mouse-genotyping-service' },
      { label: 'Preclinical Services', href: '/preclinical-services' },
    ],
  },
  {
    title: 'Disease Areas',
    links: [
      { label: 'Oncology', href: '/oncology-mouse-models' },
      { label: 'Neuroscience', href: '/neuroscience-mouse-models' },
      { label: 'Cardiovascular', href: '/cardiovascular-mouse-models' },
      { label: 'Immunology', href: '/immunology-mouse-models' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About ITL', href: '/about-itl' },
      { label: 'Why Choose ITL', href: '/why-choose-itl' },
      { label: 'Lab Signals Newsletter', href: '/lab-signals' },
      { label: 'Ingenious Blog', href: '/ingenious-blog' },
      { label: 'Publications', href: '/publications' },
      { label: 'Resources', href: '/resources' },
      { label: 'Breeding Scheme Architect', href: '/breeding-scheme-architect' },
      { label: 'Request Quote', href: '/request-quote' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function UXUIDCFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      role="contentinfo"
      style={{ 
        backgroundColor: '#666',
        color: 'white',
        padding: '40px 20px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-8">
          {/* Logo & Contact */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="ingenious targeting laboratory"
                width={150}
                height={36}
                className="brightness-0 invert"
              />
            </Link>
            <div style={{ fontSize: '.9rem', lineHeight: '1.5', color: 'white' }}>
              <p style={{ margin: '0 0 5px 0' }}>2200 Smithtown Avenue</p>
              <p style={{ margin: '0 0 10px 0' }}>Ronkonkoma, NY 11779</p>
              <p style={{ margin: '0 0 5px 0' }}>
                <a href="tel:+16315244447" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">(631) 524-4447</a>
              </p>
              <p style={{ margin: 0 }}>
                <a href="mailto:info@genetargeting.com" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">info@genetargeting.com</a>
              </p>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 style={{ 
                color: 'white', 
                fontWeight: 600, 
                fontSize: '.9rem', 
                marginBottom: '12px',
                marginTop: 0
              }}>
                {section.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.href} style={{ marginBottom: '8px' }}>
                    <Link 
                      href={link.href} 
                      style={{ color: 'white', textDecoration: 'none', fontSize: '.85rem' }}
                      className="hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '20px', fontSize: '.85rem' }}>
            <Link href="/privacy" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Terms of Service</Link>
            <Link href="/accessibility" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Accessibility</Link>
          </div>
          <p style={{ margin: 0, fontSize: '.85rem', color: 'white' }}>
            © {currentYear} ingenious targeting laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default UXUIDCFooter;
