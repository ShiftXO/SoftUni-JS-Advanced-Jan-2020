function solve(fruit, weight, money) {
    let currentWeight = weight / 1000;
    let price = currentWeight * money;

    return `I need $${price.toFixed(2)} to buy ${currentWeight.toFixed(2)} kilograms ${fruit}.`;
}
console.log(solve('apple', 1563, 2.35));
