import WeaponTypes from 'gbf/data/weapons/Types'

// Returns the total other cap up modifier for single attacks.
// "Other" refers to cap up modifiers that are not final damage
// or assassin modifiers.
// A modifier of 100 means the damage cap should be unchanged.
export function totalOtherSingleMods(party, character) {
  let total = 100;
  total += weaponCapUp(party);
  // TODO: Add summon boosts to the total.
  // TODO: Add character boosts to the total.
  return total;
}

// Returns the total single attack cap up from weapon skills.
// A cap up of 0 means the damage cap should be unchanged.
function weaponCapUp(party) {
  let dmgCapUpBoost = 0;
  let alphaBoost = 0; // Boost from Ultima or Dark Opus alpha skills.

  for (let weapon of party.otherWeapons) {
    if (weapon.enabled) {
      switch (weapon.data.key) {
        case WeaponTypes.ULTIMA_GAUPH_KEY_ALPHA.key:
        case WeaponTypes.DARK_OPUS_ALPHA_PENDULUM.key:
          // These skills do not stack. Use the max value instead.
          alphaBoost = Math.max(alphaBoost, weapon.data.value);
          break;

        case WeaponTypes.DMG_CAP_UP.key:
        case WeaponTypes.SINGLE_CAP_UP.key:
          dmgCapUpBoost += weapon.data.value;
          break;

        default:
          // Weapon does not affect single attack damage cap. Do nothing.
          break;
      }
    }
  }

  return alphaBoost + dmgCapUpBoost;
}
