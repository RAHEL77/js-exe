const arr = ["a", "b", "c"]
    // let sum = "";
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function funcA(arr) {

    console.log(arr.reduce(reducer));
}
funcA(arr)