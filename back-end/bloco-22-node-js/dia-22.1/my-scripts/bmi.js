const weight = 68;
const height = 169;

const handleBMI = (weight, height) => {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const heightInM = height / 100;
    const finalHeigth = heightInM ** 2;

    const bmi = weight / finalHeigth;
    return bmi;
}

const main = () => {
    const bmi = handleBMI(weight, height)

    console.log(`BMI: ${bmi.toFixed(2)}`)
}

main();