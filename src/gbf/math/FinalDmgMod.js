import GbfData from '../GbfData'
import { WEAK_ELEM_KEY } from '../data/DataUtils'
import FoeElement from '../data/foe/Element'

// Returns the total final damage modifier based on the given data.
// A modifier of 100 means the damage cap should be unchanged.
export function totalFinalDmgMod(party, character) {
  let total = 100;

  if (party.foeElement.key === WEAK_ELEM_KEY) {
    // Add seraphic bonus. This usually comes from a Seraphic weapon
    // but it can also come from a character's support skill,
    // e.g. 5* Eternals at lv95+.
    // These two seraphic bonus sources do not stack.
    // If both are present, use the larger of the two.
    let seraphicBonus = 0;
    if (party.seraphicWeapon.enabled) {
      seraphicBonus = party.seraphicWeapon.dataRef.value;
    }
    if (character.id !== GbfData.MC_ID && character.seraphicSupportSkill.enabled) {
      let supportSkillBonus = character.seraphicSupportSkill.dataRef.value;
      seraphicBonus = Math.max(seraphicBonus, supportSkillBonus);
    }
    total += seraphicBonus;

    // Arcarum summon sub-aura stacks with other seraphic bonuses.
    if (party.arcarumSummonSubAura.enabled) {
      total += party.arcarumSummonSubAura.dataRef.value;
    }
  }

  // TODO: Add any party/character final damage buffs.

  if (party.foeElement.key !== WEAK_ELEM_KEY) {
    // Off-element damage reduction stacks multiplicatively
    // with the final DMG modifier (and all other modifiers),
    // hence we use multiplication here instead of addition.
    total *= (100 - party.foeOffElementReduction.dmgReduction) / 100;
  }
  return total;
}
