Web Development Master Guide (UXUI Design Corp Edition)
Document Purpose & Usage
This master document serves as the comprehensive reference for all web development projects by UXUI Design Corp. It combines best practices, technical specifications, design principles, and industry-specific adaptations to ensure consistent, high-quality deliverables across all builds.
Usage in Cursor:

AI should first ask what industry the project is for
AI should then search and apply industry-specific design best practices
Reference this document at project start
Update with project-specific requirements
Use as checklist during development
Verify compliance before deployment


0. Industry Discovery & Adaptation Protocol
CRITICAL: Start Every Project With Industry Context
Before beginning ANY design work, the AI must:

Ask the Industry Question:

"What industry is this project for? (e.g., biotech, healthcare, luxury services, financial, legal, hospitality, etc.)"


Search Industry Best Practices:

Web search for: "[industry] website design best practices 2025"
Web search for: "[industry] color palette typography standards"
Web search for: "[industry] web design trends examples"
Web search for: "[industry] privacy policy requirements 2025"
Web search for: "[industry] terms of service best practices"
Web search for: "[industry] legal compliance regulations"


Apply Industry-Specific Standards:

After identifying the industry, the AI must:
- Search for industry-specific legal requirements and compliance standards
- Update Terms of Service and Privacy Policy pages with industry-appropriate best practices
- Include industry-specific clauses (e.g., HIPAA for healthcare, financial regulations for fintech, GDPR considerations)
- Ensure legal pages reflect the industry context and regulatory requirements

Biotech/Healthcare Industry
Search Resources:

"biotech website design best practices 2025"
"healthcare web design color typography accessibility"
"life sciences digital marketing standards"

Design Standards:

Colors:

