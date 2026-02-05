# Breeding Planner Test Cases

## How to Test the Fixed Breeding Planner

Use these three test cases from the video transcript to verify all fixes are working correctly.

---

## Test Case 1: Simple Heterozygous Cross (Any Sex)

### Input Configuration:

**Starting Alleles:**
- Gene: NQO2
- Allele Type: Conditional Knockout (floxed)
- Starting Genotype: Heterozygous
- Chromosome: 13

**Target Genotypes:**
- **Experimental:** Homozygous (fl/fl), Number: 10, Sex: Any
- **Control:** Wild-type (+/+), Number: 10, Sex: Any

### Expected Output:

#### Estimated Resources:
- ✅ **Generations to target genotype:** 1
- ✅ **Estimated breeding pairs needed:** 9
- ✅ **Estimated total mice generated:** 63
- ✅ **Estimated timeline:** 9 weeks
- ✅ **Target genotype frequency:** 25.0%

#### Generation 1:
**Cross:** NQO2 +/fl × NQO2 +/fl  
**Purpose:** Fix NQO2 floxed allele to homozygosity

**Expected Offspring:**
- 25% fl/fl - **Control** (blue/teal color)
- 50% +/fl - Not needed (gray)
- 25% +/+ - **Experimental** (blue/teal color)

#### Calculation Breakdown:
```
Target mice: 10 HOM + 10 WT = 20 mice
Frequency: 25% (from HET × HET)
Sex multiplier: 1 (any sex)

Pups needed: 20 / 0.25 = 40 pups
Litters needed: 40 / 6 (lower-end) = 6.67 litters
Breeding pairs: 6.67 / 0.8 (efficiency) = 8.33 → 9 pairs

Total mice estimate: 9 × 7 (average) = 63 mice
```

---

## Test Case 2: Simple Heterozygous Cross (Male Only)

### Input Configuration:

**Starting Alleles:**
- Gene: NQO2
- Allele Type: Conditional Knockout (floxed)
- Starting Genotype: Heterozygous
- Chromosome: 13

**Target Genotypes:**
- **Experimental:** Homozygous (fl/fl), Number: 10, Sex: Male only
- **Control:** Wild-type (+/+), Number: 10, Sex: Male only

### Expected Output:

#### Estimated Resources:
- ✅ **Generations to target genotype:** 1
- ✅ **Estimated breeding pairs needed:** 17
- ✅ **Estimated total mice generated:** 119
- ✅ **Estimated timeline:** 9 weeks
- ✅ **Target genotype frequency:** 12.5%

#### Generation 1:
**Cross:** NQO2 +/fl × NQO2 +/fl  
**Purpose:** Fix NQO2 floxed allele to homozygosity

**Expected Offspring:** (same ratios as Test 1, but need 2× mice for sex)
- 25% fl/fl - Experimental
- 50% +/fl - Not needed
- 25% +/+ - Control

#### Calculation Breakdown:
```
Target mice: 10 HOM + 10 WT = 20 mice
Allele frequency: 25% (from HET × HET)
Sex frequency: 50% (male only)
Combined frequency: 25% × 50% = 12.5%

Pups needed: 20 / 0.125 = 80 pups
Litters needed: 80 / 6 (lower-end) = 13.33 litters
Breeding pairs: 13.33 / 0.8 (efficiency) = 16.67 → 17 pairs

Total mice estimate: 17 × 7 (average) = 119 mice

Expected outcomes per sex:
- ~15 males fl/fl, ~15 females fl/fl
- ~30 males +/fl, ~30 females +/fl  
- ~15 males +/+, ~15 females +/+
```

---

## Test Case 3: Cre/loxP Multi-Generation Scheme

### Input Configuration:

**Starting Alleles:**

1. **Allele 1:**
   - Gene: NQO2
   - Allele Type: Conditional Knockout (floxed)
   - Starting Genotype: Heterozygous
   - Chromosome: 13

2. **Allele 2:**
   - Gene: Tg(Cd8a-cre)1Itan
   - Allele Type: Cre Driver (constitutive)
   - Starting Genotype: Hemizygous (purchase from vendor)
   - Chromosome: (leave blank or specify)

**Target Genotypes:**
- **Experimental:** NQO2 fl/fl + Tg(Cd8a-cre) Tg+, Number: 10, Sex: Any
- **Control:** NQO2 +/+ + Tg(Cd8a-cre) Tg-, Number: 10, Sex: Any

### Expected Output:

#### Estimated Resources:
- ✅ **Generations to target genotype:** 3 ⚠️ (was incorrectly 2)
- ✅ **Total breeding pairs:** ~19 across all generations
- ✅ **Estimated total mice generated:** ~133
- ✅ **Estimated timeline:** ~27 weeks (3 generations × 9 weeks)
- ✅ **Target genotype frequency:** 25.0% (in final generation)

---

### Generation 1 Details:

**Cross:** NQO2 +/fl × NQO2 +/fl  
**Purpose:** Fix NQO2 floxed allele to homozygosity

**Resources:**
- Breeding pairs: 8
- Total mice: 56
- Timeline: 9 weeks

**Expected Offspring:**
- 25% fl/fl - **Keeper** (blue color) - Save for Generation 3
- 50% +/fl - Not needed (gray)
- 25% +/+ - **Control** (navy color) - Final control mice

