#!/usr/bin/env node

/**
 * Metadata Audit
 * Scans all pages for SEO issues, missing metadata, wrong canonicals
 * 
 * Usage: node scripts/03-metadata-audit.js [new-domain]
 * Example: node scripts/03-metadata-audit.js https://www.yourdomain.com
 */

const fs = require('fs');
const path = require('path');

const newDomain = process.argv[2] || 'https://www.ingenious.com';
const oldDomain = 'https://www.genetargeting.com';

const appDir = path.join(__dirname, '../itl-website/src/app');
const issues = [];
const passed = [];
const stats = {
  totalPages: 0,
  withMetadata: 0,
  withTitle: 0,
  withDescription: 0,
  withCanonical: 0,
  withOG: 0,
  wrongCanonical: 0,
  titleTooLong: 0,
  titleTooShort: 0,
  descTooLong: 0,
  descTooShort: 0,
};

function scanDirectory(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith('[') || entry.name === 'admin' || entry.name === 'api') {
        continue;
      }
      
      const fullPath = path.join(dir, entry.name);
      const pagePath = path.join(fullPath, 'page.tsx');
      
      if (fs.existsSync(pagePath)) {
        const route = basePath ? `${basePath}/${entry.name}` : entry.name;
        auditPage(pagePath, route);
      }
      
      scanDirectory(fullPath, basePath ? `${basePath}/${entry.name}` : entry.name);
    }
  }
}

