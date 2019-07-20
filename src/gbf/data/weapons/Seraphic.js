import { customKey, dataArrayToHashmap } from '../DataUtils'

// Seraphic weapon skills.
// The same value is used for both single and CA DMG cap ups.
//
// Note: the order of these objects determines the order they appear
// in the UI.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    dmgCapUp: 0,
  },

  // SR
  // SR weapon skill.
  {
    key: "SR",
    name: "SR",
    dmgCapUp: 10,
  },

  // SSR
  // SSR weapon skill. skill level doesn't matter.
  {
    key: "SSR",
    name: "SSR, any skill lvl",
    dmgCapUp: 20,
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: customKey,
    name: "Custom",
    description: "",
    dmgCapUp: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
