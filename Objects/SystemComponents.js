function solve(params) {
    let data = params.reduce((acc, comp) => {
        let [sysName, compName, subCName] = comp.split(' | ');

        if (acc[sysName]) {
            if (acc[sysName][compName]) {
                acc[sysName][compName].push(subCName);
            } else {
                acc[sysName][compName] = [subCName];
            }
        } else {
            acc[sysName] = { [compName]: [subCName] }
        }

        return acc;
    }, {})

   let sortedData = Object.keys(data).sort((a, b) => {
        if (Object.keys(data[a]).length === Object.keys(data[b]).length) {
            return a.localeCompare(b);
        }

        return Object.keys(data[b]).length - Object.keys(data[a]).length;
    });

    for (const key of sortedData) {
        console.log(key);
        let componentsSortedKeys = Object.keys(data).sort((a, b) => {
            return data[a].length < data[b].length
        })
        for (const kvp of Object.keys(componentsSortedKeys[key])) {
            console.log(`|||${kvp}`);
            data[key][kvp].forEach(x => console.log(`||||||${x}`))
        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);