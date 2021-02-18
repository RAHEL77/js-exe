/*********************  block 1 */
/* b is inner variable in function otherFunction and always we will get the value of 
b from this function, but here there is no assignment for b, so it will get the value 
from outer function that is b=5*. Even we call function someFunction with new argument 
it will get the inner variable that b=5*/

var b = 1;

function someFunction(number) {
    function otherFunction(input) {
        return b; //b is without assigment
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9); //goes to otherFunction and returns it
var result = firstResult(2); //=5 - add console.log...

/*****************block 2*/
var a = 1;

function b2() {
    a = 10;
    return; //doesn't return anything
    function a() {}
}
b2(); //return has no var to return 
console.log(a); //=1

/******** block  3 */
/****** i has no type sp it will be automaticly var globalthat means let i is not importantin the first line
 * so, when i is global var and setTimeout function is in execution, for each i it will go up to get the type 
 *  of i and when setTimeout finish the execution i will be i=3  3 times---> to get 0,1,2 we need to change type
 * to "for (let i=0; i<3; i++)
 */
let i;
for (i = 0; i < 3; i++) { //let i=0;
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}