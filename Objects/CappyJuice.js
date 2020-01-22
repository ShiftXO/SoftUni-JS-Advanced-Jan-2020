function solve(input) {

    let output = {};
    let store = {};

    for (let i = 0; i < input.length; i++) {
        let [item, quantity] = input[i].split('=>')
        if (item in store) {
            store[item] += Number(quantity)
        } else {
            store[item] = Number(quantity)
        }

        if (store[item] >= 1000) {
            if (item in output) {
                output[item] += Number(quantity)
            } else {
                output[item] = store[item]
            }
        }
    }

    for (let obj in output) {
        console.log(`${obj}=> ${Math.floor(output[obj] / 1000)}`)
    }
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
