let solution = (function () {

    return {
        add: (vec1, vec2) => {
            result = [vec1[0] + vec2[0], vec1[1] + vec2[1]];
            return result
        },
        multiply: (vec1, scalar) => {
            result = [vec1[0] * scalar, vec1[1] * scalar];
            return result
        },
        length: (arr) => {
            result =Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]);
            return result
        },
        dot: (arr1, arr2) => {
            result = arr1[0] * arr2[0] + arr1[1] * arr2[1];
            return result
        },
        cross: (arr1, arr2) => {
            result = arr1[0] * arr2[1] - arr1[1] * arr2[0];
            return result;
        }
    }
}())

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));