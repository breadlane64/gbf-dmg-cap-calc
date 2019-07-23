import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Charge attack damage cap tiers.
//
// The tier objects must be ordered from highest damage tier
// to lowest damage tier.
const data = Object.freeze([
  // DEFAULT
  // Most characters use these tiers.
  {
    key: "DEFAULT",
    tiersArray: [
      // 2.5m+ reduced by 99%
      {
        dmgTier: 2500000,
        multiplier: 1,
      },
      // 1.8m to 2.5m reduced by 95%
      {
        dmgTier: 1800000,
        multiplier:5,
      },
      // 1.7m to 1.8m reduced by 70%
      {
        dmgTier: 1700000,
        multiplier: 30,
      },
      // 1.5m to 1.7m reduced by 40%
      {
        dmgTier: 1500000,
        multiplier: 60,
      },
    ],
  },

  // ETERNAL_5STAR
  // 5* Eternals use these tiers.
  {
    key: "ETERNAL_5STAR",
    tiersArray: [
      // 3m+ reduced by 99%
      {
        dmgTier: 3000000,
        multiplier: 1,
      },
      // 2.2m to 3m reduced by 95%
      {
        dmgTier: 2200000,
        multiplier: 5,
      },
      // 2m to 2.2m reduced by 70%
      {
        dmgTier: 2000000,
        multiplier: 30,
      },
      // 1.8m to 2m reduced by 40%
      {
        dmgTier: 1800000,
        multiplier: 60,
      },
    ],
  },

  // AZAZEL_DARK_SSR_FOE_BLINDED_AND_POISONED
  // Azazel (Dark SSR) uses these tiers when the foe is Blinded and Poisoned.
  // Source: https://twitter.com/jpokiehl/status/990553699712815104
  {
    key: "AZAZEL_DARK_SSR_FOE_BLINDED_AND_POISONED",
    tiersArray: [
      {
        dmgTier: 3600000,
        multiplier: 1,
      },
      {
        dmgTier: 2900000,
        multiplier: 10,
      },
      {
        dmgTier: 2700000,
        multiplier: 30,
      },
      {
        dmgTier: 2500000,
        multiplier: 70,
      },
    ],
  },

  // DOROTHY_AND_CLAUDIA_LIGHT_SSR_200PERCENT
  // Dorothy and Claudia (Light SSR) use these tiers when they have 200% charge.
  // Source: https://twitter.com/jpokiehl/status/990539046907768832
  {
    key: "DOROTHY_AND_CLAUDIA_LIGHT_SSR_200PERCENT",
    tiersArray: [
      {
        dmgTier: 4000000,
        multiplier: 1,
      },
      {
        dmgTier: 3000000,
        multiplier: 10,
      },
      {
        dmgTier: 2800000,
        multiplier: 40,
      },
      {
        dmgTier: 2400000,
        multiplier: 80,
      },
    ],
  },

  // LUDMILLA_DARK_SR
  // Ludmilla (Dark SR) uses these tiers when her CA deals damage.
  // Source: https://twitter.com/jpokiehl/status/1108346467834421248
  {
    key: "LUDMILLA_SR",
    tiersArray: [
      {
        dmgTier: 3600000,
        multiplier: 1,
      },
      {
        dmgTier: 2900000,
        multiplier: 5,
      },
      {
        dmgTier: 2700000,
        multiplier: 30,
      },
      {
        dmgTier: 2500000,
        multiplier: 60,
      },
    ],
  },

  // LYRIA_SR
  // Lyria (SR) uses these tiers.
  // Source: https://twitter.com/jpokiehl/status/990443916875845632
  {
    key: "LYRIA_SR",
    tiersArray: [
      {
        dmgTier: 2800000,
        multiplier: 1,
      },
      {
        dmgTier: 2200000,
        multiplier: 10,
      },
      {
        dmgTier: 2000000,
        multiplier: 70,
      },
      {
        dmgTier: 1500000,
        multiplier: 90,
      },
    ],
  },

  // MIRIN_WIND_SR_200PERCENT
  // Mirin (Wind SR) uses these tiers when she has 200% charge.
  // Source: https://twitter.com/jpokiehl/status/990967518196989952
  {
    key: "MIRIN_WIND_SR_200PERCENT",
    tiersArray: [
      {
        dmgTier: 5000000,
        multiplier: 1,
      },
      {
        dmgTier: 3600000,
        multiplier: 5,
      },
      {
        dmgTier: 3400000,
        multiplier: 30,
      },
      {
        dmgTier: 3000000,
        multiplier: 60,
      },
    ],
  },

  // ROBOMI_LIGHT_SSR
  // Robomi (Light SSR) uses these tiers.
  // Source: https://twitter.com/jpokiehl/status/990505510272057344
  {
    key: "ROBOMI_LIGHT_SSR",
    tiersArray: [
      {
        dmgTier: 2800000,
        multiplier: 1,
      },
      {
        dmgTier: 2200000,
        multiplier: 10,
      },
      {
        dmgTier: 2000000,
        multiplier: 70,
      },
      {
        dmgTier: 1500000,
        multiplier: 90,
      },
    ],
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: CUSTOM_KEY,
    tiersArray: [
      // 2.5m+ reduced by 99%
      {
        dmgTier: 2500000,
        multiplier: 1,
      },
      // 1.8m to 2.5m reduced by 95%
      {
        dmgTier: 1800000,
        multiplier:5,
      },
      // 1.7m to 1.8m reduced by 70%
      {
        dmgTier: 1700000,
        multiplier: 30,
      },
      // 1.5m to 1.7m reduced by 40%
      {
        dmgTier: 1500000,
        multiplier: 60,
      },
    ],
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
