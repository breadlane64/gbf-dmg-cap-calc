import { customKey, dataArrayToHashmap } from '../DataUtils'

// Party-wide Assassin status effects: Salted Wound, Defiance,
// Shiva's summon call status effect, etc.
//
// Note: the order of these objects determines the order they appear
// in the UI.
const data = Object.freeze([
  // NONE
  {
    key: "NONE",
    name: "None",
    singleCapUp: 0,
    chargeCapUp: 0,
  },

  // DEFAULT
  // These seem to be the default values used by Salted Wound,
  // Defiance, and other assassin effects.
  // Without any other cap up effects, the default values
  // raise the single dmg cap to ~1.16m and the charge dmg cap by ~500k.
  // Sources:
  //    Wind Heles's Defiance:
  //      https://gbf.wiki/Heles_(Wind)
  //      https://グランブルーファンタジー.gamewith.jp/article/show/143918
  {
    key: "DEFAULT",
    name: "Salted Wound, Defiance, etc.",
    singleCapUp: 160,
    chargeCapUp: 30,
  },

  // SHIVAS_SUMMON_CALL
  // Shiva's summon call status effect.
  // Without any other cap up effects, the default values
  // raise the single dmg cap to ~1.16m and the charge dmg cap by ~500k.
  // Sources:
  //    Shiva's summon call (JP):
  //      https://gbf-wiki.com/index.php?%BE%A4%B4%AD%C0%D0%C9%BE%B2%C1SSR#primal2040185000
  //    Tests with SSR Aliza:
  //      https://www.reddit.com/r/Granblue_en/comments/c3tryv/soft_damage_cap_calculator_spreadsheet/erwd8ft/
  {
    key: "SHIVA_SUMMON_CALL",
    name: "Shiva summon call",
    singleCapUp: 160,
    chargeCapUp: 30,
  },

  // CUSTOM
  // Special key that indicates custom values should be used.
  // This object should be cloned so it can be modified to use custom values.
  {
    key: customKey,
    name: "Custom",
    description: "",
    singleCapUp: 0,
    chargeCapUp: 0,
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
