const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model('Task', tasksSchema);

module.exports = Task;
