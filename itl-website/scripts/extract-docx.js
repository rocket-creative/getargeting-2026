/**
 * |UXUIDC| DOCX Extraction Script
 * @description Extracts content from .docx files and converts to markdown
 * @version 1.0.0
 * @created 2026
 */

const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../../page-text');
const OUTPUT_DIR = path.join(__dirname, '../src/content/pages');

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

async function processAllFiles() {
  console.log('Starting DOCX extraction...');
  console.log(`Input directory: ${INPUT_DIR}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log('---');
  
  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.docx'));
  console.log(`Found ${files.length} .docx files\n`);
  
  const results = {
    success: [],
    failed: []
  };
  
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const baseName = file.replace('.docx', '');
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.md`);
    
    console.log(`Processing: ${file}`);
    
    const content = await extractDocx(inputPath);
    
    if (content) {
      // Create markdown file with frontmatter
      const frontmatter = `---
title: "${baseName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}"
slug: "${baseName}"
extracted: "${new Date().toISOString()}"
---

`;
      fs.writeFileSync(outputPath, frontmatter + content.markdown);
      results.success.push(file);
      console.log(`  ✓ Saved to: ${baseName}.md`);
    } else {
      results.failed.push(file);
      console.log(`  ✗ Failed to extract`);
    }
  }
  
  console.log('\n---');
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
