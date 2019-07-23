import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Types of weapon skill effects.
//
// These objects should never be referenced directly, only copied,
// e.g. when adding a new weapon to the party.
//
// === Implementation details ===
// Each weapon data object should contain the following properties
// (copied from here or from the weapon examples):
//    key: idenitifies which type of weapon it is
//    value: number
//    description: present iff the weapon type canHaveDescription is true
const data = Object.freeze([
  // ULTIMA_GAUPH_KEY_ALPHA
  // Single attack damage cap up with special stacking rules.
  {
    key: "ULTIMA_GAUPH_KEY_ALPHA",
    name: "Ultima Gauph Key α",
    value: 10, // Default value.
    valueTooltip: "Single attack DMG cap up (%). Does not stack with other α skills.",
    valueLabel: "α Single cap up",
    canHaveDescription: false,
  },

  // ULTIMA_GAUPH_KEY_GAMMA
  // Charge attack damage cap up with special stacking rules.
  {
    key: "ULTIMA_GAUPH_KEY_GAMMA",
    name: "Ultima Gauph Key γ",
    value: 15, // Default value.
    valueTooltip: "CA DMG cap up (%). Does not stack with other γ skills.",
    valueLabel: "γ CA cap up",
    canHaveDescription: false,
  },

  // ULTIMA_GAUPH_KEY_DELTA
  // Chain Burst damage cap up with special stacking rules.
  {
    key: "ULTIMA_GAUPH_KEY_DELTA",
    name: "Ultima Gauph Key Δ",
    value: 50, // Default value.
    valueTooltip: "Chain Burst DMG cap up (%). Does not stack with other Δ skills.",
    valueLabel: "Δ Chain cap up",
    canHaveDescription: false,
  },

  // DARK_OPUS_ALPHA_PENDULUM
  // Single attack damage cap up with special stacking rules.
  {
    key: "DARK_OPUS_ALPHA_PENDULUM",
    name: "Dark Opus α Pendulum",
    value: 10, // Default value.
    valueTooltip: "Single attack DMG cap up (%). Does not stack with other α skills.",
    valueLabel: "α Single cap up",
    canHaveDescription: false,
  },

  // DARK_OPUS_GAMMA_PENDULUM
  // Charge attack damage cap up with special stacking rules.
  {
    key: "DARK_OPUS_GAMMA_PENDULUM",
    name: "Dark Opus γ Pendulum",
    value: 15, // Default value.
    valueTooltip: "CA DMG cap up (%). Does not stack with other γ skills.",
    valueLabel: "γ CA cap up",
    canHaveDescription: false,
  },

  // DARK_OPUS_DELTA_PENDULUM
  // Chain Burst damage cap up with special stacking rules.
  {
    key: "DARK_OPUS_DELTA_PENDULUM",
    name: "Dark Opus Δ Pendulum",
    value: 50, // Default value.
    valueTooltip: "Chain Burst DMG cap up (%). Does not stack with other Δ skills.",
    valueLabel: "Δ Chain cap up",
    canHaveDescription: false,
  },

  // NORMAL_SENTENCE
  // Charge attack damage cap up with special stacking rules.
  // Affected by Primal summon auras.
  {
    key: "NORMAL_SENTENCE",
    name: "Normal Sentence weapon skill",
    value: 5, // Default value.
    valueTooltip: "CA DMG cap up (%). Multiplied by Primal summon auras.",
    valueLabel: "N CA cap up",
    canHaveDescription: true,
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
    valueTooltip: "CA and Chain Burst DMG caps up (%). Multiplied by Primal summon auras.",
    valueLabel: "N Glory cap up",
    canHaveDescription: true,
  },

  // OMEGA_SENTENCE
  // Charge attack damage cap up with special stacking rules.
  // Affected by Omega summon auras.
  {
    key: "OMEGA_SENTENCE",
    name: "Omega Sentence weapon skill",
    value: 9.5, // Default value.
    valueTooltip: "CA DMG cap up (%). Multiplied by Omega summon auras.",
    valueLabel: "Ω CA cap up",
    canHaveDescription: true,
  },

  // EXCELSIOR
  // Charge attack damage cap up with special stacking rules.
  {
    key: "EXCELSIOR",
    name: "Excelsior weapon skill",
    value: 15, // Default value.
    valueTooltip: "CA DMG cap up (%).",
    valueLabel: "CA cap up",
    canHaveDescription: true,
  },

  // DMG_CAP_UP
  {
    key: "DMG_CAP_UP",
    name: "DMG cap up",
    value: 0, // Default value.
    valueTooltip: "Single and charge attack DMG caps up (%).",
    valueLabel: "DMG cap up",
    canHaveDescription: true,
  },

  // SINGLE_CAP_UP
  {
    key: "SINGLE_CAP_UP",
    name: "Single attack cap up",
    value: 0, // Default value.
    valueTooltip: "Single attack DMG cap up (%).",
    valueLabel: "Single cap up",
    canHaveDescription: true,
  },

  // CHAIN_CAP_UP
  // Caps at 50%. Source: https://gbf.wiki/Windhose
  {
    key: "CHAIN_CAP_UP",
    name: "Chain Burst cap up",
    value: 0, // Default value.
    valueTooltip: "Chain Burst DMG cap up (%).",
    valueLabel: "Chain cap up",
    canHaveDescription: true,
  },

  // DMG_BOOSTED
  {
    key: "DMG_BOOSTED",
    name: "DMG boosted",
    value: 0, // Default value.
    valueTooltip: "DMG is boosted by this amount (not a %). On gbf.wiki, this is Supplemental DMG",
    valueLabel: "DMG boosted by",
    canHaveDescription: true,
  },

  // CHAIN_DMG_BOOSTED
  {
    key: "CHAIN_DMG_BOOSTED",
    name: "Chain Burst DMG boosted",
    value: 0, // Default value.
    valueTooltip: "Chain Burst DMG boost (%).",
    valueLabel: "Chain boost",
    canHaveDescription: true,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
