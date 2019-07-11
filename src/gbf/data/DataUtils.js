// All custom data keys must use this value.
// This way, whenever user-provided data contains a key we don't recognize
// (e.g. if the key was changed during a website update),
// then we can change it to the custom key to avoid losing the user's data.
export const customKey = "CUSTOM";

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
