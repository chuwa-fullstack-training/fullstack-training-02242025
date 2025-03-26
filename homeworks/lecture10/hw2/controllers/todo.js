const Todo = require('../models/Todo');

const getAllTodoList = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params?.id);
        if (!todo) {
            return res.status(400).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json({ message: 'Compamy created' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params?.id);
    
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
    
        todo.title = req.body.title ?? todo.title;
        todo.description = req.body.description ?? todo.description;
    
        await todo.save();
        res.json(todo);
      } catch (err) {
        res.status(500).json({ message: 'Server Error' });
      }
};

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params?.id);
    
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
    
        res.status(204).send();
      } catch (err) {
        res.status(500).json({ message: 'Server Error' });
      }
};

const updateCompaleteStatus = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params?.id);
    
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todo.completed = !todo.completed;
        await todo.save();
        
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllTodoList,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    updateCompaleteStatus
};