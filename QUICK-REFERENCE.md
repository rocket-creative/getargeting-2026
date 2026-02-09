# ITL Migration Quick Reference Card

## 🎯 ONE-PAGE SUMMARY

**Old Domain:** www.genetargeting.com  
**New Domain:** www.ingenious.com  
**Status:** ✅ Ready to launch (after Search Console setup)

---

## ✅ WHAT'S DONE

- ✅ **100% URL coverage** - All 57 old URLs mapped (29 exact, 28 redirected)
- ✅ **Sitemap generated** - 148 pages, 26KB
- ✅ **Critical canonicals fixed** - 3 pages updated
- ✅ **Redirects configured** - 29 permanent (301) redirects
- ✅ **Automation ready** - 5 scripts built and tested
- ✅ **Robots.txt updated** - Points to new domain

---

## ⚠️ BEFORE LAUNCH

### Must Do
1. **Google Search Console** - Add new domain, verify ownership
2. **Google Analytics** - Update GA4 tracking ID
3. **Test in staging** - Deploy and verify everything works
4. **Schedule launch** - Pick low traffic time (2-4 AM EST)

### Should Do (Not Blocking)
- Add metadata to service pages (143 pages need it)
- Test all forms
- Run performance audit

---

## 🚀 LAUNCH DAY (3 Steps)

### Step 1: Deploy (30 min before DNS)
```bash
vercel --prod
```

### Step 2: DNS Cutover
- Update DNS A record to point to Vercel
- Wait 15-60 min for propagation

### Step 3: Verify & Submit (Within 2 hours)
```bash
# Test redirects
node scripts/04-redirect-tester.js https://www.ingenious.com

# Submit to Google Search Console
# Old domain → Settings → Change of Address → New domain
```

---

## 📊 POST-LAUNCH MONITORING

### First 6 Hours (Every 30-60 min)
```bash
vercel logs production | node scripts/05-404-monitor.js
```

### First 24 Hours (Every 2-4 hours)
- Check Google Search Console for errors
- Monitor GA4 for traffic levels
- Test top 10 pages load correctly

### First Week (Daily)
- Run 404 monitor
- Check Search Console coverage
- Monitor traffic trends

---

## 🛠️ COMMAND CHEAT SHEET

```bash
# Generate sitemap
node scripts/02-sitemap-generator.js https://www.ingenious.com

# Audit metadata
node scripts/03-metadata-audit.js https://www.ingenious.com

# Test redirects
node scripts/04-redirect-tester.js https://www.ingenious.com

# Monitor 404s
vercel logs production | node scripts/05-404-monitor.js
```

---

## 🆘 EMERGENCY CONTACTS

| Issue | Action |
|-------|--------|
| Site down | Point DNS back to old site |
| 404 errors | Run 404 monitor, add redirects |
| Redirects broken | Check next.config.js, redeploy |
| Traffic dropped >20% | Check Search Console, verify redirects |

---

## 📚 FULL DOCS

- **README-MIGRATION.md** - Start here
- **LAUNCH-CHECKLIST.md** - Detailed checklist
- **MIGRATION-PLAN.md** - Complete strategy
- **scripts/README.md** - Script documentation

---

## 🎯 SUCCESS METRICS

| Timeline | Goal |
|----------|------|
| Week 1 | 90-100% traffic maintained |
| Week 4 | Full recovery, all pages indexed |
| Week 12 | Traffic exceeds baseline |

---

## 💡 KEY REMINDERS

1. ❌ **Never delete old domain** - Keep redirects forever
2. ✅ **Use 301 redirects** - Never 302 (temporary)
3. ⏱️ **Submit Change of Address within 2 hours** of DNS
4. 📊 **Monitor daily for first week**
5. 🎯 **Full SEO recovery takes 30-60 days** - be patient

---

**Print this card and keep it handy during launch!** 📄
