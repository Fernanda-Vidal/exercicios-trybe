const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"]

function convertCapacity (value: number, from: string, to: string): number {
    const fromIndex = unitsCapacity.indexOf(from);
    const toIndex = unitsCapacity.indexOf(to);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}