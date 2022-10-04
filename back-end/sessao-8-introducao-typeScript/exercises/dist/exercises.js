"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekDays = exports.circle = exports.trapeze = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losangle(diagonB, diagonS) {
    return (diagonB * diagonS) / 2;
}
exports.losangle = losangle;
function trapeze(height, B, b) {
    return ((B + b) * height) / 2;
}
exports.trapeze = trapeze;
function circle(r) {
    const PI = 3.14;
    return (r ** 2) * PI;
}
exports.circle = circle;
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
})(WeekDays = exports.WeekDays || (exports.WeekDays = {}));
