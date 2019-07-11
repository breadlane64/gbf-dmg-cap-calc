import React from "react";
import GbfData from 'gbf/GbfData';

// Context for the calculator's modifier inputs.
const CalcModsContext = React.createContext({
  calcParams: GbfData.defaultCalcParams,
  setAllCalcParams: () => {}, // Do-nothing function.
});

export default CalcModsContext;
