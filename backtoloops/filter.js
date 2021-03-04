const arr = ["a", "b", "c"]
let sum = "";

function funcA(arr) {
    const result = arr.filter(sum => sum += sum);

    console.log(result);
}
funcA(arr)