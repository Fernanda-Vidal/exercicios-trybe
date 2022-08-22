const readline = require('readline-sync');


const handleBMI = (weight, height) => {
    console.log(`Weight: ${weight}, Height: ${height}`);
    
    const heightInM = height / 100;
    const finalHeigth = heightInM ** 2;
    
    const bmi = weight / finalHeigth;
    return bmi;
}

const main = () => {
    const weight = readline.questionInt('What your weight in kg?');
    const height = readline.questionInt('What your height in cm?');
    const bmi = handleBMI(weight, height)

    console.log(`BMI: ${bmi.toFixed(2)}`)
}

main();