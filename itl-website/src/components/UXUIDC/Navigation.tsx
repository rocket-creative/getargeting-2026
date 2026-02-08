/**
 * |UXUIDC| Navigation Component - Editorial Design
 * @version 3.0.0
 * Clean, minimal navigation following magazine-style presentation
 * Square buttons with arrows, proper typography hierarchy
 */

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from '@/lib/UXUIDC/gsap';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  categorizedChildren?: {
    categories: {
      title: string;
      items: NavItem[];
    }[];
  };
}

// Navigation Structure - Streamlined February 2026
const navigationItems: NavItem[] = [
  {
    label: 'Custom Models',
    href: '/custom-mouse-models',
    categorizedChildren: {
      categories: [
        {
          title: 'Knockout',
          items: [
            { label: 'Knockout Overview', href: '/knockout-mouse-models' },
            { label: 'Conventional Knockout', href: '/conventional-knockout-mouse-models' },
            { label: 'Conditional Knockout', href: '/conditional-knockout-mouse-models' },
            { label: 'Tissue Specific', href: '/tissue-specific-knockout' },
            { label: 'Inducible Knockout', href: '/inducible-conditional-knockout' },
          ],
        },
        {
          title: 'Knockin',
          items: [
            { label: 'Knockin Overview', href: '/knockin-mouse-models' },
            { label: 'cDNA Knockin', href: '/cdna-knockin' },
            { label: 'Point Mutation', href: '/point-mutation-mice' },
            { label: 'Reporter Knockin', href: '/reporter-knockin' },
            { label: 'Tag Knockin', href: '/tag-knockin-mice' },
            { label: 'Conditional Knockin', href: '/conditional-knockin-mice' },
          ],
        },
        {
          title: 'Other Species',
          items: [
            { label: 'Humanized Mice', href: '/humanized-mouse-models' },
            { label: 'Transgenic Mice', href: '/transgenic-mouse-service' },
            { label: 'Gene Replacement', href: '/gene-replacement' },
            { label: 'Knockout Rats', href: '/knockout-rat-models' },
            { label: 'Knockin Rats', href: '/knockin-rat-models' },
            { label: 'Custom Rabbits', href: '/custom-rabbit-models' },
          ],
        },
      ],
    },
  },
  {
    label: 'Catalog',
    href: '/catalog-mouse-models',
    categorizedChildren: {
      categories: [
        {
          title: 'Checkpoint Models',
          items: [
            { label: 'All Checkpoint Models', href: '/humanized-immune-checkpoint-mice' },
            { label: 'PD1 Humanized', href: '/pd1-humanized-mice' },
            { label: 'PDL1 Humanized', href: '/pdl1-humanized-mice' },
            { label: 'CTLA4 Humanized', href: '/ctla4-humanized-mice' },
            { label: 'LAG3 Humanized', href: '/lag3-humanized-mice' },
            { label: 'TIM3 Humanized', href: '/tim3-humanized-mice' },
          ],
        },
        {
          title: 'Disease Models',
          items: [
            { label: 'All Catalog Models', href: '/all-catalog-mouse-models' },
            { label: 'Disease Catalog', href: '/disease-model-catalog' },
            { label: 'Syngeneic Tumors', href: '/syngeneic-tumor-models' },
          ],
        },
      ],
    },
  },
  {
    label: 'Therapeutic Areas',
    href: '/therapeutic-areas',
    categorizedChildren: {
      categories: [
        {
          title: 'Oncology',
          items: [
            { label: 'Oncology', href: '/oncology-mouse-models' },
            { label: 'Immuno Oncology', href: '/immuno-oncology-mouse-models' },
          ],
        },
        {
          title: 'Neuroscience',
          items: [
            { label: 'Neuroscience', href: '/neuroscience-mouse-models' },
            { label: "Alzheimer's", href: '/alzheimers-mouse-models' },
            { label: "Parkinson's", href: '/parkinsons-mouse-models' },
            { label: 'ALS', href: '/als-mouse-models' },
          ],
        },
        {
          title: 'Cardiovascular',
          items: [
            { label: 'Cardiovascular', href: '/cardiovascular-mouse-models' },
            { label: 'Heart Failure', href: '/heart-failure-mouse-models' },
          ],
        },
        {
          title: 'Immunology',
          items: [
            { label: 'Immunology', href: '/immunology-mouse-models' },
            { label: 'Autoimmune', href: '/autoimmune-disease-mice' },
            { label: 'Lupus', href: '/lupus-mouse-models' },
            { label: 'IBD', href: '/ibd-mouse-models' },
          ],
        },
        {
          title: 'Metabolic',
          items: [
            { label: 'Metabolic Disease', href: '/metabolic-disease-mouse-models' },
            { label: 'Diabetes', href: '/diabetes-mouse-models' },
            { label: 'NASH/MASH', href: '/nash-mash-mouse-models' },
          ],
        },
        {
          title: 'Other',
          items: [
            { label: 'Rare Disease', href: '/rare-disease-mouse-models' },
            { label: 'Ophthalmology', href: '/ophthalmology-mouse-models' },
          ],
        },
      ],
    },
  },
  {
    label: 'Technology',
    href: '/technologies',
    categorizedChildren: {
      categories: [
        {
          title: 'Core Systems',
          items: [
            { label: 'Technology Overview', href: '/technology-overview' },
            { label: 'Cre Lox System', href: '/cre-lox-system' },
            { label: 'Flp Frt System', href: '/flp-frt-system' },
            { label: 'Rosa26 Targeting', href: '/rosa26' },
            { label: 'Inducible Expression', href: '/inducible-gene-expression' },
            { label: 'BAC to BAC Targeting', href: '/bac-to-bac-large-scale-targeting' },
          ],
        },
        {
          title: 'Planning Guides',
          items: [
            { label: 'Cre Line Selection', href: '/cre-line-selection-guide' },
            { label: 'Conditional vs Conventional', href: '/conditional-vs-conventional-guide' },
            { label: 'Critical Exon Selection', href: '/critical-exon-selection' },
            { label: 'LoxP Site Design', href: '/loxp-site-design' },
          ],
        },
      ],
    },
  },
  {
    label: 'Services',
    href: '/mouse-model-services',
    categorizedChildren: {
      categories: [
        {
          title: 'Model Creation',
          items: [
            { label: 'Custom Projects', href: '/custom-projects' },
            { label: 'Support Services', href: '/support-services' },
            { label: 'Post Project Services', href: '/post-project-services' },
          ],
        },
        {
          title: 'Colony Management',
          items: [
            { label: 'Colony Management', href: '/colony-management-services' },
            { label: 'Cryopreservation', href: '/cryopreservation-services' },
            { label: 'Rederivation', href: '/rederivation-services' },
            { label: 'Speed Breeding', href: '/speed-expansion-breeding' },
          ],
        },
        {
          title: 'Analysis',
          items: [
            { label: 'Preclinical Services', href: '/preclinical-services' },
            { label: 'Phenotyping', href: '/phenotyping-services' },
            { label: 'Genotyping', href: '/mouse-genotyping-service' },
          ],
        },
      ],
    },
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Lab Signals Newsletter', href: '/lab-signals' },
      { label: 'Ingenious Blog', href: '/ingenious-blog' },
      { label: 'Breeding Architect', href: '/breeding-scheme-architect' },
      { label: 'Model Generation Guide', href: '/mouse-model-generation-guide' },
      { label: 'Strain Backgrounds', href: '/mouse-strain-backgrounds' },
      { label: 'Video Library', href: '/video-library' },
    ],
  },
  {
    label: 'About',
    href: '/about-itl',
    children: [
      { label: 'Why Choose Us', href: '/why-choose-itl' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Careers', href: '/current-openings' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'General Contact', href: '/general-contact' },
      { label: 'Request Quote', href: '/request-quote' },
      { label: 'Schedule Meeting', href: '/schedule-meeting' },
    ],
  },
];

