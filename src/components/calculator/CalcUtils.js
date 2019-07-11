import React from 'react';

// Returns the given string as a finite float value.
// Returns 0 if the string is not a finite float, i.e. if it is
// infinity or not a number (NaN).
export function parseFiniteFloat(str) {
  let value = parseFloat(str);
  if (isFinite(value)) {
    return value;
  }
  return 0;
}
