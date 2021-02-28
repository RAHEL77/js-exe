// In your own words what will this point to and why?(Note
//this is the global scope)
console.log(this); // undifined
//------------------------------------------------
//     Question 2:
//     a. In your own words what will this point to and why.
//**   we will get "hello undifined"
//     b. How can you fix this code.
//   const myObj = {
//     name: "Timmy",
//     greet: () => {
//         console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();

const myObj = {
    name: "Timmy",
    greet: function() {
        return console.log(`Hello ${this.name}`);
    },
};
myObj.greet(); // now returns "Hello Timmy"
//-------------------------------------------------
//     Question 3:
//     In your own words what will this point to and why?
//**** doesn't return anything even if we call to function, because its normal function and not arrow function */
const myFuncDec = function() {
    console.log(this);
};
//-----------------------------------------------
//     Question 4:
//     In your own words what will this point to and why?
//** it returns emty object beacuse arrow func*/
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
//------------------------------------------------
//     Question 5:
//     a. In your own words what will this point to and why.
//****    */
//     b. How can you fix this code.
//     document.querySelector(".element").addEventListener(() => {
//      console.log(this);
//     });
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});