"use strict";
const unitsVolume = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVolume(value, from, to) {
    const fromIndex = unitsVolume.indexOf(from);
    const toIndex = unitsVolume.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
