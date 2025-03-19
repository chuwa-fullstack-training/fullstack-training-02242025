const express = require('express');
const router = express.Router();
const Task = require('../models/Task')

router.get('/', async (req, res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch {
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const newTask = await Task.create({ title: req.body.title });
        res.status(201).json(newTask);
      } catch (err) {
        res.status(400).send(err.message);
      }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!updatedTask){
            return res.status(404).send('Task not found');
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).send('Task not found');
          }
          res.status(204).send();
        } catch (err) {
          res.status(400).send(err.message);
        }
})

module.export = router;