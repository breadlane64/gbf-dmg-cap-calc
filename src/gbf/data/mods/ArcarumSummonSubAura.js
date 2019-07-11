import { customKey, dataArrayToHashmap } from '../DataUtils'

// Arcarum summon sub-auras.
// The same value is used for both single and CA DMG cap ups.
//
// Note: the order of these objects determines the order they appear
// in the UI.
const data = Object.freeze([
  // NONE
  // Means no Arcarum summon is equipped as a sub summon.
  // Null and undefined values will be treated as NONE.
  {
    key: "NONE",
    name: "None",
    dmgCapUp: 0,
  },

  // SR_0star
  {
    key: "SR_0STAR",
    name: "SR, 0★/1★/2★",
    dmgCapUp: 3,
  },

  // SR_3star
  {
    key: "SR_3STAR",
    name: "SR, 3★",
    dmgCapUp: 5,
  },

  // SSR_3star
  {
    key: "SSR_3STAR",
    name: "SSR, 3★",
    dmgCapUp: 7,
  },

  // SSR_4star
  {
    key: "SSR_4STAR",
    name: "SSR, 4★/5★",
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
