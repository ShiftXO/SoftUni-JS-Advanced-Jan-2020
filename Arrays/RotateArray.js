function solve(params) {
    let rotations = params[params.length - 1];
    params.pop();
    for (let i = 0; i < rotations % params.length; i++) {
        params.unshift(params.pop());
    }
    console.log(params.join(' '));
}

solve(['1', 
'2', 
'3', 
'4', 
'2']
);
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);