function auditPage(filePath, route) {
  stats.totalPages++;
  const content = fs.readFileSync(filePath, 'utf-8');
  const pageIssues = [];
  
  // Check for metadata export
  const hasMetadata = /export const metadata[:\s]*Metadata/.test(content);
  if (hasMetadata) {
    stats.withMetadata++;
  } else {
    pageIssues.push({
      severity: 'high',
      issue: 'Missing metadata export',
      fix: 'Add: export const metadata: Metadata = { ... }',
    });
  }
  
  // Extract metadata object
  const metadataMatch = content.match(/export const metadata[:\s]*Metadata[^=]*=\s*({[\s\S]*?^})/m);
  if (metadataMatch) {
    const metadataStr = metadataMatch[1];
    
    // Check title
    const titleMatch = metadataStr.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (titleMatch) {
      stats.withTitle++;
      const title = titleMatch[1];
      const titleLength = title.length;
      
      if (titleLength < 30) {
        stats.titleTooShort++;
        pageIssues.push({
          severity: 'medium',
          issue: `Title too short (${titleLength} chars)`,
          value: title,
          fix: 'Aim for 50-60 characters',
        });
      } else if (titleLength > 60) {
        stats.titleTooLong++;
        pageIssues.push({
          severity: 'medium',
          issue: `Title too long (${titleLength} chars)`,
          value: title.substring(0, 50) + '...',
          fix: 'Shorten to 50-60 characters',
        });
      }
    } else {
      pageIssues.push({
        severity: 'high',
        issue: 'Missing title',
        fix: 'Add title field to metadata',
      });
    }
    
    // Check description
    const descMatch = metadataStr.match(/description:\s*['"`]([^'"`]+)['"`]/);
    if (descMatch) {
      stats.withDescription++;
      const desc = descMatch[1];
      const descLength = desc.length;
      
      if (descLength < 120) {
        stats.descTooShort++;
        pageIssues.push({
          severity: 'medium',
          issue: `Description too short (${descLength} chars)`,
          value: desc,
          fix: 'Aim for 150-160 characters',
        });
      } else if (descLength > 160) {
        stats.descTooLong++;
        pageIssues.push({
          severity: 'low',
          issue: `Description too long (${descLength} chars)`,
          value: desc.substring(0, 100) + '...',
          fix: 'Shorten to 150-160 characters',
        });
      }
    } else {
      pageIssues.push({
        severity: 'high',
        issue: 'Missing description',
        fix: 'Add description field to metadata',
      });
    }
    
    // Check canonical
    const canonicalMatch = metadataStr.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
    if (canonicalMatch) {
      stats.withCanonical++;
      const canonical = canonicalMatch[1];
      
      // Check if pointing to old domain
      if (canonical.includes(oldDomain)) {
        stats.wrongCanonical++;
        pageIssues.push({
          severity: 'critical',
          issue: 'Canonical points to OLD domain',
          value: canonical,
          fix: `Change to: ${newDomain}/${route}`,
        });
      } else if (!canonical.includes(newDomain)) {
        pageIssues.push({
          severity: 'medium',
          issue: 'Canonical may need updating',
          value: canonical,
          fix: `Should be: ${newDomain}/${route}`,
        });
      }
    } else {
      pageIssues.push({
        severity: 'high',
        issue: 'Missing canonical URL',
        fix: `Add: alternates: { canonical: '${newDomain}/${route}' }`,
      });
    }
    
    // Check for Open Graph
    const hasOG = /openGraph:\s*{/.test(metadataStr);
    if (hasOG) {
      stats.withOG++;
    } else {
      pageIssues.push({
        severity: 'medium',
        issue: 'Missing Open Graph tags',
        fix: 'Add openGraph object with title, description, images',
      });
    }
  }
  
  // Store results
  if (pageIssues.length > 0) {
    issues.push({
      page: `/${route || '(homepage)'}`,
      filePath: filePath.replace(appDir, 'src/app'),
      issues: pageIssues,
    });
  } else {
    passed.push(`/${route || '(homepage)'}`);
  }
}

// Scan homepage
const homePage = path.join(appDir, 'page.tsx');
if (fs.existsSync(homePage)) {
  auditPage(homePage, '');
}

scanDirectory(appDir);

// Print results
console.log(`\n📊 METADATA AUDIT RESULTS\n`);
console.log(`Total pages scanned: ${stats.totalPages}\n`);

console.log(`Coverage:`);
console.log(`  Metadata export: ${stats.withMetadata}/${stats.totalPages} (${Math.round(stats.withMetadata/stats.totalPages*100)}%)`);
console.log(`  Title tags: ${stats.withTitle}/${stats.totalPages} (${Math.round(stats.withTitle/stats.totalPages*100)}%)`);
console.log(`  Descriptions: ${stats.withDescription}/${stats.totalPages} (${Math.round(stats.withDescription/stats.totalPages*100)}%)`);
console.log(`  Canonical URLs: ${stats.withCanonical}/${stats.totalPages} (${Math.round(stats.withCanonical/stats.totalPages*100)}%)`);
console.log(`  Open Graph: ${stats.withOG}/${stats.totalPages} (${Math.round(stats.withOG/stats.totalPages*100)}%)\n`);

console.log(`Issues Found:`);
console.log(`  🔴 Wrong canonical (points to old domain): ${stats.wrongCanonical}`);
console.log(`  ⚠️  Title too short (<30 chars): ${stats.titleTooShort}`);
console.log(`  ⚠️  Title too long (>60 chars): ${stats.titleTooLong}`);
console.log(`  ⚠️  Description too short (<120 chars): ${stats.descTooShort}`);
console.log(`  ⚠️  Description too long (>160 chars): ${stats.descTooLong}\n`);

// Critical issues first
const critical = issues.filter(i => i.issues.some(iss => iss.severity === 'critical'));
if (critical.length > 0) {
  console.log(`\n🚨 CRITICAL ISSUES (Fix before launch!):\n`);
  critical.forEach(({ page, filePath, issues: pageIssues }) => {
    console.log(`  ${page}`);
    console.log(`  File: ${filePath}`);
    pageIssues
      .filter(i => i.severity === 'critical')
      .forEach(issue => {
        console.log(`    ❌ ${issue.issue}`);
        if (issue.value) console.log(`       Current: ${issue.value}`);
        console.log(`       Fix: ${issue.fix}`);
      });
    console.log('');
  });
}

// High priority issues
const high = issues.filter(i => i.issues.some(iss => iss.severity === 'high') && !critical.includes(i));
if (high.length > 0 && high.length <= 10) {
  console.log(`\n⚠️  HIGH PRIORITY (${high.length} pages):\n`);
  high.forEach(({ page, issues: pageIssues }) => {
    console.log(`  ${page}`);
    pageIssues
      .filter(i => i.severity === 'high')
      .forEach(issue => console.log(`    - ${issue.issue}: ${issue.fix}`));
  });
  console.log('');
} else if (high.length > 10) {
  console.log(`\n⚠️  HIGH PRIORITY: ${high.length} pages have issues (see full report)\n`);
}

// Summary
console.log(`\n✅ Pages with no issues: ${passed.length}/${stats.totalPages}\n`);

if (passed.length === stats.totalPages) {
  console.log(`🎉 Perfect! All pages have proper metadata!\n`);
} else {
  console.log(`📋 Pages needing attention: ${issues.length}\n`);
}

// Save detailed report
const reportPath = path.join(__dirname, '../METADATA-AUDIT-REPORT.json');
fs.writeFileSync(reportPath, JSON.stringify({
  summary: {
    auditDate: new Date().toISOString(),
    domain: newDomain,
    oldDomain,
    ...stats,
  },
  criticalIssues: critical.length,
  highPriorityIssues: high.length,
  pagesWithIssues: issues,
  pagesPassed: passed,
}, null, 2));

console.log(`📝 Full report saved to: METADATA-AUDIT-REPORT.json\n`);

// Exit code
process.exit(critical.length > 0 ? 1 : 0);