**Calculation:**
```
Need 9 fl/fl for Gen 3 + 9 +/+ controls = 18 mice
Frequency: 25% each
Pups needed: 18 / 0.25 = 36 pups (for one genotype) → 36 total

36 / 6 = 6 litters
6 / 0.8 = 7.5 → 8 breeding pairs
8 × 7 = 56 mice total
```

---

### Generation 2 Details:

**Cross:** NQO2 fl/fl; Tg- × NQO2 +/+; Tg+  
**Purpose:** Introduce Tg(Cd8a-cre) transgene

**Resources:**
- Breeding pairs: 2
- Total mice: 14
- Timeline: 9 weeks (cumulative: 18 weeks)

**Expected Offspring:**
- 100% (+/fl; Tg+) - **Keeper** (blue color) - Save 9 for Generation 3

**Note:** This assumes purchasing homozygous Cre+ mice from vendor (JAX/Taconic)

**Calculation:**
```
Need 9 mice of (+/fl; Tg+) genotype
Frequency: 100% (all offspring have this genotype)
Pups needed: 9 / 1.0 = 9 pups

9 / 6 = 1.5 litters
1.5 / 0.8 = 1.875 → 2 breeding pairs
2 × 7 = 14 mice total
```

---

### Generation 3 Details:

**Cross:** NQO2 +/fl; Tg+ × NQO2 fl/fl; Tg-  
**Purpose:** Generate experimental and control cohorts

**Resources:**
- Breeding pairs: 9
- Total mice: 63
- Timeline: 9 weeks (cumulative: 27 weeks total)

**Expected Offspring:**
- 25% fl/fl; Tg+ - **Experimental** (teal color) ⭐ TARGET
- 25% fl/fl; Tg- - Not needed (gray)
- 25% +/fl; Tg+ - Not needed (gray)
- 25% +/fl; Tg- - Not needed (gray)

**Punnett Square:**
```
            Nc (NQO2 mut/+, Tg+)
        |   NC    |   Nc    |
    ----|---------|---------|
NC (mut)| NNCc    | NNcc    |  50% fl/fl
    ----|---------|---------|
nC (+)  | NnCc    | Nncc    |  50% +/fl
    ----|---------|---------|
        |  50% Tg+|  50% Tg-|

Results:
- NNCc = fl/fl; Tg+ (25%) ← EXPERIMENTAL
- NNcc = fl/fl; Tg- (25%)
- NnCc = +/fl; Tg+ (25%)  
- Nncc = +/fl; Tg- (25%)
```

**Calculation:**
```
Need 10 mice of fl/fl; Tg+ genotype
Frequency: 25%
Pups needed: 10 / 0.25 = 40 pups

40 / 6 = 6.67 litters
6.67 / 0.8 = 8.33 → 9 breeding pairs
9 × 7 = 63 mice total

Expected: ~16 fl/fl; Tg+ mice (experimental)
```

---

## Summary of All Three Generations:

| Generation | Pairs | Mice | Purpose | Timeline |
|------------|-------|------|---------|----------|
| Gen 1 | 8 | 56 | Fix fl to homozygous | 9 weeks |
| Gen 2 | 2 | 14 | Introduce Cre | 9 weeks |
| Gen 3 | 9 | 63 | Generate experimental | 9 weeks |
| **Total** | **19** | **133** | Complete scheme | **27 weeks** |

---

## Visual Checks

### Color Coding Should Show:
- **Teal/Blue (#008080):** Experimental genotypes
- **Navy (#134978):** Control genotypes  
- **Light Blue (#2384da):** Keeper genotypes (intermediate generations)
- **Gray (#999):** Not needed (cull)

### Labels Should Show:
- **fl/fl** for conditional knockout homozygous (NOT "mut/mut")
- **+/fl** for conditional knockout heterozygous (NOT "+/mut")
- **Tg+** for Cre-positive
- **Tg-** for Cre-negative

### Educational Content Should Include:
- Explanation of 9-week timeline per generation
- Explanation of 80% breeding efficiency
- Best practices for Cre/loxP breeding
- Genotype notation guide (fl vs mut)
- Link to JAX Cre-loxP guide

---

## Quick Validation Checklist

For each test case, verify:

- [ ] Timeline = 9 weeks per generation (not 10)
- [ ] Breeding pairs match expected values
- [ ] Total mice match expected values  
- [ ] Frequency percentages are correct
- [ ] Genotype labels use fl/fl (not mut/mut) for conditional knockouts
- [ ] Color coding matches category (experimental, control, keeper, cull)
- [ ] Educational tooltips are visible
- [ ] For Test 3: Shows 3 generations (not 2!)
- [ ] For Test 3: Intermediate generations show "keeper" mice
- [ ] Calculations shown in educational section match manual math

---

## Common Issues to Watch For

❌ **Wrong:** 10 weeks per generation → ✅ **Correct:** 9 weeks  
❌ **Wrong:** "mut/mut" for floxed alleles → ✅ **Correct:** "fl/fl"  
❌ **Wrong:** 2 generations for Cre/loxP → ✅ **Correct:** 3 generations  
❌ **Wrong:** All offspring gray (not needed) → ✅ **Correct:** Color-coded by category  
❌ **Wrong:** 15 pairs for Test 1 → ✅ **Correct:** 9 pairs  
❌ **Wrong:** 29 pairs for Test 2 → ✅ **Correct:** 17 pairs  

---

**All tests passing = Breeding planner is working correctly! 🎉**
