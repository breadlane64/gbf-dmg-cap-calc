// Charge attack damage cap tiers for characters that are not 5* eternals.
// The objects must be ordered from highest threshold
// to lowest threshold.
export default [
  // 2.5m+ reduced by 99%
  {
    dmgThreshold: 2500000,
    multiplier: (100 - 99),
  },
  // 1.8m to 2.5m reduced by 95%
  {
    dmgThreshold: 1800000,
    multiplier: (100 - 95),
  },
  // 1.7m to 1.8m reduced by 70%
  {
    dmgThreshold: 1700000,
    multiplier: (100 - 70),
  },
  // 1.5m to 1.7m reduced by 40%
  {
    dmgThreshold: 1500000,
    multiplier: (100 - 40),
  },
]
