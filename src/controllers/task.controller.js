import Task from "../models/task.js";

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = await Task.create({
    title,
    description,
    user: req.userId,
  });

  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const { search } = req.query;

  const query = {
    user: req.userId,
    ...(search && {
      title: { $regex: search, $options: "i" },
    }),
  };

  const tasks = await Task.find(query).sort({ createdAt: -1 });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.userId,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  Object.assign(task, req.body);
  await task.save();

  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.userId,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted successfully" });
};
