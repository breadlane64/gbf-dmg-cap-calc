import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Primarch summon sub-auras.
// These provide damage cap up.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    value: 0,
  },

  // SSR_0STAR
  {
    key: "SSR_0STAR",
    name: "0★/1★/2★",
    value: 5,
  },

  // SSR_3STAR
  {
    key: "SSR_3STAR",
    name: "3★",
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
