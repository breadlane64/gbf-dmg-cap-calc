// Single attack damage cap tiers.
// The objects must be ordered from highest threshold
// to lowest threshold.
export default [
  // 600k+ reduced by 99%
  {
    dmgThreshold: 600000,
    multiplier: (100 - 99),
  },
  // 500k to 600k reduced by 95%
  {
    dmgThreshold: 500000,
    multiplier: (100 - 95),
  },
  // 400k to 500k reduced by 40%
  {
    dmgThreshold: 400000,
    multiplier: (100 - 40),
  },
  // 300k to 400k reduced by 20%
  {
    dmgThreshold: 300000,
    multiplier: (100 - 20),
  },
]
