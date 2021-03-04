const a = ["a", "b", "c"]
let sum = "";

function funcA(a) {
    a.forEach(element => {
        sum = sum + element;
    })
    return sum;
}

console.log(funcA(a))