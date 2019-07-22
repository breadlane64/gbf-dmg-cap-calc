import WeaponTypes from 'gbf/data/weapons/Types'

// Returns the total damage boost (aka Supplemental Damage)
// for single attacks, charge attacks, and chain bursts.
// Since damage boosts ignore caps, they effectively raise the soft cap.
//
// A boost of 0 means damage and cap are not boosted.
//
// Verification needed: is chain burst damage boosted based on the MC's
// damage boost only? Even if the MC does not contribute to the Chain Burst?
export function totalDmgBoost(party, character) {
  let total = 0;

  for (let weapon of party.otherWeapons) {
    if (weapon.enabled && weapon.data.key === WeaponTypes.DMG_BOOSTED.key) {
      total += weapon.data.value;
    }
  }

  // TODO: Add summon boosts to the total.
  // TODO: Add character boosts to the total.

  return total;
}
