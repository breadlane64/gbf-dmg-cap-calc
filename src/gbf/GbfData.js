import { customKey } from './data/DataUtils'
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
        foeElement: FoeElement.WEAK,
        foeOffElementReduction: FoeOffElementReduction.NONE,
        seraphicWeapon: {
          enabled: true,
          data: Seraphic.SSR,
          customData: {...Seraphic[customKey]},
        },
        otherWeapons: [
          {
            enabled: true,
            data: {...WeaponTypes.ULTIMA_GAUPH_KEY_GAMMA},
          },
        ],
        arcarumSummonSubAura: {
          enabled: true,
          data: ArcarumSummonSubAura.NONE,
          customData: {...ArcarumSummonSubAura[customKey]},
        },
        primarchSummonSubAura: {
          enabled: true,
          data: PrimarchSummonSubAura.NONE,
          customData: {...PrimarchSummonSubAura[customKey]},
        },
        otherSummons: [
          {
            enabled: true,
            data: {...SummonTypes.OMEGA},
          },
        ],
        assassinBuff: {
          enabled: true,
          data: PartyAssassin.NONE,
          customData: {...PartyAssassin[customKey]},
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
          ...DmgCapTiers[customKey],
          singleCapTiers: {...SingleCapTiers[customKey]},
          chargeCapTiers: {...ChargeCapTiers[customKey]},
        },
        dmgCapUpBonuses: 1,
        dmgCapUpEmps: 15,
        chainDmgCapUpEmps: 5,
        assassinBuff: {
          enabled: true,
          data: CharacterAssassin.NONE,
          customData: {...CharacterAssassin[customKey]},
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
            ...DmgCapTiers[customKey],
            singleCapTiers: {...SingleCapTiers[customKey]},
            chargeCapTiers: {...ChargeCapTiers[customKey]},
          },
          chargeCapUpEmps: 0,
          seraphicSupportSkill: {
            enabled: true,
            data: CharacterSeraphicSupportSkill.NONE,
            customData: {...CharacterSeraphicSupportSkill[customKey]},
          },
          assassinBuff: {
            enabled: true,
            data: CharacterAssassin.NONE,
            customData: {...CharacterAssassin[customKey]},
          },
          dmgBoostedBuff: 0,
          otherBuffs: [],
        },
      ],
    };
  }

  static newCalcResults() {
    return {
      singleCaps: [],
      chargeCaps: [],
      chainCaps: [],
    }
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
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          capTiersArray: ChargeCapTiers.DEFAULT.tiers,
        },
      ],
      chainCaps: [
        {
          chainNumber: 2,
          totalCapMod: 100, // 100 means caps are unchanged.
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
        },
        {
          chainNumber: 3,
          totalCapMod: 100, // 100 means caps are unchanged.
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
        },
        {
          chainNumber: 4,
          totalCapMod: 100, // 100 means caps are unchanged.
          softDmgCap: 0,
          rawDmg: 0, // Raw damage to reach the soft damage cap.
          totalChargeDmg: 0, // Total CA damage needed to reach the soft cap.
        },
      ],
    };
  }

  // Static class constants

  static get MECHANIC_MASTERY_BONUS_DMG_CAP_UP() { return 1; }
}

export default GbfData;