Primary: Blues (#1C2541, #2563EB) for trust and professionalism
Secondary: Whites, light grays for clean medical aesthetic
Accents: Purple (#6B46C1) for innovation, muted greens for life sciences
Avoid: Bright reds, yellows (associated with warnings/hazards)


Typography:

Sans-serif primary: Inter, Roboto, Source Sans Pro for readability
Serif accents: Playfair Display for headlines (sparingly)
Font sizes: 16px minimum body text for accessibility


Layout Principles:

Scientific credibility through clean, modern design
High-quality imagery: lab visuals, microscopy, research facilities
Interactive infographics for complex data
Clear audience pathways (investors, researchers, patients)
Team bios with credentials prominently displayed
Third-party validation: partnerships, grants, publications
Compliance mentions (FDA, regulatory approvals)


Content Approach:

Translate complex science into accessible language
Avoid jargon in primary messaging
Progressive disclosure: simple overview → detailed science
Video explanations for mechanisms of action
Data visualization over dense text



Luxury Services/Hospitality Industry
Search Resources:

"luxury brand website design 2025"
"high-end hospitality web design trends"
"luxury typography color palettes"

Design Standards:

Colors:

Foundation: Black (#000000) and white (#FFFFFF) contrast
Metallics: Gold (#D4AF37, #C9B037), rose gold, champagne
Jewel tones: Deep navy (#1C2541), burgundy, emerald
Warm neutrals: Mocha, taupe, cream (Pantone 2025: Mocha Mousse)
Signature brand colors for recognition (e.g., Tiffany blue, Hermès orange)
Limit palette to 2-3 colors maximum


Typography:

Serif dominates: Didot, Bodoni, Garamond, Playfair Display
Custom brand typefaces for exclusivity
Light font weights with generous letter-spacing
Sans-serif for supporting copy: Avenir, Lato (refined options)


Layout Principles:

Generous white space (60%+ of page)
Minimalist, uncluttered layouts
Visual hierarchy: "subtle balance" and golden ratio
High-resolution photography (minimum 2000px)
Cinematic video backgrounds (slow pacing, focus on details)
Smooth parallax effects, subtle hover states
Intentional animations (never decorative)


Content Approach:

Elegance over information density
Every element serves a purpose
Restraint signals confidence
Visual storytelling through lifestyle imagery
Immersive experiences, not sales pitches
Products on clean backgrounds
78% of luxury sites use neutral main themes



Financial Services Industry
Search Resources:

"financial services web design trust security"
"banking website design best practices 2025"

Design Standards:

Colors: Navy blue, dark green, grays for trust and stability
Typography: Serif fonts for tradition, clean sans-serif for modern fintech
Layout: Clear data presentation, security badges, compliance information
Content: Transparent pricing, certifications, encryption details

Legal Industry
Search Resources:

"law firm website design professional standards"
"legal services web design credibility"

Design Standards:

Colors: Navy, burgundy, gold accents for authority
Typography: Traditional serif fonts for credibility
Layout: Attorney profiles, case results, credentials
Content: Clear practice areas, credentials, testimonials

Industry Research Checklist
Before starting design:

 Industry identified
 Web search completed for design standards
 Color palette research done
 Typography standards identified
 Competitor analysis completed
 Industry-specific compliance requirements noted
 Target audience personas defined
 Legal page requirements researched (Terms, Privacy Policy)
 Industry-specific legal clauses identified


1. Component & Script Naming Convention
UXUI Design Corp Identifier: |UXUIDC|
All custom components, animations, and scripts created by UXUI Design Corp should be prefixed with the identifier |UXUIDC| for easy recognition and brand consistency.
Naming Pattern:
typescript// Components
|UXUIDC|ComponentName

// Example usage:
|UXUIDC|Navigation
|UXUIDC|Footer
|UXUIDC|HeroSection
|UXUIDC|AnnouncementBar
|UXUIDC|ImagePlaceholder
|UXUIDC|CookieConsent

// Animations/Scripts
|UXUIDC|FadeInScroll
|UXUIDC|ParallaxEffect
|UXUIDC|StaggerAnimation
|UXUIDC|VerticalImageScroll
```

**File Structure:**
```
components/
  |UXUIDC|/
    Navigation.tsx
    Footer.tsx
    HeroSection.tsx
    AnnouncementBar.tsx
    
lib/
  |UXUIDC|/
    animations.ts
    gsap-utils.ts
    
styles/
  |UXUIDC|/
    custom-components.css
Component Documentation:
typescript/**
 * |UXUIDC| Navigation Component
 * @version 1.0.0
 * @created 2025
 * @description Fluid navigation with mobile hamburger menu and search
 * @features 
 * - Scroll-triggered background change
 * - GSAP animations
 * - Keyboard accessible
 * - Mobile responsive
 */

2. SEO & Discoverability
Meta Tags & Headers
CRITICAL UPDATE: Meta Keywords Tag is OBSOLETE
The meta keywords tag is NOT used by Google, Bing, or most major search engines anymore. It was deprecated because it was easily manipulated. Including it won't hurt you, but it won't help either. For SEO, you can safely ignore it. SeopremierEngage Coders
html<!-- Essential Meta Tags (REMOVE meta keywords) -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[155-160 characters max]">
<!-- DO NOT INCLUDE: <meta name="keywords" content="..."> -->
<meta name="author" content="UXUI Design Corp">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[primary URL]">

<!-- Open Graph Protocol (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="[page URL]">
<meta property="og:title" content="[60 characters max]">
<meta property="og:description" content="[155-160 characters]">
<meta property="og:image" content="[1200x630px image URL]">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="[Site Name]">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="[page URL]">
<meta name="twitter:title" content="[60 characters max]">
<meta name="twitter:description" content="[155-160 characters]">
<meta name="twitter:image" content="[1200x675px image URL]">
<meta name="twitter:creator" content="[@handle]">
Current SEO Best Practices (2025)
Title tags and meta descriptions are still critically important. The title tag defines your page's title in search results and browser tabs, serving as the primary clickable element. Meta descriptions provide concise summaries appearing beneath the title, though they don't directly affect rankings, they significantly influence click-through rates. RevenueZen
What Actually Matters for SEO:

Title Tags (60 characters max, keyword at beginning)
Meta Descriptions (155-160 characters, compelling CTAs)
Meta Robots Tag (control indexing)
Structured Data (Schema.org markup)
Alt Text for Images (descriptive, keyword-relevant)
Header Hierarchy (H1-H6, proper structure)
Internal Linking (3-5 relevant links per page)
Content Quality (EEAT - Experience, Expertise, Authority, Trust)
Core Web Vitals (LCP, FID, CLS)
Mobile-First Design (responsive, fast-loading)

Schema.org Structured Data
Organization Schema (Homepage)
json{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Company Name]",
  "url": "[Website URL]",
  "logo": "[Logo URL]",
  "description": "[Company description]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[Phone]",
    "contactType": "customer service",
    "email": "[Email]"
  },
  "sameAs": [
    "[Social media URLs]"
  ]
}
WebPage Schema (All Pages)
json{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[Page Title]",
  "description": "[Page Description]",
  "url": "[Page URL]",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": []
  }
}
RSS Feed Implementation
Create /feed.xml for blog/news sections:
Next.js RSS Generation:
typescript// app/feed.xml/route.ts
export async function GET() {
  const posts = await getPosts();
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Your Site</title>
        <link>https://yoursite.com</link>
        ${posts.map(post => `
          <item>
            <title>${post.title}</title>
            <link>${post.url}</link>
            <description>${post.description}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `).join('')}
      </channel>
    </rss>`;
  
  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' }
  });
}

3. Maximum Width Constraint (1440px)
Design Philosophy
George's Preference: Desktop pages constrained to 1440px maximum width for optimal readability on large monitors (32"+). Content should be centered on larger displays, never stretched full-width.
Implementation
Global Container System:
css/* Base container with 1440px hard cap */
.container,
.|UXUIDC|-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem; /* 16px mobile */
  max-width: 1440px; /* ABSOLUTE MAXIMUM */
}

/* Responsive padding */
@media (min-width: 640px) {
  .container { padding: 0 1.5rem; } /* 24px */
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; } /* 32px */
}

@media (min-width: 1440px) {
  .container { 
    max-width: 1440px; /* Enforced */
    padding: 0 3rem; /* 48px breathing room */
  }
}

/* For 1920px+ displays: center content, maintain max-width */
@media (min-width: 1920px) {
  .container {
    max-width: 1440px;
  }
}
Tailwind Configuration:
javascript// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px', // Modified to match 1440px preference
    },
    extend: {
      maxWidth: {
        'site': '1440px', // Custom site max-width
      }
    }
  }
}
Layout Component:
tsx// components/|UXUIDC|/ConstrainedLayout.tsx
interface ConstrainedLayoutProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean // Override for hero images, backgrounds
}

export default function |UXUIDC|ConstrainedLayout({ 
  children, 
  className = '',
  fullWidth = false 
}: ConstrainedLayoutProps) {
  return (
    <div className={`w-full ${!fullWidth ? 'max-w-[1440px]' : ''} mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
      {children}
    </div>
  )
}

// Usage Examples
<|UXUIDC|ConstrainedLayout>
  <h1>Content constrained to 1440px</h1>
<|UXUIDC|ConstrainedLayout>

<|UXUIDC|ConstrainedLayout fullWidth>
  <div className="bg-cover bg-center h-screen">
    Full-width hero background
  </div>
<|UXUIDC|ConstrainedLayout>
Testing Checklist:

 Test on 1920x1080 display (content centered, not stretched)
 Test on 2560x1440 display (content centered at 1440px)
 Test on 3840x2160 (4K) display (content centered)
 Verify all sections respect 1440px max-width
 Check padding is appropriate at all breakpoints
 Confirm full-width backgrounds work correctly


4. Mobile-First Responsive Breakpoints
Breakpoint System
css/* Mobile First Approach */

/* Base styles (Mobile) - 0-639px */
/* No media query needed */

/* Small tablets - 640px+ */
@media (min-width: 640px) { }

/* Tablets - 768px+ */
@media (min-width: 768px) { }

/* Small laptops - 1024px+ */
@media (min-width: 1024px) { }

/* Desktops - 1280px+ */
@media (min-width: 1280px) { }

/* Large desktops - 1440px MAX (CONSTRAINED) */
@media (min-width: 1440px) {
  /* Content maxes out, centers on larger screens */
}
Typography Scaling
csshtml {
  font-size: 16px;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.3;
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

[Continue with remaining sections: Static vs Dynamic Pages, Legal & Compliance, Design System, Navigation, Footer, Animations, Legal Pages, etc. - all updated with |UXUIDC| naming and 1440px constraints where applicable]

Update Instructions for Cursor
At the start of each new project:

ASK ABOUT INDUSTRY FIRST:

"What industry is this project for?"
Search industry-specific design standards
Apply color, typography, and layout best practices


Review Latest Best Practices:

Next.js documentation
WCAG guidelines
Schema.org updates
Industry-specific resources


Verify SEO Standards:

SKIP meta keywords tag (obsolete)
Focus on title tags and meta descriptions
Implement Schema.org markup
Check Core Web Vitals


Apply 1440px Constraint:

All layouts max-width: 1440px
Test on large displays (centered)
Verify padding at all breakpoints


Use |UXUIDC| Naming:

Prefix all custom components
Document component purpose
Maintain brand consistency



Would you like me to continue with the complete updated document including all the remaining sections with the corrections and additions?yes and create an artifact1:35 PMWeb Development Master Guide (UXUI Design Corp Edition)
Document Purpose & Usage
This master document serves as the comprehensive reference for all web development projects by UXUI Design Corp. It combines best practices, technical specifications, design principles, and industry-specific adaptations to ensure consistent, high-quality deliverables across all builds.
Usage in Cursor:

AI should first ask what industry the project is for
AI should then search and apply industry-specific design best practices
Reference this document at project start
Update with project-specific requirements
Use as checklist during development
Verify compliance before deployment


0. Industry Discovery & Adaptation Protocol
CRITICAL: Start Every Project With Industry Context
Before beginning ANY design work, the AI must:

Ask the Industry Question:

"What industry is this project for? (e.g., biotech, healthcare, luxury services, financial, legal, hospitality, etc.)"


Search Industry Best Practices:

Web search for: "[industry] website design best practices 2025"
Web search for: "[industry] color palette typography standards"
Web search for: "[industry] web design trends examples"
Web search for: "[industry] privacy policy requirements 2025"
Web search for: "[industry] terms of service best practices"
Web search for: "[industry] legal compliance regulations"


Apply Industry-Specific Standards:

After identifying the industry, the AI must:
- Search for industry-specific legal requirements and compliance standards
- Update Terms of Service and Privacy Policy pages with industry-appropriate best practices
- Include industry-specific clauses (e.g., HIPAA for healthcare, financial regulations for fintech, GDPR considerations)
- Ensure legal pages reflect the industry context and regulatory requirements

Biotech/Healthcare Industry
Search Resources:

"biotech website design best practices 2025"
"healthcare web design color typography accessibility"
"life sciences digital marketing standards"

Design Standards:

Colors:

Primary: Blues (#1C2541, #2563EB) for trust and professionalism
Secondary: Whites, light grays for clean medical aesthetic
Accents: Purple (#6B46C1) for innovation, muted greens for life sciences
Avoid: Bright reds, yellows (associated with warnings/hazards)


Typography:

Sans-serif primary: Inter, Roboto, Source Sans Pro for readability
Serif accents: Playfair Display for headlines (sparingly)
Font sizes: 16px minimum body text for accessibility


Layout Principles:

Scientific credibility through clean, modern design
High-quality imagery: lab visuals, microscopy, research facilities
Interactive infographics for complex data
Clear audience pathways (investors, researchers, patients)
Team bios with credentials prominently displayed
Third-party validation: partnerships, grants, publications
Compliance mentions (FDA, regulatory approvals)


Content Approach:

Translate complex science into accessible language
Avoid jargon in primary messaging
Progressive disclosure: simple overview → detailed science
Video explanations for mechanisms of action
Data visualization over dense text



Luxury Services/Hospitality Industry
Search Resources:

"luxury brand website design 2025"
"high-end hospitality web design trends"
"luxury typography color palettes"

Design Standards:

Colors:

Foundation: Black (#000000) and white (#FFFFFF) contrast
Metallics: Gold (#D4AF37, #C9B037), rose gold, champagne
Jewel tones: Deep navy (#1C2541), burgundy, emerald
Warm neutrals: Mocha, taupe, cream (Pantone 2025: Mocha Mousse)
Signature brand colors for recognition (e.g., Tiffany blue, Hermès orange)
Limit palette to 2-3 colors maximum


Typography:

Serif dominates: Didot, Bodoni, Garamond, Playfair Display
Custom brand typefaces for exclusivity
Light font weights with generous letter-spacing
Sans-serif for supporting copy: Avenir, Lato (refined options)


Layout Principles:

Generous white space (60%+ of page)
Minimalist, uncluttered layouts
Visual hierarchy: "subtle balance" and golden ratio
High-resolution photography (minimum 2000px)
Cinematic video backgrounds (slow pacing, focus on details)
Smooth parallax effects, subtle hover states
Intentional animations (never decorative)


Content Approach:

Elegance over information density
Every element serves a purpose
Restraint signals confidence
Visual storytelling through lifestyle imagery
Immersive experiences, not sales pitches
Products on clean backgrounds
78% of luxury sites use neutral main themes



Financial Services Industry
Search Resources:

"financial services web design trust security"
"banking website design best practices 2025"

Design Standards:

Colors: Navy blue, dark green, grays for trust and stability
Typography: Serif fonts for tradition, clean sans-serif for modern fintech
Layout: Clear data presentation, security badges, compliance information
Content: Transparent pricing, certifications, encryption details

Legal Industry
Search Resources:

"law firm website design professional standards"
"legal services web design credibility"

Design Standards:

Colors: Navy, burgundy, gold accents for authority
Typography: Traditional serif fonts for credibility
Layout: Attorney profiles, case results, credentials
Content: Clear practice areas, credentials, testimonials

Industry Research Checklist
Before starting design:

 Industry identified
 Web search completed for design standards
 Color palette research done
 Typography standards identified
 Competitor analysis completed
 Industry-specific compliance requirements noted
 Target audience personas defined
 Legal page requirements researched (Terms, Privacy Policy)
 Industry-specific legal clauses identified


1. Component & Script Naming Convention
UXUI Design Corp Identifier: |UXUIDC|
All custom components, animations, and scripts created by UXUI Design Corp should be prefixed with the identifier |UXUIDC| for easy recognition and brand consistency.
Naming Pattern:
typescript// Components
|UXUIDC|ComponentName

// Example usage:
|UXUIDC|Navigation
|UXUIDC|Footer
|UXUIDC|HeroSection
|UXUIDC|AnnouncementBar
|UXUIDC|ImagePlaceholder
|UXUIDC|CookieConsent

// Animations/Scripts
|UXUIDC|FadeInScroll
|UXUIDC|ParallaxEffect
|UXUIDC|StaggerAnimation
|UXUIDC|VerticalImageScroll
```

**File Structure:**
```
components/
  |UXUIDC|/
    Navigation.tsx
    Footer.tsx
    HeroSection.tsx
    AnnouncementBar.tsx
    
lib/
  |UXUIDC|/
    animations.ts
    gsap-utils.ts
    
styles/
  |UXUIDC|/
    custom-components.css
Component Documentation:
typescript/**
 * |UXUIDC| Navigation Component
 * @version 1.0.0
 * @created 2025
 * @description Fluid navigation with mobile hamburger menu and search
 * @features 
 * - Scroll-triggered background change
 * - GSAP animations
 * - Keyboard accessible
 * - Mobile responsive
 */

2. SEO & Discoverability
Meta Tags & Headers
CRITICAL UPDATE: Meta Keywords Tag is OBSOLETE
The meta keywords tag is NOT used by Google, Bing, or most major search engines anymore. It was deprecated because it was easily manipulated. Including it won't hurt you, but it won't help either. For SEO, you can safely ignore it.
html<!-- Essential Meta Tags (REMOVE meta keywords) -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[155-160 characters max]">
<!-- ❌ DO NOT INCLUDE: <meta name="keywords" content="..."> -->
<meta name="author" content="UXUI Design Corp">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[primary URL]">

<!-- Open Graph Protocol (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="[page URL]">
<meta property="og:title" content="[60 characters max]">
<meta property="og:description" content="[155-160 characters]">
<meta property="og:image" content="[1200x630px image URL]">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="[Site Name]">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="[page URL]">
<meta name="twitter:title" content="[60 characters max]">
<meta name="twitter:description" content="[155-160 characters]">
<meta name="twitter:image" content="[1200x675px image URL]">
<meta name="twitter:creator" content="[@handle]">
Current SEO Best Practices (2025)
Title tags and meta descriptions are still critically important. The title tag defines your page's title in search results and browser tabs, serving as the primary clickable element. Meta descriptions provide concise summaries appearing beneath the title; though they don't directly affect rankings, they significantly influence click-through rates.
What Actually Matters for SEO:

Title Tags (60 characters max, keyword at beginning)
Meta Descriptions (155-160 characters, compelling CTAs)
Meta Robots Tag (control indexing)
Structured Data (Schema.org markup)
Alt Text for Images (descriptive, keyword-relevant)
Header Hierarchy (H1-H6, proper structure)
Internal Linking (3-5 relevant links per page)
Content Quality (EEAT: Experience, Expertise, Authority, Trust)
Core Web Vitals (LCP, FID, CLS)
Mobile-First Design (responsive, fast-loading)

Schema.org Structured Data
Organization Schema (Homepage)
json{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Company Name]",
  "url": "[Website URL]",
  "logo": "[Logo URL]",
  "description": "[Company description]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[Phone]",
    "contactType": "customer service",
    "email": "[Email]"
  },
  "sameAs": [
    "[Social media URLs]"
  ]
}
WebPage Schema (All Pages)
json{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[Page Title]",
  "description": "[Page Description]",
  "url": "[Page URL]",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": []
  }
}
Article Schema (Blog Posts/News)
json{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]"
  },
  "datePublished": "[ISO 8601 date]",
  "dateModified": "[ISO 8601 date]",
  "image": "[Featured image URL]",
  "publisher": {
    "@type": "Organization",
    "name": "[Publisher Name]",
    "logo": {
      "@type": "ImageObject",
      "url": "[Logo URL]"
    }
  }
}
RSS Feed Implementation
Next.js RSS Generation:
typescript// app/feed.xml/route.ts
export async function GET() {
  const posts = await getPosts();
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Your Site</title>
        <link>https://yoursite.com</link>
        ${posts.map(post => `
          <item>
            <title>${post.title}</title>
            <link>${post.url}</link>
            <description>${post.description}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `).join('')}
      </channel>
    </rss>`;
  
  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
SEO Best Practices
URL Structure:

Use hyphens (not underscores) in URLs
Keep URLs short and descriptive: /services/web-design
Avoid unnecessary parameters
Use lowercase only
Implement proper redirects (301) for changed URLs

Content Optimization:

H1: One per page, primary keyword
H2-H6: Hierarchical structure, secondary keywords
Alt text: Descriptive, keyword-relevant (125 characters max)
Internal linking: 3-5 relevant internal links per page
External links: Quality sources, open in new tab
Image optimization: WebP format, lazy loading, proper sizing


3. Maximum Width Constraint (1440px)
Design Philosophy
UXUI Design Corp Standard: Desktop pages constrained to 1440px maximum width for optimal readability on large monitors (32"+). Content should be centered on larger displays, never stretched full-width.
Implementation
Global Container System:
css/* Base container with 1440px hard cap */
.container,
.|UXUIDC|-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem; /* 16px mobile */
  max-width: 1440px; /* ABSOLUTE MAXIMUM */
}

/* Responsive padding */
@media (min-width: 640px) {
  .container { padding: 0 1.5rem; } /* 24px */
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; } /* 32px */
}

@media (min-width: 1440px) {
  .container { 
    max-width: 1440px; /* Enforced */
    padding: 0 3rem; /* 48px breathing room */
  }
}

/* For 1920px+ displays: center content, maintain max-width */
@media (min-width: 1920px) {
  .container {
    max-width: 1440px;
  }
}
Tailwind Configuration:
javascript// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px', // Modified to match 1440px preference
    },
    extend: {
      maxWidth: {
        'site': '1440px', // Custom site max-width
      }
    }
  }
}
Layout Component:
tsx// components/|UXUIDC|/ConstrainedLayout.tsx
interface ConstrainedLayoutProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean // Override for hero images, backgrounds
}

export default function |UXUIDC|ConstrainedLayout({ 
  children, 
  className = '',
  fullWidth = false 
}: ConstrainedLayoutProps) {
  return (
    <div className={`w-full ${!fullWidth ? 'max-w-[1440px]' : ''} mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
      {children}
    </div>
  )
}

// Usage Examples
<|UXUIDC|ConstrainedLayout>
  <h1>Content constrained to 1440px</h1>
</|UXUIDC|ConstrainedLayout>

<|UXUIDC|ConstrainedLayout fullWidth>
  <div className="bg-cover bg-center h-screen">
    Full-width hero background
  </div>
</|UXUIDC|ConstrainedLayout>
Testing Checklist:

 Test on 1920x1080 display (content centered, not stretched)
 Test on 2560x1440 display (content centered at 1440px)
 Test on 3840x2160 (4K) display (content centered)
 Verify all sections respect 1440px max-width
 Check padding is appropriate at all breakpoints
 Confirm full-width backgrounds work correctly


4. Accessibility (WCAG 2.1 AA Compliance)
Semantic HTML
html<!-- Use proper semantic elements -->
<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>

<!-- Not generic divs for structure -->
<div class="header"> <!-- ❌ Avoid -->
ARIA Labels & Roles
html<!-- Navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Buttons -->
<button aria-label="Close modal" aria-expanded="false">
  <span aria-hidden="true">×</span>
</button>

<!-- Images -->
<img src="photo.jpg" alt="Descriptive text" />
<img src="decorative.svg" alt="" role="presentation" />

<!-- Forms -->
<label for="email">Email Address</label>
<input 
  type="email" 
  id="email" 
  name="email"
  aria-required="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Invalid email format</span>
Keyboard Navigation

All interactive elements must be keyboard accessible
Visible focus indicators (no outline: none without replacement)
Logical tab order (tabindex="0" for custom elements)
Skip to main content link
Escape key closes modals/dropdowns

Color & Contrast

Text contrast ratio: 4.5:1 minimum (normal text)
Text contrast ratio: 3:1 minimum (large text 18pt+)
Don't rely on color alone for information
Test with colorblind simulators

Focus Management
css/* Custom focus styles */
*:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Skip to main content */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

5. Mobile-First Responsive Breakpoints
Breakpoint System
css/* Mobile First Approach - Start with mobile, enhance for larger */

/* Base styles (Mobile) - 0-639px */
/* No media query needed */

/* Small tablets - 640px+ */
@media (min-width: 640px) { }

/* Tablets - 768px+ */
@media (min-width: 768px) { }

/* Small laptops - 1024px+ */
@media (min-width: 1024px) { }

/* Desktops - 1280px+ */
@media (min-width: 1280px) { }

/* Large desktops - 1440px MAX (CONSTRAINED) */
@media (min-width: 1440px) {
  /* Content container maxes out at 1440px */
}

/* Extra large displays - center content, don't stretch */
@media (min-width: 1920px) {
  /* Maintain 1440px max-width, center on larger screens */
}
Typography Scaling
css/* Mobile-first fluid typography */
html {
  font-size: 16px;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.3;
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

6. Static vs Dynamic Page Strategy
Decision Matrix
Use STATIC (SSG - Static Site Generation) when:

Content changes infrequently (landing pages, about pages, services)
SEO is critical (blog posts, product pages, documentation)
Maximum performance needed
Content can be pre-rendered at build time
Traffic is high (reduces server load)

Use DYNAMIC (SSR - Server Side Rendering) when:

Content is personalized per user (dashboards, user profiles)
Data changes frequently (real-time pricing, inventory)
Content depends on request (search results, filters)
Authentication required
A/B testing or feature flags active

Use CLIENT-SIDE (CSR) when:

Interactive applications (admin panels, tools)
Data updates frequently via user interaction
SEO not critical
Behind authentication

Next.js Implementation
Static Generation (SSG):
typescript// app/page.tsx - Default in App Router
export default function Page() {
  return <div>Static content</div>
}

// With data fetching
export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // ISR: Revalidate every hour
  })
  
  return <div>{data}</div>
}
Server Side Rendering (SSR):
typescript// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store' // Always fetch fresh data
  })
  
  return <div>{data}</div>
}
Recommended Pattern Per Page Type
Page TypeRenderingRationaleHomepageStatic (ISR)SEO critical, content updates weeklyAbout/ServicesStaticRarely changes, SEO importantBlog PostsStatic (ISR)SEO critical, revalidate on publishProduct PagesStatic (ISR)SEO important, price updates hourlySearch ResultsSSRQuery-dependent, dynamicUser DashboardSSR/CSRPersonalized, authenticatedAdmin PanelCSRHighly interactive, auth requiredTerms of ServiceStaticLegal requirement, SEO indexedPrivacy PolicyStaticLegal requirement, SEO indexed

