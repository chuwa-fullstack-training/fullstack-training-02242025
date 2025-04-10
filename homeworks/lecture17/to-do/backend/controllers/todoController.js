const Todo = require('../models/schema')

exports.getToDoList = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
      } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).send('Server error');
      }
}

exports.createToDo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save()
        res.status(200).json("create new todo");
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.editToDo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true})
        if(!todo){
            return res.status(404).json({error: "Todo not found"})
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}