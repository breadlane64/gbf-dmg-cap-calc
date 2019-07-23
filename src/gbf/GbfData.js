import { CUSTOM_KEY, WEAK_ELEM_KEY } from './data/DataUtils'
import ChargeCapTiers from './data/caps/ChargeCapTiers'
import DmgCapTiers from './data/caps/DmgCapTiers'
import SingleCapTiers from './data/caps/SingleCapTiers'
import CharacterAssassin from './data/character_buffs/Assassin'
import CharacterSeraphicSupportSkill from './data/character/SeraphicSupportSkill'
import FoeElement from './data/foe/Element'
import FoeOffElementReduction from './data/foe/OffElementReduction'
import PartyAssassin from './data/party_buffs/Assassin'
import ArcarumSummonSubAura from './data/summons/ArcarumSubAura'
import PrimarchSummonSubAura from './data/summons/PrimarchSubAura'
import SummonTypes from './data/summons/Types'
import Seraphic from './data/weapons/Seraphic'
import WeaponTypes from './data/weapons/Types'

const MC_ID = 1; // The MC always has this id.
const MC_NAME = "MC";

// Contains all data related to GBF.
// The data is actually defined in the modules in the data subfolder.
// Class functions below simply return the data from that subfolder.
class GbfData {
  constructor() {
    this.super();
  }

  static get MC_ID() {
    return MC_ID;
  }

  static get MC_NAME() {
    return MC_NAME;
  }

  // Static class functions

  // Returns an object containing a set of calculation parameters
  // with default values.
  //
  // This function also documents what the calculation parameters
  // data structure looks like.
  static get defaultCalcParams() {
    return {
      party: {
        foeElement: FoeElement[WEAK_ELEM_KEY],
        foeOffElementReduction: FoeOffElementReduction.NONE,
        seraphicWeapon: {
          enabled: true,
          dataRef: Seraphic.SSR, // Do not modify referenced object. If custom, modify customData instead.
          customData: {...Seraphic[CUSTOM_KEY]}, // Modifiable.
        },
        otherWeapons: [
          {
            enabled: true,
            data: {
              key: WeaponTypes.ULTIMA_GAUPH_KEY_GAMMA.key,
              value: WeaponTypes.ULTIMA_GAUPH_KEY_GAMMA.value,
            },
          },
        ],
        arcarumSummonSubAura: {
          enabled: true,
          dataRef: ArcarumSummonSubAura.NONE, // Do not modify referenced object. If custom, modify customData instead.
          customData: {...ArcarumSummonSubAura[CUSTOM_KEY]}, // Modifiable.
        },
        primarchSummonSubAura: {
          enabled: true,
          dataRef: PrimarchSummonSubAura.NONE, // Do not modify referenced object. If custom, modify customData instead.
          customData: {...PrimarchSummonSubAura[CUSTOM_KEY]}, // Modifiable.
        },
        otherSummons: [
          {
            enabled: true,
            data: {
              key: SummonTypes.OMEGA.key,
              description: SummonTypes.OMEGA.name,
              value: SummonTypes.OMEGA.value,
            },
          },
        ],
        assassinBuff: {
          enabled: true,
          dataRef: PartyAssassin.NONE, // Do not modify referenced object. If custom, modify customData instead.
          customData: {...PartyAssassin[CUSTOM_KEY]}, // Modifiable.
        },
        dmgBoostedBuff: 0,
        otherBuffs: [
          // TODO: add Rage IV?
        ],
      }, // party

      mc: {
        id: MC_ID,
        name: MC_NAME,
        dmgCapTiers: DmgCapTiers.DEFAULT,
        customDmgCapTiers: {
          ...DmgCapTiers[CUSTOM_KEY],
          singleCapTiers: {...SingleCapTiers[CUSTOM_KEY]},
          chargeCapTiers: {...ChargeCapTiers[CUSTOM_KEY]},
        },
        dmgCapUpBonuses: 1,
        dmgCapUpEmps: 15,
        chainDmgCapUpEmps: 5,
        assassinBuff: {
          enabled: true,
          dataRef: CharacterAssassin.NONE, // Do not modify referenced object. If custom, modify customData instead.
          customData: {...CharacterAssassin[CUSTOM_KEY]}, // Modifiable.
        },
        dmgBoostedBuff: 0,
        otherBuffs: [],
      },

      characters: [
        // Add Katalina as a default character.
        {
          id: MC_ID + 1,
          name: "Katalina",
          dmgCapTiers: DmgCapTiers.DEFAULT,
          customDmgCapTiers: {
            ...DmgCapTiers[CUSTOM_KEY],
            singleCapTiers: {...SingleCapTiers[CUSTOM_KEY]},
            chargeCapTiers: {...ChargeCapTiers[CUSTOM_KEY]},
          },
          chargeCapUpEmps: 0,
          seraphicSupportSkill: {
            enabled: true,
            dataRef: CharacterSeraphicSupportSkill.NONE, // Do not modify referenced object. If custom, modify customData instead.
            customData: {...CharacterSeraphicSupportSkill[CUSTOM_KEY]}, // Modifiable.
          },
          assassinBuff: {
            enabled: true,
            dataRef: CharacterAssassin.NONE, // Do not modify referenced object. If custom, modify customData instead.
            customData: {...CharacterAssassin[CUSTOM_KEY]}, // Modifiable.
          },
          dmgBoostedBuff: 0,
          otherBuffs: [],
        },
      ],
    };
  }

  // TEMP
  // TODO: document this in comment somewhere.
  static sampleCalcResults() {
    return {
      singleCaps: [
        {
          id: MC_ID,
          name: MC_NAME,
          totalCapMod: 100, // 100 means caps are unchanged.
          totalDmgBoost: 0, // 0 means cap is unchanged.
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          capTiersArray: SingleCapTiers.DEFAULT.tiers,
        },
      ],
      chargeCaps: [
        {
          id: MC_ID,
          name: MC_NAME,
          totalCapMod: 100, // 100 means caps are unchanged.
          totalDmgBoost: 0, // 0 means cap is unchanged.
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          capTiersArray: ChargeCapTiers.DEFAULT.tiers,
        },
      ],
      chainBurst: {
        totalCapMod: 100, // 100 means caps are unchanged.
        totalDmgBoost: 0, // 0 means damage and cap are unchanged.
        totalDmgMod: 100, // 100 means damage is unchanged.
      },
      chainCaps: [
        {
          chainNumber: 2,
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
        },
        {
          chainNumber: 3,
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
        },
        {
          chainNumber: 4,
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
        },
      ],
    };
  }
}

export default GbfData;
