const functiontodo = require('./create')
test('create Todo', () => {
    // let newa = new Todo
    // newa.create("work")
    expect(functiontodo.todoList.length).toBe(4)
})