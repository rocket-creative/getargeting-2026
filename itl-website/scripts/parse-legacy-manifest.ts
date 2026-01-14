/**
 * Legacy Manifest Parser
 * 
 * Parses the legacy_replication_link_file.md and generates:
 * 1. A JSON manifest of all legacy pages
 * 2. A redirect configuration for Next.js
 * 
 * Usage: npx ts-node scripts/parse-legacy-manifest.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface LegacyPageEntry {
  legacyUrl: string;
  legacyMd: string;
  suggestedNewBuildUrl: string;
  urlHandling: 'reuse' | 'redirect' | 'retire' | 'keep_or_redirect';
  linkFromPages: string[];
  notes: string;
}

interface LegacyManifest {
  generated: string;
  sourceUrl: string;
  totalPages: number;
  entries: LegacyPageEntry[];
}

interface NextJsRedirect {
  source: string;
  destination: string;
  permanent: boolean;
}

function parseManifestFile(filePath: string): LegacyManifest {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  const entries: LegacyPageEntry[] = [];
  let currentEntry: Partial<LegacyPageEntry> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect start of a new entry (## https://www.genetargeting.com/...)
    if (line.startsWith('## https://www.genetargeting.com')) {
      // Save previous entry if exists
      if (currentEntry && currentEntry.legacyUrl) {
        entries.push(currentEntry as LegacyPageEntry);
      }
      
      // Start new entry
      currentEntry = {
        legacyUrl: line.replace('## ', ''),
        legacyMd: '',
        suggestedNewBuildUrl: '',
        urlHandling: 'reuse',
        linkFromPages: [],
        notes: '',
      };
      continue;
    }
    
    if (!currentEntry) continue;
    
    // Parse legacy_md
    if (line.startsWith('- **legacy_md:**')) {
      const match = line.match(/`([^`]+)`/);
      if (match) {
        currentEntry.legacyMd = match[1];
      }
    }
    
    // Parse suggested_new_build_url
    if (line.startsWith('- **suggested_new_build_url:**')) {
      const match = line.match(/`([^`]+)`/);
      if (match) {
        currentEntry.suggestedNewBuildUrl = match[1];
      }
    }
    
    // Parse url_handling_suggestion
    if (line.startsWith('- **url_handling_suggestion:**')) {
      if (line.includes('redirect')) {
        currentEntry.urlHandling = 'redirect';
      } else if (line.includes('retire')) {
        currentEntry.urlHandling = 'retire';
      } else if (line.includes('keep_or_redirect')) {
        currentEntry.urlHandling = 'keep_or_redirect';
      } else {
        currentEntry.urlHandling = 'reuse';
      }
    }
    
    // Parse suggest_link_from_new_build_pages
    if (line.startsWith('- **suggest_link_from_new_build_pages:**')) {
      const match = line.match(/`([^`]+)`/g);
      if (match) {
        currentEntry.linkFromPages = match.map(m => m.replace(/`/g, ''));
      }
    }
    
    // Parse notes
    if (line.startsWith('- **notes:**')) {
      currentEntry.notes = line.replace('- **notes:**', '').trim();
    }
  }
  
  // Don't forget the last entry
  if (currentEntry && currentEntry.legacyUrl) {
    entries.push(currentEntry as LegacyPageEntry);
  }
  
  return {
    generated: new Date().toISOString().split('T')[0],
    sourceUrl: 'https://www.genetargeting.com',
    totalPages: entries.length,
    entries,
  };
}

function generateRedirects(manifest: LegacyManifest): NextJsRedirect[] {
  const redirects: NextJsRedirect[] = [];
  
  for (const entry of manifest.entries) {
    if (entry.urlHandling === 'redirect' || entry.urlHandling === 'keep_or_redirect') {
      // Extract path from legacy URL
      const url = new URL(entry.legacyUrl);
      const sourcePath = url.pathname;
      
      // Only add redirect if destination is different and valid
      if (
        entry.suggestedNewBuildUrl && 
        entry.suggestedNewBuildUrl !== '(manual mapping needed)' &&
        sourcePath !== entry.suggestedNewBuildUrl
      ) {
        redirects.push({
          source: sourcePath.endsWith('/') ? sourcePath : `${sourcePath}`,
          destination: entry.suggestedNewBuildUrl,
          permanent: true,
        });
      }
    }
  }
  
  return redirects;
}

function generatePagesList(manifest: LegacyManifest): string[] {
  const pages: string[] = [];
  
  for (const entry of manifest.entries) {
    if (entry.urlHandling === 'reuse') {
      const url = new URL(entry.legacyUrl);
      pages.push(url.pathname);
    }
  }
  
  return pages;
}

// Main execution
const rootDir = path.resolve(__dirname, '../..');
const manifestPath = path.join(rootDir, 'legacy_replication_link_file.md');
const outputDir = path.join(__dirname, '../src/lib/legacy');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Parsing legacy manifest file...');
const manifest = parseManifestFile(manifestPath);
console.log(`Found ${manifest.totalPages} legacy pages`);

// Write manifest JSON
const manifestOutputPath = path.join(outputDir, 'manifest.json');
fs.writeFileSync(manifestOutputPath, JSON.stringify(manifest, null, 2));
console.log(`Written manifest to ${manifestOutputPath}`);

// Generate redirects
const redirects = generateRedirects(manifest);
const redirectsOutputPath = path.join(outputDir, 'redirects.json');
fs.writeFileSync(redirectsOutputPath, JSON.stringify(redirects, null, 2));
console.log(`Written ${redirects.length} redirects to ${redirectsOutputPath}`);

// Generate pages list
const pages = generatePagesList(manifest);
const pagesOutputPath = path.join(outputDir, 'pages-to-build.json');
fs.writeFileSync(pagesOutputPath, JSON.stringify(pages, null, 2));
console.log(`Written ${pages.length} pages to build to ${pagesOutputPath}`);

// Summary stats
const stats = {
  total: manifest.totalPages,
  reuse: manifest.entries.filter(e => e.urlHandling === 'reuse').length,
  redirect: manifest.entries.filter(e => e.urlHandling === 'redirect').length,
  retire: manifest.entries.filter(e => e.urlHandling === 'retire').length,
  keepOrRedirect: manifest.entries.filter(e => e.urlHandling === 'keep_or_redirect').length,
};

console.log('\n=== Summary ===');
console.log(`Total legacy pages: ${stats.total}`);
console.log(`Reuse (same URL): ${stats.reuse}`);
console.log(`Redirect to new URL: ${stats.redirect}`);
console.log(`Retire: ${stats.retire}`);
console.log(`Review needed: ${stats.keepOrRedirect}`);
