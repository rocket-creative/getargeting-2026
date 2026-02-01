# ITL Website Build Tracker

**Last Updated:** January 9, 2026

## Pages Built

| # | Page | URL | Status | Date Built | Notes |
|---|------|-----|--------|------------|-------|
| 1 | Homepage | `/` | ✅ REBUILT | Jan 9, 2026 | All master text displayed exactly from homepage.md. 10 sections: Hero, Core Services, Overview, Model Landscape, High-Level Approach, Workflow, Trusted By, Testimonials, Start Project, FAQ |
| 2 | About ITL | `/about-itl` | ✅ Built | Jan 9, 2026 | All master text from about-itl.md. 11 sections: Hero, Mission, History, Approach, Team, Facilities, Testimonials, Publications, Contact, FAQs, Related Resources |
| 3 | Contact | `/contact` | ✅ Built | Jan 9, 2026 | All master text from contact.md. Sections: Hero, Quick Contact Bar, Request Quote, Schedule Consultation, Why Choose, Getting Started CTA, General Inquiries, Project Inquiry Types (4), Response Time, Resources, Partners, Careers, Stay Connected. Schema.org ContactPage added. |
| 4 | Request Quote | `/request-quote` | ✅ Built | Jan 9, 2026 | All master text from request-quote.md. Sections: Hero, Project Info Needed (6 cards), What Happens After Submit (3 steps), Quote Form, Why Request Quote, Next Steps/Process/Follow Up/Timeline (4 cards), FAQ (single merged), Alternative Contact Options, Resources, Testimonial, Related Pages. |
| 5 | Why Choose ITL | `/why-choose-itl` | ✅ Built | Jan 9, 2026 | All master text from why-choose-itl.md. Sections: Hero, Proven Track Record, Scientific Expertise, Comprehensive Service, Transparent Communication, Quality Standards, Testimonials, Publications, Start Your Project CTA (with DNA animation), FAQ, Related Resources, Comparison Table. |

---

## Pages Pending (59 remaining from page-text-md)

### Core Pages
- [x] About ITL (`/about-itl`) ✅
- [x] Contact (`/contact`) ✅
- [x] Request Quote (`/request-quote`) ✅
- [x] Why Choose ITL (`/why-choose-itl`) ✅
- [ ] Pricing Overview (`/pricing-overview`)
- [ ] Resources (`/resources`)
- [ ] Current Openings (`/current-openings`)

### Custom Mouse Models
- [ ] Custom Mouse Models Hub (`/custom-mouse-models`)
- [ ] Knockout Mouse Models (`/knockout-mouse-models`)
- [ ] Conditional Knockout (`/conditional-knockout-mouse-models`)
- [ ] Conventional Knockout (`/conventional-knockout-mouse-models`)
- [ ] Tissue-Specific Knockout (`/tissue-specific-knockout`)
- [ ] Inducible Conditional Knockout (`/inducible-conditional-knockout`)
- [ ] Knockin Mouse Models (`/knockin-mouse-models`)
- [ ] Point Mutation Mice (`/point-mutation-mice`)
- [ ] Reporter Knockin (`/reporter-knockin`)
- [ ] Tag Knockin Mice (`/tag-knockin-mice`)
- [ ] Conditional Knockin Mice (`/conditional-knockin-mice`)
- [ ] Humanized Mouse Models (`/humanized-mouse-models`)
- [ ] Gene Replacement (`/gene-replacement`)
- [ ] Transgenic Mouse Service (`/transgenic-mouse-service`)
- [ ] cDNA Knockin (`/cdna-knockin`)

### Catalog
- [ ] Catalog Mouse Models Hub (`/catalog-mouse-models`)
- [ ] Disease Model Catalog (`/disease-model-catalog`)
- [ ] PD1 Humanized Mice (`/pd1-humanized-mice`)
- [ ] PDL1 Humanized Mice (`/pdl1-humanized-mice`)
- [ ] LAG3 Humanized Mice (`/lag3-humanized-mice`)
- [ ] TIM3 Humanized Mice (`/tim3-humanized-mice`)
- [ ] Double Checkpoint Mice (`/double-checkpoint-mice`)

