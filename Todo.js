"use strict";
const todolist = [
    { id: 1, task: 'eat', done: true }, { id: 2, task: 'code', done: true },
    { id: 3, task: 'sleep', done: false },
]
console.log("ALL LIST:", todolist);

//--------------------
const create = (id, task) => {
    let newtodo = { id: id, task: task, done: false }
    todolist.push(newtodo)
    console.log("AFTER THE CREATION:", todolist);
}


const read = (id) => {
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].id == id)
            console.log("GET DATA:", todolist[i]);
    }
}

//-----------------------------
const update = (id, updateField) => {
        //let updateFieldflag = 1;
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id == id) {
                todolist[i].task = updateField
                    //return
                break
            }
        }
        console.log("AFTER THE UPDATE:", todolist);
    }
    //-----------------------------------

const deleteRecord = (id) => {
    // const index = todolist.indexOf(id)
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].id === id)
            todolist.splice(i, 1)
            // break;
    }
    console.log("AFTER THE DELETE:", todolist);
}

read(2);
create(4, "walk");
create(5, "walk2");
deleteRecord(1);
update(2, "dream");