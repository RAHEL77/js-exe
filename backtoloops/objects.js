const users = [{
        name: "shula",
        age: 42,
        g_math: 27,
        g_comp: 79,
        g_physics: 19
    },
    {
        name: "moti",
        age: 42,
        g_math: 67,
        g_comp: 78,
        g_physics: 89
    }, {
        name: "mary",
        age: 47,
        g_math: 89,
        g_comp: 68,
        g_physics: 49
    }, {
        name: "rachel",
        age: 48,
        g_math: 64,
        g_comp: 88,
        g_physics: 79
    },
]
let avg = 1;

function funcA(users) {
    console.log(users)
}

function funcB(users) {
    for (let i = 0; i < 4; i++) {
        console.log(users[i].age, "age")
        console.log(users[i].name)
        console.log(users[i].g_physics)
        console.log(users[i].g_math)
        console.log(users[i].g_comp)

    }
}

function funcAvg(users) {
    let avg = 1;
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        sum += users[i].g_math;
    }
    console.log(sum)
    avg = sum / users.length
    console.log('avg:', avg)
}





// function funcfor(users) {
//     for (let i = 0; i < users.lenght; i++)
//         console.log(users.g_math[i])

// }

// // function funcEach(users) {
// //     users.forEach(element => {
// //         users.g_math;
// //         return console.log(element, "each")
// //     })
// // }

// // function funcmap(users) {
// //     const map1 = users.map(x => x + sum);
// //     console.log(map1, "map")
// // }

// // function funcAvgAll(users) {
// //     for (let i = 0; i < users.lenght; i++) {
// //         console.log(users.lenght, 'leng')
// //         console.log(users.g_math, 'leng')
// //         console.log(users.g_math[i], 'leng')
// //         console.log(users[1].g_math, 'leng')
// //         avg = users[i].g_math / users[i].lenght - 1;
// //     }
// //     console.log('avg:', avg)


// // funcmap(users)
// funcfor(users)
// funceach(users)
funcA(users)
funcB(users);

funcAvg(users)
    //  funcAvgAll(users)