import { customKey, dataArrayToHashmap } from '../DataUtils'

// Example weapon skill effects.
//
// These objects should never be referenced directly, only copied,
// e.g. when adding a new weapon to the party.
//
// Note: the order of these objects determines the order they appear
// in the UI.
const data = Object.freeze([
  // BEAST_WEAPON_MALUS_SL15
  {
    key: "BEAST_WEAPON_MALUS_SL15",
    typeKey: "DMG_CAP_UP",
    name: "Beast Weapon Malus, SL15", // Default value.
    value: 7, // Default value.
  },

  // HOLLOWSKY_WEAPON_EXCEPT_AXE_LV120
  {
    key: "HOLLOWSKY_WEAPON_EXCEPT_AXE_LV120",
    typeKey: "DMG_BOOSTED",
    name: "Hollowsky Weapon (except Axe), lv120", // Default value.
    value: 30000, // Default value.
  },

  // ABYSS_SPINE_LV120_SL15
  {
    key: "ABYSS_SPINE_LV120_SL15",
    typeKey: "OMEGA_SENTENCE",
    name: "Abyss Spine, lv120, SL15", // Default value.
    value: 9.5, // Default value.
  },

  // BLUE_SPHERE_LV150_SL15
  {
    key: "BLUE_SPHERE_LV150_SL15",
    typeKey: "NORMAL_SENTENCE",
    name: "Blue Sphere, lv150, SL15", // Default value.
    value: 5, // Default value.
  },

  // CERTIFICUS_LV150_SL15
  {
    key: "CERTIFICUS_LV150_SL15",
    typeKey: "NORMAL_SENTENCE",
    name: "Certificus, lv150, SL15", // Default value.
    value: 5, // Default value.
  },

  // PURIFYING_THUNDERBOLT_SL15
  {
    key: "PURIFYING_THUNDERBOLT_SL15",
    typeKey: "NORMAL_SENTENCE",
    name: "Purifying Thunderbolt, SL15", // Default value.
    value: 6.8, // Default value.
  },

  // SUMMERS_MIRAGE_LV120_SL15
  {
    key: "SUMMERS_MIRAGE_LV120_SL15",
    typeKey: "OMEGA_SENTENCE",
    name: "Summer's Mirage, lv120, SL15", // Default value.
    value: 9.5, // Default value.
  },

  // TYROS_SCEPTER_SL15
  {
    key: "TYROS_SCEPTER_SL15",
    typeKey: "EXCELSIOR",
    name: "Tyros Scepter, SL15", // Default value.
    value: 15, // Default value.
  },

  // TYROS_ZITHER_LV120_SL15
  {
    key: "TYROS_ZITHER_LV120_SL15",
    typeKey: "OMEGA_SENTENCE",
    name: "Tyros Zither, lv120, SL15", // Default value.
    value: 9.5, // Default value.
  },

  // PURIFYING_THUNDERBOLT_SL15
  {
    key: "UNHEIL_LV120_SL15",
    typeKey: "NORMAL_GLORY",
    name: "Unheil, lv120, SL15", // Default value.
    value: 6.8, // Default value.
  },

  // WINDHOSE_LV120_SL15
  {
    key: "WINDHOSE_LV120_SL15",
    typeKey: "CHAIN_CAP_UP",
    name: "Windhose, lv120, SL15", // Default value.
    value: 30, // Default value.
  },
]);

// Export the data above as a hashmap.
// Each element's key property will become its key in the hashmap.
export default dataArrayToHashmap(data);
