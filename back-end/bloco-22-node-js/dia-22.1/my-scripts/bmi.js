const readline = require('readline-sync');


const handleBMI = (weight, height) => {
    console.log(`Weight: ${weight}, Height: ${height}`);
    
    const heightInM = height / 100;
    const finalHeigth = heightInM ** 2;
    
    const bmi = weight / finalHeigth;
    return bmi;
}

const main = () => {
    const weight = readline.questionFloat('What your weight in kg?');
    const height = readline.questionInt('What your height in cm?');
    const bmi = handleBMI(weight, height)

    if (bmi <= 18.5) {  console.log(`BMI: ${bmi.toFixed(2)} - Abaixo do peso (magreza)`)}
    else if (bmi >= 18.5 && bmi <= 24.9) {  console.log(`BMI: ${bmi.toFixed(2)} - Peso normal`)}
    else if (bmi >= 25.0 && bmi <= 29.9) {  console.log(`BMI: ${bmi.toFixed(2)} - Acima do peso (sobrepeso)`)}
    else if (bmi >= 30.0 && bmi <= 34.9) {  console.log(`BMI: ${bmi.toFixed(2)} - Obesidade grau I`)}
    else if (bmi >= 35.0 && bmi <= 39.9) {  console.log(`BMI: ${bmi.toFixed(2)} - Obesidade grau II`)}
    else  console.log(`BMI: ${bmi.toFixed(2)} - Obesidade grau III e IV`)
    
}

main();