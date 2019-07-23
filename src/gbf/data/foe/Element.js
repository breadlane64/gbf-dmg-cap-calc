import { WEAK_ELEM_KEY, dataArrayToHashmap } from '../DataUtils'

// Foe's element relative to the character's element.
// Some modifiers take effect only if the foe is weak to the character.
// The foe's element also affects how the chain burst dmg is calculated
// from the total CA damage.
const data = Object.freeze([
  // WEAK
  // Foe is weak to the character's element.
  {
    key: WEAK_ELEM_KEY,
    name: "Foe is weak against your element",
    chainBurstDmgMod: 50,
  },

  // STRONG
  // Foe is strong against the character's element.
  {
    key: "STRONG",
    name: "Foe is strong against your element",
    chainBurstDmgMod: -25,
  },

  // NEUTRAL
  // Foe is neither weak to nor strong against the character's element.
  {
    key: "NEUTRAL",
    name: "Foe is neither weak nor strong against you",
    chainBurstDmgMod: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
