
import { useState } from 'react'
export function CreateTodo(){
    const [title, setTitle]= useState("");
    const [description,setDescription]=useState("")


    return <div>
            <input 
                id="title"
               style={{margin:10,padding:10}}
               onChange={function(e){
                   const value=e.target.value;
                   setTitle(e.target.value);
               }}
               type="text"placeholder="enter title">
            </input><br/>
            
            <input
              id="description"
             style={{padding:10,margin:10}}         
             type="text"placeholder="enter description"
             onChange={function(e){
                const value=e.target.value;
                setDescription(e.target.value)
             }}    
             >
            </input><br/>

           <button
               onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                })
                   .then(async function(res){
                       const json=await res.json();
                         alert("todo added");
                   })
            
                   
        
            }}>  add to todo</button>
          </div>
}