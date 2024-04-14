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
    const markAsCompleted = async (id) => {
       
          await fetch("http://localhost:3000/completed", {
                method: "PUT",
                body: JSON.stringify({ id }),
                headers: { "content-type":"application/json" },
            })

            .then(()=>{
                alert("marked as completed")
            })
    
    };
return <div>
        {  
             todos.map(todo=>{return<div>
                                   <h1>{todo.title}</h1>
                                   <h2>{todo.description}</h2>
                                   <button   onClick={() => markAsCompleted(todo._id)} >{todo.completed==true?"completed":"mark as completed"}</button>
                              </div>})
                         
        }
       </div>
}