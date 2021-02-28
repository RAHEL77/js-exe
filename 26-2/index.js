const storm = {
    superPower: "fly",
    printSuperPower: printSuperPower()
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.printSuperPower()