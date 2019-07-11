import { customKey, dataArrayToHashmap } from '../DataUtils'

// Whether the enemy reduces damage from elements they are not weak to.
// Most enemies do not have this property.
//
// This is separate from the 50% elemental ATK bonus the player receives
// when the enemy is weak to their element.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    dmgReduction: 0,
  },

  // GW_NM
  // Guild Wars Nightmare bosses take 25% reduced damage from elements
  // they are not weak to.
  // Source: motocal's Enemy Resistance field tooltip
  //    https://medon-lab.com/keisanki/
  {
    key: "GW_NM",
    name: "Guild Wars Nightmare fight",
    dmgReduction: 25,
  },

  // GW_EXPLUS
  // Guild Wars EX+ bosses take 50% reduced damage from elements
  // they are not weak to.
  // Source: motocal's Enemy Resistance field tooltip
  //    https://medon-lab.com/keisanki/
  {
    key: "GW_EXPLUS",
    name: "Guild Wars EX+ fight",
    dmgReduction: 50,
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: customKey,
    name: "Custom",
    description: "",
    dmgReduction: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
