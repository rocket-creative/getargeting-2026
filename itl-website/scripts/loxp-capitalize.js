#!/usr/bin/env node

/**
 * LoxP Capitalization Script
 * Changes "loxP" to "LoxP" site-wide
 * 
 * NOTE: This overrides scientific nomenclature convention where "loxP" (lowercase 'l') is correct.
 * Proceeding per explicit user request.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Search from project root, not just itl-website/src
const rootDir = path.join(__dirname, '../..');

const getFiles = () => {
  try {
    const output = execSync(
      'find . -type f \\( -name "*.tsx" -o -name "*.ts" -o -name "*.md" \\) ! -path "*/node_modules/*" ! -path "*/.next/*" ! -path "*/dist/*" ! -path "*/.git/*" ! -path "*/extracted-changes/*"',
      { encoding: 'utf8', cwd: rootDir }
    );
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

let filesChanged = 0;
let totalReplacements = 0;

console.log('Starting LoxP capitalization change...\n');
console.log(`Searching from: ${rootDir}\n`);

const files = getFiles();
console.log(`Found ${files.length} files to process\n`);

files.forEach((file) => {
  const fullPath = path.join(rootDir, file);
  
  if (!fs.existsSync(fullPath)) {
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Replace loxP with LoxP (case-sensitive, word boundary)
  content = content.replace(/\bloxP\b/g, 'LoxP');
  
  if (content !== originalContent) {
    const matches = (originalContent.match(/\bloxP\b/g) || []).length;
    fs.writeFileSync(fullPath, content, 'utf8');
    filesChanged++;
    totalReplacements += matches;
    console.log(`✓ ${file} (${matches} replacements)`);
  }
});

console.log('\n---');
console.log('LoxP capitalization complete!');
console.log(`Files changed: ${filesChanged}`);
console.log(`Total replacements: ${totalReplacements}`);
console.log('\nNOTE: This change overrides scientific nomenclature where "loxP" (lowercase) is correct.');
