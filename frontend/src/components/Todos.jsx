/*
   Todos=[

    {
        title: "go to gym"
        description: "you have to go to the gym"     
    }
    {
        title: "sit for study"
        description: "you have to go for class"     
    }
   ]
*/




export function Todos({todos}){
return <div>
        {  
             todos.map(todo=>{return<div>
                                   <h1>{todo.title}</h1>
                                   <h2>{todo.description}</h2>
                                   <button>{todo.completed==true?"completed":"mark as completed"}</button>
                              </div>})
                         
        }
       </div>
}