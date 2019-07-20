import { customKey, dataArrayToHashmap } from '../DataUtils'

// Types of summon effects.
//
// These objects should never be referenced directly, only copied,
// e.g. when adding a new summon to the party.
//
// Note: the order of these objects determines the order they appear
// in the UI.
const data = Object.freeze([
  // OMEGA
  {
    key: "OMEGA",
    name: "Omega summon (Tiamat Omega, etc.)",
    value: 120, // Default value.
  },

  // PRIMAL
  {
    key: "PRIMAL",
    name: "Primal summon (Varuna, etc.)",
    value: 120, // Default value.
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
