#!/usr/bin/env node

/**
 * Sitemap Generator
 * Generates sitemap.xml with all pages from app directory
 * 
 * Usage: node scripts/02-sitemap-generator.js [domain]
 * Example: node scripts/02-sitemap-generator.js https://www.yourdomain.com
 */

const fs = require('fs');
const path = require('path');

const domain = process.argv[2] || 'https://www.ingenious.com'; // Update with your actual domain
const today = new Date().toISOString().split('T')[0];

const appDir = path.join(__dirname, '../itl-website/src/app');
const pages = [];

// Priority rules
const priorityMap = {
  '': 1.0, // Homepage
  'contact': 0.9,
  'request-quote': 0.9,
  'order-catalog-models': 0.9,
  'knockout-mouse-models': 0.8,
  'knockin-mouse-models': 0.8,
  'humanized-mouse-models': 0.8,
  'custom-mouse-models': 0.8,
  'rat-models': 0.8,
  'therapeutic-areas': 0.7,
  'disease-model-catalog': 0.7,
  'catalog-mouse-models': 0.7,
  'mouse-model-services': 0.7,
  'preclinical-services': 0.7,
  'about-itl': 0.7,
  'resources': 0.7,
};

function scanDirectory(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Skip dynamic routes, admin, and api
      if (entry.name.startsWith('[') || entry.name === 'admin' || entry.name === 'api') {
        continue;
      }
      
      const fullPath = path.join(dir, entry.name);
      const pagePath = path.join(fullPath, 'page.tsx');
      
      if (fs.existsSync(pagePath)) {
        const route = basePath ? `${basePath}/${entry.name}` : entry.name;
        
        // Determine priority
        let priority = 0.6; // Default for subpages
        if (priorityMap[route]) {
          priority = priorityMap[route];
        } else if (route.includes('mouse-models') || route.includes('mice')) {
          priority = 0.7; // Disease/model pages
        }
        
        pages.push({
          url: route,
          priority,
          changefreq: priority >= 0.8 ? 'weekly' : 'monthly',
          lastmod: today,
        });
      }
      
      // Recurse into subdirectories
      scanDirectory(fullPath, basePath ? `${basePath}/${entry.name}` : entry.name);
    }
  }
}

// Check for homepage
const homePage = path.join(appDir, 'page.tsx');
if (fs.existsSync(homePage)) {
  pages.push({
    url: '',
    priority: 1.0,
    changefreq: 'daily',
    lastmod: today,
  });
}

scanDirectory(appDir);

// Sort by priority (highest first), then alphabetically
pages.sort((a, b) => {
  if (b.priority !== a.priority) {
    return b.priority - a.priority;
  }
  return a.url.localeCompare(b.url);
});

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${domain}${page.url ? '/' + page.url : ''}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

// Save sitemap
const outputPath = path.join(__dirname, '../itl-website/public/sitemap.xml');
fs.writeFileSync(outputPath, xml);

console.log(`\n✅ Sitemap generated successfully!\n`);
console.log(`📍 Location: itl-website/public/sitemap.xml`);
console.log(`📊 Total URLs: ${pages.length}`);
console.log(`🌐 Domain: ${domain}\n`);

// Print priority breakdown
const priorityBreakdown = pages.reduce((acc, page) => {
  acc[page.priority] = (acc[page.priority] || 0) + 1;
  return acc;
}, {});

console.log(`Priority Distribution:`);
Object.keys(priorityBreakdown)
  .sort((a, b) => b - a)
  .forEach(priority => {
    console.log(`  ${priority}: ${priorityBreakdown[priority]} pages`);
  });

// Save summary
const summaryPath = path.join(__dirname, '../SITEMAP-SUMMARY.json');
fs.writeFileSync(summaryPath, JSON.stringify({
  generated: new Date().toISOString(),
  domain,
  totalUrls: pages.length,
  priorityBreakdown,
  topPages: pages.filter(p => p.priority >= 0.8).map(p => ({
    url: p.url || 'homepage',
    priority: p.priority,
  })),
}, null, 2));

console.log(`\n📝 Summary saved to: SITEMAP-SUMMARY.json\n`);

// Validate sitemap
console.log(`\n🔍 Validation:`);
if (pages.length > 0) {
  console.log(`  ✅ Contains URLs`);
} else {
  console.log(`  ❌ No URLs found`);
}

if (pages.some(p => p.url === '')) {
  console.log(`  ✅ Homepage included`);
} else {
  console.log(`  ⚠️  Homepage missing`);
}

if (xml.length < 50000000) { // 50MB limit
  console.log(`  ✅ Size OK (${(xml.length / 1024).toFixed(1)} KB)`);
} else {
  console.log(`  ❌ Sitemap too large (max 50MB)`);
}

if (pages.length <= 50000) {
  console.log(`  ✅ URL count OK (${pages.length}/50000 max)`);
} else {
  console.log(`  ❌ Too many URLs (need sitemap index)`);
}

console.log(`\n📤 Next Steps:`);
console.log(`  1. Review the sitemap at: itl-website/public/sitemap.xml`);
console.log(`  2. Update domain if needed: node scripts/02-sitemap-generator.js https://yourdomain.com`);
console.log(`  3. Submit to Google Search Console after launch`);
console.log(`  4. Update robots.txt with: Sitemap: ${domain}/sitemap.xml\n`);
