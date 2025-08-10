import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
  const { title, description, status, assignedTo } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      status,
      assignedTo,
      createdBy: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get all tasks
export const getTasks = async(req,res) =>{
    const { status } = req.query;
    const query = {
        createdBy: req.user.id,
    };
    if(status){
        query.status = status;
    }
    try{
        const tasks = await Task.find(query).populate('assignedTo','name email');
        res.status(200).json(tasks);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};

export const updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
        {_id:req.params.id,createdBy:req.user.id},
        req.body,
        {new:true}
    );
    res.json(task);
}

export const deleteTask = async (req, res) => {
    await Task.findOneAndDelete(
        {_id:req.params.id,createdBy:req.user.id}
    );
    res.json({message:'task deleted successfully'});
}
