// Charge attack damage cap tiers for 5* eternals.
// The objects must be ordered from highest threshold
// to lowest threshold.
export default [
  // 3m+ reduced by 99%
  {
    dmgThreshold: 3000000,
    multiplier: (100 - 99),
  },
  // 2.2m to 3m reduced by 95%
  {
    dmgThreshold: 2200000,
    multiplier: (100 - 95),
  },
  // 2m to 2.2m reduced by 70%
  {
    dmgThreshold: 2000000,
    multiplier: (100 - 70),
  },
  // 1.8m to 2m reduced by 40%
  {
    dmgThreshold: 1800000,
    multiplier: (100 - 40),
  },
]
