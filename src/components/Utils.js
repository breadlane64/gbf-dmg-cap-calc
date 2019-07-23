// Parses a float from a string entered into an input field.
// Returns 0 if the string is empty or whitespace only.
// Returns its float value if the string is a finite number.
// Returns the given old value otherwise.
export function parseNumericInput(str, oldValue) {
  str = str.trim();
  if (str.length === 0) {
    return 0;
  }
  let value = parseFloat(str);
  if (!isFinite(value)) {
    return oldValue;
  }
  return value;
}
