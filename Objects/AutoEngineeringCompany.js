function solve(params) {
    let data = params.reduce((acc, cars) => {
        let [make, model, quantity] = cars.split('|').map(x => x.trim());

        if (acc[make]) {
            if (acc[make][model]) {
                acc[make][model] += +quantity;
            } else {
                acc[make][model] = +quantity;
            }
        } else {
            acc[make] = { [model]: +quantity }
        }

        return acc;
    }, {})

    for (const key in data) {
        console.log(key);
        for (const car in data[key]) {
            console.log(`###${car} -> ${data[key][car]}`);
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);