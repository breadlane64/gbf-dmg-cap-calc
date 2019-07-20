import GbfData from './GbfData'
import FoeElement from './data/foe/Element'

// Returns the total cap modifier for charge attacks based on the given data.
// A modifier of 100 means the caps should be unchanged.
function chargeAttackTotalCapMod(party, character) {
  let finalCapMod = totalFinalDmgMod(party, character);
  let assassinCapMod = totalAssassinCapUpMod(party, character, false);
  let sumOfOtherCapMods = 100; // TODO

  return finalCapMod * assassinCapMod * sumOfOtherCapMods / (100 ** 2);
}

// Computes and returns the raw damage needed to reach the soft damage cap
// based on the given modifier and cap tiers.
//
// Assumes the cap tiers are ordered from highest threshold
// to lowest threshold.
function rawDmgToReachSoftCap(totalCapMod, capTiers) {
  return scaleDmgTier(capTiers[0].dmgTier, totalCapMod);
}

// Returns the given damage threshold multiplied by the given modifier.
// Always returns an integer.
function scaleDmgTier(dmgTier, totalCapMod) {
  // In practice, using actual GBF data,
  // this probably always yields an integer,
  // but let's round it anyway to be safe.
  return Math.round(dmgTier * totalCapMod / 100);
}

// Returns the total cap modifier for single attacks based on the given data.
// A modifier of 100 means the caps should be unchanged.
function singleAttackTotalCapMod(party, character) {
  let finalCapMod = totalFinalDmgMod(party, character);
  let assassinCapMod = totalAssassinCapUpMod(party, character, true);
  let sumOfOtherCapMods = 100; // TODO

  // Return the total. Keep one factor of 100 in the total so it remains a %.
  return finalCapMod * assassinCapMod * sumOfOtherCapMods / (100 ** 2);
}

// Returns the total Assassin cap up modifier based on the given data.
// If isSingle is true, the single cap mod will be used.
// If isSingle is false, the charge cap mod will be used.
function totalAssassinCapUpMod(party, character, isSingle) {
  let total = 100;
  let buffFromParty = 0;
  let buffFromChar = 0;
  let capUpKey = (isSingle ? "singleCapUp" : "chargeCapUp");
  if (party.assassinBuff.enabled) {
    buffFromParty = party.assassinBuff.data[capUpKey];
  }
  if (character.assassinBuff.enabled) {
    buffFromChar = character.assassinBuff.data[capUpKey];
  }

  // Assassin buffs do not stack. Add the highest of the two buffs.
  total += Math.max(buffFromParty, buffFromChar)
  return total;
}

