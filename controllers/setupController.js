const Todos = require("../models/todoModel.js");

module.exports = function (app) {
    app.get("/api/setupTodo", function (req, res) {
        const starterTodos = [
            {
                username: "Caleb",
                todo:"get some food",
                isDone:false

            },
        {

            username:"Jparker",
            todo:"get new clothes",
            isDone: false

        },
        {

            username:"Mcooper",
            todo:"plan a party",
            isDone:false

        }
    ]
        ;
        Todos.create(starterTodos, function (err, results) {

            res.send(results);
        })
    })
};