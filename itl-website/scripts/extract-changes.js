/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * |UXUIDC| Changes Extraction Script
 * @description Extracts content from changes folder .docx files
 */

const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const CHANGES_DIR = path.join(__dirname, '../../changes/New Website - George - 2026');
const OUTPUT_DIR = path.join(__dirname, '../extracted-changes');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function extractDocx(filePath) {
  try {
    const result = await mammoth.convertToHtml({ path: filePath });
    const html = result.value;
    
    // Convert HTML to simple markdown-like format
    let markdown = html
      // Headers
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
      .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
      // Bold and italic
      .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<b>(.*?)<\/b>/gi, '**$1**')
      .replace(/<em>(.*?)<\/em>/gi, '*$1*')
      .replace(/<i>(.*?)<\/i>/gi, '*$1*')
      // Lists
      .replace(/<ul>/gi, '\n')
      .replace(/<\/ul>/gi, '\n')
      .replace(/<ol>/gi, '\n')
      .replace(/<\/ol>/gi, '\n')
      .replace(/<li>(.*?)<\/li>/gi, '- $1\n')
      // Paragraphs and line breaks
      .replace(/<p>(.*?)<\/p>/gi, '$1\n\n')
      .replace(/<br\s*\/?>/gi, '\n')
      // Links
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      // Remove remaining HTML tags
      .replace(/<[^>]+>/g, '')
      // Clean up whitespace
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    
    // Also get plain text for reference
    const textResult = await mammoth.extractRawText({ path: filePath });
    
    return {
      markdown,
      plainText: textResult.value,
      warnings: result.messages
    };
  } catch (error) {
    console.error(`Error extracting ${filePath}:`, error.message);
    return null;
  }
}

async function getAllDocxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(await getAllDocxFiles(fullPath));
    } else if (item.name.endsWith('.docx') && !item.name.startsWith('~$')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function processAllFiles() {
  console.log('Starting changes extraction...');
  console.log(`Input directory: ${CHANGES_DIR}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log('---\n');
  
  const files = await getAllDocxFiles(CHANGES_DIR);
  console.log(`Found ${files.length} .docx files\n`);
  
  const results = {
    success: [],
    failed: []
  };
  
  for (const filePath of files) {
    const relativePath = path.relative(CHANGES_DIR, filePath);
    const baseName = path.basename(filePath, '.docx');
    const category = path.dirname(relativePath);
    
    console.log(`Processing: ${relativePath}`);
    
    const content = await extractDocx(filePath);
    
    if (content) {
      // Create output directory for category
      const categoryDir = category === '.' ? OUTPUT_DIR : path.join(OUTPUT_DIR, category);
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
      }
      
      const outputPath = path.join(categoryDir, `${baseName}.md`);
      
      // Create markdown file with metadata
      const frontmatter = `---
file: "${baseName}"
category: "${category}"
extracted: "${new Date().toISOString()}"
source: "${relativePath}"
---

`;
      fs.writeFileSync(outputPath, frontmatter + content.markdown);
      
      // Also save plain text version
      const txtPath = path.join(categoryDir, `${baseName}.txt`);
      fs.writeFileSync(txtPath, content.plainText);
      
      results.success.push(relativePath);
      console.log(`  ✓ Saved to: ${path.relative(OUTPUT_DIR, outputPath)}`);
    } else {
      results.failed.push(relativePath);
      console.log(`  ✗ Failed to extract`);
    }
    console.log('');
  }
  
  console.log('---');
  console.log('Extraction complete!');
  console.log(`Success: ${results.success.length}`);
  console.log(`Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\nFailed files:');
    results.failed.forEach(f => console.log(`  - ${f}`));
  }
  
  return results;
}

// Run the extraction
processAllFiles();
