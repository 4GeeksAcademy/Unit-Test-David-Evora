const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * 1.07;
};

const fromDollarToYen = (valueInDollar) => {
    return valueInDollar * 106.58;
};

const fromYenToPound = (valueInYen) => {
    return valueInYen * 0.00625;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };