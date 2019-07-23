// All custom data keys must use this value.
// This way, whenever user-provided data contains a key we don't recognize
// (e.g. if the key was changed during a website update),
// then we can change it to the custom key to avoid losing the user's data.
export const CUSTOM_KEY = "CUSTOM";

// This foe element key indicates that the foe's element is weak against
// the player's element.
// The damage cap and chain burst damage math use this key.
export const WEAK_ELEM_KEY = "WEAK";

// Returns a hashmap of GBF data built from the data in the given array.
// Each array element must contain a key property.
// This will become its key in the hashmap.
export function dataArrayToHashmap(dataArray) {
  let hashmap = {};
  for (let dataElem of dataArray) {
    hashmap[dataElem.key] = dataElem;
  }
  return hashmap;
}
