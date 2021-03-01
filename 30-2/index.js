let arr = ['nell', 'shimon', 'a']

function UpperCaseAll(arr) {
    return new Promise((resolve, reject) => {
        let notString = arr.filter((str) => {
            return typeof str !== "string"
        })
        if (notString.length !== 0) {
            reject("not string")
        } else {
            resolve(arr.map((str) => {
                return str.toUpperCase();
            }))
        }
    })
}

function sortAll(arr) {
    return new Promise((res, rej) => {
        if (arr.length > 0) {
            res(arr.sort())
        } else {
            rej('array empty')
        }
    })
}

UpperCaseAll(arr).then((result) => {
        console.log(result)
    })
    .catch((err) => { console.log(err) })