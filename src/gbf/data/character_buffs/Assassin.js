import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Single character Assassin status effects.
// These have separate values for single and charge attack damage caps up.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    singleCapUp: 0,
    chargeCapUp: 0,
  },

  // MARQUIARES_DARK_SSR_SKILL_1
  // The Supernal Explosion status effect of Marquiares (Dark SSR) skill 1.
  // Source: https://gbf.wiki/Marquiares
  {
    key: "MARQUIARES_DARK_SSR_SKILL_1",
    name: "Marquiares (Dark SSR) skill 1",
    singleCapUp: 0, // ?
    chargeCapUp: 110,
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: CUSTOM_KEY,
    name: "Custom",
    description: "",
    singleCapUp: 0,
    chargeCapUp: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
