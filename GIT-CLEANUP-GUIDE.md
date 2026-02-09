# Git Repository Cleanup Guide

## Problem Summary

Your git repository is **221MB** and causing Vercel deployments to fail with:
```
There was a permanent problem cloning the repo.
```

**Root cause:** Large files (zip files, PDFs, images) were committed to git history before being added to `.gitignore`.

---

## Quick Diagnosis

```bash
# Check current repo size
du -sh .git
# Output: 221M

# Find largest files in history
git rev-list --objects --all | \
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | \
  sed -n 's/^blob //p' | sort -nrk2 | head -10
```

**Largest files found:**
- `FINAL-20260121T180410Z-3-001.zip` → 21.5MB
- `round2/FINAL-20260112T021538Z-3-001.zip` → 18.3MB
- Various PDFs and images in `webflow-assets-2026-02-02/` → 2-4MB each

---

## Solution Options

### Option 1: Automated Cleanup Script (Recommended)

**Use the provided script:**
```bash
cd /Users/rocketcreative/Desktop/CURSER\ BUILDS/ITL_2026
./clean-git-history.sh
```

This removes:
- All `*.zip` files from history
- `webflow-assets-2026-02-02/` folder
- `images/sci-draw/` folder

**Expected result:** .git size reduced from 221MB to ~30-50MB

---

### Option 2: Use BFG Repo-Cleaner (Alternative)

If you prefer a well-tested tool:

1. **Install BFG:**
   ```bash
   brew install bfg
   ```

2. **Clone a fresh copy (optional but safer):**
   ```bash
   cd ~/Desktop
   git clone --mirror git@github.com:rocket-creative/getargeting-2026.git
   cd getargeting-2026.git
   ```

3. **Remove large files:**
   ```bash
   # Remove files larger than 10MB
   bfg --strip-blobs-bigger-than 10M
   
   # Or remove specific files
   bfg --delete-files "*.zip"
   bfg --delete-folders "webflow-assets-2026-02-02"
   ```

4. **Clean up:**
   ```bash
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```

5. **Force push:**
   ```bash
   git push --force
   ```

---

### Option 3: Manual git filter-branch

If you want full control:

```bash
# Create backup
git branch backup-before-cleanup

# Remove zip files
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch "*.zip"' \
  --prune-empty --tag-name-filter cat -- --all

# Remove large folder
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch -r "webflow-assets-2026-02-02/"' \
  --prune-empty --tag-name-filter cat -- --all

# Cleanup
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push origin --force --all
git push origin --force --tags
```

---

## After Cleanup

### Step 1: Verify Size Reduction
```bash
du -sh .git
# Should show: ~30-50M instead of 221M
```

### Step 2: Force Push to Remote
```bash
git push origin --force --all
git push origin --force --tags
```

### Step 3: Notify Team
⚠️ **All team members must:**

**Option A - Re-clone (Safest):**
```bash
cd ~/Desktop
mv ITL_2026 ITL_2026_OLD
git clone git@github.com:rocket-creative/getargeting-2026.git ITL_2026
cd ITL_2026
git checkout ITL_2026_MAIN
```

**Option B - Reset (Faster):**
```bash
cd ITL_2026
git fetch origin
git reset --hard origin/ITL_2026_MAIN
git clean -fd
```

### Step 4: Trigger Vercel Deployment
After force push, Vercel will automatically detect the change and start a new deployment. This time, the clone should succeed because the repo is much smaller.

---

## Preventing Future Issues

### Update .gitignore
Make sure these patterns are in `.gitignore`:

```gitignore
# Large files
*.zip
*.tar.gz
*.7z

# Design assets
webflow-assets-*/
design-assets/
temp/
scratch/

# Large media (if not needed for production)
*.psd
*.ai
*.sketch
```

### Pre-commit Hook (Optional)
Create `.git/hooks/pre-commit`:

```bash
#!/bin/bash
# Prevent committing large files

large_files=$(git diff --cached --name-only | \
  xargs ls -l 2>/dev/null | \
  awk '$5 > 10485760 {print $9}')

if [ -n "$large_files" ]; then
  echo "ERROR: Attempting to commit files larger than 10MB:"
  echo "$large_files"
  echo ""
  echo "Add them to .gitignore or use Git LFS"
  exit 1
fi
```

Then make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

### Use Git LFS for Large Files (Future)
If you need to commit large files:

```bash
# Install Git LFS
brew install git-lfs
git lfs install

# Track large file types
git lfs track "*.zip"
git lfs track "*.pdf"
git lfs track "*.psd"

# Commit .gitattributes
git add .gitattributes
git commit -m "Configure Git LFS"
```

---

## FAQ

**Q: Will this delete files from my working directory?**  
A: No. This only removes files from git history, not your current files.

**Q: What if something goes wrong?**  
A: The script creates a `backup-before-cleanup` branch. You can restore with:
```bash
git reset --hard backup-before-cleanup
```

**Q: Can Vercel still clone during cleanup?**  
A: No. You'll need to pause deployments or wait until after force push.

**Q: How long does cleanup take?**  
A: 2-5 minutes depending on repo size and computer speed.

**Q: Will commit history be lost?**  
A: No. All commits remain, only the large file contents are removed.

---

## Troubleshooting

### "refusing to allow a Personal Access Token"
Use SSH instead of HTTPS:
```bash
git remote set-url origin git@github.com:rocket-creative/getargeting-2026.git
```

### "You are not allowed to force push"
Check GitHub branch protection rules and temporarily disable them for the force push.

### "Pack exceeds maximum allowed size"
Your remote might have size limits. Contact GitHub support or use:
```bash
git config http.postBuffer 524288000
```

### Still showing large size after cleanup
Run aggressive garbage collection:
```bash
git gc --aggressive --prune=now
```

---

## Success Criteria

✅ `.git` folder is < 50MB  
✅ `git clone` completes in < 30 seconds  
✅ Vercel deployment clones successfully  
✅ No large files in `git log --all --pretty=format: --name-only | sort -u`  
✅ Team members can clone/pull without issues
