// 起征点
const taxThreshold = 5000;

// 阶梯税率和速算扣除数
const taxLevels = [
    { max: 3000, ratio: 0.03, diff: 0 },
    { max: 12000, ratio: 0.1, diff: 210 },
    { max: 25000, ratio: 0.2, diff: 1410 },
    { max: 35000, ratio: 0.25, diff: 2660 },
    { max: 55000, ratio: 0.3, diff: 4410 },
    { max: 80000, ratio: 0.35, diff: 7160 },
    { max: Infinity, ratio: 0.45, diff: 15160 }
]

function findLevelIndex(taxableWage) {
    if (isNaN(taxableWage)) {
        throw new Error(`wage: "${taxableWage}" is not a valid number`);
    }

    if (taxableWage <= 0) return 0;

    let index = 0;
    while (taxableWage > taxLevels[index].max) {
        index++;
    }

    return index;
}

export default function calculateIncomeTax(wage) {
    const taxableWage = wage - taxThreshold;
    if (taxableWage <= 0) return 0;

    const index = findLevelIndex(taxableWage);
    if (index < 0 || index >= taxLevels.length) {
        throw new Error(`wage level ${index} is invalid.`);
    }

    const taxObj = taxLevels[index];
    if (!taxObj) {
        throw new Error("Cannot find the valid tax object.");
    }

    const { ratio, diff } = taxObj;
    return taxableWage * ratio - diff;
}