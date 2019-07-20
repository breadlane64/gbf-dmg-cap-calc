import { customKey, dataArrayToHashmap } from '../DataUtils'

// Character seraphic support skills.
// These support skills behave the same as a Seraphic weapon skill
// and they do not stack with Seraphic weapon skills.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    dmgCapUp: 0,
  },

  // BOOST_20PERCENT
  {
    key: "BOOST_20PERCENT",
    name: "20% boost to damage against weak-element foes",
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
