function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemon = function() {
    return `I choose you, ${this.name}`
}
Pokemon.prototype.attack = function(attackNum) {
    return `${this.name} use ${this.attackList[attackNum]}`

}
var pokemon1 = new Pokemon("pokeA", "typeA", ["a1", "a21"]);
console.log(pokemon1.callPokemon())
console.log(pokemon1.attack(1))


var pokemon2 = new Pokemon("pokeB", "typeB", ["b1", "b3"]);
console.log(pokemon2.callPokemon())
console.log(pokemon2.attack(1))


var pokemon3 = new Pokemon("pokeC", "typeC", ["c11", "c13"]);
console.log(pokemon3.callPokemon())
console.log(pokemon3.attack(0))