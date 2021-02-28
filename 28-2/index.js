// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const obj = {
    name: "kilair",
    printName: function() {
        console.log(`my name is ${this.name}`);
    },
    set: function() {
        console.log(setTimeout(printName, 1000));
    }
}

function setPrint(func) {
    return func;
}
console.log(setPrint.apply(obj.printName));