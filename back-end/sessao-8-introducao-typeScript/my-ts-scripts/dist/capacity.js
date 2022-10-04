"use strict";
const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, from, to) {
    const fromIndex = unitsCapacity.indexOf(from);
    const toIndex = unitsCapacity.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
