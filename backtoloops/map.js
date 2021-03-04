const a = ["a", "b", "c"]
let sum = "";

function funcA(a) {
    const map1 = a.map(x => x + sum);
    console.log(map1)
}
funcA(a);