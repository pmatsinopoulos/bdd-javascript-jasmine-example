/*********************************************************************************************
* Returns a copy of "input" without the characters that exist inside the "setOfCharacters".
* It does the work in a case insensitive mode.
* Example: "Hello World!" with "setOfCharacters" being "oe", returns "Hll Wrld!".
*
* @param input
* @param setOfCharacters
* @returns String
*/
function squeeze(input, setOfCharacters) {
  if (input === null) {
    return null;
  }

  if (setOfCharacters === null) {
    return input;
  }

  var re = new RegExp("[" + setOfCharacters + "]", "gi");

  return input.replace(re, '');
}
