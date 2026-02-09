#!/usr/bin/env node

/**
 * 404 Monitor
 * Monitors for 404 errors from Vercel logs or server logs
 * Run this post-launch to catch missing redirects
 * 
 * Usage: 
 *   node scripts/05-404-monitor.js [log-file]
 *   OR pipe logs: vercel logs your-deployment | node scripts/05-404-monitor.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const logFile = process.argv[2];

console.log(`\n🔍 404 MONITOR\n`);

const notFoundUrls = new Map(); // URL -> count
const userAgents = new Map(); // URL -> user agents
const referrers = new Map(); // URL -> referrers
let totalRequests = 0;
let total404s = 0;

async function processLine(line) {
  totalRequests++;
  
  // Try to parse as JSON (Vercel logs)
  if (line.trim().startsWith('{')) {
    try {
      const log = JSON.parse(line);
      
      if (log.statusCode === 404 || log.status === 404) {
        const url = log.path || log.url || log.request?.url || 'unknown';
        const userAgent = log.headers?.['user-agent'] || log.userAgent || 'unknown';
        const referrer = log.headers?.referer || log.referer || 'none';
        
        recordNotFound(url, userAgent, referrer);
      }
    } catch (e) {
      // Not JSON, try text parsing
      parseTextLog(line);
    }
  } else {
    parseTextLog(line);
  }
}

function parseTextLog(line) {
  // Common log formats
  // Apache/Nginx: ... "GET /path HTTP/1.1" 404 ...
  // Next.js: ... 404 GET /path ...
  
  if (line.includes(' 404 ')) {
    const match = line.match(/(?:GET|POST|PUT|DELETE)\s+([^\s"]+)/);
    if (match) {
      const url = match[1];
      const uaMatch = line.match(/"([^"]*Mozilla[^"]*)"/);
      const userAgent = uaMatch ? uaMatch[1] : 'unknown';
      const refMatch = line.match(/"([^"]+)"\s+"[^"]*Mozilla/);
      const referrer = refMatch ? refMatch[1] : 'none';
      
      recordNotFound(url, userAgent, referrer);
    }
  }
}

function recordNotFound(url, userAgent, referrer) {
  // Filter out common non-issues
  if (
    url.includes('favicon') ||
    url.includes('.map') ||
    url.includes('wp-admin') ||
    url.includes('wp-login') ||
    url.includes('xmlrpc') ||
    url.includes('.php') ||
    url.includes('/admin') && !url.startsWith('/admin') // External admin attempts
  ) {
    return;
  }
  
  total404s++;
  
  // Count
  notFoundUrls.set(url, (notFoundUrls.get(url) || 0) + 1);
  
  // Store user agent
  if (!userAgents.has(url)) {
    userAgents.set(url, new Set());
  }
  userAgents.get(url).add(userAgent.substring(0, 100));
  
  // Store referrer
  if (referrer !== 'none' && referrer !== '-') {
    if (!referrers.has(url)) {
      referrers.set(url, new Set());
    }
    referrers.get(url).add(referrer);
  }
}

async function processLogs() {
  const rl = readline.createInterface({
    input: logFile ? fs.createReadStream(logFile) : process.stdin,
    crlfDelay: Infinity,
  });
  
  for await (const line of rl) {
    await processLine(line);
  }
  
  // Print results
  console.log(`📊 Analysis Complete\n`);
  console.log(`Total requests processed: ${totalRequests}`);
  console.log(`404 errors found: ${total404s}\n`);
  
  if (notFoundUrls.size === 0) {
    console.log(`✅ No 404 errors found! (or no logs to process)\n`);
    return;
  }
  
  // Sort by frequency
  const sorted = Array.from(notFoundUrls.entries())
    .sort((a, b) => b[1] - a[1]);
  
  console.log(`📋 Top 404s (by frequency):\n`);
  
  sorted.slice(0, 20).forEach(([url, count]) => {
    console.log(`  ${count}x - ${url}`);
    
    // Show referrers if available
    const refs = referrers.get(url);
    if (refs && refs.size > 0) {
      const refList = Array.from(refs).slice(0, 2);
      console.log(`     Referred from: ${refList.join(', ')}`);
    }
    
    // Show if bots or humans
    const agents = userAgents.get(url);
    if (agents) {
      const isBot = Array.from(agents).some(ua => 
        ua.toLowerCase().includes('bot') || 
        ua.toLowerCase().includes('crawler') ||
        ua.toLowerCase().includes('spider')
      );
      console.log(`     ${isBot ? '🤖 Bot' : '👤 Human'} traffic`);
    }
    
    console.log('');
  });
  
  if (sorted.length > 20) {
    console.log(`  ... and ${sorted.length - 20} more\n`);
  }
  
  // Save report
  const reportPath = path.join(__dirname, '../404-MONITOR-REPORT.json');
  
  fs.writeFileSync(reportPath, JSON.stringify({
    reportDate: new Date().toISOString(),
    totalRequests,
    total404s,
    uniqueUrls: notFoundUrls.size,
    top404s: sorted.slice(0, 50).map(([url, count]) => ({
      url,
      count,
      referrers: referrers.has(url) ? Array.from(referrers.get(url)) : [],
      isBot: userAgents.has(url) && Array.from(userAgents.get(url)).some(ua => 
        ua.toLowerCase().includes('bot') || 
        ua.toLowerCase().includes('crawler')
      ),
    })),
  }, null, 2));
  
  console.log(`📝 Full report saved to: 404-MONITOR-REPORT.json\n`);
  
  // Suggestions
  console.log(`💡 Next Steps:\n`);
  console.log(`  1. Review URLs above - are these old pages you forgot?`);
  console.log(`  2. Add missing redirects to redirects.json`);
  console.log(`  3. Check if URLs are being linked from somewhere (see referrers)`);
  console.log(`  4. Monitor again in 24-48 hours after fixes\n`);
  console.log(`  Example redirect to add:\n`);
  
  if (sorted.length > 0) {
    const [topUrl] = sorted[0];
    console.log(`  {`);
    console.log(`    "source": "${topUrl}",`);
    console.log(`    "destination": "/appropriate-page/",`);
    console.log(`    "permanent": true`);
    console.log(`  }\n`);
  }
}

processLogs().catch(err => {
  console.error(`\n❌ Error: ${err.message}\n`);
  process.exit(1);
});
