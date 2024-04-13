const mongoose= require("mongoose")
mongoose.connect("mongodb+srv://rahul25ya:qDD73d9lhx9sUTwM@cluster0.5hn4oxj.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title :String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}