// Returns the total final dmg modifier based on the given data.
function totalFinalDmgMod(party, character) {
  let total = 100;

  if (party.foeElement.key === FoeElement.WEAK.key) {
    // Add seraphic bonus. This usually comes from a Seraphic weapon
    // but it can also come from a character's support skill,
    // e.g. 5* Eternals at lv95+.
    // These two seraphic bonus sources do not stack.
    // If both are present, use the larger of the two.
    let seraphicBonus = 0;
    if (party.seraphicWeapon.enabled) {
      seraphicBonus = party.seraphicWeapon.data.dmgCapUp;
    }
    if (character.id !== GbfData.MC_ID && character.seraphicSupportSkill.enabled) {
      let supportSkillBonus = character.seraphicSupportSkill.data.dmgCapUp;
      seraphicBonus = Math.max(seraphicBonus, supportSkillBonus);
    }
    total += seraphicBonus;

    // Arcarum summon sub-aura stacks with other seraphic bonuses.
    if (party.arcarumSummonSubAura.enabled) {
      total += party.arcarumSummonSubAura.data.dmgCapUp;
    }
  }

  // TODO: Add any party/character final damage buffs.

  if (party.foeElement.key !== FoeElement.WEAK.key) {
    // Off-element damage reduction stacks multiplicatively
    // with the final DMG modifier (and all other modifiers),
    // hence we use multiplication here instead of addition.
    total *= (100 - party.foeOffElementReduction.dmgReduction) / 100;
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
    let party = params.party;
    let results = {
      singleCaps: [],
      chargeCaps: [],
      chainCaps: [],
    };
    let totalCapMod = 0;
    let capTiersArray = null;
    let rawDmg = 0;

    for (let character of [params.mc, ...params.characters]) {
      // Compute character's single attack soft cap.
      totalCapMod = singleAttackTotalCapMod(party, character);
      capTiersArray = character.dmgCapTiers.singleCapTiers.tiersArray;
      rawDmg = rawDmgToReachSoftCap(totalCapMod, capTiersArray);
      results.singleCaps.push({
        id: character.id,
        name: character.name,
        totalCapMod: totalCapMod,
        softDmgCap: GbfMath.cappedDmg(rawDmg, totalCapMod, capTiersArray),
        rawDmg: rawDmg,
        capTiersArray: capTiersArray,
      });

      // Compute character's charge attack soft cap.
      totalCapMod = chargeAttackTotalCapMod(party, character);
      capTiersArray = character.dmgCapTiers.chargeCapTiers.tiersArray;
      rawDmg = rawDmgToReachSoftCap(totalCapMod, capTiersArray);
      results.chargeCaps.push({
        id: character.id,
        name: character.name,
        totalCapMod: totalCapMod,
        softDmgCap: GbfMath.cappedDmg(rawDmg, totalCapMod, capTiersArray),
        rawDmg: rawDmg,
        capTiersArray: capTiersArray,
      });
    }

    for (let chainNumber in [2, 3, 4]) {
      // TODO: compute chain burst caps.
    }

    return results;
  }

  // Returns the actual damage dealt given a raw damage value,
  // total cap multiplier, and an array of damage cap tiers to use,
  // e.g. the single attack cap tiers.
  //
  // Assumes the cap tiers are ordered from highest threshold
  // to lowest threshold.
  static cappedDmg(rawDmg, totalCapMod, capTiersArray) {
    let cappedDmg = 0;

    // For each tier, reduce any damage in that tier and add it to the
    // running total of actual damage.
    for (let tier of capTiersArray) {
      let dmgTier = scaleDmgTier(tier.dmgTier, totalCapMod);
      if (rawDmg > dmgTier) {
        // Somewhere, GBF rounds fractional damage up to the nearest integer.
        // It's not known where exactly this rounding happens,
        // but rounding up here yields accurate results for chain burst damage.
        cappedDmg += Math.ceil((rawDmg - dmgTier) * tier.multiplier / 100);
        rawDmg = dmgTier; // Remaining raw damage.
      }
    }

    // Add the remaining raw damage that was not reduced by any tier.
    cappedDmg += rawDmg;

    return cappedDmg;
  }

  // Returns the raw damage needed to reach a given capped damage value.
  //
  // Assumes the cap tiers are ordered from highest threshold
  // to lowest threshold.
  static rawDmgToReachCappedDmg(cappedDmg, totalCapMod, capTiersArray) {
    let rawDmg = 0;

    // Copy the cap tiers array and append a tier for 0 damage
    // with no damage reduction, i.e. a 100% multiplier.
    // This acts as a sentinel for the for-loop below.
    let newTiersArray = [
      ...capTiersArray,
      {
        dmgTier: 0,
        multiplier: 100,
      },
    ];

    // Iterate over the tiers backwards, from the lowest-damage tier
    // to the 2nd-highest-damage tier.
    // For each tier, compute how much capped damage was contributed
    // between the current tier and the next-highest-damage tier.
    for (let i = newTiersArray.length - 1; i > 0; i -= 1) {
      // The next-highest-damage tier is the previous tier in the array.
      let nextTier = newTiersArray[i - 1];
      let curTier = newTiersArray[i];
      let nextDmgTier = scaleDmgTier(nextTier.dmgTier, totalCapMod);
      let curDmgTier = scaleDmgTier(curTier.dmgTier, totalCapMod);

      // Compute the max amount of capped damage that can be contributed
      // by the current tier, then the actual amount contributed based on the
      // remaining capped damage.
      let maxCappedDmgFromCurTier = Math.ceil((nextDmgTier - curDmgTier) * curTier.multiplier / 100);
      let cappedDmgFromCurTier = Math.min(cappedDmg, maxCappedDmgFromCurTier);

      // Compute how much raw damage was needed to get the capped damage
      // from the current tier. Add it to the running total.
      rawDmg += Math.floor(cappedDmgFromCurTier * 100 / curTier.multiplier);

      // Compute the remaining capped damage.
      // If no damage remains, stop early.
      cappedDmg -= cappedDmgFromCurTier;
      if (cappedDmg <= 0) {
        break;
      }
    }

    // Handle any remaining capped damage above the highest-damage tier.
    rawDmg += Math.floor(cappedDmg * 100 / newTiersArray[0].multiplier);

    return rawDmg;
  }
}

export default GbfMath;
