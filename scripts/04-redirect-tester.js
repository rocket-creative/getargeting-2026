#!/usr/bin/env node

/**
 * Redirect Tester
 * Tests all redirects are working (301 status, correct destination)
 * Run this in staging/production AFTER deployment
 * 
 * Usage: node scripts/04-redirect-tester.js [domain]
 * Example: node scripts/04-redirect-tester.js https://staging.yourdomain.com
 */

const https = require('https');
const http = require('http');

const domain = process.argv[2];

if (!domain) {
  console.error('\n❌ Error: Domain required\n');
  console.log('Usage: node scripts/04-redirect-tester.js https://yourdomain.com\n');
  process.exit(1);
}

// Load redirects from config
const redirects = require('../itl-website/src/lib/legacy/redirects.json');

console.log(`\n🔍 REDIRECT TESTER\n`);
console.log(`Testing domain: ${domain}`);
console.log(`Total redirects to test: ${redirects.length}\n`);

const results = {
  passed: [],
  failed: [],
  warnings: [],
};

let completed = 0;

async function testRedirect(redirect) {
  const { source, destination, permanent } = redirect;
  const testUrl = `${domain}${source}`;
  
  return new Promise((resolve) => {
    const protocol = domain.startsWith('https') ? https : http;
    
    const req = protocol.get(testUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (SEO Redirect Tester)',
      },
      // Don't follow redirects automatically
      followRedirect: false,
    }, (res) => {
      const statusCode = res.statusCode;
      const location = res.headers.location;
      
      completed++;
      process.stdout.write(`\rProgress: ${completed}/${redirects.length}`);
      
      // Check status code
      if (permanent && statusCode !== 301) {
        results.failed.push({
          source,
          destination,
          issue: `Expected 301, got ${statusCode}`,
          location,
        });
      } else if (!permanent && statusCode !== 302) {
        results.warnings.push({
          source,
          destination,
          issue: `Expected 302, got ${statusCode}`,
          location,
        });
      } else if (statusCode < 300 || statusCode >= 400) {
        results.failed.push({
          source,
          destination,
          issue: `Not a redirect (${statusCode})`,
        });
      } else {
        // Check destination
        const expectedDest = destination.startsWith('http') ? destination : `${domain}${destination}`;
        const actualDest = location?.startsWith('http') ? location : (location ? `${domain}${location}` : null);
        
        if (!actualDest) {
          results.failed.push({
            source,
            destination,
            issue: 'No Location header',
            statusCode,
          });
        } else if (actualDest.replace(/\/$/, '') !== expectedDest.replace(/\/$/, '')) {
          results.failed.push({
            source,
            destination,
            issue: 'Wrong destination',
            expected: expectedDest,
            actual: actualDest,
            statusCode,
          });
        } else {
          results.passed.push({
            source,
            destination,
            statusCode,
          });
        }
      }
      
      resolve();
    });
    
    req.on('error', (err) => {
      completed++;
      process.stdout.write(`\rProgress: ${completed}/${redirects.length}`);
      
      results.failed.push({
        source,
        destination,
        issue: `Request failed: ${err.message}`,
      });
      resolve();
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      completed++;
      process.stdout.write(`\rProgress: ${completed}/${redirects.length}`);
      
      results.failed.push({
        source,
        destination,
        issue: 'Timeout (5s)',
      });
      resolve();
    });
  });
}

async function runTests() {
  // Test in batches of 5 to avoid overwhelming server
  for (let i = 0; i < redirects.length; i += 5) {
    const batch = redirects.slice(i, i + 5);
    await Promise.all(batch.map(testRedirect));
  }
  
  console.log('\n\n');
  
  // Print results
  console.log(`✅ Passed: ${results.passed.length}/${redirects.length}`);
  console.log(`❌ Failed: ${results.failed.length}/${redirects.length}`);
  console.log(`⚠️  Warnings: ${results.warnings.length}/${redirects.length}\n`);
  
  if (results.failed.length > 0) {
    console.log(`\n❌ FAILED REDIRECTS:\n`);
    results.failed.forEach(({ source, destination, issue, expected, actual, statusCode }) => {
      console.log(`  ${source} → ${destination}`);
      console.log(`     Issue: ${issue}`);
      if (statusCode) console.log(`     Status: ${statusCode}`);
      if (expected) console.log(`     Expected: ${expected}`);
      if (actual) console.log(`     Actual: ${actual}`);
      console.log('');
    });
  }
  
  if (results.warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS:\n`);
    results.warnings.forEach(({ source, destination, issue }) => {
      console.log(`  ${source} → ${destination}`);
      console.log(`     ${issue}\n`);
    });
  }
  
  if (results.passed.length === redirects.length) {
    console.log(`\n🎉 All redirects working perfectly!\n`);
  }
  
  // Save report
  const fs = require('fs');
  const path = require('path');
  const reportPath = path.join(__dirname, '../REDIRECT-TEST-REPORT.json');
  
  fs.writeFileSync(reportPath, JSON.stringify({
    testDate: new Date().toISOString(),
    domain,
    totalTested: redirects.length,
    passed: results.passed.length,
    failed: results.failed.length,
    warnings: results.warnings.length,
    results,
  }, null, 2));
  
  console.log(`📝 Full report saved to: REDIRECT-TEST-REPORT.json\n`);
  
  // Exit with error if any failed
  process.exit(results.failed.length > 0 ? 1 : 0);
}

runTests().catch(err => {
  console.error(`\n❌ Test failed: ${err.message}\n`);
  process.exit(1);
});
