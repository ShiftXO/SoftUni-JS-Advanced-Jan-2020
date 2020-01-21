function solve(params) {
    params.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length - b.length || a.localeCompare(b);
      });

    console.log(params.join('\n'));
}

solve(['alpha',
    'beta',
    'gamma']
);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
solve(['test',
    'Deny',
    'omen',
    'Default']
);