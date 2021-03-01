// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch

function newFunc(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            setTimeout(() => {
                resolve('greater')
            }, 1000)
        } else {
            reject('smaller than number')
        }
    })
}
newFunc(15).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})