export function UXUIDCNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Stable close handler
  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (activeDropdown && navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [activeDropdown]);

  // Page load animation
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, itemLabel: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveDropdown(itemLabel);
        setTimeout(() => {
          const dropdown = dropdownRefs.current[itemLabel];
          const firstLink = dropdown?.querySelector('a');
          firstLink?.focus();
        }, 0);
      }
    }
  };

  return (
    <>
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:z-[100] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#134978]"
      >
        Skip to main content
      </a>

      <nav ref={navRef} className="w-full z-50 sticky top-0 bg-white" aria-label="Main navigation">
        {/* Single Row: Logo left, Nav center, CTAs right */}
        <div className="border-b border-[#e0e0e0]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center h-16 px-5">
              
              {/* Logo */}
              <Link href="/" className="shrink-0" aria-label="Home">
                <Image
                  src="/images/logo.png"
                  alt="ingenious targeting laboratory"
                  width={200}
                  height={48}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation - Center */}
              <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                <div className="flex items-center gap-1">
                  {navigationItems.map((item) => {
                    const hasDropdown = !!(item.children || item.categorizedChildren);
                    const isDropdownOpen = activeDropdown === item.label;
                    
                    return (
                      <div
                        key={item.href}
                        className="relative"
                        onMouseEnter={() => {
                          cancelClose();
                          if (hasDropdown) setActiveDropdown(item.label);
                        }}
                        onMouseLeave={closeDropdown}
                      >
                        <Link
                          href={item.href}
                          className={`
                            flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide
                            transition-colors duration-200
                            focus:outline-none focus:ring-2 focus:ring-[#134978] focus:ring-offset-1
                            ${isDropdownOpen ? 'text-[#134978]' : 'text-[#444] hover:text-[#134978]'}
                          `}
                          style={{ fontFamily: 'var(--system-ui)', fontWeight: 500 }}
                          aria-expanded={hasDropdown ? isDropdownOpen : undefined}
                          aria-haspopup={hasDropdown ? 'true' : undefined}
                          onKeyDown={(e) => handleKeyDown(e, item.label, hasDropdown)}
                        >
                          {item.label}
                          {hasDropdown && (
                            <svg 
                              className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </Link>

                        {/* Mega Menu Dropdown */}
                        {item.categorizedChildren && isDropdownOpen && (
                          <div 
                            ref={(el) => { dropdownRefs.current[item.label] = el; }}
                            className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl border border-[#e0e0e0] z-50 mt-0"
                            role="menu"
                            aria-label={`${item.label} menu`}
                            onMouseEnter={cancelClose}
                            onMouseLeave={closeDropdown}
                            style={{
                              minWidth: '520px',
                              maxWidth: '720px',
                            }}
                          >
                            {/* Dropdown header */}
                            <div className="bg-[#f7f7f7] px-5 py-3 border-b border-[#e0e0e0]">
                              <Link 
                                href={item.href}
                                className="text-[#134978] text-sm font-semibold hover:underline"
                                style={{ fontFamily: 'var(--system-ui)' }}
                              >
                                View All {item.label} →
                              </Link>
                            </div>
                            
                            {/* Categories grid */}
                            <div 
                              className="p-5"
                              style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${Math.min(item.categorizedChildren.categories.length, 3)}, 1fr)`,
                                gap: '24px',
                              }}
                            >
                              {item.categorizedChildren.categories.map((category, idx) => (
                                <div key={idx} role="group" aria-labelledby={`${item.label}-${idx}-heading`}>
                                  <div 
                                    id={`${item.label}-${idx}-heading`}
                                    className="text-[#0a253c] uppercase tracking-wider mb-3 pb-2 border-b border-[#e0e0e0]"
                                    style={{ 
                                      fontFamily: 'var(--system-ui)',
                                      fontSize: '10px',
                                      fontWeight: 700,
                                      letterSpacing: '1.2px'
                                    }}
                                  >
                                    {category.title}
                                  </div>
                                  <div className="flex flex-col gap-0.5">
                                    {category.items.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        role="menuitem"
                                        className="text-[#666] hover:text-[#134978] hover:bg-[#f7f7f7] transition-colors duration-150 py-1.5 px-2 -mx-2 focus:outline-none focus:ring-2 focus:ring-[#134978] focus:bg-[#f7f7f7]"
                                        style={{ 
                                          fontFamily: 'var(--system-ui)',
                                          fontSize: '13px',
                                          fontWeight: 400
                                        }}
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Simple Dropdown */}
                        {item.children && !item.categorizedChildren && isDropdownOpen && (
                          <div 
                            ref={(el) => { dropdownRefs.current[item.label] = el; }}
                            className="absolute top-full left-0 bg-white shadow-xl border border-[#e0e0e0] z-50 mt-0 min-w-[200px]"
                            role="menu"
                            aria-label={`${item.label} menu`}
                            onMouseEnter={cancelClose}
                            onMouseLeave={closeDropdown}
                          >
                            <div className="py-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  role="menuitem"
                                  className="block text-[#666] hover:text-[#134978] hover:bg-[#f7f7f7] transition-colors duration-150 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#134978] focus:bg-[#f7f7f7]"
                                  style={{ 
                                    fontFamily: 'var(--system-ui)',
                                    fontSize: '13px',
                                    fontWeight: 400
                                  }}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right side: Search + CTAs */}
              <div className="hidden lg:flex items-center gap-3 shrink-0">
                {/* Search Icon Button */}
                <Link
                  href="/search"
                  className="p-2 text-[#666] hover:text-[#134978] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#134978]"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Link>

                {/* Request Quote - Square button with arrow */}
                <Link 
                  href="/request-quote"
                  className="group flex items-center gap-2 bg-[#134978] text-white px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#0a253c] focus:outline-none focus:ring-2 focus:ring-[#134978] focus:ring-offset-2"
                  style={{ fontFamily: 'var(--system-ui)', fontWeight: 500 }}
                >
                  <span>GET QUOTE</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#333] ml-auto focus:outline-none focus:ring-2 focus:ring-[#134978] focus:ring-offset-2"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between" aria-hidden="true">
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Announcement Bar */}
        <div className="bg-[#008080] py-2 px-5">
          <p className="text-white text-center text-xs max-w-[1200px] mx-auto" style={{ fontFamily: 'var(--system-ui)', fontWeight: 400 }}>
            Uncertain NIH funding holding you back? We offer flexible payment options to start your project now.
            <Link href="/start-your-project" className="underline ml-2 hover:no-underline">Learn more →</Link>
          </p>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-[#e0e0e0] shadow-lg" role="dialog" aria-label="Mobile navigation menu">
            <div className="max-w-[1200px] mx-auto py-4 px-5">
              {/* Mobile Search */}
              <form action="/search" method="get" role="search" className="mb-4">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <div className="relative">
                  <input
                    id="mobile-search"
                    type="search"
                    name="q"
                    placeholder="Search models, services..."
                    className="w-full px-4 py-3 pr-10 border border-[#e0e0e0] text-sm focus:outline-none focus:ring-2 focus:ring-[#134978] focus:border-[#134978]"
                    style={{ fontFamily: 'var(--system-ui)' }}
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>

              <nav aria-label="Mobile menu">
                <ul className="divide-y divide-[#e0e0e0]">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-[#333] text-sm hover:text-[#134978] focus:outline-none focus:text-[#134978]"
                        style={{ fontFamily: 'var(--system-ui)', fontWeight: 500 }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <Link
                href="/request-quote"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center gap-2 mt-4 bg-[#134978] text-white py-3 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#0a253c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#134978]"
                style={{ fontFamily: 'var(--system-ui)', fontWeight: 500 }}
              >
                <span>GET A QUOTE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default UXUIDCNavigation;