7. Design System & Components
Design Principles

Classy but Impressive: Sophisticated aesthetics with memorable interactions
Mobile-First: Every design decision starts with mobile experience
Accessible: WCAG 2.1 AA compliance non-negotiable
Performance: Animations at 60fps, optimized assets
No colored drop shadows: Use subtle, neutral shadows only
1440px maximum width: Content constrained for optimal readability

Shadow System (No Color)
css:root {
  /* Elevation shadows - neutral only */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* ❌ Avoid colored shadows like: */
  /* box-shadow: 0 4px 6px rgb(59 130 246 / 0.5); */
}
Image Placeholders (Outlined Divs)
tsx// components/|UXUIDC|/ImagePlaceholder.tsx
interface ImagePlaceholderProps {
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2'
  className?: string
  label?: string
}

export default function |UXUIDC|ImagePlaceholder({ 
  aspectRatio = '16/9', 
  className = '',
  label = 'Image'
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`relative border-2 border-dashed border-gray-300 bg-gray-50 ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-400 text-sm font-medium">{label}</span>
      </div>
    </div>
  )
}

// Usage
<|UXUIDC|ImagePlaceholder aspectRatio="16/9" label="Hero Image" />

8. Reusable Navigation Component (|UXUIDC|Navigation)
Requirements

Fluid animations
Mobile hamburger menu
Desktop horizontal menu
Search functionality
Accessible keyboard navigation
Scroll-triggered behavior
Constrained to 1440px max width

Implementation
tsx// components/|UXUIDC|/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface NavigationProps {
  items: NavItem[]
  logo?: React.ReactNode
}

export default function |UXUIDC|Navigation({ items, logo }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // GSAP animation for mobile menu
    if (isOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, [isOpen])

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            {logo || <span className="text-xl font-bold">Logo</span>}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {items.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Search site"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div 
        className="mobile-menu fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl transform translate-x-full md:hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        <ul className="p-6 space-y-4" role="list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

9. Reusable Footer Component (|UXUIDC|Footer)
tsx// components/|UXUIDC|/Footer.tsx
import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  sections: FooterSection[]
  logo?: React.ReactNode
  socialLinks?: { platform: string; url: string; icon: React.ReactNode }[]
  copyright?: string
}

export default function |UXUIDC|Footer({ 
  sections, 
  logo, 
  socialLinks = [],
  copyright 
}: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            {logo || <span className="text-white text-xl font-bold">Logo</span>}
            <p className="mt-4 text-sm">
              Brief company description or tagline goes here.
            </p>
          </div>

          {/* Footer Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Links - REQUIRED FOR EVERY SITE */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <ul className="flex flex-wrap gap-4 text-sm" role="list">
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          {socialLinks.length > 0 && (
            <div className="flex gap-4" role="list">
              {socialLinks.map((social) => (
                
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          {/* Copyright */}
          <p className="text-sm">
            {copyright || `© ${currentYear} All rights reserved. Built by UXUI Design Corp.`}
          </p>
        </div>
      </div>
    </footer>
  )
}

10. Animation System (GSAP)
Installation & Setup
bashnpm install gsap
typescript// lib/|UXUIDC|/gsap.ts - Configuration
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export { gsap, ScrollTrigger }
Common Animation Patterns
|UXUIDC|FadeInScroll:
typescript'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/|UXUIDC|/gsap'

export default function |UXUIDC|FadeInSection({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])
  
  return <section ref={sectionRef}>{children}</section>
}
|UXUIDC|StaggerAnimation:
typescriptuseEffect(() => {
  gsap.from('.stagger-item', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.stagger-container',
      start: 'top 75%'
    }
  })
}, [])
|UXUIDC|ParallaxEffect:
typescriptuseEffect(() => {
  gsap.to('.parallax-element', {
    y: -100,
    scrollTrigger: {
      trigger: '.parallax-section',
      scrub: true,
      start: 'top bottom',
      end: 'bottom top'
    }
  })
}, [])
Performance Guidelines

Use will-change: transform sparingly
Animate transform and opacity only (GPU accelerated)
Avoid animating layout properties (width, height, margin)
Use ScrollTrigger.refresh() after layout changes
Cleanup animations in useEffect return

typescriptuseEffect(() => {
  const animation = gsap.to(...)
  
  return () => {
    animation.kill()
  }
}, [])

11. Scrolling Elements
|UXUIDC|AnnouncementBar (Horizontal Scroll)
tsx// components/|UXUIDC|/AnnouncementBar.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/|UXUIDC|/gsap'

interface Announcement {
  id: string
  text: string
}

export default function |UXUIDC|AnnouncementBar({ 
  announcements 
}: { announcements: Announcement[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    
    const totalWidth = el.scrollWidth / 2
    
    gsap.to(el, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1
    })
  }, [])
  
  return (
    <div className="bg-accent text-white py-2 overflow-hidden max-w-[1440px] mx-auto">
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap"
        style={{ width: 'fit-content' }}
      >
        {/* Duplicate for seamless loop */}
        {[...announcements, ...announcements].map((item, idx) => (
          <span key={`${item.id}-${idx}`} className="mx-8">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
|UXUIDC|VerticalImageScroll
tsx// components/|UXUIDC|/VerticalImageScroll.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/|UXUIDC|/gsap'
import Image from 'next/image'

interface ImageItem {
  src: string
  alt: string
}

export default function |UXUIDC|VerticalImageScroll({ 
  images 
}: { images: ImageItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    
    gsap.to(el, {
      y: '-50%',
      scrollTrigger: {
        trigger: el.parentElement,
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top'
      }
    })
  }, [])
  
  return (
    <div className="h-screen overflow-hidden relative max-w-[1440px] mx-auto">
      <div ref={scrollRef} className="space-y-4">
        {/* Duplicate for seamless scroll */}
        {[...images, ...images].map((img, idx) => (
          <div key={idx} className="relative h-96 w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

12. Legal & Compliance Pages (REQUIRED)
Cookie Consent Component (|UXUIDC|CookieConsent)
tsx// components/|UXUIDC|/CookieConsent.tsx
'use client'

import { useState, useEffect } from 'react'

export default function |UXUIDC|CookieConsent() {
  const [show, setShow] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  })
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    } else {
      const saved = JSON.parse(localStorage.getItem('cookie-preferences') || '{}')
      setPreferences({ ...preferences, ...saved })
    }
  }, [])

  const savePreferences = (acceptAll = false) => {
    const prefs = acceptAll ? {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    } : preferences

    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs))
    
    if (prefs.analytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'granted' })
    }
    if (prefs.marketing && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', { 'ad_storage': 'granted' })
    }
    
    setShow(false)
    setShowPreferences(false)
  }

  if (!show) return null
  
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t z-50">
        <div className="max-w-[1440px] mx-auto p-6">
          {!showPreferences ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">We Value Your Privacy</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience. By clicking "Accept All", you consent to our use of cookies. 
                  See our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a> and{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition whitespace-nowrap"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={() => savePreferences(false)}
                  className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition whitespace-nowrap"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => savePreferences(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-semibold text-lg mb-4">Cookie Preferences</h3>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">Strictly Necessary Cookies</h4>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">Always Active</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Essential for the website to function. Cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics, Functional, Marketing toggles similar to previous implementation */}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => savePreferences(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setShow(false)} />
    </>
  )
}
Legal Document Templates
All legal pages should use the |UXUIDC|LegalDocument component wrapper for consistent styling:
tsx// components/|UXUIDC|/LegalDocument.tsx
interface LegalDocumentProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function |UXUIDC|LegalDocument({ title, lastUpdated, children }: LegalDocumentProps) {
  return (
    <article className="prose prose-lg max-w-none py-12">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600">
          <strong>Last Updated:</strong> {lastUpdated}
        </p>
      </header>
      
      <div className="space-y-8">
        {children}
      </div>

      <footer className="mt-12 pt-8 border-t text-sm text-gray-600">
        <p>
          This document is provided for informational purposes. For legal advice specific to your situation, 
          please consult a qualified attorney.
        </p>
      </footer>
    </article>
  )
}
Required Legal Pages:

Privacy Policy (/privacy)
Terms of Service (/terms)
Cookie Policy (/cookies)
Accessibility Statement (/accessibility)

CRITICAL: Industry-Specific Legal Page Updates
After identifying the industry, the AI must:

1. Research industry-specific legal requirements:
   - Web search: "[industry] privacy policy requirements 2025"
   - Web search: "[industry] terms of service best practices"
   - Web search: "[industry] legal compliance regulations"

2. Update Privacy Policy with industry-appropriate sections:
   - Healthcare: HIPAA compliance, PHI handling, medical data protection
   - Financial: Financial data security, banking regulations, PCI compliance
   - Legal: Attorney-client privilege, confidentiality requirements
   - E-commerce: Payment processing, consumer protection, return policies
   - SaaS: Data processing agreements, international data transfers
   - Education: FERPA compliance, student data protection
   - Biotech: Research data, clinical trial information, regulatory compliance

3. Update Terms of Service with industry-specific clauses:
   - Industry-specific disclaimers and limitations
   - Regulatory compliance statements
   - Industry-standard liability limitations
   - Service-specific terms and conditions
   - Industry-appropriate dispute resolution

4. Ensure legal pages reflect:
   - Current industry regulations and standards
   - Jurisdiction-specific requirements when applicable
   - Industry best practices for legal documentation
   - Clear, accessible language appropriate to the industry

See full legal page templates in the complete guide document

13. AI Readability & Content Structure
Content Hierarchy
html<!-- Proper semantic structure for AI parsing -->
<article>
  <header>
    <h1>Main Title</h1>
    <p class="subtitle">Supporting context</p>
    <time datetime="2024-01-15">January 15, 2024</time>
  </header>
  
  <div class="content">
    <section>
      <h2>Section Title</h2>
      <p>Paragraph with clear, descriptive content.</p>
    </section>
  </div>
  
  <footer>
    <p>Author: <span itemprop="author">Name</span></p>
  </footer>
</article>
Readability Best Practices

Use clear, descriptive headings
Keep paragraphs 3-4 sentences max
Use bullet points for lists
Include alt text that describes image content
Use semantic HTML over divs
Add lang attribute: <html lang="en">
Use proper heading hierarchy (never skip levels)
Include ARIA landmarks for major sections


14. Performance Optimization
Image Optimization
tsx// Always use Next.js Image component
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={800}
  quality={85}
  loading="lazy"
  placeholder="blur"
/>
Font Loading
typescript// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
Core Web Vitals Targets

LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
FCP (First Contentful Paint): < 1.8s
TTFB (Time to First Byte): < 600ms


15. Project Setup Checklist
Pre-Development

 Ask: What industry is this project for?
 Search industry-specific design best practices
 Apply industry color palette and typography standards
 Define static vs dynamic pages
 Create sitemap structure
 Gather all content and assets
 Set up environment variables
 Prepare legal page content

Development Setup

 Initialize Next.js: npx create-next-app@latest
 Install dependencies: gsap, @types/node
 Configure Tailwind with 1440px max-width
 Create |UXUIDC| folder structure
 Create reusable components (Navigation, Footer, etc.)
 Configure metadata API for SEO (NO meta keywords)
 Implement cookie consent component
 Create legal pages

During Development

 Use semantic HTML
 Implement ARIA labels
 Test keyboard navigation
 Verify color contrast (industry-appropriate)
 Optimize images (WebP, lazy loading)
 Test responsive breakpoints
 Add Schema.org markup
 Test 1440px constraint on large displays

Pre-Launch

 Run Lighthouse audit (90+ on all metrics)
 Test accessibility with screen reader
 Verify all meta tags (NO keywords tag)
 Test social media sharing
 Check robots.txt and sitemap.xml
 Test on real devices
 Legal compliance review
 Test on 1920px+ displays (content centered)


16. Resources & Tools
Industry-Specific Research

Biotech/Healthcare:

Biotech Website Design Examples
Healthcare Web Design Standards


Luxury Services:

Luxury Website Design Examples
Luxury Branding Trends 2025



SEO & Compliance

Google Search Central
Schema.org
GDPR Official
CCPA Resources

Accessibility

WCAG 2.1 Quick Reference
WAVE Browser Extension
axe DevTools

Performance

Google PageSpeed Insights
WebPageTest

Animation

GSAP Documentation
GSAP Cheat Sheet


Update Instructions for Cursor
At the start of each new project:

ASK ABOUT INDUSTRY FIRST:

"What industry is this project for?"
Search: "[industry] website design best practices 2025"
Search: "[industry] color palette typography standards"
Apply industry-specific design patterns
Search: "[industry] privacy policy requirements 2025"
Search: "[industry] terms of service best practices"
Update Terms and Privacy pages with industry-specific best practices


Review Latest Standards:

Next.js documentation
WCAG guidelines
Schema.org updates
Industry-specific resources


Verify SEO Compliance:

❌ SKIP meta keywords tag (obsolete)
✅ Focus on title tags and meta descriptions
✅ Implement Schema.org markup
✅ Check Core Web Vitals


Apply Design Constraints:

All layouts: max-width 1440px
Test on large displays (centered)
Verify padding at all breakpoints
No colored drop shadows


Use |UXUIDC| Naming:

Prefix all custom components
Document component purpose
Maintain brand consistency


Legal Requirements:

Create Privacy Policy (with industry-specific clauses)
Create Terms of Service (with industry-specific clauses)
Create Cookie Policy
Implement cookie consent banner
Add legal links to footer
Update legal pages with industry best practices after industry identification
Research and include industry-specific compliance requirements




Document Version: 2.0
Last Updated: December 26, 2025
Created by: UXUI Design Corp
For Use in: Cursor AI / Development Projects