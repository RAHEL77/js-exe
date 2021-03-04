const a = ["a", "b", "c"]
let sum = "";

function funcA(a) {
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum
}

console.log(funcA(a))