### Therapeutic Areas
- [ ] Therapeutic Areas Hub (`/therapeutic-areas`)
- [ ] Oncology (`/oncology-mouse-models`)
- [ ] Immuno-Oncology (`/immuno-oncology-mouse-models`)
- [ ] Tumor Suppressor Knockout (`/tumor-suppressor-knockout-mice`)
- [ ] Neuroscience (`/neuroscience-mouse-models`)
- [ ] Alzheimer's (`/alzheimers-mouse-models`)
- [ ] NASH/MASH (`/nash-mash-mouse-models`)
- [ ] Immunology (`/immunology-mouse-models`)
- [ ] Lupus (`/lupus-mouse-models`)
- [ ] Allergy & Asthma (`/allergy-asthma-mouse-models`)
- [ ] Cardiovascular (`/cardiovascular-mouse-models`)
- [ ] Heart Failure (`/heart-failure-mouse-models`)
- [ ] Ophthalmology (`/ophthalmology-mouse-models`)

### Technology
- [ ] Cre-Lox System (`/cre-lox-system`)
- [ ] Cre Line Selection Guide (`/cre-line-selection-guide`)
- [ ] Doxycycline Inducible Systems (`/doxycycline-inducible-systems`)
- [ ] BAC-to-BAC Large Scale Targeting (`/bac-to-bac-large-scale-targeting`)
- [ ] Conditional vs Conventional Guide (`/conditional-vs-conventional-guide`)

### Services
- [ ] Mouse Model Services Hub (`/mouse-model-services`)
- [ ] Custom Projects (`/custom-projects`)
- [ ] Support Services (`/support-services`)
- [ ] Colony Management (`/colony-management-services`)
- [ ] Cryopreservation (`/cryopreservation-services`)
- [ ] Rederivation (`/rederivation-services`)
- [ ] Speed Expansion Breeding (`/speed-expansion-breeding`)
- [ ] Preclinical Services (`/preclinical-services`)
- [ ] Phenotyping Services (`/phenotyping-services`)
- [ ] Mouse Genotyping (`/mouse-genotyping-service`)

### Strain Backgrounds
- [ ] C57BL/6 Background (`/c57bl6-mouse-background`)
- [ ] BALB/c Background (`/balbc-mouse-background`)

---

## Build Log

### January 9, 2026 - Homepage Rebuild
- ✅ **REBUILT Homepage** following new master text rules
- ✅ Created 10 dedicated section components in `/app/components/homepage/`:
  - `HeroSection.tsx` - lines 8-13 from homepage.md
  - `CoreServicesSection.tsx` - lines 14-27
  - `OverviewSection.tsx` - lines 28-36
  - `ModelLandscapeSection.tsx` - lines 37-38
  - `HighLevelApproachSection.tsx` - lines 39-47
  - `WorkflowSection.tsx` - lines 48-60
  - `TrustedBySection.tsx` - lines 61-64
  - `TestimonialsSection.tsx` - lines 65-75
  - `StartProjectSection.tsx` - lines 76-79
  - `FAQSection.tsx` - lines 80-86
- ✅ All master text displayed EXACTLY as written - no modifications
- ✅ "Quality Confirmation" section (lines 87-100) excluded - internal notes only
- ✅ Navigation updated with all 130 pages
- ✅ Created PAGE-BUILD-INSTRUCTIONS.md
- ✅ Created BUILD-TRACKER.md

---

## Shared Components (Never Change)

| Component | Location | Description |
|-----------|----------|-------------|
| Navigation | `/components/UXUIDC/Navigation.tsx` | Site-wide nav with all pages |
| Footer | `/components/UXUIDC/Footer.tsx` | Site-wide footer |
| Cookie Consent | `/components/UXUIDC/CookieConsent.tsx` | GDPR popup |

## Addable Components (For SEO Enhancement)

These can be added to pages IF not already in master text:

| Component | When to Add |
|-----------|-------------|
| FAQ Section | If page doesn't have FAQs in master text |
| CTA Section | If page needs conversion points |
| Glossary Section | If page has technical terms needing definition |
| Related Pages | Always add for internal linking |
| Schema.org Data | Always add for SEO |
