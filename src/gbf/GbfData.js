import ChargeAttack5StarEternalCapTiers from './data/caps/ChargeAttack5StarEternalCapTiers'
import ChargeAttackDefaultCapTiers from './data/caps/ChargeAttackDefaultCapTiers'
import SingleAttackCapTiers from './data/caps/SingleAttackCapTiers'
import EnemyElement from './data/general/EnemyElement'
import ArcarumSummonSubAura from './data/mods/ArcarumSummonSubAura'
import Assassin from './data/mods/Assassin'
import EnemyOffElementReduction from './data/mods/EnemyOffElementReduction'
import Seraphic from './data/mods/Seraphic'

// Contains all data related to GBF.
// The data is actually defined in the modules in the data subfolder.
// Class functions below simply return the data from that subfolder.
class GbfData {
  constructor() {
    this.super();
  }

  // Returns an object containing a set of calculation parameters
  // with default values.
  //
  // This function also documents what the calculation parameters
  // data structure looks like.
  static get defaultCalcParams() {
    return {
      enemyElement: EnemyElement.WEAK,
      enemyOffElementReduction: EnemyOffElementReduction.NONE,
      isMc: true,

      character: {
        mc: {
          hasMasteredMechanic: false, // Applies only if character is MC.
          emps: {
            dmgCapUp: 0, // Applies only if character is MC.
            chainCapUp: 0, // Always applies. (verification needed) TODO: move to general mods
          },
        },
        notMc: {
          is5StarEternal: false, // Applies only if character is not MC.
          supportSkill: null, // Applies only if character is not MC.
          eternal5Star: {
            isLv95: false, // Applies only if character is 5* eternal.
          },
          emps: {
            chargeCapUp: 0, // Applies only if character is not MC.
          },
        },
      },

      mods: {
        finalDmg: {
          seraphic: Seraphic.NONE,
          arcarumSummonSubAura: ArcarumSummonSubAura.NONE,
          others: [],
        },
        assassin: Assassin.NONE,
        supplementalDmg: [],
      },
    };
  }

  // TEMP: used for testing purposes only.
  static get testingCalcParams() {
    let params = GbfData.defaultCalcParams;
    /*
    GbfData.custom.assassin = {
      key: Assassin.CUSTOM.key,
      name: "Custom",
      description: "test assassin",
      singleCapUp: 45,
      chargeCapUp: 55,
    };
    params.mods.assassin = GbfData.custom.assassin;
    */

    return params;
  }

  // Creates and returns a new object containing a calculation results
  // data structure, populated with placeholder values.
  static newCalcResults() {
    return {
      totalCapMods: {
        singleAttack: 0,
        chargeAttack: 0,
        chainBurst: 0,
      },

      softCaps: {
        singleAttack: {
          softCap: 0,
          rawDmg: 0, // Raw damage to reach the soft cap.
        },
        chargeAttack: {
          softCap: 0,
          rawDmg: 0, // Raw damage to reach the soft cap.
        },
        chainBurst2c: { // 2 chain burst.
          softCap: 0,
          rawDmg: 0, // Raw damage to reach the soft cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
          avgChargeDmg: 0, // Average CA damage needed to reach the soft cap.
        },
        chainBurst3c: { // 3 chain burst.
          softCap: 0,
          rawDmg: 0, // Raw damage to reach the soft cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
          avgChargeDmg: 0, // Average CA damage needed to reach the soft cap.
        },
        chainBurst4c: { // 4 chain burst.
          softCap: 0,
          rawDmg: 0, // Raw damage to reach the soft cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
          avgChargeDmg: 0, // Average CA damage needed to reach the soft cap.
        },
      },
    };
  }
}

// Publicly-accessible, user-customizable data.
// Note that the {...object} syntax clones the original object.
GbfData.custom = {
  arcarumSummonSubAura: {...ArcarumSummonSubAura.CUSTOM},
  assassin: {...Assassin.CUSTOM},
  enemyOffElementReduction: {...EnemyOffElementReduction.CUSTOM},
  seraphic: {...Seraphic.CUSTOM},
};

export default GbfData;
