import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    task: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
});

const TodoSchema  = mongoose.model("TodoSchema", todoSchema);

export default TodoSchema;