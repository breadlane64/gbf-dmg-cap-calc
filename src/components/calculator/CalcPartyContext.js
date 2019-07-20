import React from "react";
import GbfData from 'gbf/GbfData';

// Context for the calculator's modifier inputs.
const CalcPartyContext = React.createContext({
  curCharacterId: 0,
  calcParams: {},
  setAllCalcParams: () => {}, // Do-nothing function.
  setCurCharacterId: () => {}, // Do-nothing function.
});

export default CalcPartyContext;
