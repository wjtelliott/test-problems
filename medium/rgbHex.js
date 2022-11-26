/**
 * Convert an RGB value to HEX color, return as string.
 *
 * - red, green, and blue will not always be numbers, but can always be converted to numbers
 * - if any of the args are null, assume they are 0
 * - some values will not be within 0-255 range, and must be clamped (lower than 0 is 0, higher than 255 is 255)
 * - you do not need to return the "#" symbol before the hex code
 * - all hex code characters must be uppercased
 *
 *
 * sample input => sample output:
 * convertRgb(null, null, null) => "000000"
 * convertRgb(1, 1, 1) => "010101"
 * convertRgb(77, 399, -1) => "4DFF00"
 * convertRgb(154, 801, 37) => "9AFF25"
 */

function convertRgb(red, green, blue) {
    return null;
}

module.exports = convertRgb;
