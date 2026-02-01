#!/usr/bin/env node

/**
 * Remove 404 Placeholder Pages Script
 * Removes case-studies, selection-cassette-design, and derivative-alleles pages
 * and all their references
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '../..');

// Patterns to remove
const patternsToRemove = [
  '/case-studies',
  '/selection-cassette-design',
  '/derivative-alleles'
];

let filesChanged = 0;
let totalLinesRemoved = 0;
let pagesDeleted = 0;

console.log('Starting 404 page removal...\n');

// Step 1: Delete the placeholder page directories
const pagesToDelete = [
  './itl-website/src/app/case-studies',
  './itl-website/src/app/selection-cassette-design',
  './itl-website/src/app/derivative-alleles'
];

pagesToDelete.forEach((pageDir) => {
  const fullPath = path.join(rootDir, pageDir);
  if (fs.existsSync(fullPath)) {
    // Delete directory and all contents
    fs.rmSync(fullPath, { recursive: true, force: true });
    pagesDeleted++;
    console.log(`✓ Deleted directory: ${pageDir}`);
  }
});

console.log('');

// Step 2: Find all TypeScript/TSX files that might reference these pages
const getFiles = () => {
  try {
    const output = execSync(
      'find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) ! -path "*/node_modules/*" ! -path "*/.next/*" ! -path "*/dist/*" ! -path "*/.git/*"',
      { encoding: 'utf8', cwd: rootDir }
    );
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

const files = getFiles();
console.log(`Found ${files.length} files to check for references\n`);

// Step 3: Remove references from all files
files.forEach((file) => {
  const fullPath = path.join(rootDir, file);
  
  if (!fs.existsSync(fullPath)) {
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  const originalLineCount = content.split('\n').length;
  
  // Remove lines containing references to deleted pages
  const lines = content.split('\n');
  const filteredLines = lines.filter(line => {
    const hasReference = patternsToRemove.some(pattern => 
      line.includes(pattern)
    );
    return !hasReference;
  });
  
  content = filteredLines.join('\n');
  
  if (content !== originalContent) {
    const linesRemoved = originalLineCount - filteredLines.length;
    fs.writeFileSync(fullPath, content, 'utf8');
    filesChanged++;
    totalLinesRemoved += linesRemoved;
    console.log(`✓ ${file} (${linesRemoved} lines removed)`);
  }
});

console.log('\n---');
console.log('404 page removal complete!');
console.log(`Directories deleted: ${pagesDeleted}`);
console.log(`Files changed: ${filesChanged}`);
console.log(`Total lines removed: ${totalLinesRemoved}`);
console.log('\nRemoved pages:');
console.log('- /case-studies');
console.log('- /selection-cassette-design');
console.log('- /derivative-alleles');
