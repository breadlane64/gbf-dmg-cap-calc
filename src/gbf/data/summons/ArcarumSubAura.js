import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Arcarum summon sub-auras.
// These are final damage multipliers.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    value: 0,
  },

  // SR_0STAR
  {
    key: "SR_0STAR",
    name: "SR, 0★/1★/2★",
    value: 3,
  },

  // SR_3STAR
  {
    key: "SR_3STAR",
    name: "SR, 3★",
    value: 5,
  },

  // SSR_3STAR
  {
    key: "SSR_3STAR",
    name: "SSR, 3★",
    value: 7,
  },

  // SSR_4STAR
  {
    key: "SSR_4STAR",
    name: "SSR, 4★/5★",
    value: 10,
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
