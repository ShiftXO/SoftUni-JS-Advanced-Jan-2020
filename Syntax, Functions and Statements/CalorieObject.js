function solve(params) {
    let obj = new Object();
    for (let i = 0; i < params.length; i += 2) {
        const element = params[i];
        obj[element] = +params[i+1];
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);