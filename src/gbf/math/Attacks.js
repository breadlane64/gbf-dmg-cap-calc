import { totalAssassinMod } from './AssassinMod'
import { totalFinalDmgMod } from './FinalDmgMod'
import { totalOtherChargeMods } from './OtherChargeMods'
import { totalOtherSingleMods } from './OtherSingleMods'

// Returns the total cap modifier for charge attacks based on the given data.
// A modifier of 100 means the caps should be unchanged.
export function chargeAttackTotalCapMod(party, character) {
  let finalCapMod = totalFinalDmgMod(party, character);
  let assassinCapMod = totalAssassinMod(party, character, false);
  let sumOfOtherCapMods = totalOtherChargeMods(party, character);

  return finalCapMod * assassinCapMod * sumOfOtherCapMods / (100 ** 2);
}

// Returns the total cap modifier for single attacks based on the given data.
// A modifier of 100 means the caps should be unchanged.
export function singleAttackTotalCapMod(party, character) {
  let finalCapMod = totalFinalDmgMod(party, character);
  let assassinCapMod = totalAssassinMod(party, character, true);
  let sumOfOtherCapMods = totalOtherSingleMods(party, character);

  // Return the total. Keep one factor of 100 in the total so it remains a %.
  return finalCapMod * assassinCapMod * sumOfOtherCapMods / (100 ** 2);
}
