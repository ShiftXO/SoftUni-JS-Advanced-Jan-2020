function solve(params) {
    let data = params.map(x => JSON.parse(x));

    let table = content => `<table>${content}\n</table>`;
    let tRow = content => `\n   <tr>${content}\n    </tr>`;
    let tData = content => `\n      <td>${content}</td>`;

    let result = data.reduce((accRows, row) => {
        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + tData(td);
        }, '')

        return accRows + tRow(tdForPerson);
    }, '')

    return table(result);
}

console.log(solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));
