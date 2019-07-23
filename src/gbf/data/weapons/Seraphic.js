import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Seraphic weapon skills.
// These are final damage multipliers.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    value: 0,
  },

  // SR
  // SR weapon skill.
  {
    key: "SR",
    name: "SR",
    value: 10,
  },

  // SSR
  // SSR weapon skill. skill level doesn't matter.
  {
    key: "SSR",
    name: "SSR, any skill lvl",
    value: 20,
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: CUSTOM_KEY,
    name: "Custom",
    description: "",
    value: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
