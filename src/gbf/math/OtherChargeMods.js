import SummonTypes from 'gbf/data/summons/Types'
import WeaponTypes from 'gbf/data/weapons/Types'

// Returns the total other cap up modifier for charge attacks.
// "Other" refers to cap up modifiers that are not final damage
// or assassin modifiers.
// A modifier of 100 means the damage cap should be unchanged.
export function totalOtherChargeMods(party, character) {
  let total = 100;
  total += weaponsCapUp(party);
  // TODO: Add summon boosts to the total.
  // TODO: Add character boosts to the total.
  return total;
}

// Returns a 2-element array containing the total summon auras for
// Normal and Omega weapon skills, respectively.
function summonAuras(party) {
  let normal = 0;
  let omega = 0;
  for (let summon of party.otherSummons) {
    if (summon.enabled) {
      switch (summon.data.key) {
        case SummonTypes.PRIMAL.key:
          normal += summon.data.value;
          break;

        case SummonTypes.OMEGA.key:
          omega += summon.data.value;
          break;
      }
    }
  }
  return [normal, omega];
}

// Returns the total charge attack cap up from weapon skills.
// A cap up of 0 means the damage cap should be unchanged.
function weaponsCapUp(party) {
  const MAX_DMG_CAP_UP_BOOST = 20;
  const MAX_GAMMA_BOOST = 15; // Verification needed: is this a real limit?
  const MAX_NORMAL_SENTENCE_BOOST = 30; // Normal Sentence and Glory.
  const MAX_OMEGA_SENTENCE_BOOST = 30;
  const MAX_EXCELSIOR_BOOST = 30;
  const MAX_SHARED_SENTENCE_BOOST = 60; // Sentence, Glory, and Excelsior.
  let dmgCapUpBoost = 0;
  let gammaBoost = 0; // Boost from Ultima or Dark Opus gamma skills.
  let normalSentenceBoost = 0; // Normal Sentence and Glory.
  let omegaSentenceBoost = 0;
  let excelsiorBoost = 0;
  let sharedSentenceBoost = 0; // Sentence, Glory, and Excelsior.

  // Get the relevant summon auras and convert them from %s
  // to actual multipliers.
  let [normalMultiplier, omegaMultiplier] = summonAuras(party);
  normalMultiplier = 1 + normalMultiplier / 100;
  omegaMultiplier = 1 + omegaMultiplier / 100;

  for (let weapon of party.otherWeapons) {
    if (weapon.enabled) {
      switch (weapon.data.key) {
        case WeaponTypes.DMG_CAP_UP.key:
          dmgCapUpBoost += weapon.data.value;
          break;

        case WeaponTypes.ULTIMA_GAUPH_KEY_GAMMA.key:
        case WeaponTypes.DARK_OPUS_GAMMA_PENDULUM.key:
          // These skills do not stack. Use the max value instead.
          //
          // Note: since these skills' values are always 15%,
          // it is unknown whether they don't stack,
          // or whether they stack but are capped at 15% total,
          // or both.
          // This code implements both to match what's written on gbf.wiki.
          gammaBoost = Math.max(gammaBoost, weapon.data.value);
          break;

        case WeaponTypes.NORMAL_SENTENCE.key:
        case WeaponTypes.NORMAL_GLORY.key:
          normalSentenceBoost += weapon.data.value * normalMultiplier;
          break;

        case WeaponTypes.OMEGA_SENTENCE.key:
          omegaSentenceBoost += weapon.data.value * omegaMultiplier;
          break;

        case WeaponTypes.EXCELSIOR.key:
          excelsiorBoost += weapon.data.value;
          break;

        default:
          // Weapon does not affect charge attack damage cap. Do nothing.
          break;
      }
    }
  }

  dmgCapUpBoost = Math.min(dmgCapUpBoost, MAX_DMG_CAP_UP_BOOST);
  gammaBoost = Math.min(gammaBoost, MAX_GAMMA_BOOST);
  normalSentenceBoost = Math.min(normalSentenceBoost, MAX_NORMAL_SENTENCE_BOOST);
  omegaSentenceBoost = Math.min(omegaSentenceBoost, MAX_OMEGA_SENTENCE_BOOST);
  excelsiorBoost = Math.min(excelsiorBoost, MAX_EXCELSIOR_BOOST);
  sharedSentenceBoost = normalSentenceBoost + omegaSentenceBoost + excelsiorBoost;
  sharedSentenceBoost = Math.min(sharedSentenceBoost, MAX_SHARED_SENTENCE_BOOST);

  return dmgCapUpBoost + gammaBoost + sharedSentenceBoost;
}
