const mongoose= require("mongoose")
const { object } = require("zod")
mongoose.connect("mongodb+srv://rahul25ya:qDD73d9lhx9sUTwM@cluster0.5hn4oxj.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title :String,
    description:String,
    completed:Boolean,
    id:Number
})

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}
