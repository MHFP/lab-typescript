class TodoItem {
    constructor(title) {
        this.done = false;
        this.title = title;
        this.updatedAt = new Date();
    }
    toggleStatus() {
        this.done = !this.done;
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor() {
        this.todos = [];
    }
    addTask(item) {
        this.todos.push(item);
        console.log("Task: " + item.title + " inserted in the list");
        return this.todos.length;
    }
    listAllTasks() {
        for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].title);
        }
    }
    deleteTask(item) {
        var position = this.todos.indexOf(item);
        if (position === -1) {
            console.log("no match");
        }
        else {
            var tpmItem = this.todos[position].title;
            this.todos.splice(position, 1);
            console.log("Task: " + tpmItem + " deleted from the list");
            return this.todos.length;
        }
    }
    listUncomplete() {
        this.todos.forEach((item) => {
            if (!item.done) {
                console.log(item.title);
            }
        });
    }
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
