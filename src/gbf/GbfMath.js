import GbfData from './GbfData'
import ChargeAttack5StarEternalCapTiers from './data/caps/ChargeAttack5StarEternalCapTiers'
import ChargeAttackDefaultCapTiers from './data/caps/ChargeAttackDefaultCapTiers'
import SingleAttackCapTiers from './data/caps/SingleAttackCapTiers'

// Returns the total cap modifier for charge attacks based on the given data.
function chargeAttackTotalCapMod(params) {
  // Add-up the final damage modifiers.
  let finalCapMod = totalFinalDmgMod(params);

  // Get the assassin cap modifier.
  let assassinCapMod = 100 + params.mods.assassin.chargeCapUp;

  // Add-up the other damage cap modifiers.
  let sumOfOtherCapMods = 100;

  return finalCapMod * assassinCapMod * sumOfOtherCapMods / (100 ** 2);
}

// Computes and returns the raw damage needed to reach the soft damage cap
// based on the given modifier and cap tiers.
//
// Assumes the cap tiers are ordered from highest threshold
// to lowest threshold.
function rawDmgToReachSoftCap(totalCapMod, capTiers) {
  return scaleDmgThreshold(capTiers[0].dmgThreshold, totalCapMod);
}

// Returns the given damage threshold multiplied by the given modifier.
// Always returns an integer.
function scaleDmgThreshold(dmgThreshold, totalCapMod) {
  // In practice, using actual GBF data,
  // this probably always yields an integer,
  // but let's round it anyway to be safe.
  return Math.round(dmgThreshold * totalCapMod / 100);
}

// Returns the total cap modifier for single attacks based on the given data.
function singleAttackTotalCapMod(params) {
  let finalCapMod = totalFinalDmgMod(params);
  let assassinCapMod = 100 + params.mods.assassin.singleCapUp;
  let sumOfOtherCapMods = 100;
  let offElemReduction = 100;
  if (!params.enemyElement.isWeak) {
    offElemReduction -= params.enemyOffElementReduction.dmgReduction;
  }

  // Return the total. Keep one factor of 100 in the total so it remains a %.
  let total = finalCapMod * assassinCapMod * sumOfOtherCapMods * offElemReduction;
  return total / (100 ** 3);
}

// Returns the total final dmg modifier based on the given data.
function totalFinalDmgMod(params) {
  let finalDmgMods = params.mods.finalDmg;
  let total = 100;
  if (params.enemyElement.isWeak) {
    // Add seraphic or 5* eternal lv95 support skill.
    // These effects do not stack: if both are applicable,
    // we use the larger of the two effects.
    let seraphicBonus = finalDmgMods.seraphic.dmgCapUp;
    if (!params.isMc && params.character.notMc.is5StarEternal) { // TODO
      if (params.character.notMc.eternal5Star.isLv95) {
        seraphicBonus = Math.max(seraphicBonus, 20);
      }
    }
    total += seraphicBonus;
    total += finalDmgMods.arcarumSummonSubAura.dmgCapUp;
  }
  for (let otherMod of finalDmgMods.others) {
    total += otherMod.dmgCapUp;
  }
  return total;
}

// Handles all GBF math calculations.
class GbfMath {
  // Creates and returns a new object containing calculation results based on
  // the given calculation params.
  //
  // See GbfData.newCalcResults to see what the returned
  // data structure looks like.
  static calculateResults(params) {
    let results = GbfData.newCalcResults();
    let totalCapMod = 0;
    let capTiers = null;
    let rawDmg = 0;

    // Compute single attack soft cap.
    totalCapMod = singleAttackTotalCapMod(params);
    capTiers = SingleAttackCapTiers;
    rawDmg = rawDmgToReachSoftCap(totalCapMod, capTiers);
    results.softCaps.singleAttack.softCap = GbfMath.cappedDmg(rawDmg, totalCapMod, capTiers);
    results.softCaps.singleAttack.rawDmg = rawDmg;

    // Compute charge attack soft cap.
    totalCapMod = chargeAttackTotalCapMod(params);
    if (!params.isMc && params.character.notMc.is5StarEternal) {
      capTiers = ChargeAttack5StarEternalCapTiers;
    } else {
      capTiers = ChargeAttackDefaultCapTiers;
    }
    rawDmg = rawDmgToReachSoftCap(totalCapMod, capTiers);
    results.softCaps.chargeAttack.softCap = GbfMath.cappedDmg(rawDmg, totalCapMod, capTiers);
    results.softCaps.chargeAttack.rawDmg = rawDmg;

    return results;
  }

  // Returns the actual damage dealt given a raw damage value,
  // total cap multiplier, and an array of damage cap tiers to use,
  // e.g. the single attack cap tiers.
  //
  // Assumes the cap tiers are ordered from highest threshold
  // to lowest threshold.
  static cappedDmg(rawDmg, totalCapMod, capTiers) {
    let actualDmg = 0;

    // For each tier, reduce any damage in that tier and add it to the
    // running total of actual damage.
    for (let tier of capTiers) {
      let dmgThreshold = scaleDmgThreshold(tier.dmgThreshold, totalCapMod);
      if (rawDmg > dmgThreshold) {
        // Somewhere, GBF rounds fractional damage up to the nearest integer.
        // It's not known where exactly this rounding happens,
        // but rounding up here yields accurate results for chain burst damage.
        actualDmg += Math.ceil((rawDmg - dmgThreshold) * tier.multiplier / 100);
        rawDmg = dmgThreshold; // Remaining raw damage.
      }
    }

    // Add the remaining raw damage that was not reduced by any tier.
    actualDmg += rawDmg;

    return actualDmg;
  }
}

export default GbfMath;
