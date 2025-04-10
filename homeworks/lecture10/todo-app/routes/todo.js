const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');



router.get('/', async (req, res) => {
try {
    const todos = await Todo.find();
    const remainingCount = todos.filter(todo => !todo.completed).length;
    res.render('index', { todos, remainingCount });
} catch (err) {
    res.status(500).send(err);
}
});



router.post('/todos', (req, res) => {
    const newTodo = new Todo({
      title: req.body.title,
    });
    newTodo.save()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });




router.post('/todos/:id/update', (req, res) => {
    Todo.findById(req.params.id).
        then(
            result => {
                if (!result) {
                    return res.status(404).send('Todo not found');
                }
                result.completed = !result.completed;
                return result.save()
            }
        ).then(saved => {
                if (saved) {
                    res.redirect('/');
                }
            }
        )    .catch(err => {
            res.status(500).send(err);
          });
        })



router.post('/todos/:id/delete', (req, res) => {
    Todo.findByIdAndDelete(req.params.id).then(()=> {
        res.redirect('/');
    }).catch(err => {
        res.status(500).send(err);
      })
  })



module.exports = router;