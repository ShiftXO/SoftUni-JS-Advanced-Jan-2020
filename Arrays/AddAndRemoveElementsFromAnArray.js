function solve(params) {
    let arr = [];
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element === 'add') {
            arr.push(1 + i);
        } else {
            arr.pop();
        }
    }

    let res = arr.length > 0 ? arr.join('\n') : 'Empty';
    console.log(res);
}

solve(['add','add','add','add']);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);