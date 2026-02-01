#!/usr/bin/env node
/**
 * Lowercase Brand Name Script
 * Replaces "Ingenious Targeting Laboratory" with "ingenious targeting laboratory"
 * across all source files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all .tsx and .ts files (excluding node_modules, dist, .next)
const getFiles = () => {
  const output = execSync(
    `find ./src -type f \\( -name "*.tsx" -o -name "*.ts" \\) -not -path "*/node_modules/*" -not -path "*/.next/*" -not -path "*/dist/*"`,
    { cwd: path.join(__dirname, '..'), encoding: 'utf8' }
  );
  return output.trim().split('\n').filter(Boolean);
};

let filesChanged = 0;
let totalReplacements = 0;

console.log('Starting brand name lowercase conversion...\n');

const files = getFiles();
console.log(`Found ${files.length} files to process\n`);

files.forEach((file) => {
  const fullPath = path.join(__dirname, '..', file);
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Replace all instances
  content = content.replace(/Ingenious Targeting Laboratory/g, 'ingenious targeting laboratory');
  
  if (content !== originalContent) {
    const matches = (originalContent.match(/Ingenious Targeting Laboratory/g) || []).length;
    fs.writeFileSync(fullPath, content, 'utf8');
    filesChanged++;
    totalReplacements += matches;
    console.log(`✓ ${file} (${matches} replacements)`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`Conversion complete!`);
console.log(`Files changed: ${filesChanged}`);
console.log(`Total replacements: ${totalReplacements}`);
console.log(`${'='.repeat(60)}\n`);
