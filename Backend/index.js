// write a basic exress boiler plate code . 
// with express.json() middleware 
const express= require("express");
const {createTodo}= require("./types")
const {todo}=require("./db");
const app=express();
const port=3000;
const cors=require("cors")


app.use(express.json());
app.use(cors())


/*
  body{
    title:String;
    description:String;
  }

*/

app.post("/todo",async(req,res)=>{
  const createPayload=req.body;
  const parsePayload =createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg: "you have sent the wrong message: "
    })
    return ;
  }
  // put in mongo db
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
   completed:false
  })
  res.json({
    msg:"title and description has been saved !   :)"
  })
})




app.get("/todos",async(req,res)=>{
      const todos= await todo.find({})
      res.json({
        todos
      })
})




app.put("/completed",async (req,res)=>{
  const createPayload=req.body;
  const parsePayload =createTodo.safeParse(createPayload);

  if(!parsePayload.success){
    res.status(411).json({
      msg: "you have sent the wrong message: "
    })
    return ;
  }
  await todo.update({
  _id:req.body.id
},
{
  completed:true
}

)
    
})
app.listen(port,()=>{console.log(`server is running at port ${port}`)})
