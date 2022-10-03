"use strict";
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, from, to) {
    const fromIndex = units.indexOf(from);
    const toIndex = units.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log(convert(20, 'm', 'km'));
