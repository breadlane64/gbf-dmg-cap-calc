import { CUSTOM_KEY, dataArrayToHashmap } from '../DataUtils'

// Character seraphic support skills.
// These are final damage modifiers.
//
// These support skills behave the same as a Seraphic weapon skill
// and they do not stack with Seraphic weapon skills.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    value: 0,
  },

  // BOOST_20PERCENT
  {
    key: "BOOST_20PERCENT",
    name: "20% boost to damage against weak-element foes",
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
