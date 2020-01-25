function solve(params) {
    let data = params.reduce((acc, productLine) => {
        let [name, price] = productLine.split(':').map(x => x.trim());

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], productLine]
        } else {
            acc[name[0]] = [productLine];
        }

        return acc;
    }, {})

    Object.keys(data).sort().map(x => {
        console.log(x);
        data[x].sort().map(product => {
            console.log(` ${product.split(' : ').join(': ')}`);

        })
    })
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
solve(['Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);