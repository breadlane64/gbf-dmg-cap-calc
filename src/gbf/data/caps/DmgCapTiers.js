import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'
import SingleCapTiers from './SingleCapTiers'
import ChargeCapTiers from './ChargeCapTiers'

// Damage cap tiers.
const data = Object.freeze([
  // DEFAULT
  // Most characters use these tiers.
  {
    key: "DEFAULT",
    name: "Default",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.DEFAULT,
  },

  // ETERNAL_5STAR
  // 5* Eternals use these tiers.
  {
    key: "ETERNAL_5STAR",
    name: "5★ Eternal",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.ETERNAL_5STAR,
  },

  // AZAZEL_DARK_SSR_FOE_BLINDED_AND_POISONED
  // Azazel (Dark SSR) uses these tiers if the foe is Blinded and Poisoned.
  {
    key: "AZAZEL_DARK_SSR_FOE_BLINDED_AND_POISONED",
    name: "Azazel (Dark SSR), foe Blinded and Poisoned",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.AZAZEL_DARK_SSR_FOE_BLINDED_AND_POISONED,
  },

  // DOROTHY_AND_CLAUDIA_LIGHT_SSR_200PERCENT
  // Dorothy and Claudia (Light SSR) use these tiers when they have 200% charge.
  {
    key: "DOROTHY_AND_CLAUDIA_LIGHT_SSR_200PERCENT",
    name: "Dorothy and Claudia (Light SSR), 200% charge",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.DOROTHY_AND_CLAUDIA_LIGHT_SSR_200PERCENT,
  },

  // LUDMILLA_SR
  // Ludmilla (Dark SR) uses these tiers if her CA deals damage.
  {
    key: "LUDMILLA_SR",
    name: "Ludmilla (SR), if dmg dealt",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.LUDMILLA_SR,
  },

  // LYRIA_SR
  // Lyria (SR) uses these tiers.
  {
    key: "LYRIA_SR",
    name: "Lyria (SR)",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.LYRIA_SR,
  },

  // MIRIN_WIND_SR_200PERCENT
  // Mirin (Wind SR) uses these tiers when she has 200% charge.
  {
    key: "MIRIN_WIND_SR_200PERCENT",
    name: "Mirin (Wind SR), 200% charge",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.MIRIN_WIND_SR_200PERCENT,
  },

  // ROBOMI_LIGHT_SSR
  // Robomi (Light SSR) uses these tiers.
  {
    key: "ROBOMI_LIGHT_SSR",
    name: "Robomi (Light SSR)",
    singleCapTiers: SingleCapTiers.DEFAULT,
    chargeCapTiers: ChargeCapTiers.ROBOMI_LIGHT_SSR,
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: CUSTOM_KEY,
    name: "Custom",
    singleCapTiers: null, // Init with a copy of custom single cap tiers.
    chargeCapTiers: null, // Init with a copy of custom charge cap tiers.
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
