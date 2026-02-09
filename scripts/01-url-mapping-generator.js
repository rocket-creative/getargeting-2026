#!/usr/bin/env node

/**
 * URL Mapping Generator
 * Compares old sitemap URLs to new pages and suggests redirect rules
 * 
 * Usage: node scripts/01-url-mapping-generator.js
 */

const fs = require('fs');
const path = require('path');

// Read old URLs from sitemap
const oldSitemapPath = '/tmp/old_urls.txt';
const oldUrls = fs.existsSync(oldSitemapPath)
  ? fs.readFileSync(oldSitemapPath, 'utf-8')
      .split('\n')
      .filter(Boolean)
      .map(url => url.replace('https://www.genetargeting.com', '').replace(/^\//, ''))
      .filter(path => path && !path.includes('ingenious-blog') && !path.includes('exclusive-newsletter-content'))
  : [];

// Read new pages from app directory
const appDir = path.join(__dirname, '../itl-website/src/app');
const newPages = [];

function scanDirectory(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('[') && entry.name !== 'admin' && entry.name !== 'api') {
      const fullPath = path.join(dir, entry.name);
      const pagePath = path.join(fullPath, 'page.tsx');
      
      if (fs.existsSync(pagePath)) {
        const route = basePath ? `${basePath}/${entry.name}` : entry.name;
        newPages.push(route);
      }
      
      // Recurse into subdirectories
      scanDirectory(fullPath, basePath ? `${basePath}/${entry.name}` : entry.name);
    }
  }
}

// Check for homepage
const homePage = path.join(appDir, 'page.tsx');
if (fs.existsSync(homePage)) {
  newPages.push('');
}

scanDirectory(appDir);

console.log(`\n📊 URL MAPPING ANALYSIS\n`);
console.log(`Old site URLs: ${oldUrls.length}`);
console.log(`New site pages: ${newPages.length}\n`);

// Load existing redirects
const existingRedirects = require('../itl-website/src/lib/legacy/redirects.json');
const existingMap = new Map(existingRedirects.map(r => [r.source.replace(/^\//, ''), r.destination.replace(/\/$/, '')]));

console.log(`Existing redirects: ${existingRedirects.length}\n`);

// Analyze mappings
const results = {
  exactMatches: [],
  needsRedirect: [],
  alreadyRedirected: [],
  missing: [],
  blogPosts: oldUrls.filter(url => url.includes('ingenious-blog')).length,
  newsletterContent: oldUrls.filter(url => url.includes('exclusive-newsletter-content')).length,
};

// Check each old URL
for (const oldPath of oldUrls) {
  if (!oldPath) continue;
  
  // Skip blog posts and newsletter content (handled separately)
  if (oldPath.includes('ingenious-blog') || oldPath.includes('exclusive-newsletter-content')) {
    continue;
  }
  
  // Check if already redirected
  if (existingMap.has(oldPath)) {
    results.alreadyRedirected.push({
      old: oldPath,
      new: existingMap.get(oldPath),
    });
    continue;
  }
  
  // Check for exact match
  if (newPages.includes(oldPath)) {
    results.exactMatches.push(oldPath);
    continue;
  }
  
  // Try to find similar page
  const similar = findSimilarPage(oldPath, newPages);
  if (similar) {
    results.needsRedirect.push({
      old: oldPath,
      suggested: similar,
      confidence: calculateConfidence(oldPath, similar),
    });
  } else {
    results.missing.push(oldPath);
  }
}

// Print results
console.log(`✅ Exact Matches (no redirect needed): ${results.exactMatches.length}`);
results.exactMatches.forEach(path => console.log(`   /${path || '(homepage)'}`));

console.log(`\n🔀 Already Redirected: ${results.alreadyRedirected.length}`);
results.alreadyRedirected.slice(0, 10).forEach(({ old, new: newPath }) => {
  console.log(`   /${old} → /${newPath}`);
});
if (results.alreadyRedirected.length > 10) {
  console.log(`   ... and ${results.alreadyRedirected.length - 10} more`);
}

console.log(`\n⚠️  Needs New Redirect: ${results.needsRedirect.length}`);
results.needsRedirect.forEach(({ old, suggested, confidence }) => {
  console.log(`   /${old} → /${suggested} (${confidence}% match)`);
});

console.log(`\n❌ Missing Pages (no good match found): ${results.missing.length}`);
results.missing.forEach(path => console.log(`   /${path}`));

// Generate redirect rules for next.config.js
console.log(`\n\n📝 SUGGESTED REDIRECTS FOR next.config.js:\n`);
console.log(`// Add these to your redirects array in next.config.js:\n`);

const newRedirects = results.needsRedirect.map(({ old, suggested }) => ({
  source: `/${old}`,
  destination: `/${suggested}/`,
  permanent: true,
}));

console.log(JSON.stringify(newRedirects, null, 2));

// Save to file
const outputPath = path.join(__dirname, '../SUGGESTED-REDIRECTS.json');
fs.writeFileSync(outputPath, JSON.stringify({
  summary: {
    totalOldUrls: oldUrls.length,
    exactMatches: results.exactMatches.length,
    alreadyRedirected: results.alreadyRedirected.length,
    needsNewRedirect: results.needsRedirect.length,
    missing: results.missing.length,
  },
  newRedirects,
  missingPages: results.missing,
}, null, 2));

console.log(`\n\n✅ Full report saved to: SUGGESTED-REDIRECTS.json\n`);

// Helper functions
function findSimilarPage(oldPath, newPages) {
  const oldWords = oldPath.toLowerCase().split(/[-/]/).filter(Boolean);
  
  let bestMatch = null;
  let bestScore = 0;
  
  for (const newPage of newPages) {
    const newWords = newPage.toLowerCase().split(/[-/]/).filter(Boolean);
    const score = calculateSimilarity(oldWords, newWords);
    
    if (score > bestScore && score > 0.5) {
      bestScore = score;
      bestMatch = newPage;
    }
  }
  
  return bestMatch;
}

function calculateSimilarity(words1, words2) {
  const set1 = new Set(words1);
  const set2 = new Set(words2);
  const intersection = [...set1].filter(w => set2.has(w));
  
  return intersection.length / Math.max(set1.size, set2.size);
}

function calculateConfidence(oldPath, newPath) {
  const oldWords = oldPath.toLowerCase().split(/[-/]/).filter(Boolean);
  const newWords = newPath.toLowerCase().split(/[-/]/).filter(Boolean);
  const similarity = calculateSimilarity(oldWords, newWords);
  
  return Math.round(similarity * 100);
}
