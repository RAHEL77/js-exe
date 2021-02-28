const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}

// function printHeroes(heroes, printFunc) {
function printHeroes(heroes, printFunc) {
    printName.call(superHeroes[0])
    printName.call(superHeroes[1])
}
// console.log(printHeroes.bind(superHeroes, printName))
printHeroes(superHeroes, printName)