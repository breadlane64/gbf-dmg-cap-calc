import { dataArrayToHashmap } from '../DataUtils'

// Enemy's element relative to the character's element.
// Some modifiers take effect only if the enemy is weak to the character.
// The enemy's element also affects how the chain burst dmg is calculated
// from the total CA damage.
//
// Note: if keys are changed, various parts of the UI must also be changed.
const data = Object.freeze([
  // WEAK
  // Enemy is weak to the character's element.
  {
    key: "WEAK",
    name: "Enemy is weak against your element",
    isWeak: true,
    chainBurstDmgMod: 50,
  },

  // STRONG
  // Enemy is strong against the character's element.
  {
    key: "STRONG",
    name: "Enemy is strong against your element",
    isWeak: false,
    chainBurstDmgMod: -25,
  },

  // NEUTRAL
  // Enemy is neither weak to nor strong against the character's element.
  {
    key: "NEUTRAL",
    name: "Enemy is neither weak nor strong against you",
    isWeak: false,
    chainBurstDmgMod: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
