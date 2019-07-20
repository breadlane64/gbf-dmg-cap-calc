import { customKey, dataArrayToHashmap } from '../DataUtils'

// Primarch summon sub-auras.
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

  // SSR_0STAR
  {
    key: "SSR_0STAR",
    name: "0★/1★/2★",
    dmgCapUp: 5,
  },

  // SSR_3STAR
  {
    key: "SSR_3STAR",
    name: "3★",
    dmgCapUp: 10,
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
