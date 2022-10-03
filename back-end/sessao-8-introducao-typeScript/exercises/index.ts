import * as Exercises from './exercises';

console.log(Exercises.greeter('Maria'));
console.log(Exercises.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercises.sumArray([3,6,9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercises.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercises.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercises.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercises.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercises.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercises.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercises.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercises.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercises.rectangle(100, 200)}cm²`);

console.log(Exercises.losangle(32, 18));
console.log(Exercises.losangle(200, 50));
console.log(Exercises.losangle(75, 25));

console.log(Exercises.trapeze(50, 100, 70));
console.log(Exercises.trapeze(35, 75, 50));
console.log(Exercises.trapeze(80, 150, 120));

console.log(Exercises.circle(25));
console.log(Exercises.circle(100));
console.log(Exercises.circle(12.5));


let days: Exercises.WeekDays = Exercises.WeekDays.Monday
console.log(days);