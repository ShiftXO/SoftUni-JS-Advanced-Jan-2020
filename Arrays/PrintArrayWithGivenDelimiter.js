function solve(params) {
    let delimiter = params[params.length - 1];
    let arr = params.splice(params.length - 1, 1);
    console.log(params.join(arr));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);