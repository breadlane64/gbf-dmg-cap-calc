// Returns the total Assassin cap up modifier based on the given data.
// A modifier of 100 means the damage cap should be unchanged.
// If isSingle is true, the single cap mod will be used.
// If isSingle is false, the charge cap mod will be used.
export function totalAssassinMod(party, character, isSingle) {
  let total = 100;
  let buffFromParty = 0;
  let buffFromChar = 0;
  let capUpKey = (isSingle ? "singleCapUp" : "chargeCapUp");
  if (party.assassinBuff.enabled) {
    buffFromParty = party.assassinBuff.dataRef[capUpKey];
  }
  if (character.assassinBuff.enabled) {
    buffFromChar = character.assassinBuff.dataRef[capUpKey];
  }

  // Assassin buffs do not stack. Add the highest of the two buffs.
  total += Math.max(buffFromParty, buffFromChar)
  return total;
}
