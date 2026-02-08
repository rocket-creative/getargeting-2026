# Contact Pages Configuration

## Pages Overview

Your site now has **2 distinct contact pages** matching your current live site structure:

---

## 1. `/contact` - Contact Hub Page

**URL:** `https://yoursite.com/contact`  
**Main entry point for all contact methods**

### Purpose
Landing page that directs users to the appropriate contact method for their needs.

### Content Structure
1. **Hero Section (Above the Fold)**
   - Centered headline: "Let's Start Your Project"
   - Supporting description
   - **3 Large Contact Method Cards:**
     1. **Request a Quote** → `/request-quote`
        - White card with teal icon
        - "Get detailed pricing and timeline"
     2. **Schedule Consultation** → `/schedule-meeting` 
        - Dark card with teal border (PRIMARY/FEATURED)
        - "Book a free phone consultation"
     3. **Send a Message** → `/general-contact`
        - White card with teal icon
        - "Have a general question or inquiry"
   - Direct contact info box (email & phone)

2. **Additional Info Section**
   - Contact information card (email, phone, hours, address)
   - Quick links to other forms
   - Fast response guarantee badge

---

## 2. `/general-contact` - General Inquiry Form

**URL:** `https://yoursite.com/general-contact`  
**Matches:** `https://www.genetargeting.com/general-contact`

### HubSpot Form
- **Portal ID:** `3977953`
- **Form ID:** `efefc866-97ec-4500-a380-4cf28e733f54`

### Purpose
General inquiries and questions - users fill out form to send a message.

### Content Structure
1. **Hero Section (2 columns)**
   - Left: Content
     - H1: "Have questions?"
     - Description: "A technical consultant will respond within 1 business day"
     - Direct contact info (email/phone in highlighted box)
     - Supporting text about company values
   - Right: Embedded HubSpot contact form

2. **Additional Info Section**
   - Contact information card
   - Quick links to other forms
   - Fast response guarantee badge

---

## 3. `/schedule-meeting` - Meeting Scheduler

**URL:** `https://yoursite.com/schedule-meeting`  
**Matches:** `https://www.genetargeting.com/schedule-meeting`

### HubSpot Form
- **Portal ID:** `3977953`
- **Form ID:** `c0c02dc8-960c-4d14-acff-eaa43b8c7b6a`

### Purpose
Book a phone consultation with scientific strategy team.

### Content Structure
1. **Hero Section (2 columns)**
   - Left: Content
     - Badge: "Free Scientific Consultation"
     - H1: "We look forward to speaking with you!"
     - Description of consultation benefits
     - "What We'll Discuss" checklist:
       - Review your targeting strategy options
       - Discuss allele design considerations
       - Understand project timeline & deliverables
       - Get answers to technical questions
       - Receive personalized recommendations
     - Direct contact info box
   - Right: Embedded HubSpot meeting scheduler form

2. **Additional Info Section**
   - What We'll Discuss benefits (repeated)
   - No Obligation badge
   - Alternative contact methods
   - Quick links to other forms
   - Trust badges (26+ years, 2,500+ projects)

---

## Key Differences

| Feature | `/contact` | `/general-contact` | `/schedule-meeting` |
|---------|-----------|-------------------|---------------------|
| **Page Type** | Hub/Directory | Form page | Form page |
| **Has Form** | ❌ No | ✅ Yes | ✅ Yes |
| **Form ID** | N/A | `efefc866-...` | `c0c02dc8-...` |
| **Headline** | "Let's Start Your Project" | "Have questions?" | "We look forward to speaking with you!" |
| **Purpose** | Direct to right form | Text-based inquiry | Phone appointment booking |
| **Hero Content** | 3 large CTA cards | Form embedded | Form embedded |
| **Best For** | First-time visitors | Written questions | Consultations |

---

## User Journey Flow

```
User clicks "Contact" in nav
    ↓
Lands on `/contact` (hub page)
    ↓
Sees 3 options:
    ↓
1. Need pricing? → `/request-quote`
2. Want to talk? → `/schedule-meeting` 
3. General question? → `/general-contact`
```

## Navigation Links

Make sure these pages are linked from:
- Main navigation "Contact" → should go to `/contact` (hub page)
- Footer "Contact" section → link to `/contact`
- "Schedule Meeting" CTAs → direct to `/schedule-meeting`
- "Get Quote" buttons → direct to `/request-quote`
- "Contact Us" buttons → direct to `/contact` (hub)

---

## Testing Checklist

- [ ] `/contact` loads HubSpot form correctly
- [ ] `/schedule-meeting` loads meeting scheduler correctly
- [ ] Forms are responsive on mobile
- [ ] Direct contact links (email/phone) work
- [ ] Quick link cards navigate correctly
- [ ] GSAP animations trigger on scroll
- [ ] Both pages have proper SEO metadata

---

## SEO Considerations

### `/contact`
- Title: "Contact Us | General Inquiries | ingenious targeting laboratory"
- Meta description should mention "general inquiries" and "1 business day response"

### `/schedule-meeting`
- Title: "Schedule a Meeting | Free Consultation | ingenious targeting laboratory"
- Meta description should mention "free scientific consultation" and "phone appointment"

---

## Notes

✅ Both pages now match your current live site structure  
✅ Forms use correct HubSpot Portal ID and Form IDs from production  
✅ Content matches competitor copy (your current site)  
✅ Pages are visually distinct with different purposes  
✅ Mobile-responsive with GSAP animations
