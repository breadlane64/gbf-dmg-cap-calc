import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Single attack damage cap tiers.
//
// The tier objects must be ordered from highest damage tier
// to lowest damage tier.
const data = Object.freeze([
  // DEFAULT
  // Most (all?) characters use these tiers.
  {
    key: "DEFAULT",
    tiersArray: [
      // 600k+ reduced by 99%
      {
        dmgTier: 600000,
        multiplier: 1,
      },
      // 500k to 600k reduced by 95%
      {
        dmgTier: 500000,
        multiplier: 5,
      },
      // 400k to 500k reduced by 40%
      {
        dmgTier: 400000,
        multiplier: 60,
      },
      // 300k to 400k reduced by 20%
      {
        dmgTier: 300000,
        multiplier: 80,
      },
    ],
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: CUSTOM_KEY,
    tiersArray: [
      // 600k+ reduced by 99%
      {
        dmgTier: 600000,
        multiplier: 1,
      },
      // 500k to 600k reduced by 95%
      {
        dmgTier: 500000,
        multiplier: 5,
      },
      // 400k to 500k reduced by 40%
      {
        dmgTier: 400000,
        multiplier: 60,
      },
      // 300k to 400k reduced by 20%
      {
        dmgTier: 300000,
        multiplier: 80,
      },
    ],
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
