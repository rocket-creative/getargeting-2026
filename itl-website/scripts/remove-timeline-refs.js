#!/usr/bin/env node

/**
 * Remove Timeline References Script
 * Removes all references to /model-generation-timeline page
 */

const fs = require('fs');
const path = require('path');

const filesToFix = [
  './src/app/breeding-scheme-architect/page.tsx',
  './src/app/reporter-selection-guide/page.tsx',
  './src/app/oncology-mouse-models/page.tsx',
  './src/app/conditional-vs-conventional-guide/page.tsx',
  './src/app/cdna-knockin/page.tsx',
  './src/app/pricing-overview/page.tsx',
  './src/app/transgenic-mouse-service/page.tsx',
  './src/app/technologies/page.tsx',
  './src/app/neuroscience-mouse-models/page.tsx',
  './src/app/speed-expansion-breeding/page.tsx',
  './src/app/sitemap.ts',
  './src/app/rheumatoid-arthritis-mice/page.tsx',
  './src/app/resources/page.tsx',
  './src/app/pd1-humanized-mice/page.tsx',
  './src/app/page.tsx',
  './src/app/mouse-genotyping-service/page.tsx',
  './src/app/lag3-humanized-mice/page.tsx',
  './src/app/knockout-strategy-guide/page.tsx',
  './src/app/immunology-mouse-models/page.tsx',
  './src/app/hypertension-mouse-models/page.tsx',
  './src/app/humanized-mouse-models/page.tsx',
  './src/app/gene-replacement/page.tsx',
  './src/app/cystic-fibrosis-mice/page.tsx',
  './src/app/cre-line-selection-guide/page.tsx',
  './src/app/conventional-knockout-mouse-models/page.tsx',
  './src/app/cardiac-fibrosis-mice/page.tsx',
  './src/app/allergy-asthma-mouse-models/page.tsx'
];

let filesChanged = 0;
let totalLinesRemoved = 0;

console.log('Starting timeline reference removal...\n');

filesToFix.forEach((relativePath) => {
  const fullPath = path.join(__dirname, '..', relativePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠ Skipping ${relativePath} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  const originalLineCount = content.split('\n').length;
  
  // Remove lines containing /model-generation-timeline
  const lines = content.split('\n');
  const filteredLines = lines.filter(line => 
    !line.includes('/model-generation-timeline') &&
    !line.includes('model-generation-timeline')
  );
  
  content = filteredLines.join('\n');
  
  if (content !== originalContent) {
    const linesRemoved = originalLineCount - filteredLines.length;
    fs.writeFileSync(fullPath, content, 'utf8');
    filesChanged++;
    totalLinesRemoved += linesRemoved;
    console.log(`✓ ${relativePath} (${linesRemoved} lines removed)`);
  }
});

console.log('\n---');
console.log('Timeline reference removal complete!');
console.log(`Files changed: ${filesChanged}`);
console.log(`Total lines removed: ${totalLinesRemoved}`);
