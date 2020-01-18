function solve(a, b) {
    var gcd = function solve(a, b) {
        if (!b) {
            return a;
        }

        return gcd(b, a % b);
    }

    return gcd(a, b)
}
console.log(solve(2154, 458));