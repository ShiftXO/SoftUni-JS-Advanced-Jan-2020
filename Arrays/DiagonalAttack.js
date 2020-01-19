function solve(inputMatrix) {
    let matrix = [];
    let mainSum = 0, secondSum = 0;
    for (let row = 0; row < inputMatrix.length; row++) {
        const elements = inputMatrix[row].split(' ').map(Number);
        matrix[row] = elements;
        mainSum += matrix[row][row];
        secondSum += matrix[row][inputMatrix.length - row - 1];
    }

    if (mainSum !== secondSum) {
        return printArray(matrix);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row !== col) {
                if (col !== matrix.length - 1 - row) {
                    matrix[row][col] = mainSum;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }

    function printArray(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}

solve(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
);

solve(['1 1 1',
    '1 1 1',
    '1 1 0']);