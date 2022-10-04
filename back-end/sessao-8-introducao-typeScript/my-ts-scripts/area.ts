const unitsArea = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea (value: number, from: string, to: string): number {
    const fromIndex = unitsArea.indexOf(from);
    const toIndex = unitsArea.indexOf(to);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}