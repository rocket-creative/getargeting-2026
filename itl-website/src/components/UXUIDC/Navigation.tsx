/**
 * |UXUIDC| Navigation Component - Matches Screenshot Exactly
 * @version 2.1.0
 * Layout: Logo | Search (teal) | Nav Items | Start an Order | Start Your Project (grey)
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from '@/lib/UXUIDC/gsap';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Complete Navigation Structure - Updated January 2026
const navigationItems: NavItem[] = [
  {
    label: 'Custom Models',
    href: '/custom-mouse-models',
    children: [
      { label: 'Knockout Mouse Models', href: '/knockout-mouse-models' },
      { label: 'Conditional Knockout', href: '/conditional-knockout-mouse-models' },
      { label: 'Conventional Knockout', href: '/conventional-knockout-mouse-models' },
      { label: 'Tissue-Specific Knockout', href: '/tissue-specific-knockout' },
      { label: 'Inducible Conditional Knockout', href: '/inducible-conditional-knockout' },
      { label: 'Knockin Mouse Models', href: '/knockin-mouse-models' },
      { label: 'Point Mutation Mice', href: '/point-mutation-mice' },
      { label: 'Reporter Knockin', href: '/reporter-knockin' },
      { label: 'Tag Knockin Mice', href: '/tag-knockin-mice' },
      { label: 'Conditional Knockin Mice', href: '/conditional-knockin-mice' },
      { label: 'Humanized Mouse Models', href: '/humanized-mouse-models' },
      { label: 'Gene Replacement', href: '/gene-replacement' },
      { label: 'Transgenic Mouse Service', href: '/transgenic-mouse-service' },
      { label: 'cDNA Knockin', href: '/cdna-knockin' },
      { label: 'Rat Models', href: '/rat-models' },
      { label: 'Custom Animal Models', href: '/custom-animal-models' },
    ],
  },
  {
    label: 'Catalog Models',
    href: '/catalog-mouse-models',
    children: [
      { label: 'All Catalog Models', href: '/all-catalog-mouse-models' },
      { label: 'Disease Model Catalog', href: '/disease-model-catalog' },
      { label: 'Humanized Immune Checkpoint', href: '/humanized-immune-checkpoint-mice' },
      { label: 'PD1 Humanized Mice', href: '/pd1-humanized-mice' },
      { label: 'PDL1 Humanized Mice', href: '/pdl1-humanized-mice' },
      { label: 'CTLA4 Humanized Mice', href: '/ctla4-humanized-mice' },
      { label: 'LAG3 Humanized Mice', href: '/lag3-humanized-mice' },
      { label: 'TIM3 Humanized Mice', href: '/tim3-humanized-mice' },
      { label: 'Single Checkpoint Mice', href: '/single-checkpoint-mice' },
      { label: 'Double Checkpoint Mice', href: '/double-checkpoint-mice' },
      { label: 'Syngeneic Tumor Models', href: '/syngeneic-tumor-models' },
    ],
  },
  {
    label: 'Therapeutic Areas',
    href: '/therapeutic-areas',
    children: [
      { label: 'Oncology', href: '/oncology-mouse-models' },
      { label: 'Immuno-Oncology', href: '/immuno-oncology-mouse-models' },
      { label: 'Neuroscience', href: '/neuroscience-mouse-models' },
      { label: "Alzheimer's", href: '/alzheimers-mouse-models' },
      { label: "Parkinson's", href: '/parkinsons-mouse-models' },
      { label: 'ALS', href: '/als-mouse-models' },
      { label: 'Cardiovascular', href: '/cardiovascular-mouse-models' },
      { label: 'Heart Failure', href: '/heart-failure-mouse-models' },
      { label: 'Immunology', href: '/immunology-mouse-models' },
      { label: 'Autoimmune Disease', href: '/autoimmune-disease-mice' },
      { label: 'Lupus', href: '/lupus-mouse-models' },
      { label: 'IBD', href: '/ibd-mouse-models' },
      { label: 'Metabolic Disease', href: '/metabolic-disease-mouse-models' },
      { label: 'Diabetes', href: '/diabetes-mouse-models' },
      { label: 'NASH/MASH', href: '/nash-mash-mouse-models' },
      { label: 'Rare Disease', href: '/rare-disease-mouse-models' },
      { label: 'Ophthalmology', href: '/ophthalmology-mouse-models' },
    ],
  },
  {
    label: 'Technology',
    href: '/technologies',
    children: [
      { label: 'Technology Overview', href: '/technology-overview' },
      { label: 'Cre-Lox System', href: '/cre-lox-system' },
      { label: 'Flp-Frt System', href: '/flp-frt-system' },
      { label: 'Rosa26 Targeting', href: '/rosa26' },
      { label: 'ES Cell Gene Targeting', href: '/es-cell-gene-targeting' },
      { label: 'Inducible Gene Expression', href: '/inducible-gene-expression' },
      { label: 'Doxycycline Inducible Systems', href: '/doxycycline-inducible-systems' },
      { label: 'BAC-to-BAC Large Scale Targeting', href: '/bac-to-bac-large-scale-targeting' },
      { label: 'Cre Line Selection Guide', href: '/cre-line-selection-guide' },
      { label: 'Conditional vs Conventional Guide', href: '/conditional-vs-conventional-guide' },
      { label: 'Critical Exon Selection', href: '/critical-exon-selection' },
      { label: 'LoxP Site Design', href: '/loxp-site-design' },
    ],
  },
  {
    label: 'Services',
    href: '/mouse-model-services',
    children: [
      { label: 'Custom Projects', href: '/custom-projects' },
      { label: 'Support Services', href: '/support-services' },
      { label: 'Colony Management', href: '/colony-management-services' },
      { label: 'Cryopreservation', href: '/cryopreservation-services' },
      { label: 'Rederivation', href: '/rederivation-services' },
      { label: 'Speed Expansion Breeding', href: '/speed-expansion-breeding' },
      { label: 'Preclinical Services', href: '/preclinical-services' },
      { label: 'Phenotyping Services', href: '/phenotyping-services' },
      { label: 'Mouse Genotyping', href: '/mouse-genotyping-service' },
      { label: 'Post-Project Services', href: '/post-project-services' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'View All Resources', href: '/resources' },
      { label: 'Lab Signals Newsletter', href: '/lab-signals' },
      { label: 'Ingenious Blog', href: '/ingenious-blog' },
      { label: 'Breeding Scheme Architect', href: '/breeding-scheme-architect' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Mouse Model Generation Guide', href: '/mouse-model-generation-guide' },
      { label: 'Strain Backgrounds', href: '/mouse-strain-backgrounds' },
      { label: 'Video Library', href: '/video-library' },
      { label: 'Pricing Overview', href: '/pricing-overview' },
    ],
  },
  {
    label: 'About',
    href: '/about-itl',
    children: [
      { label: 'Why Choose Us', href: '/why-choose-itl' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Current Openings', href: '/current-openings' },
    ],
  },
  {
    label: 'Publications',
    href: '/publications',
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'General Contact', href: '/general-contact' },
      { label: 'Custom Model Quote', href: '/request-quote' },
      { label: 'Catalog Model Quote', href: '/order-catalog-models' },
      { label: 'Schedule Meeting', href: '/schedule-meeting' },
    ],
  },
];

export function UXUIDCNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

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

  return (
    <>
      <nav ref={navRef} className="w-full z-50 sticky top-0" aria-label="Main navigation">
        {/* Row 1: Logo, Search (blue), Input, Start an Order (white/rev), Start Your Project (grey) */}
        <div className="bg-white">
          <div className="container">
            <div className="flex items-center justify-end h-16 gap-0 py-5 px-5">
              {/* Logo - auto, pushed left */}
              <Link href="/" className="mr-auto" aria-label="Home">
                <Image
                  src="/images/logo.png"
                  alt="ingenious targeting laboratory"
                  width={224}
                  height={54}
                  className="h-auto"
                  priority
                />
              </Link>

              {/* Search Button - Blue with animation */}
              <Link
                href="/search"
                className="group hidden lg:flex items-center gap-2 text-white px-8 py-1.5 mr-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: '#134978', fontWeight: 400 }}
              >
                <span>Search</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              {/* Search Input Field - 250px width, 100px margin right */}
              <div className="hidden lg:block" style={{ width: '250px', marginRight: '100px' }}>
                <form action="/search" method="get" role="search" className="w-full">
                  <input
                    type="search"
                    name="q"
                    placeholder="Search models..."
                    aria-label="Search site"
                    className="border border-[#e0e0e0] bg-white h-8 w-full px-3 text-sm focus:outline-none focus:border-[#2384da] transition-colors duration-300"
                  />
                </form>
              </div>

              {/* Start an Order - White/rev button with animation */}
              <Link 
                href="/request-quote"
                className="group hidden lg:flex items-center gap-2 bg-white text-[#666] px-4 py-1.5 border border-black mr-2 transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-md"
                style={{ fontFamily: 'var(--system-ui)', fontWeight: 400 }}
              >
                <span>Start an Order</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              {/* Start Your Project - Solid grey button with animation */}
              <Link 
                href="/start-your-project" 
                className="group hidden lg:flex items-center gap-2 bg-[#666] text-white px-4 py-1.5 transition-all duration-300 hover:bg-[#555] hover:-translate-y-0.5 hover:shadow-md"
                style={{ fontFamily: 'var(--system-ui)', fontWeight: 400 }}
              >
                <span>Start Your Project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#333] ml-auto"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Navigation Links - grey text with hover effects */}
        <div className="hidden lg:block bg-white">
          <div className="container">
            <div className="flex items-center justify-end gap-5 h-10 px-5">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative text-[#333] hover:text-teal-600 transition-colors duration-300 flex items-center gap-1 py-2"
                    style={{ fontFamily: 'var(--system-ui)', fontWeight: 450 }}
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                    {item.children && (
                      <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {item.children && activeDropdown === item.label && (
                    <div 
                      className={`absolute top-full left-0 bg-white shadow-xl py-2 mt-0 border border-[#e0e0e0] z-50 animate-fadeIn ${
                        item.children.length > 10 ? 'w-[480px] max-h-[70vh] overflow-y-auto' : 'w-56'
                      }`}
                      style={{
                        display: item.children.length > 10 ? 'grid' : 'block',
                        gridTemplateColumns: item.children.length > 10 ? 'repeat(2, 1fr)' : undefined,
                        gap: item.children.length > 10 ? '0' : undefined
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[#666] hover:bg-[#f7f7f7] hover:text-teal-600 hover:pl-6 transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Green Announcement Bar - teal bg, white bold centered */}
        <div className="flex justify-center items-center h-8 px-5" style={{ backgroundColor: 'teal' }}>
          <div className="text-white font-bold text-center" style={{ fontFamily: 'var(--system-ui)' }}>
            Is uncertain NIH funding holding you back from starting a much needed mouse model project? We have ways for you to start your project now and pay later.
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container py-4">
              {/* Mobile Search */}
              <form action="/search" method="get" role="search" className="mb-4">
                <input
                  type="search"
                  name="q"
                  placeholder="Search models, services..."
                  aria-label="Search site"
                  className="w-full px-3 py-2 border border-[#ccc]"
                />
              </form>
              <ul className="space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm text-[#0a253c] font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/request-quote"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-white text-center py-2"
                style={{ backgroundColor: 'teal' }}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default UXUIDCNavigation;
