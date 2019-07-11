// Convenience function to display fractions like 0.55 as percents like 55
// (without the % sign, so the result can be put into an input field).
//
// Due to floating point inaccuracy (e.g. 0.55 * 100 yields 55.00000000000001),
// we need to round the result.
export function toPercent(value) {
  return Math.round(value * 100 * 1000) / 1000;
}
