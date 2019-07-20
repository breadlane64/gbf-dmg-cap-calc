import { customKey, dataArrayToHashmap } from '../DataUtils'

// Types of weapon skill effects.
//
// These objects should never be referenced directly, only copied,
// e.g. when adding a new weapon to the party.
//
// Note: the order of these objects determines the order they appear
// in the UI.
const data = Object.freeze([
  // ULTIMA_GAUPH_KEY_ALPHA
  // Single attack damage cap up with special stacking rules.
  {
    key: "ULTIMA_GAUPH_KEY_ALPHA",
    name: "Ultima Gauph Key α",
    value: 10, // Default value.
  },

  // ULTIMA_GAUPH_KEY_GAMMA
  // Charge attack damage cap up with special stacking rules.
  {
    key: "ULTIMA_GAUPH_KEY_GAMMA",
    name: "Ultima Gauph Key γ",
    value: 15, // Default value.
  },

  // ULTIMA_GAUPH_KEY_DELTA
  // Chain Burst damage cap up with special stacking rules.
  {
    key: "ULTIMA_GAUPH_KEY_DELTA",
    name: "Ultima Gauph Key Δ",
    value: 50, // Default value.
  },

  // DARK_OPUS_ALPHA_PENDULUM
  // Single attack damage cap up with special stacking rules.
  {
    key: "DARK_OPUS_ALPHA_PENDULUM",
    name: "Dark Opus α Pendulum",
    value: 10, // Default value.
  },

  // DARK_OPUS_GAMMA_PENDULUM
  // Charge attack damage cap up with special stacking rules.
  {
    key: "DARK_OPUS_GAMMA_PENDULUM",
    name: "Dark Opus γ Pendulum",
    value: 15, // Default value.
  },

  // DARK_OPUS_DELTA_PENDULUM
  // Chain Burst damage cap up with special stacking rules.
  {
    key: "DARK_OPUS_DELTA_PENDULUM",
    name: "Dark Opus Δ Pendulum",
    value: 50, // Default value.
  },

  // NORMAL_SENTENCE
  // Charge attack damage cap up with special stacking rules.
  // Affected by Primal summon auras.
  {
    key: "NORMAL_SENTENCE",
    name: "Normal Sentence weapon skill",
    value: 5, // Default value.
  },

  // NORMAL_GLORY
  // Charge attack and Chain Burst damage caps up
  // with special stacking rules.
  // Unknown if Chain Burst cap up has a limit.
  // Affected by Primal summon auras.
  {
    key: "NORMAL_GLORY",
    name: "Normal Glory weapon skill",
    value: 6.8, // Default value.
  },

  // OMEGA_SENTENCE
  // Charge attack damage cap up with special stacking rules.
  // Affected by Omega summon auras.
  {
    key: "OMEGA_SENTENCE",
    name: "Omega Sentence weapon skill",
    value: 9.5, // Default value.
  },

  // EXCELSIOR
  // Charge attack damage cap up with special stacking rules.
  {
    key: "EXCELSIOR",
    name: "Excelsior weapon skill",
    value: 15, // Default value.
  },

  // DMG_CAP_UP
  {
    key: "DMG_CAP_UP",
    name: "DMG cap up",
    value: 0, // Default value.
  },

  // SINGLE_CAP_UP
  {
    key: "SINGLE_CAP_UP",
    name: "Single attack cap up",
    value: 0, // Default value.
  },

  // CHAIN_CAP_UP
  // Caps at 50%. Source: https://gbf.wiki/Windhose
  {
    key: "CHAIN_CAP_UP",
    name: "Chain Burst cap up",
    value: 0, // Default value.
  },

  // DMG_BOOSTED
  {
    key: "DMG_BOOSTED",
    name: "DMG boosted",
    value: 0, // Default value.
  },

  // CHAIN_DMG_BOOSTED
  {
    key: "CHAIN_DMG_BOOSTED",
    name: "Chain Burst DMG boosted",
    value: 0, // Default value.
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
